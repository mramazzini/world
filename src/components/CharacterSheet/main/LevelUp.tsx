import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import ModalButton from '@/components/UI/Modal/ModalButton';
import useModal from '@/hooks/useModal';
import { setRefreshSheet } from '@/store/sheetSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect, useState } from 'react';
import { getClassMetadata } from '@/lib/actions/db/class/read.actions';
import { DBMetadata } from '@/lib/types/metadata';
import SidebarMetaSelector from '@/components/Dashboard/SidebarMetaSelector';
import useCharacterChoices from '@/hooks/useCharacterChoices';
import { levelUpCharacter } from '@/lib/actions/db/character/update.actions';
import useLevelByClass from '@/hooks/useLevelByClass';
import useLevel from '@/hooks/useLevel';

const LevelUp = () => {
  const { id } = useModal();
  const dispatch = useAppDispatch();
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const { pendingChoices } = useCharacterChoices();
  const [classData, setClassData] = useState<DBMetadata[] | null>(null);
  const [show, setShow] = useState(false);
  const [selectedClass, setSelectedClass] = useState<DBMetadata | null>(null);
  const levelsByClass = useLevelByClass();
  const level = useLevel();
  const handleLevelUp = async () => {
    if (!selectedClass) return;
    if (!character) return;
    await levelUpCharacter(character.id, selectedClass.id);
    dispatch(setRefreshSheet(true));
  };

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    getClassMetadata().then((data) => {
      if (data) setClassData(data);
    });
  };

  return (
    <>
      <button
        className="btn btn-primary w-full"
        // disabled={pendingChoices.length > 0}
        onClick={(e) => {
          e.preventDefault();
          const modal = document.getElementById(id) as HTMLDialogElement;
          modal.showModal();
        }}
      >
        {pendingChoices.length > 0 ? 'You have pending choices...' : 'Level Up'}
      </button>
      <Modal id={id}>
        {classData && (
          <SidebarMetaSelector
            refresh={refetch}
            metadata={classData}
            show={show}
            setSelected={(selected) => {
              setShow(false);
              setSelectedClass(selected);
            }}
            model="class"
            loading={classData.length === 0}
          />
        )}
        <ModalBox>
          <div className="flex flex-col gap-4 items-center bg-base-300 rounded-xl p-4">
            <h3 className="font-bold text-lg">Confirm level Up!</h3>
            <p className="text-center">
              {' '}
              <span className="font-bold">Your Level: {level}</span>
            </p>
            <div className="divider">
              {' '}
              <button className="btn btn-primary" onClick={() => setShow(true)}>
                Select Class
              </button>
            </div>
            <p className="text-center">
              Selected Class:{' '}
              <span className="font-bold">
                {selectedClass ? selectedClass.name : 'None'}
              </span>
            </p>
            <div className="text-center">
              Current Levels:{' '}
              <span className="font-bold">
                {Object.entries(levelsByClass).map(([key, value]) => {
                  return (
                    <p key={key}>
                      {classData?.find((c) => c.id === key)?.name}: {value}{' '}
                      {selectedClass?.id === key && (
                        <span className="text-success">-&gt; {value + 1}</span>
                      )}
                    </p>
                  );
                })}
                {Object.keys(levelsByClass).find(
                  (key) => selectedClass?.id === key
                ) || !selectedClass ? (
                  ''
                ) : (
                  <p>
                    {selectedClass?.name}: 0{' '}
                    <span className="text-success">-&gt; 1</span>
                  </p>
                )}
              </span>
            </div>{' '}
          </div>
          <div className="divider"></div>
          <div className="flex flex-row gap-4 w-full items-center justify-center my-4">
            <ModalButton
              modaltype="close"
              modalid={id}
              disabled={!selectedClass}
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                handleLevelUp();
              }}
            >
              Confirm
            </ModalButton>
            <button
              className="btn btn-error"
              onClick={(e) => {
                e.preventDefault();
                const modal = document.getElementById(id) as HTMLDialogElement;
                modal.close();
              }}
            >
              Cancel
            </button>
          </div>
        </ModalBox>
      </Modal>
    </>
  );
};

export default LevelUp;
