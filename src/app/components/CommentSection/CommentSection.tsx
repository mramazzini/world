"use client";
import {
  createComment,
  createReply,
} from "@/lib/actions/db/comment/create.actions";
import { getCommentsByModel } from "@/lib/actions/db/comment/read.actions";
import { CommentInfo } from "@/lib/utils/types/types";
import { AssociatedModel } from "@prisma/client";
import { useEffect, useState } from "react";
import { getUserId } from "@/lib/utils/auth";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  id: number;
  model: AssociatedModel;
}

const CommentSection = ({ id, model }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [text, setText] = useState("");
  const [comments, setComments] = useState<CommentInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedConvo, setSelectedConvo] = useState<number | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const getComments = async () => {
    setLoading(true);
    const res = await getCommentsByModel(model, id);
    setComments(res);
    setLoading(false);
  };

  const checkLoggedIn = async () => {
    const userID = await getUserId();
    if (userID !== -1) {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    getComments();
    checkLoggedIn();
  }, [id, model]);

  return (
    <>
      <div className="divider"></div>
      <div className="bg-base-300 p-4 rounded-xl flex flex-col ">
        <h2 className="text-xl divider">Comments</h2>
        {loading ? (
          <div className="flex flex-col items-center">
            <span className="loading loading-xl " />
            <p>Loading comments...</p>
          </div>
        ) : (
          <>
            {loggedIn ? (
              <form
                className="comment-form"
                onSubmit={async (e) => {
                  e.preventDefault();

                  // Submit comment
                  setLoading(true);
                  await createComment(model, id, text);
                  await getComments();
                  setText("");
                  setLoading(false);
                }}
              >
                <textarea
                  placeholder="Leave a comment..."
                  value={text}
                  className="textarea border border-gray-300 textarea-neutral w-full h-24 mb-4"
                  onChange={(e) => setText(e.target.value)}
                />
                <div className="divider">
                  <button type="submit" className="btn btn-accent w-48">
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <>
                <p className="text-center">
                  Please log in to like and leave comments.
                </p>
                <Link
                  href={`/login?redirect=${pathname.replaceAll("/", "%2F")}`}
                  className="btn btn-accent mt-4 mx-auto"
                >
                  Log In -&gt;
                </Link>
              </>
            )}
            <div className="divider"></div>
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              {comments
                .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
                .map((comment, index) => (
                  <div key={comment.id} className={` flex flex-col  w-full `}>
                    <div>
                      <div
                        className={`text-left bg-neutral text-neutral-content p-2 rounded-xl w-fit`}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedConvo(comment.id);
                        }}
                      >
                        <p>{comment.comment}</p>
                      </div>
                      <div className="chat-footer opacity-50">
                        <span className="text-xs">
                          {comment.User?.username} -{" "}
                        </span>
                        <time className="text-xs">
                          {comment.updatedAt.getHours()}:
                          {comment.updatedAt.getMinutes() > 9
                            ? comment.updatedAt.getMinutes()
                            : "0" + comment.updatedAt.getMinutes()}{" "}
                          - {comment.updatedAt.getMonth()}/
                          {comment.updatedAt.getDate()}/
                          {comment.updatedAt.getFullYear()}
                        </time>
                      </div>
                    </div>
                  </div>
                ))}
              {comments.length === 0 && (
                <div className="flex flex-col items-center gap-4 justify-center w-full">
                  <p className="text-center w-full">No comments yet...</p>
                  <Image
                    src="/images/comment.svg"
                    className="opacity-50"
                    alt="Empty"
                    width={150}
                    height={150}
                  />
                  <p className="text-center w-full">
                    Be the first to leave a comment!
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CommentSection;
