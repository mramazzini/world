import { BlogPost } from "@prisma/client";
import MarkdownIt from "markdown-it";

interface Props {
  post: BlogPost;
}
const BlogsPage = ({ post }: Props) => {
  const md = new MarkdownIt();

  return (
    <main className="p-4 md:p-8 flex flex-col bg-base-100 items-center relative min-h-screen ">
      <div
        className=" w-full bg-base-300 p-4 rounded-xl"
        dangerouslySetInnerHTML={{
          __html: md
            .render(post.content)
            .replaceAll("<table", `<table class="table table-zebra "`),
        }}
      />
    </main>
  );
};

export default BlogsPage;
