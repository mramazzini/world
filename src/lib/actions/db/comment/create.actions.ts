'use server';
import { getUserId } from '@/lib/utils/auth';
import { AssociatedModel, CommentType, PrismaClient } from '@prisma/client';
import { getUser } from '../user/read.actions';
import { sendComment } from '@/lib/webhook/DiscordWebhook';
import { v4 } from 'uuid';

export const createComment = async (
  model: AssociatedModel,
  id: string,
  text: string,
  location: string
) => {
  const db = new PrismaClient();
  const userId = await getUserId();
  if (userId === null) {
    console.error('Error getting user id');
    return;
  }
  try {
    await db.comment.create({
      data: {
        id: v4(),
        model,
        modelId: id,
        comment: text,
        CommentType: CommentType.COMMENT,
        userId: userId,
      },
    });
  } catch (error) {
    console.error('Error creating comment', error);
  } finally {
    await db.$disconnect();
  }
  const user = await getUser(userId);
  if (!user) {
    console.error('Error getting user');
    return null;
  }
  sendComment(
    text,
    location,
    user.username || user.discordUsername || 'Unknown'
  );
};

export const createReply = async (
  model: AssociatedModel,
  id: string,
  text: string,
  parentId: string
) => {
  const db = new PrismaClient();
  const userId = await getUserId();
  if (userId === null) {
    console.error('Error getting user id');
    return;
  }
  try {
    await db.comment.create({
      data: {
        id: v4(),
        model,
        modelId: id,
        comment: text,
        CommentType: CommentType.REPLY,
        userId: userId,
        parentCommentId: parentId,
      },
    });
  } catch (error) {
    console.error('Error creating reply', error);
  } finally {
    await db.$disconnect();
  }
};
