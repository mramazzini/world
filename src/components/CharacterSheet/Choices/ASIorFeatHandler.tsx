'use client';

import { ASIorFeat, CallbackOptions, CharacterInfo } from '@/lib/types/types';
import Image from 'next/image';
import { useState } from 'react';
import P from '@/Utility/FormatAndSanitize';
import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import useModal from '@/hooks/useModal';
import ModalButton from '@/components/UI/Modal/ModalButton';
interface Props {
  choice: PrismaJson.ASIorFeatChoice;
  character: CharacterInfo;
  callback: (data: CallbackOptions) => void;
}

const ASIorFeatHandler = ({ choice, character, callback }: Props) => {
  const [choosingFeat, setChoosingFeat] = useState(false);
  const { id, closeModal } = useModal();
  const handleSubmit = () => {
    callback([
      choosingFeat ? ASIorFeat.Feat : ASIorFeat.ASI,
    ] as CallbackOptions);
  };

  return (
    character &&
    character.state && (
      <>
        <Modal id={id}>
          <ModalBox
            style={{
              height: '',
              maxHeight: 'calc(100vh - 5em)',
              overflow: 'visible',
            }}
          >
            <form
              className=" overflow-auto "
              style={{
                height: '',
                maxHeight: 'calc(80vh - 5em)',
              }}
            >
              <div className="flex bg-base-300 rounded-xl p-4 flex-col my-4 ">
                <p>
                  <P modalID={id}>
                    Whenever your character gains a level that grants an ability
                    score improvement, you can instead opt into taking a feat
                    instead.
                  </P>
                </p>
              </div>
              <div className="form-control flex items-center gap-4">
                <label className="label divider ">
                  {choosingFeat
                    ? 'I will take a feat'
                    : 'I will take an ability score improvement'}
                </label>
                <input
                  type="checkbox"
                  className="toggle border-primary bg-primary hover:bg-primary/80  "
                  onChange={() => setChoosingFeat(!choosingFeat)}
                />
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <ModalButton
                  className="btn btn-primary"
                  modaltype="close"
                  modalid={id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  Confirm
                </ModalButton>
                <ModalButton
                  modaltype="close"
                  modalid={id}
                  className="btn btn-error"
                  onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                  }}
                >
                  Cancel
                </ModalButton>
              </div>
            </form>
          </ModalBox>
        </Modal>
        <ModalButton
          className="btn p-4 h-auto flex items-center justify-between flex-col btn-ghost border border-gray-500 join-item"
          modalid={id}
          modaltype="open"
        >
          <Image
            src={'/images/sparkles2.svg'}
            width={200}
            height={200}
            className="opacity-50"
            alt="Choose a subclass"
          />
          <p className="divider">Choose Ability Scores</p>
        </ModalButton>
      </>
    )
  );
};

export default ASIorFeatHandler;
