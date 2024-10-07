import { Metadata } from "next";

import "@/lib/string.extensions";
import BlogsPage from "@/app/components/pages/blog/Blogs.page";
import { getBlogPost } from "@/lib/actions/db/blogpost/read.actions";

type Props = {
  params: { postRoute: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getBlogPost(params.postRoute);

  if (!data) {
    return {
      title: "Blog Post Not Found - Max's DND Wiki",
      description: "Blog Post Not Found - Max's DND Wiki",
      openGraph: {
        type: "website",
        title: "Blog Post Not Found - Max's DND Wiki",
        description: "Blog Post Not Found - Max's DND Wiki",

        images: [
          {
            url: "https://www.maxdnd.com/images/hero.jpg",
            width: 1440,
            height: 1920,
            alt: "Dungeons and Dragons Fire Dragon Attack",
          },
        ],
      },
    };
  }

  return {
    title: `${data.title} - Max's DND Wiki`,
    description:
      data.flavorText.length > 157
        ? data.flavorText.substring(0, 157) + "..."
        : data.flavorText,
    openGraph: {
      type: "website",
      title: `${data.title} - Max's DND Wiki`,
      description:
        data.flavorText.length > 157
          ? data.flavorText.substring(0, 157) + "..."
          : data.flavorText,
      images: [
        {
          url: "https://www.maxdnd.com/images/hero.jpg",
          width: 1440,
          height: 1920,
          alt: "Dungeons and Dragons Fire Dragon Attack",
        },
      ],
    },
  };
}

const Page = async ({ params }: Props) => {
  const blogPost = await getBlogPost(params.postRoute);
  return blogPost ? (
    <BlogsPage post={blogPost} />
  ) : (
    <main className="p-8">Blog Post Not Found</main>
  );
};

export default Page;
