"use client";

import React from "react";
import { useState } from "react";

const useErrorModal = (): {
  ErrorModal: JSX.Element;
  openModal: (message: string) => void;
} => {
  const [message, setMessage] = useState("");

  return {
    ErrorModal: (
      <dialog id="error-modal" className="modal">
        <div className="modal-box">
          <p className="text-red-500">{message}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    ),
    openModal: (message: string) => {
      const modal = document.getElementById("error-modal") as HTMLDialogElement;
      if (!modal)
        console.error(
          "Error modal not found, make sure you add it to the page."
        );
      setMessage(message);
      modal.showModal();
    },
  };
};

export default useErrorModal;
