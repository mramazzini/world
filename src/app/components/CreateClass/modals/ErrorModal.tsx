"use client";

import React from "react";
import { useState } from "react";

const useErrorModal = (): {
  ErrorModal: React.ReactNode;
  openModal: (message: string) => void;
} => {
  const [message, setMessage] = useState("");

  return {
    ErrorModal: (
      <dialog id="error-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Cannot Create Class:</h3>
          <div className="divider m-0" />
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
      setMessage(message);
      modal.showModal();
    },
  };
};

export default useErrorModal;
