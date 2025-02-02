'use client';
import { ClassInfo, ExtendedMulticlassInfo } from '@/lib/types/modelInfo';
import Info from '../UI/Info';
import P from '@/Utility/FormatAndSanitize';
import { useState } from 'react';
import ArmorTypeToText from '@/lib/utils/toText/ArmorTypeToText';
import { WeaponGroupToText } from '@/lib/utils/toText/WeaponGroupToText';
import { ToolGroupToText } from '@/lib/utils/toText/ToolGroupToText';
import { SkillToText } from '@/lib/utils/toText/SkillToText';
import AbilityToText from '@/lib/utils/toText/AbilityToText';
import { Choice, ChoiceProtocol } from '@prisma/client';
import '@/lib/string.extensions';

const ClassProficiencies = ({ classObj }: { classObj: ClassInfo }) => {
  const [showingMulticlass, setShowingMulticlass] = useState(false);
  const {
    armorProficiencyDescription,
    weaponProficiencyDescription,
    toolProficiencyDescription,
    skillDescription,
    savingThrowDescription,
  } = classObj;

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h2 className="pb-0">
          {showingMulticlass && classObj.MultiClassing ? (
            <>
              Multiclassing{' '}
              <Info tooltip="Multiclassing Proficiencies are only acquired when multiclassing into this class." />
            </>
          ) : (
            <>
              Proficiencies <Info tooltip="Proficient" />
            </>
          )}
        </h2>
        {classObj.MultiClassing && (
          <div className="flex items-center gap-4">
            <label htmlFor="proficiencies" className="cursor-pointer">
              Toggle Multiclass
            </label>
            <input
              type="checkbox"
              className="toggle"
              id="proficiencies"
              checked={showingMulticlass}
              onChange={() => setShowingMulticlass(!showingMulticlass)}
            />
          </div>
        )}
      </div>
      {showingMulticlass && classObj.MultiClassing ? (
        <MulticlassDisplay multiclassInfo={classObj.MultiClassing} />
      ) : (
        <>
          <div className="divider m-0"></div>
          <p>
            <span className="font-bold">
              <P>Armor: </P>
            </span>
            <P>{armorProficiencyDescription}</P>
          </p>
          <div className="divider m-0"></div>
          <p>
            <span className="font-bold">
              <P>Weapons: </P>
            </span>
            <P>{weaponProficiencyDescription}</P>
          </p>
          <div className="divider m-0"></div>
          <p>
            <span className="font-bold">
              <P>Tools: </P>
            </span>
            <P>{toolProficiencyDescription}</P>
          </p>
          <div className="divider m-0"></div>
          <p>
            <span className="font-bold">
              <P>Skills: </P>
            </span>
            <P>{skillDescription}</P>
          </p>
          <div className="divider m-0"></div>
          <p>
            <span className="font-bold">
              <P>Saving Throws: </P>
            </span>
            <P>{savingThrowDescription}</P>
          </p>
          <div className="divider m-0"></div>
        </>
      )}
    </>
  );
};

const MulticlassDisplay = ({
  multiclassInfo,
}: {
  multiclassInfo: ExtendedMulticlassInfo;
}) => {
  const {
    freeArmorProficiencies,
    freeWeaponGroupProficiencies,
    freeToolGroupProficiencies,
    freeSkillProficiencies,
    freeSavingThrowProficiencies,
  } = multiclassInfo;

  function listHelper<T>(list: T[], fn: (str: T) => string) {
    return list.length > 0
      ? list.map((item, index) => {
          if (index < list.length - 1) {
            return fn(item) + ', ';
          }
          return fn(item);
        })
      : '';
  }

  const choiceFilter = (choices: Choice[], types: ChoiceProtocol[]) =>
    choices.filter((choice) => types.includes(choice.protocol));

  function choiceRenderer(choice: Choice) {
    return `Choose ${choice.amountOfOptionToChoose} from ${(
      choice.fetchParams as string[]
    )
      ?.map((option) => option)
      .join(', ')
      .replaceAll('_', ' ')
      .toCapitalCase()}`;
  }

  return (
    <>
      <div className="divider m-0"></div>
      <p>
        <span className="font-bold">
          <P>Armor: </P>
          {freeArmorProficiencies.length == 0 &&
            choiceFilter(multiclassInfo.Choices, [
              ChoiceProtocol.SET_ARMOR_PROFICIENCY,
            ]).length == 0 &&
            'None'}
        </span>
        <P>{listHelper(freeArmorProficiencies, ArmorTypeToText)}</P>
        <P>
          {listHelper(
            choiceFilter(multiclassInfo.Choices, [
              ChoiceProtocol.SET_ARMOR_PROFICIENCY,
            ]),
            choiceRenderer
          )}
        </P>
      </p>
      <div className="divider m-0"></div>
      <p>
        <span className="font-bold">
          <P>Weapons: </P>{' '}
          {freeWeaponGroupProficiencies.length == 0 &&
            choiceFilter(multiclassInfo.Choices, [
              ChoiceProtocol.SET_WEAPON_PROFICIENCY_GROUPED,
              ChoiceProtocol.SET_WEAPON_PROFICIENCY,
            ]).length == 0 &&
            'None'}
        </span>
        <P>{listHelper(freeWeaponGroupProficiencies, WeaponGroupToText)}</P>
        <P>
          {listHelper(
            choiceFilter(multiclassInfo.Choices, [
              ChoiceProtocol.SET_WEAPON_PROFICIENCY_GROUPED,
              ChoiceProtocol.SET_WEAPON_PROFICIENCY,
            ]),
            choiceRenderer
          )}
        </P>
      </p>
      <div className="divider m-0"></div>
      <p>
        <span className="font-bold">
          <P>Tools: </P>{' '}
          {freeToolGroupProficiencies.length == 0 &&
            choiceFilter(multiclassInfo.Choices, [
              ChoiceProtocol.SET_TOOL_PROFICIENCY_GROUPED,
              ChoiceProtocol.SET_TOOL_PROFICIENCY,
            ]).length == 0 &&
            'None'}
        </span>
        <P>
          {
            listHelper(
              freeToolGroupProficiencies,
              ToolGroupToText
            ) /* ToolGroupToText */
          }
        </P>
        <br />
        <P>
          {listHelper(
            choiceFilter(multiclassInfo.Choices, [
              ChoiceProtocol.SET_TOOL_PROFICIENCY_GROUPED,
              ChoiceProtocol.SET_TOOL_PROFICIENCY,
            ]),
            choiceRenderer
          )}
        </P>
      </p>
      <div className="divider m-0"></div>
      <p>
        <span className="font-bold">
          <P>Skills: </P>{' '}
          {freeSkillProficiencies.length == 0 &&
            choiceFilter(multiclassInfo.Choices, [
              ChoiceProtocol.SET_SKILL_PROFICIENCY,
            ]).length == 0 &&
            'None'}
        </span>
        <P>{listHelper(freeSkillProficiencies, SkillToText)}</P>
        <P>
          {listHelper(
            choiceFilter(multiclassInfo.Choices, [
              ChoiceProtocol.SET_SKILL_PROFICIENCY,
            ]),
            choiceRenderer
          )}
        </P>
      </p>
      <div className="divider m-0"></div>
      <p>
        <span className="font-bold">
          <P>Saving Throws: </P>{' '}
          {freeSavingThrowProficiencies.length == 0 &&
            choiceFilter(multiclassInfo.Choices, [
              ChoiceProtocol.SET_SAVING_THROW_PROFICIENCY,
            ]).length == 0 &&
            'None'}
        </span>
        <P>
          {
            listHelper(
              freeSavingThrowProficiencies,
              AbilityToText
            ) /* AbilityToText */
          }
        </P>
        {listHelper(
          choiceFilter(multiclassInfo.Choices, [
            ChoiceProtocol.SET_SAVING_THROW_PROFICIENCY,
          ]),
          choiceRenderer
        )}
      </p>
      <div className="divider m-0"></div>
    </>
  );
};

export default ClassProficiencies;
