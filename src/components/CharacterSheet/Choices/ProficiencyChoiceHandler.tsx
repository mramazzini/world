'use client';
import {
  ArmorID,
  CallbackOptions,
  CharacterInfo,
  ToolID,
  WeaponID,
} from '@/lib/types/types';
import P from '@/Utility/FormatAndSanitize';
import { useCallback, useState } from 'react';
import { Ability, ArmorType, Language, Skill } from '@prisma/client';
import ArmorChoice from './ArmorChoice';
import SkillChoice from './SkillChoice';
import ModelDisplay from '@/Utility/ModelDisplay';
import AbilityToText from '@/lib/utils/AbilityToText';
import ToolChoice from './ToolChoice';
import WeaponChoice from './WeaponChoice';
import LanguageChoice from './LanguageChoice';

import Image from 'next/image';
import useModal from '@/hooks/useModal';
import Modal from '@/components/UI/Modal/Modal';
import ModalBox from '@/components/UI/Modal/ModalBox';
import ModalButton from '@/components/UI/Modal/ModalButton';
type ProficiencyType =
  | ArmorID
  | WeaponID
  | Language
  | Skill
  | Ability
  | ToolID
  | ArmorType;

interface Props {
  proficiency:
    | 'armor'
    | 'weapon'
    | 'language'
    | 'skill'
    | 'saving'
    | 'tool'
    | 'ability';
  character: CharacterInfo;
  choice: PrismaJson.ChoiceType;
  callback: (data: CallbackOptions) => void;
}

const ProficiencyChoiceHandler = <T extends ProficiencyType>({
  choice,
  callback,
  proficiency,
}: Props) => {
  const [selections, setSelections] = useState<T[]>([]);
  const { id } = useModal();
  const handleSubmit = (e: React.FormEvent) => {
    console.log('Submit');
    e.preventDefault();
    // Make sure that all selections are made
    let allSelectionsMade = true;
    if (!selections || selections.length === 0) {
      allSelectionsMade = false;
    }
    if (!choice.choices) {
      allSelectionsMade = true;
    }
    if (!allSelectionsMade) {
      console.error('Not all selections made');
      return;
    }
    // Callback
    const arr: CallbackOptions = selections as CallbackOptions;
    const defArr: CallbackOptions = choice.default as CallbackOptions;
    callback(
      choice.default
        ? (arr.concat(defArr) as CallbackOptions)
        : (selections as CallbackOptions)
    );
  };

  const parseChoiceItem = useCallback(
    (item: T) => {
      switch (proficiency) {
        case 'armor':
          return (item as ArmorType).toCapitalCase().replaceAll('_', ' ');
        case 'ability':
          return AbilityToText(item as Ability);
        case 'weapon':
          return <ModelDisplay model="Weapon" id={item as WeaponID} />;
        case 'language':
          return (item as Language).toCapitalCase().replaceAll('_', ' ');
        case 'skill':
          return (
            <P modalID={id}>
              {(item as Skill).toCapitalCase().replaceAll('_', ' ')}
            </P>
          );
        case 'saving':
          return <P modalID={id}>{AbilityToText(item as Ability)}</P>;
        case 'tool':
          return <ModelDisplay model="Tool" id={item as ToolID} />;
        default:
          return 'asd';
      }
    },
    [proficiency, id]
  );

  return (
    <>
      <Modal id={id}>
        <ModalBox
          style={{
            height: '',
            maxHeight: 'calc(100vh - 5em)',
            overflow: 'visible',
          }}
        >
          <form
            onSubmit={handleSubmit}
            className=" overflow-auto "
            style={{
              height: '',
              maxHeight: 'calc(80vh - 5em)',
            }}
          >
            <div className="flex bg-base-300 rounded-xl p-4 flex-col my-4">
              <p>You gain the following proficiencies:</p>
              <div className="divider divider-accent  m-0"></div>
              <ul className="list-disc ml-4">
                {choice.default?.map((data, index) => (
                  <li key={index}>{parseChoiceItem(data as T)}</li>
                ))}
              </ul>
            </div>
            <div className="">
              {proficiency == 'armor' &&
                choice.choices?.map((c, index) => {
                  if (index > 3) return;
                  if (index == 3)
                    return (
                      <p key={index}>... +{choice.choices?.length} more</p>
                    );
                  return (
                    <ArmorChoice
                      key={index}
                      choice={
                        c as { numberOfChoices: number; options: ArmorType[] }
                      }
                      updateSelections={(armor) => {
                        setSelections(() => {
                          const newSelections = armor;
                          return newSelections as T[];
                        });
                      }}
                    />
                  );
                })}
              {proficiency == 'skill' &&
                choice.choices?.map((c, index) => {
                  if (index > 3) return;
                  if (index == 3)
                    return (
                      <p key={index}>... +{choice.choices?.length} more</p>
                    );
                  return (
                    <SkillChoice
                      modalID={id}
                      key={index}
                      choice={
                        c as { numberOfChoices: number; options: Skill[] }
                      }
                      updateSelections={(skills) => {
                        setSelections(() => {
                          const newSelections = skills;
                          return newSelections as T[];
                        });
                      }}
                    />
                  );
                })}
              {proficiency == 'tool' &&
                choice.choices?.map((c, index) => {
                  if (index > 3) return;
                  if (index == 3)
                    return (
                      <p key={index}>... +{choice.choices?.length} more</p>
                    );
                  return (
                    <ToolChoice
                      key={index}
                      choice={
                        c as { numberOfChoices: number; options: ToolID[] }
                      }
                      updateSelections={(skills) => {
                        setSelections(() => {
                          const newSelections = skills;
                          return newSelections as T[];
                        });
                      }}
                    />
                  );
                })}
              {proficiency == 'weapon' &&
                choice.choices?.map((c, index) => {
                  if (index > 3) return;
                  if (index == 3)
                    return (
                      <p key={index}>... +{choice.choices?.length} more</p>
                    );
                  return (
                    <WeaponChoice
                      key={index}
                      choice={
                        c as { numberOfChoices: number; options: WeaponID[] }
                      }
                      updateSelections={(skills) => {
                        setSelections(() => {
                          const newSelections = skills;
                          return newSelections as T[];
                        });
                      }}
                    />
                  );
                })}
              {proficiency == 'language' &&
                choice.choices?.map((c, index) => {
                  if (index > 3) return;
                  if (index == 3)
                    return (
                      <p key={index}>... +{choice.choices?.length} more</p>
                    );
                  return (
                    <LanguageChoice
                      key={index}
                      choice={
                        c as { numberOfChoices: number; options: Language[] }
                      }
                      updateSelections={(skills) => {
                        setSelections(() => {
                          const newSelections = skills;
                          return newSelections as T[];
                        });
                      }}
                    />
                  );
                })}
            </div>
            <div className="flex justify-end gap-4">
              <ModalButton
                className="btn btn-error"
                modalid={id}
                modaltype="close"
              >
                Cancel
              </ModalButton>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </ModalBox>
      </Modal>
      <ModalButton
        className="btn p-4 h-auto flex items-center justify-between flex-col btn-ghost border border-gray-500 join-item"
        modalid={id}
        modaltype="open"
      >
        <Image
          src={
            proficiency == 'armor'
              ? '/armor.svg'
              : proficiency == 'weapon'
                ? '/sword.svg'
                : proficiency == 'language'
                  ? '/images/globe.svg'
                  : proficiency == 'skill'
                    ? '/images/hand.svg'
                    : proficiency == 'saving'
                      ? '/images/skull.svg'
                      : proficiency == 'tool'
                        ? '/images/alchemy.svg'
                        : proficiency == 'ability'
                          ? '/images/strength.svg'
                          : '/images/sparkles2.svg'
          }
          width={200}
          height={200}
          className="opacity-50"
          alt={`Choose your ${
            proficiency == 'armor'
              ? 'armor'
              : proficiency == 'weapon'
                ? 'weapons'
                : proficiency == 'language'
                  ? 'languages'
                  : proficiency == 'skill'
                    ? 'skills'
                    : proficiency == 'saving'
                      ? 'saving throws'
                      : proficiency == 'tool'
                        ? 'tools'
                        : proficiency == 'ability'
                          ? 'abilities'
                          : proficiency == 'abilityScore'
                            ? 'ability scores'
                            : 'proficiencies'
          }`}
        />
        <p className="divider">
          Choose your{' '}
          {proficiency == 'armor'
            ? 'armor'
            : proficiency == 'weapon'
              ? 'weapons'
              : proficiency == 'language'
                ? 'languages'
                : proficiency == 'skill'
                  ? 'skills'
                  : proficiency == 'saving'
                    ? 'saving throws'
                    : proficiency == 'tool'
                      ? 'tools'
                      : proficiency == 'ability'
                        ? 'abilities'
                        : proficiency == 'abilityScore'
                          ? 'ability scores'
                          : 'proficiencies'}
        </p>
      </ModalButton>
    </>
  );
};

export default ProficiencyChoiceHandler;
