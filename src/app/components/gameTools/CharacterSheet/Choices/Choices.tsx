"use client";
import { CallbackOptions, CharacterInfo } from "@/lib/utils/types/types";
import Choice from "./Choice";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import Loading from "@/app/components/UI/Loading";
interface Props {
  character: CharacterInfo;
  setCharacterState: (character: PrismaJson.CharacterState) => void;
}

const ChooseChoices = ({ character, setCharacterState }: Props) => {
  const [loading, setLoading] = useState(false);
  if (!character) return null;
  if (!character.state) return null;

  const runCallback = async (
    s: PrismaJson.CharacterState,
    choiceData: PrismaJson.Choice
  ) => {
    const data = choiceData.choice.default as CallbackOptions;
    const callbackRes = await choiceData.callback(s, data);
    const newChoices = callbackRes.pendingChoices;
    const index = newChoices.findIndex((choice) => choice.id === choiceData.id);
    newChoices.splice(index, 1);
    return {
      ...callbackRes,
      pendingChoices: [...newChoices],
    };
  };

  useEffect(() => {
    // check to se if choice can be auto resolved
    if (!character) return;
    if (!character.state) return;
    if (!character.state.pendingChoices) return;

    const pendingChoices = character.state.pendingChoices;
    const resolveChoices = async () => {
      if (!character.state) return;
      let s: PrismaJson.CharacterState = character.state;
      for (const choiceData of pendingChoices) {
        if (!choiceData.choice.choices) {
          console.log(choiceData);

          s = await runCallback(s, choiceData);
        }
      }
      setCharacterState({ ...s });
    };
    resolveChoices().then(() => {
      setLoading(false);
    });
  }, [character.state.pendingChoices]);

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
        {loading ? (
          <Loading />
        ) : (
          character.state.pendingChoices.map((choice) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default ChooseChoices;
