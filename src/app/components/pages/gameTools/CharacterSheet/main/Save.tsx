"use client";
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
      const response = await fetch("/api/saveCharacter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, state }),
      });

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
  return (
    <div className="flex flex-row 2xl:flex-col items-center justify-center join 2xl:join-vertical">
      <button
        className="btn btn-error btn-xs join-item 2xl:w-full"
        onClick={(e) => {
          e.preventDefault();
          regenerateCharacter();
          handleClick();
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
  );
};

export default Save;
