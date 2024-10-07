"use server";
import { BlogPost, PrismaClient } from "@prisma/client";

export const getBlogposts = async (): Promise<BlogPost[]> => {
  const db = new PrismaClient();
  try {
    const blogposts = await db.blogPost.findMany({});
    return blogposts;
  } catch (error) {
    console.error("Error getting blogposts", error);
    return [];
  } finally {
    await db.$disconnect();
  }
};

export const getBlogPost = async (route: string): Promise<BlogPost | null> => {
  const db = new PrismaClient();
  try {
    const blogpost = await db.blogPost.findUnique({
      where: {
        route,
      },
    });
    return blogpost;
  } catch (error) {
    console.error("Error getting blogpost", error);
    return null;
  } finally {
    await db.$disconnect();
  }
};
