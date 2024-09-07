"use client";
import { CharacterInfo } from "@/lib/types";
import Choice from "./Choice";
interface Props {
  character: CharacterInfo;
  setCharacterState: (character: PrismaJson.CharacterState) => void;
}

const ChooseChoices = ({ character, setCharacterState }: Props) => {
  return (
    character &&
    character.state && (
      <div className="flex flex-wrap justify-center gap-4  overflow-x-hidden">
        {character.state.pendingChoices.map((choice, index) => {
          return (
            <Choice
              key={index}
              hidden={index !== 0}
              choiceData={choice}
              character={character}
              setCharacterState={setCharacterState}
            />
          );
        })}
      </div>
    )
  );
};

export default ChooseChoices;
