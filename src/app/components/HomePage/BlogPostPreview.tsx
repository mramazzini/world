import { BlogPost } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const BlogPostPreview = ({ blogPost }: { blogPost: BlogPost }) => {
  return (
    <div className="flex flex-col items-center h-full xl:flex-row">
      <Image
        src={`${blogPost.ImageURL}`}
        alt={blogPost.ImageAlt}
        width={200}
        height={200}
        className="rounded-lg"
      />
      <div className="flex flex-col items-center xl:ml-4 justify-center gap-4 ">
        <h2 className="divider text-md text-wrap h-auto md:hidden lg:flex">
          <span className="min-w-96 text-center ">{blogPost.title}</span>
        </h2>
        <h2 className="text-md  hidden md:flex lg:hidden pb-0">
          <span className=" text-center ">{blogPost.title}</span>
        </h2>
        <div className="divider hidden md:flex lg:hidden m-0"></div>
        <p className="text-sm md:text-md ">{blogPost.flavorText}</p>
        <div className="divider">
          <Link
            href={`/blog/${blogPost.route}`}
            className="btn btn-ghost border border-gray-500"
          >
            Read More -&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPreview;
