'use client';
import ConfirmModal from '@/components/Modals/ConfirmModal';
import ModalButton from '@/components/UI/Modal/ModalButton';
import useModal from '@/hooks/useModal';
import { resetCharacter } from '@/lib/actions/db/character/update.actions';
import { CharacterInfo } from '@/lib/types/modelInfo';
import { setCharacterState } from '@/store/sheetSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { generateCharacter } from '@/Utility/characterStateFunctions/update/generateCharacter';
import { useCallback, useState } from 'react';

const Save = () => {
  const [loading, setLoading] = useState(false);
  const [lastSave, setLastSave] = useState<string | null>(null);
  const { id: modalID } = useModal();
  const character = useAppSelector((state) => state.character);
  const dispatch = useAppDispatch();

  const handleClick = useCallback(async (character: CharacterInfo) => {
    setLoading(true);
    try {
      const response = await fetch('/api/saveCharacter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: character.id, state: character.state }),
      });

      if (!response.ok) {
        throw new Error('Error saving state');
      }
      setLastSave(new Date().toLocaleString());
    } catch (error) {
      console.error('Failed to save state:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const regenerateCharacter = useCallback(
    async (character: CharacterInfo) => {
      //await resetCharacter
      await resetCharacter(character.id);
      const c = await generateCharacter(character);
      dispatch(setCharacterState(c));
    },
    [dispatch]
  );

  // useEffect(() => {
  //   handleClick();
  // }, [handleClick]);

  return (
    <>
      <ConfirmModal
        id={modalID}
        message="Are you sure you want to reset?"
        onConfirm={() => regenerateCharacter(character)}
      />
      <div className="flex flex-row 2xl:flex-col items-center justify-center join 2xl:join-vertical">
        <ModalButton
          modalid={modalID}
          modaltype="open"
          className="btn btn-error btn-xs join-item 2xl:w-full"
        >
          Reset
        </ModalButton>
        <p className="text-center text-xs badge badge-lg badge-neutral join-item 2xl:h-auto ">
          Last save: {lastSave}
        </p>
        {loading ? (
          <span className="loading loading-lg"></span>
        ) : (
          <button
            className="btn btn-secondary btn-xs join-item 2xl:w-full"
            onClick={() => handleClick(character)}
          >
            Save
          </button>
        )}
      </div>
    </>
  );
};

export default Save;
