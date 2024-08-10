"use client";

import React from "react";
import { verifyToken, getUserId } from "@/lib/utils/auth";
import { useState, useEffect } from "react";
import { getUser } from "@/lib/actions/db/user/read.actions";
import { User } from "@prisma/client";
import { createMessage } from "@/lib/actions/db/message/create.actions";

const useContactModal = (): {
  ContactModal: () => React.JSX.Element;
  openModal: () => void;
} => {
  const id = "contact-modal";
  return {
    ContactModal: () => {
      const [loggedIn, setLoggedIn] = useState(false);
      const [user, setUser] = useState<User | null>(null);
      const [message, setMessage] = useState("");
      const [email, setEmail] = useState("");
      useEffect(() => {
        verifyToken().then((res) => {
          setLoggedIn(res);
        });
      }, []);

      useEffect(() => {
        getUserId().then((res) => {
          getUser(res).then((res) => {
            setUser(res);
          });
        });
      }, []);

      const handleMessageSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if ((!email && !user?.id) || !message) return;
        createMessage({
          email: email,
          message: message,
          userId: user?.id || null,
        }).then(() => {
          alert("Message sent!");
        });
      };

      return (
        <dialog id={id} className="modal">
          <div className="modal-box  h-auto">
            {/* modal content */}
            <h2 className="text-2xl font-bold ">Contact Us</h2>
            <div className="divider divider-primary"></div>
            <p className="text-lg">
              If you have any questions or concerns, feel free to reach out to
              us using the form below.
            </p>
            <div className="divider"></div>
            <form
              className=" flex flex-col w-auto"
              onSubmit={handleMessageSend}
            >
              {loggedIn && user ? (
                <>
                  <p>
                    Currently logged in as:{" "}
                    <span className="font-bold">{user.username}</span>
                  </p>
                  <p>
                    Your Email: <span className="font-bold">{user.email}</span>
                  </p>
                  <div className="divider"></div>
                </>
              ) : (
                <label className="input input-bordered flex items-center my-2 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="grow"
                    placeholder="Email"
                  />
                </label>
              )}

              <textarea
                onChange={(e) => setMessage(e.target.value)}
                className="textarea textarea-bordered my-2"
                placeholder="Message"
              ></textarea>
              <div className="divider"></div>
              <button type="submit" className="btn btn-primary w-auto  my-2">
                Submit
              </button>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      );
    },
    openModal: () => {
      const modal = document.getElementById(id) as HTMLDialogElement;
      if (!modal)
        console.error(
          "Error modal not found, make sure you add it to the page."
        );

      modal.showModal();
    },
  };
};

export default useContactModal;
