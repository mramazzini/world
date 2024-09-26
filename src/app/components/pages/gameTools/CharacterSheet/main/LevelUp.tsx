import { v4 } from "uuid";

interface Props {
  hasPendingChoices: boolean;
  levelUpCharacter: () => void;
}

const LevelUp = ({ levelUpCharacter, hasPendingChoices }: Props) => {
  const id = v4();
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
        {hasPendingChoices ? "You have pending choices..." : "Level Up"}
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg w-full text-center">
            Confirm level Up!
          </h3>

          <div className="flex flex-row gap-4 w-full items-center justify-center my-4">
            <button
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                levelUpCharacter();
                const modal = document.getElementById(id) as HTMLDialogElement;
                modal.close();
              }}
            >
              Confirm
            </button>
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
        </div>
      </dialog>
    </>
  );
};

export default LevelUp;
