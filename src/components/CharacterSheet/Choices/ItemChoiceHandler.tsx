'use client';
import { CallbackOptions, CharacterInfo } from '@/lib/types/types';
import P from '@/Utility/FormatAndSanitize';
import { useCallback, useState } from 'react';
import ItemChoice from './ItemChoice';
interface Props {
  character: CharacterInfo;
  choice: PrismaJson.ItemChoice;
  callback: (data: CallbackOptions) => void;
}
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import ModalButton from '@/components/UI/Modal/ModalButton';
const ItemChoiceHandler = ({ choice, callback, character }: Props) => {
  const [selections, setSelections] = useState<PrismaJson.QuantityItem[][]>([]);
  const { id, closeModal } = useModal();

  const updateSelections = useCallback(
    (itemList: PrismaJson.QuantityItem[], index: number) => {
      setSelections((prev) => {
        if (JSON.stringify(prev[index]) === JSON.stringify(itemList)) {
          return prev;
        }
        const newSelections = [...prev];
        newSelections[index] = itemList;
        return newSelections;
      });
    },
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //make sure that all selections are made
    let allSelectionsMade = true;
    selections.forEach((selection) => {
      if (!selection || selection.length === 0) {
        allSelectionsMade = false;
      }
    });
    if (!allSelectionsMade) {
      return;
    }
    //callback
    callback(choice.default ? [...selections, choice.default] : selections);
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
              onSubmit={handleSubmit}
              className=" overflow-auto"
              style={{
                maxHeight: 'calc(80vh - 5em)',
              }}
            >
              <div className="flex bg-base-300 rounded-xl p-4 flex-col my-4 ">
                <p>You gain the following items:</p>
                <div className="divider divider-accent  m-0"></div>
                <ul className="list-disc ml-4">
                  {choice.default?.map((itemData, index) => (
                    <li key={index}>
                      <P
                        modalID={id}
                      >{`${itemData.quantity} ^${itemData.item}{}^`}</P>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {choice.choices?.map((choice, index) => (
                  <ItemChoice
                    modalID={id}
                    key={index}
                    choice={choice}
                    updateSelections={(itemList) =>
                      updateSelections(itemList, index)
                    }
                  />
                ))}
              </div>
              <div className="flex justify-end gap-4">
                <button
                  className="btn btn-error"
                  onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                  }}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </ModalBox>
        </Modal>
        <ModalButton
          className="btn p-4 h-auto m-4 flex items-center join-item justify-between flex-col btn-ghost border border-gray-500"
          modalid={id}
          modaltype="open"
        >
          <Image
            src={'/images/backpack.svg'}
            width={200}
            height={200}
            className="opacity-50"
            alt="Choose a subclass"
          />
          <p className="divider">Choose your Items</p>
        </ModalButton>
      </>
    )
  );
};

export default ItemChoiceHandler;
