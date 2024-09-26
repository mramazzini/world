"use client";
import { CharacterInfo } from "@/lib/types";
import Choice from "./Choice";
import { v4 } from "uuid";
interface Props {
  character: CharacterInfo;
  setCharacterState: (character: PrismaJson.CharacterState) => void;
}

const ChooseChoices = ({ character, setCharacterState }: Props) => {
  if (!character) return null;
  if (!character.state) return null;

  return (
    <div className="flex flex-col items-center w-full ">
      <p className="text-xl mb-4 font-bold">
        {character.state.pendingChoices.length > 0 ? (
          <span> {character.state.pendingChoices.length} pending choices.</span>
        ) : (
          "All Done!"
        )}
      </p>
      <div className="flex flex-wrap justify-center  gap-4  overflow-x-hidden">
        {character.state.pendingChoices.map((choice) => {
          return (
            <Choice
              id={choice.id}
              key={choice.id}
              hidden={false}
              choiceData={choice}
              character={character}
              setCharacterState={setCharacterState}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChooseChoices;
