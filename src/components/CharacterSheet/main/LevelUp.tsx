import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import ModalButton from '@/components/UI/Modal/ModalButton';
import useModal from '@/hooks/useModal';
import { setCharacterState } from '@/store/sheetSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { levelUp } from '@/Utility/characterStateFunctions/update/levelup';

const LevelUp = () => {
  const { id } = useModal();
  const dispatch = useAppDispatch();
  const character = useAppSelector((state) => state.sheet.rawCharacter);

  const levelUpCharacter = async () => {
    if (!character.Classes) return;
    if (!character.state) return;
    const newState = await levelUp(
      character,
      character.state,
      character.Classes[0].id
    );
    dispatch(setCharacterState(newState));
  };

  return (
    <>
      <button
        className="btn btn-primary w-full"
        disabled={hasPendingChoices}
        onClick={(e) => {
          e.preventDefault();
          const modal = document.getElementById(id) as HTMLDialogElement;
          modal.showModal();
        }}
      >
        {hasPendingChoices ? 'You have pending choices...' : 'Level Up'}
      </button>
      <Modal id={id}>
        <ModalBox>
          <h3 className="font-bold text-lg w-full text-center">
            Confirm level Up!
          </h3>

          <div className="flex flex-row gap-4 w-full items-center justify-center my-4">
            <ModalButton
              modaltype="close"
              modalid={id}
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                levelUpCharacter();
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
