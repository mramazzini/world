"use server";
import { AssociatedModel, PrismaClient } from "@prisma/client";
import { CommentInfo } from "@/lib/utils/types/types";

export const getCommentsByModel = async (
  model: AssociatedModel,
  id: number
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
    console.error("Error getting comments", error);
    return [];
  } finally {
    await db.$disconnect();
  }
};
