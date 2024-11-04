'use client';

import { CallbackOptions } from '@/lib/types/types';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { DBMetadata } from '@/lib/types/metadata';
import SidebarMetaSelector from '@/components/Dashboard/SidebarMetaSelector';
import { getFeatsMetadata } from '@/lib/actions/db/feat/read.actions';
import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import useModal from '@/hooks/useModal';
import ModalButton from '@/components/UI/Modal/ModalButton';
import { CharacterInfo } from '@/lib/types/modelInfo';

interface Props {
  choice: PrismaJson.FeatChoice;
  character: CharacterInfo;
  callback: (data: CallbackOptions) => void;
}

const FeatHandler = ({ callback }: Props) => {
  const [metadata, setMetadata] = useState<DBMetadata[]>([]);
  const [chosenFeat, setChosenFeat] = useState<DBMetadata | null>(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const { id } = useModal();
  useEffect(() => {
    setLoading(true);
    getFeatsMetadata()
      .then((res) => {
        setMetadata(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const setSelected = (feat: DBMetadata | null) => {
    setChosenFeat(feat);
    setShow(false);
  };

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();

    callback([chosenFeat?.id] as CallbackOptions);
  };

  return (
    <>
      <ModalButton
        className="btn p-4 h-auto m-4 flex items-center justify-between flex-col btn-ghost border border-gray-500"
        modalid={id}
        modaltype="open"
      >
        <Image
          src={'/images/silhouette.svg'}
          width={200}
          height={200}
          className="opacity-50"
          alt="Choose a subclass"
        />
        <p className="divider">Choose a feat</p>
      </ModalButton>
      <Modal id={id}>
        <ModalBox
          style={{
            maxHeight: 'calc(100vh - 5em)',
            overflow: 'visible',
          }}
        >
          <form
            className="overflow-auto"
            style={{
              maxHeight: 'calc(80vh - 5em)',
            }}
            onSubmit={handleClick}
          >
            <h3 className="font-bold text-lg divider divider-accent">
              Choose a feat
            </h3>
            <div className=" divider h-16">
              <button
                className="btn btn-primary w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  setShow(true);
                }}
              >
                {chosenFeat?.name || 'No feat selected'}
              </button>
            </div>

            <div className="flex justify-end gap-4">
              <ModalButton
                modalid={id}
                className="btn btn-error"
                modaltype="close"
              >
                Cancel
              </ModalButton>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </ModalBox>
        <SidebarMetaSelector
          model="feat"
          metadata={metadata}
          setSelected={setSelected}
          loading={loading}
          show={show}
        />
      </Modal>
    </>
  );
};

export default FeatHandler;
