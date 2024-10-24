'use client';

import { CallbackOptions, SubClassID } from '@/lib/utils/types/types';
import { useCallback, useMemo, useState } from 'react';
import SubclassChoice from './SubclassChoice';
import Image from 'next/image';
import { v4 } from 'uuid';

interface Props {
  choice: PrismaJson.SubclassChoice;
  callback: (data: CallbackOptions) => void;
}

const SubclassChoiceHandler = ({ callback, choice }: Props) => {
  const [selections, setSelections] = useState<SubClassID[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all selections are made
    if (!selections || selections.length === 0) return;
    if (choice.choices && selections.length !== choice.choices.length) return;

    // Prepare the callback data
    const arr: CallbackOptions = selections as CallbackOptions;
    const defArr: CallbackOptions = choice.default as CallbackOptions;
    const combinedSelections = choice.default ? arr.concat(defArr) : selections;

    callback(combinedSelections as CallbackOptions);
  };

  const updateSelections = useCallback((subClassList: SubClassID[]) => {
    setSelections((prevSelections) => {
      // Shallow comparison to check if the new selections are different
      if (
        prevSelections.length === subClassList.length &&
        prevSelections.every((val, idx) => val === subClassList[idx])
      ) {
        return prevSelections; // No update if the selections are the same
      }
      return subClassList;
    });
  }, []);

  const id = useMemo(() => v4(), []);

  return (
    <>
      <button
        className="btn p-4 h-auto m-4 flex items-center justify-between flex-col btn-ghost border border-gray-500"
        onClick={() => {
          const modal = document.getElementById(id) as HTMLDialogElement;
          if (modal) modal.showModal();
        }}
      >
        <Image
          src={'/images/silhouette.svg'}
          width={200}
          height={200}
          className="opacity-50"
          alt="Choose a subclass"
        />
        <p className="divider">Choose a subclass</p>
      </button>
      <dialog className="modal" id={id}>
        <div
          className="modal-box"
          style={{
            maxHeight: 'calc(100vh - 5em)',
            overflow: 'visible',
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="overflow-auto"
            style={{
              maxHeight: 'calc(80vh - 5em)',
            }}
          >
            <div>
              {choice.choices?.map((choice, index) => (
                <SubclassChoice
                  modalID={id}
                  key={index}
                  choice={choice}
                  updateSelections={updateSelections}
                />
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="btn btn-error"
                onClick={(e) => {
                  e.preventDefault();
                  const modal = document.getElementById(
                    id
                  ) as HTMLDialogElement;
                  if (modal) modal.close();
                }}
              >
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default SubclassChoiceHandler;
