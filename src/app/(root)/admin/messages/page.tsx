"use client";
import { getMessages } from "@/lib/actions/db/message/read.actions";
import { MessageInfo } from "@/lib/utils/types/types";
import { useState, useEffect } from "react";
const MessagesPage = () => {
  const [messages, setMessages] = useState<MessageInfo[]>([]);
  useEffect(() => {
    getMessages().then((res) => {
      setMessages(res);
    });
  }, []);
  return (
    <main className="p-8">
      <h1>Messages</h1>
      <h2>
        {messages.length} {messages.length === 1 ? "message" : "messages"}
      </h2>
      <div className="divider"></div>
      <div className="flex flex-col">
        {messages.map((item, index) => (
          <div
            key={index}
            className="p-4 border border-primary rounded-xl my-4"
          >
            <div className="w-full flex flex-row justify-between">
              <h2 className="text-xl font-bold ">
                User:{" "}
                {item.User?.username ? (
                  <span>{item.User?.username}</span>
                ) : (
                  "Anonymous"
                )}
              </h2>
              <h2 className="text-xl font-bold">
                {new Date(item.createdAt).toLocaleDateString() +
                  " " +
                  new Date(item.createdAt).toLocaleTimeString()}
              </h2>
            </div>
            <h3 className="text-lg font-bold">
              Email:{" "}
              {item.email ||
                (item.User?.email && (
                  <span>{item.email || item.User?.email}</span>
                ))}
            </h3>
            <div className="divider m-0"></div>
            <p>{item.message}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MessagesPage;
