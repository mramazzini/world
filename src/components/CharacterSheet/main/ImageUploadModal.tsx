'use client';
import Loading from '@/components/UI/Loading';
import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import ModalButton from '@/components/UI/Modal/ModalButton';
import Skeleton from '@/components/UI/Skeleton';
import useCharacterState from '@/hooks/useCharacter/useCharacterState';
import { useAppDispatch } from '@/store/hooks';
import { setCharacterState } from '@/store/sheetSlice';
import { CharacterState } from '@prisma/client';
import Image from 'next/image';
import { Suspense, useState } from 'react';

interface Props {
  modalid: string;
}
const ImageUploadModal = ({ modalid }: Props) => {
  const state = useCharacterState();
  const dispatch = useAppDispatch();
  const [valid, setValid] = useState(false);
  const [message, setMessage] = useState('');

  const validUrl = (str: string) => {
    const regex =
      /^(https?:\/\/)?([a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+)(:[0-9]{1,5})?(\/[^\s]*)?$/;
    return regex.test(str);
  };

  const saveImage = async (image: string) => {
    const newState = {
      ...state,
      imageURL: image,
    } as CharacterState;
    dispatch(setCharacterState(newState));
  };

  if (!state) return <Skeleton height={128} />;

  return (
    <>
      <Modal id={modalid}>
        <ModalBox>
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
              value={state.imageURL || ''}
              onChange={(e) => {
                setValid(false);
                saveImage(e.target.value);
              }}
            />
            <button
              className="btn join-item "
              onClick={(e) => {
                e.preventDefault();
                if (!validUrl(state.imageURL || ''))
                  return setMessage('Invalid URL');
                setValid(true);
                saveImage(state.imageURL || '');
                setMessage('');
              }}
            >
              Search
            </button>
          </div>
          {message && <p className="text-red-500 my-4">{message}</p>}
          {valid && state.imageURL && (
            <div className="flex items-center justify-center m-4">
              <Suspense fallback={<Loading />}>
                <Image
                  src={state.imageURL}
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
              {valid && state.imageURL && (
                <button
                  className="btn mr-2"
                  onClick={async (e) => {
                    e.preventDefault();
                    if (!state) return;

                    await saveImage(state.imageURL || '');
                    const modal = document.getElementById(
                      modalid
                    ) as HTMLDialogElement;
                    if (modal) modal.close();
                  }}
                >
                  Set Image
                </button>
              )}
              <ModalButton modaltype="close" className="btn" modalid={modalid}>
                Close
              </ModalButton>
            </form>
          </div>
        </ModalBox>
      </Modal>
    </>
  );
};

export default ImageUploadModal;
