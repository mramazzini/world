"use client";
import { BlogPost } from "@prisma/client";
import MarkdownIt from "markdown-it";
import MarkdownAnchor from "markdown-it-anchor";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../../UI/Loading";

interface Props {
  post: BlogPost;
}
const BlogsPage = ({ post }: Props) => {
  const md = new MarkdownIt().use(MarkdownAnchor);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    setContent(md.render(post.content));
  }, [post.content]);

  return (
    <main className="p-4 md:p-8 flex flex-col bg-base-100 items-center relative min-h-screen  ">
      {content.length > 0 ? (
        <>
          <div className="w-full bg-base-300 p-8 max-w-[1200px] rounded-xl flex flex-col items-center w-full">
            <h1 className="text-4xl">{post.title}</h1>
            <time className="divider">
              {new Date(post.createdAt).toLocaleDateString()}
            </time>
            <div className="flex flex-col md:flex-row items-center justify-center  w-full join h-full p-4 rounded-xl  bg-base-100 gap-8">
              <Image
                src={post.ImageURL}
                alt={post.ImageAlt}
                width={300}
                height={300}
                className="rounded-xl "
              />
              {/* table of contents */}
              <div className=" flex flex-col join-item">
                <ul className="list-disc ml-4">
                  {post.tableOfContents.map((item, index) => (
                    <li key={index}>
                      <a href={item.link} className="text-blue-500 hover:link">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="divider">By: Maxy</div>
            <div
              className="markdown-content  w-full"
              dangerouslySetInnerHTML={{
                __html: content
                  .replaceAll("<table", "<div class='overflow-x-auto'><table")
                  .replaceAll("</table>", "</table></div>"),
              }}
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default BlogsPage;
