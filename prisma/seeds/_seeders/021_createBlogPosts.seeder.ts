import { cerr, cinfo, cwarn } from "@/lib/utils/chalkLog";
import { Prisma, PrismaClient } from "@prisma/client";
import verifyTableIntegrity from "@/lib/utils/verifyTableIntegrity";
import generateBlogPostSeed from "../BlogPosts/BlogPost.seed";
export const createBlogPosts = async (db: PrismaClient) => {
  cinfo("Creating BlogPosts");
  const blogPosts = await generateBlogPostSeed();
  for (const post of blogPosts) {
    try {
      cinfo("Creating post:", post.title);
      //make sure post has a title and content
      if (!post.title || !post.content) {
        cerr("Post missing title or content field:", post.title);
        return;
      }

      //upsert post
      await db.blogPost.upsert({
        where: { id: post.id },
        update: post,
        create: post,
      });

      cinfo("Post created");
    } catch (error) {
      cerr("Error creating post", post.title, error);
      return;
    }
  }
};
