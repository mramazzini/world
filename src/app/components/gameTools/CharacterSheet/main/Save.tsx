"use client";
import { saveCharacterToDB } from "@/app/components/Utility/saveCharacterToDB";
import { useEffect, useState } from "react";

interface Props {
  id: number;
  state: PrismaJson.CharacterState;
  regenerateCharacter: () => void;
}

const Save = ({ id, state, regenerateCharacter }: Props) => {
  const [loading, setLoading] = useState(false);
  const [lastSave, setLastSave] = useState<string | null>(null);

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await saveCharacterToDB(id, state);
      if (!response.ok) {
        throw new Error("Error saving state");
      }
      setLastSave(new Date().toLocaleString());
      console.log("State saved successfully");
    } catch (error) {
      console.error("Failed to save state:", error);
    } finally {
      setLoading(false);
    }
  };
  const modalId = "Reset-character-modal";
  return (
    <>
      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Reset Character</h3>
          <p className="py-4">
            This will set your character back to level 1, clear your inventory,
            and reset your stats to the default values.
          </p>
          <p className="info info-error">
            This action cannot be undone. Are you sure you want to continue?
          </p>
          <div className="flex w-full gap-4 flex-row items-center justify-center">
            <button
              className="btn btn-error join-item"
              onClick={() => {
                regenerateCharacter();
                const modal = document.getElementById(
                  modalId
                ) as HTMLDialogElement;
                if (modal) modal.close();
              }}
            >
              Reset
            </button>
            <button
              className="btn btn-ghost border-gray-500 join-item"
              onClick={() => {
                const modal = document.getElementById(
                  modalId
                ) as HTMLDialogElement;
                if (modal) modal.close();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
      <div className="flex flex-row 2xl:flex-col items-center justify-center join 2xl:join-vertical">
        <button
          className="btn btn-error btn-xs join-item 2xl:w-full"
          onClick={(e) => {
            e.preventDefault();
            const modal = document.getElementById(modalId) as HTMLDialogElement;
            if (modal) modal.showModal();
          }}
        >
          Reset
        </button>
        <p className="text-center text-xs badge badge-lg badge-neutral join-item 2xl:h-auto ">
          Last save: {lastSave}
        </p>
        {loading ? (
          <span className="loading loading-lg"></span>
        ) : (
          <button
            className="btn btn-secondary btn-xs join-item 2xl:w-full"
            onClick={handleClick}
          >
            Save
          </button>
        )}
      </div>
    </>
  );
};

export default Save;
