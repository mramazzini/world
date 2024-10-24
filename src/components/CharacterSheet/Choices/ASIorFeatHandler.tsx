'use client';

import {
  AbilityScoreValue,
  ASIorFeat,
  CallbackOptions,
  CharacterInfo,
} from '@/lib/types/types';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { v4 as uuidv4, v4 } from 'uuid';
import AbilityToText from '@/lib/utils/AbilityToText';
import AbilityScoreChoice from './AbilityScoreChoice';
import P from '@/Utility/FormatAndSanitize';
interface Props {
  choice: PrismaJson.ASIorFeatChoice;
  character: CharacterInfo;
  callback: (data: CallbackOptions) => void;
}

const ASIorFeatHandler = ({ choice, character, callback }: Props) => {
  const [choosingFeat, setChoosingFeat] = useState(false);
  const handleSubmit = () => {
    callback([
      choosingFeat ? ASIorFeat.Feat : ASIorFeat.ASI,
    ] as CallbackOptions);
  };

  const id = uuidv4();
  return (
    character &&
    character.state && (
      <>
        <dialog id={id} className="modal ">
          <div
            className="modal-box  "
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
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                    const modal = document.getElementById(
                      id
                    ) as HTMLDialogElement;
                    modal.close();
                  }}
                >
                  Confirm
                </button>
                <button
                  className="btn btn-error"
                  onClick={(e) => {
                    e.preventDefault();
                    const modal = document.getElementById(
                      id
                    ) as HTMLDialogElement;
                    modal.close();
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
        <button
          className="btn p-4 h-auto flex items-center justify-between flex-col btn-ghost border border-gray-500 join-item"
          onClick={() => {
            const modal = document.getElementById(id) as HTMLDialogElement;

            modal.showModal();
          }}
        >
          <Image
            src={'/images/sparkles2.svg'}
            width={200}
            height={200}
            className="opacity-50"
            alt="Choose a subclass"
          />
          <p className="divider">Choose Ability Scores</p>
        </button>
      </>
    )
  );
};

export default ASIorFeatHandler;
