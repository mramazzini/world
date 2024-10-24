'use client';

import {
  CallbackOptions,
  CharacterInfo,
  FeatID,
  SubClassID,
} from '@/lib/types/types';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { v4 } from 'uuid';
import { DBMetadata } from '@/lib/types/metadata';
import SidebarMetaSelector from '@/components/Dashboard/SidebarMetaSelector';
import { getFeatsMetadata } from '@/lib/actions/db/feat/read.actions';

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
        <p className="divider">Choose a feat</p>
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
        <SidebarMetaSelector
          model="feat"
          metadata={metadata}
          setSelected={setSelected}
          loading={loading}
          show={show}
        />
      </dialog>
    </>
  );
};

export default FeatHandler;
