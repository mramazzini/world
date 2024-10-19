"use client";
import { CallbackOptions, CharacterInfo } from "@/lib/utils/types/types";
import Choice from "./Choice";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import Loading from "@/app/components/UI/Loading";
import { runCallback } from "@/app/Utility/characterStateFunctions/update/runCallback";
import { removeChoice } from "@/app/Utility/characterStateFunctions/update/removeChoice";
interface Props {
  character: CharacterInfo;
  setCharacterState: (character: PrismaJson.CharacterState) => void;
}

const ChooseChoices = ({ character, setCharacterState }: Props) => {
  const [loading, setLoading] = useState(false);
  if (!character) return null;
  if (!character.state) return null;

  useEffect(() => {
    // check to see if choice can be auto resolved
    if (!character) return;
    if (!character.state) return;
    if (!character.state.pendingChoices) return;

    const pendingChoices = character.state.pendingChoices;
    const resolveChoices = async () => {
      let tempCharacter = { ...character };
      for (const choiceData of pendingChoices) {
        const validProtocols: PrismaJson.CallbackProtocol[] = [
          "SpeciesAbilityScoreIncrease",
          "addArmorProficiencies",
          "addLanguageProficiencies",
          "addSkillProficiencies",
          "addWeaponProficiencies",
          "addToolProficiencies",
          "addSavingThrowProficiencies",
        ];
        if (!validProtocols.includes(choiceData.callbackProtocol)) {
          continue;
        }
        if (!choiceData.choice.choices) {
          if (!choiceData.choice.default) {
            tempCharacter.state = removeChoice(
              tempCharacter.state as PrismaJson.CharacterState,
              choiceData.id
            );
            continue;
          }
          tempCharacter.state = await runCallback(
            tempCharacter,
            choiceData.callbackProtocol,
            choiceData.from,
            choiceData.id,
            choiceData.choice.default as CallbackOptions
          );
        }
      }
      setCharacterState(tempCharacter.state as PrismaJson.CharacterState);
    };
    resolveChoices().then(() => {
      setLoading(false);
    });
  }, [character.state?.pendingChoices]);

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
