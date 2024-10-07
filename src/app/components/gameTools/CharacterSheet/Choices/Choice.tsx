import {
  AbilityScores,
  AbilityScoreValue,
  CallbackOptions,
  CharacterInfo,
  SubClassID,
  ToolID,
  WeaponID,
} from "@/lib/utils/types/types";
import ItemChoiceHandler from "./ItemChoiceHandler";
import { Ability } from "@prisma/client";
import ProficiencyChoiceHandler from "./ProficiencyChoiceHandler";
import Image from "next/image";
import { ArmorType, Language, Skill } from "@prisma/client";
import SubclassChoiceHandler from "./SubclassChoiceHandler";
import CharacterAbilityScoreHandler from "./CharacterAbilityScoreHandler";
import AbilityScoreHandler from "./AbilityScoreHandler";
interface Props {
  id: string;
  character: CharacterInfo;
  choiceData: PrismaJson.Choice;
  setCharacterState: (character: PrismaJson.CharacterState) => void;
  hidden: boolean;
}

const Choice = ({
  id,
  choiceData,
  setCharacterState,
  character,
  hidden,
}: Props) => {
  const runCallback = async (data: CallbackOptions) => {
    if (!character.state) return;

    const callbackRes = await choiceData.callback(character.state, data);
    const newChoices = callbackRes.pendingChoices;
    const index = newChoices.findIndex((choice) => choice.id === id);
    newChoices.splice(index, 1);
    await setCharacterState({
      ...callbackRes,
      pendingChoices: [...newChoices],
    });
  };

  const RenderChoice = (choice: PrismaJson.Choice) => {
    switch (choice.model) {
      case "CharacterAbilityScoreSelection":
        return (
          <CharacterAbilityScoreHandler
            choice={choice.choice as PrismaJson.AbilityScoreChoice}
            character={character}
            callback={runCallback}
          />
        );
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
          <AbilityScoreHandler
            choice={choice.choice as PrismaJson.AbilityScoreChoice}
            character={character}
            callback={runCallback}
          />
        );
      case "Subclass":
        return (
          <SubclassChoiceHandler
            choice={choice.choice as PrismaJson.SubclassChoice}
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
      <div className="join join-vertical ">
        <div className="flex bg-base-200 rounded-xl p-4 flex-col  items-center w-96 join-item ">
          <p className="h-12">{choiceData.description}</p>
          <div className="divider  m-0"></div>
          <div className="flex flex-row justify-center mt-2 join join-horizontal">
            <p className="badge badge-secondary join-item min-w-16">
              {choiceData.from}
            </p>
            <p className="badge badge-info join-item min-w-16">
              {choiceData.model === "CharacterAbilityScoreSelection"
                ? "Scores"
                : choiceData.model}
            </p>
          </div>
          <div className="divider mt-2"></div>
        </div>
        <RenderChoice {...choiceData} />
      </div>
    )
  );
};

export default Choice;
