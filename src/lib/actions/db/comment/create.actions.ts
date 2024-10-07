"use server";
import { getUserId } from "@/lib/utils/auth";
import { AssociatedModel, CommentType, PrismaClient } from "@prisma/client";

export const createComment = async (
  model: AssociatedModel,
  id: number,
  text: string
) => {
  const db = new PrismaClient();
  const userId = await getUserId();
  if (userId === -1) {
    console.error("Error getting user id");
    return;
  }
  try {
    await db.comment.create({
      data: {
        model,
        modelId: id,
        comment: text,
        CommentType: CommentType.COMMENT,
        userId: userId,
      },
    });
  } catch (error) {
    console.error("Error creating comment", error);
  } finally {
    await db.$disconnect();
  }
};

export const createReply = async (
  model: AssociatedModel,
  id: number,
  text: string,
  parentId: number
) => {
  const db = new PrismaClient();
  const userId = await getUserId();
  if (userId === -1) {
    console.error("Error getting user id");
    return;
  }
  try {
    await db.comment.create({
      data: {
        model,
        modelId: id,
        comment: text,
        CommentType: CommentType.REPLY,
        userId: userId,
        parentCommentId: parentId,
      },
    });
  } catch (error) {
    console.error("Error creating reply", error);
  } finally {
    await db.$disconnect();
  }
};
