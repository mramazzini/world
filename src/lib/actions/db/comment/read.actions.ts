'use server';
import { CommentInfo } from '@/lib/types/modelInfo';
import { AssociatedModel, PrismaClient } from '@prisma/client';

export const getCommentsByModel = async (
  model: AssociatedModel,
  id: string
): Promise<CommentInfo[]> => {
  const db = new PrismaClient();
  try {
    const comments = await db.comment.findMany({
      where: {
        model,
        modelId: id,
      },
      include: {
        replies: true,
        User: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });
    return comments;
  } catch (error) {
    console.error('Error getting comments', error);
    return [];
  } finally {
    await db.$disconnect();
  }
};
