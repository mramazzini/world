import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import ModalButton from '@/components/UI/Modal/ModalButton';
import useModal from '@/hooks/useModal';

interface Props {
  hasPendingChoices: boolean;
  levelUpCharacter: () => void;
}

const LevelUp = ({ levelUpCharacter, hasPendingChoices }: Props) => {
  const { id } = useModal();
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
