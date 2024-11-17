import { CallbackOptions, ToolID, WeaponID } from '@/lib/types/types';
import ItemChoiceHandler from './ItemChoiceHandler';
import { Ability } from '@prisma/client';
import ProficiencyChoiceHandler from './ProficiencyChoiceHandler';
import { ArmorType, Language, Skill } from '@prisma/client';
import SubclassChoiceHandler from './SubclassChoiceHandler';
import CharacterAbilityScoreHandler from './CharacterAbilityScoreHandler';
import AbilityScoreHandler from './AbilityScoreHandler';
import { runCallback } from '@/Utility/characterStateFunctions/update/runCallback';
import { useCallback } from 'react';
import ASIorFeatHandler from './ASIorFeatHandler';
import FeatHandler from './FeatHandler';
import { useAppSelector } from '@/store/hooks';
import { useDispatch } from 'react-redux';
import { setCharacterState } from '@/store/sheetSlice';

interface Props {
  id: string;
  choiceData: PrismaJson.Choice;
  hidden: boolean;
}

const Choice = ({ id, choiceData, hidden }: Props) => {
  const character = useAppSelector((state) => state.character);
  const dispatch = useDispatch();
  const callback = useCallback(
    async (data: CallbackOptions) => {
      const s = await runCallback(
        character,
        choiceData.callbackProtocol,
        choiceData.from,
        id,
        data
      );
      dispatch(setCharacterState(s));
    },

    [character, choiceData, id, dispatch]
  );

  const filterChoice = (choice: PrismaJson.Choice) => {
    //need to filter out choices that the user already has
    if (choice.model === 'Skill') {
      const skillChoice = choice.choice as PrismaJson.SkillChoice;
      const skills: Skill[] = character.state?.proficiencies.skills || [];
      const newChoice: PrismaJson.SkillChoice = {
        ...skillChoice,
        choices: skillChoice.choices?.map((c) => {
          if (c.options.some((o) => skills.includes(o))) {
            return {
              ...c,
              options: c.options.filter((o) => !skills.includes(o)),
              numberOfChoices: Math.min(
                c.numberOfChoices,
                c.options.filter((o) => !skills.includes(o)).length
              ),
            };
          }
          return c;
        }) as PrismaJson.SkillChoice['choices'],
      };
      return { ...newChoice };
    }
    if (choice.model === 'Language') {
      const languageChoice = choice.choice as PrismaJson.LanguageChoice;
      const languages: Language[] =
        character.state?.proficiencies.languages || [];
      const newChoice: PrismaJson.LanguageChoice = {
        ...languageChoice,
        choices: languageChoice.choices?.map((c) => {
          if (c.options.some((o) => languages.includes(o))) {
            return {
              ...c,
              options: c.options.filter((o) => !languages.includes(o)),
              numberOfChoices: Math.min(
                c.numberOfChoices,
                c.options.filter((o) => !languages.includes(o)).length
              ),
            };
          }
          return c;
        }) as PrismaJson.LanguageChoice['choices'],
      };
      return { ...newChoice };
    }
    if (choice.model === 'Armor') {
      const armorChoice = choice.choice as PrismaJson.ArmorChoice;
      const armors: ArmorType[] = character.state?.proficiencies.armor || [];
      const newChoice: PrismaJson.ArmorChoice = {
        ...armorChoice,
        choices: armorChoice.choices?.map((c) => {
          if (c.options.some((o) => armors.includes(o))) {
            return {
              ...c,
              options: c.options.filter((o) => !armors.includes(o)),
              numberOfChoices: Math.min(
                c.numberOfChoices,
                c.options.filter((o) => !armors.includes(o)).length
              ),
            };
          }
          return c;
        }) as PrismaJson.ArmorChoice['choices'],
      };
      return { ...newChoice };
    }
    if (choice.model === 'Weapon') {
      const weaponChoice = choice.choice as PrismaJson.WeaponChoice;
      const weapons: WeaponID[] = character.state?.proficiencies.weapons || [];
      const newChoice: PrismaJson.WeaponChoice = {
        ...weaponChoice,
        choices: weaponChoice.choices?.map((c) => {
          if (c.options.some((o) => weapons.includes(o))) {
            return {
              ...c,
              options: c.options.filter((o) => !weapons.includes(o)),
              numberOfChoices: Math.min(
                c.numberOfChoices,
                c.options.filter((o) => !weapons.includes(o)).length
              ),
            };
          }
          return c;
        }) as PrismaJson.WeaponChoice['choices'],
      };
      return { ...newChoice };
    }
    if (choice.model === 'Tool') {
      const toolChoice = choice.choice as PrismaJson.ToolChoice;
      const tools: ToolID[] = character.state?.proficiencies.tools || [];
      const newChoice: PrismaJson.ToolChoice = {
        ...toolChoice,
        choices: toolChoice.choices?.map((c) => {
          if (c.options.some((o) => tools.includes(o))) {
            return {
              ...c,
              options: c.options.filter((o) => !tools.includes(o)),
              numberOfChoices: Math.min(
                c.numberOfChoices,
                c.options.filter((o) => !tools.includes(o)).length
              ),
            };
          }
          return c;
        }) as PrismaJson.ToolChoice['choices'],
      };
      return { ...newChoice };
    }
  };

  const RenderChoice = (choice: PrismaJson.Choice) => {
    switch (choice.model) {
      case 'CharacterAbilityScoreSelection':
        return (
          <CharacterAbilityScoreHandler
            choice={choice.choice as PrismaJson.AbilityScoreChoice}
            character={character}
            callback={callback}
          />
        );
      case 'Item':
        return (
          <ItemChoiceHandler
            choice={choice.choice as PrismaJson.ItemChoice}
            character={character}
            callback={callback}
          />
        );
      case 'Armor':
        return (
          <ProficiencyChoiceHandler<ArmorType>
            proficiency="armor"
            choice={choice.choice as PrismaJson.ArmorChoice}
            character={character}
            callback={callback}
          />
        );
      case 'Weapon':
        return (
          <ProficiencyChoiceHandler<WeaponID>
            proficiency="weapon"
            choice={choice.choice as PrismaJson.WeaponChoice}
            character={character}
            callback={callback}
          />
        );
      case 'Language':
        return (
          <ProficiencyChoiceHandler<Language>
            proficiency="language"
            choice={choice.choice as PrismaJson.LanguageChoice}
            character={character}
            callback={callback}
          />
        );
      case 'Tool':
        return (
          <ProficiencyChoiceHandler<ToolID>
            proficiency="tool"
            choice={choice.choice as PrismaJson.ToolChoice}
            character={character}
            callback={callback}
          />
        );
      case 'Skill':
        return (
          <ProficiencyChoiceHandler<Skill>
            proficiency="skill"
            choice={filterChoice(choice) as PrismaJson.SkillChoice}
            character={character}
            callback={callback}
          />
        );
      case 'Ability':
        return (
          <ProficiencyChoiceHandler<Ability>
            proficiency="saving"
            choice={choice.choice as PrismaJson.AbilityChoice}
            character={character}
            callback={callback}
          />
        );
      case 'AbilityScore':
        return (
          <AbilityScoreHandler
            choice={choice.choice as PrismaJson.AbilityScoreChoice}
            character={character}
            callback={callback}
          />
        );
      case 'Subclass':
        return (
          <SubclassChoiceHandler
            choice={choice.choice as PrismaJson.SubclassChoice}
            callback={callback}
          />
        );
      case 'ASI or Feat':
        return (
          <ASIorFeatHandler
            choice={choice.choice as PrismaJson.ASIorFeatChoice}
            character={character}
            callback={callback}
          />
        );
      case 'Feat':
        return (
          <FeatHandler
            choice={choice.choice as PrismaJson.FeatChoice}
            character={character}
            callback={callback}
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
              {choiceData.model === 'CharacterAbilityScoreSelection'
                ? 'Scores'
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
