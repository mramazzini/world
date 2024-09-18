import {
  Ability,
  AbilityScores,
  AbilityScoreValue,
  CallbackOptions,
  CharacterInfo,
  ToolID,
  WeaponID,
} from "@/lib/types";
import ItemChoiceHandler from "./ItemChoiceHandler";
import ProficiencyChoiceHandler from "./ProficiencyChoiceHandler";
import Image from "next/image";
import { ArmorType, Language, Skill } from "@prisma/client";
interface Props {
  character: CharacterInfo;
  choiceData: PrismaJson.Choice;
  setCharacterState: (character: PrismaJson.CharacterState) => void;
  hidden: boolean;
}

const Choice = ({
  choiceData,
  setCharacterState,
  character,
  hidden,
}: Props) => {
  const runCallback = (data: CallbackOptions) => {
    console.log(data);
    if (!character.state) return;
    const newChoices = character.state.pendingChoices;
    newChoices.shift();
    const newState = {
      ...choiceData.callback(character.state, data),
      pendingChoices: newChoices,
    };
    console.log(newState);
    setCharacterState(newState);
  };

  const RenderChoice = (choice: PrismaJson.Choice) => {
    switch (choice.model) {
      case "Item":
        return (
          <ItemChoiceHandler
            choice={choice.choice as PrismaJson.ItemChoice}
            character={character}
            callback={runCallback}
          />
        );
      case "Armor":
        return (
          <ProficiencyChoiceHandler<ArmorType>
            proficiency="armor"
            choice={choice.choice as PrismaJson.ArmorChoice}
            character={character}
            callback={runCallback}
          />
        );
      case "Weapon":
        return (
          <ProficiencyChoiceHandler<WeaponID>
            proficiency="weapon"
            choice={choice.choice as PrismaJson.WeaponChoice}
            character={character}
            callback={runCallback}
          />
        );
      case "Language":
        return (
          <ProficiencyChoiceHandler<Language>
            proficiency="language"
            choice={choice.choice as PrismaJson.LanguageChoice}
            character={character}
            callback={runCallback}
          />
        );
      case "Tool":
        return (
          <ProficiencyChoiceHandler<ToolID>
            proficiency="tool"
            choice={choice.choice as PrismaJson.ToolChoice}
            character={character}
            callback={runCallback}
          />
        );
      case "Skill":
        return (
          <ProficiencyChoiceHandler<Skill>
            proficiency="skill"
            choice={choice.choice as PrismaJson.SkillChoice}
            character={character}
            callback={runCallback}
          />
        );
      case "Ability":
        return (
          <ProficiencyChoiceHandler<Ability>
            proficiency="saving"
            choice={choice.choice as PrismaJson.AbilityChoice}
            character={character}
            callback={runCallback}
          />
        );
      case "AbilityScore":
        return (
          <ProficiencyChoiceHandler<AbilityScoreValue>
            proficiency="abilityScore"
            choice={choice.choice as PrismaJson.AbilityScoreChoice}
            character={character}
            callback={runCallback}
          />
        );
      default:
        return <p>Choice not found</p>;
    }
  };

  return (
    character &&
    character.state &&
    !hidden && (
      <div className="flex bg-base-200 rounded-xl p-4 flex-col  items-center w-96">
        <p className="">{choiceData.description}</p>
        <div className="divider  m-0"></div>
        <div className="flex flex-row justify-center mt-2 join">
          <p className="badge badge-secondary join-item min-w-16">
            {choiceData.from}
          </p>
          <p className="badge badge-info join-item min-w-16">
            {choiceData.model}
          </p>
        </div>

        {/* {hidden ? (
          <>
            <div className="divider mb-0 mt-2" />
            <div className="w-full flex flex-col  h-full items-center justify-center">
              <p className="text-center font-bold mb-2">Locked</p>
              <p className="text-center mb-2">
                Complete previous choices to unlock this one.
              </p>
              <Image
                src="/lock.svg"
                width={75}
                height={75}
                alt="lock"
                className="opacity-40"
              />
            </div>
          </>
        ) : ( */}
        <div className="flex flex-col w-full  ">
          <RenderChoice {...choiceData} />
        </div>
        {/* )} */}
      </div>
    )
  );
};

export default Choice;
