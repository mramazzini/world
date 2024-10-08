"use client";
import Loading from "@/app/components/UI/Loading";
import Image from "next/image";
import { Suspense, useState } from "react";
interface Props {
  modalId: string;
  setImage: (image: string) => void;
}
const https = require("https");
const ImageUploadModal = ({ modalId, setImage }: Props) => {
  const [image, setImageUrl] = useState("");
  const [valid, setValid] = useState(false);
  const [message, setMessage] = useState("");
  const validUrl = (str: string) => {
    const regex =
      /^(https?:\/\/)?([a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+)(:[0-9]{1,5})?(\/[^\s]*)?$/;
    return regex.test(str);
  };
  return (
    <>
      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Only Static image links are supported
          </h3>
          <p className="py-4">
            Input a URL to an image to display it here. The image will be
            displayed as a 200x200 image.
          </p>
          <div className="join w-full flex">
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered grow  join-item"
              value={image}
              onChange={(e) => {
                setValid(false);
                setImageUrl(e.target.value);
              }}
            />
            <button
              className="btn join-item "
              onClick={(e) => {
                e.preventDefault();
                if (!validUrl(image)) return setMessage("Invalid URL");
                setValid(true);
                setImageUrl(image);
                setMessage("");
              }}
            >
              Search
            </button>
          </div>
          {message && <p className="text-red-500 my-4">{message}</p>}
          {valid && image && (
            <div className="flex items-center justify-center m-4">
              <Suspense fallback={<Loading />}>
                <Image
                  src={image}
                  width={200}
                  height={200}
                  className="rounded-lg w-[200px] h-[200px] object-cover object-center mr-4 text-center font-bold"
                  alt="Image Not Found - Invalid URL"
                />
              </Suspense>
            </div>
          )}
          <div className="modal-action">
            <form method="dialog gap-4">
              {/* if there is a button in form, it will close the modal */}
              {valid && image && (
                <button
                  className="btn mr-2"
                  onClick={async (e) => {
                    e.preventDefault();
                    setImage(image);
                    const modal = document.getElementById(
                      modalId
                    ) as HTMLDialogElement;
                    if (modal) modal.close();
                  }}
                >
                  Set Image
                </button>
              )}
              <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  const modal = document.getElementById(
                    modalId
                  ) as HTMLDialogElement;
                  if (modal) modal.close();
                }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ImageUploadModal;
