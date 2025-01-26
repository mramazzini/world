import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  Ability,
  ArmorType,
  ChoiceProtocol,
  Language,
  Skill,
  ToolGroup,
  WeaponGroup,
} from '@prisma/client';
import { useEffect } from 'react';
import { ToolID, WeaponID } from '@/lib/types/types';
import { makeArrayUnique } from '@/Utility/makeArrayUnique';
import { SetToolProficiencyOutput } from '@/lib/types/protocols';
import useChoicesSelector from '../useChoicesSelector';
import {
  setProficiencyBonus,
  setProficientArmorTypes,
  setProficientLanguages,
  setProficientToolGroups,
  setProficientToolIds,
  setProficientWeaponGroups,
  setProficientWeaponIds,
  setSavingThrowProficiencies,
  setSkillHalfProficiencies,
  setSkillProficiencies,
} from '@/store/sheetSlice';

const useProficiency = () => {
  const { rawCharacter, level, multiClasses, primaryClass, activeEffects } =
    useAppSelector((state) => state.sheet);
  const { fufilledChoices } = useChoicesSelector();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const toolIds: ToolID[] = [
      ...multiClasses.reduce<string[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeToolIdProficiencies || []),
        ];
      }, []),
      ...(primaryClass?.Class.freeToolProficiencyIds || []),
      ...(rawCharacter?.Background?.freeToolProficiencyIds || []),
      ...(fufilledChoices.reduce<SetToolProficiencyOutput>((acc, cur) => {
        if (cur.protocol === ChoiceProtocol.SET_TOOL_PROFICIENCY) {
          return [...acc, ...(cur.selections as SetToolProficiencyOutput)];
        }
        if (cur.protocol === ChoiceProtocol.SET_TOOL_PROFICIENCY_GROUPED) {
          return [...acc, ...(cur.selections as SetToolProficiencyOutput)];
        }
        return acc;
      }, []) || []),
    ];
    dispatch(setProficientToolIds(makeArrayUnique(toolIds)));
  }, [rawCharacter, multiClasses, primaryClass, fufilledChoices, dispatch]);

  useEffect(() => {
    const toolGroups: ToolGroup[] = [
      ...(multiClasses.reduce<ToolGroup[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeToolGroupProficiencies || []),
        ];
      }, []) || []),
      ...(primaryClass?.Class.freeToolProficiencyGroups || []),
      ...(rawCharacter?.Background?.freeToolProficiencyGroups || []),
    ];
    //use set to make unique
    dispatch(setProficientToolGroups(makeArrayUnique(toolGroups)));
  }, [rawCharacter, multiClasses, primaryClass, dispatch]);

  useEffect(() => {
    if (!rawCharacter) return;
    const languages: Language[] = [
      ...(rawCharacter.Background?.freeLanguageProficiencies || []),
      ...fufilledChoices
        .map((choice) => {
          if (choice.protocol === ChoiceProtocol.SET_LANGUAGE_PROFICIENCY) {
            return choice.selections as Language[];
          }
        })
        .filter((x) => x !== undefined)
        .flat(),
    ];
    dispatch(setProficientLanguages(makeArrayUnique(languages)));
  }, [rawCharacter, fufilledChoices, dispatch]);

  useEffect(() => {
    const skills: Skill[] = [
      ...multiClasses.reduce<Skill[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeSkillProficiencies || []),
        ];
      }, []),
      ...(primaryClass?.Class.freeSkills || []),
      ...(rawCharacter?.Background?.freeSkillProficiencies || []),
      ...fufilledChoices
        .map((choice) => {
          if (choice.protocol === ChoiceProtocol.SET_SKILL_PROFICIENCY) {
            return choice.selections as Skill[];
          }
        })
        .filter((x) => x !== undefined)
        .flat(),
    ];
    dispatch(setSkillProficiencies(makeArrayUnique(skills)));
  }, [rawCharacter, fufilledChoices, multiClasses, primaryClass, dispatch]);

  useEffect(() => {
    //TODO: Implement skill expertises
    return;
  }, []);

  useEffect(() => {
    const skills = [
      ...fufilledChoices.reduce<Skill[]>((acc, cur) => {
        if (cur.protocol === ChoiceProtocol.SET_SKILL_HALF_PROFICIENCY) {
          return [...acc, ...(cur.selections as Skill[])];
        }
        return acc;
      }, []),
      ...activeEffects.reduce<Skill[]>((acc, cur) => {
        if (cur.halfSkillProficiencies) {
          return [...acc, ...cur.halfSkillProficiencies];
        }
        return acc;
      }, []),
    ] as Skill[];

    dispatch(setSkillHalfProficiencies(makeArrayUnique(skills)));
  }, [fufilledChoices, activeEffects, dispatch]);

  useEffect(() => {
    const savingThrows: Ability[] = [
      ...(primaryClass?.Class.freeSavingThrowProficiencies || []),
      ...multiClasses.reduce<Ability[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeSavingThrowProficiencies || []),
        ];
      }, []),
    ];
    dispatch(setSavingThrowProficiencies(makeArrayUnique(savingThrows)));
  }, [primaryClass, multiClasses, dispatch]);

  useEffect(() => {
    if (!primaryClass) return;
    const armorTypes: ArmorType[] = [
      ...(primaryClass?.Class.freeArmorProficiencies || []),
      ...multiClasses.reduce<ArmorType[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeArmorProficiencies || []),
        ];
      }, []),
    ];
    dispatch(setProficientArmorTypes(makeArrayUnique(armorTypes)));
  }, [multiClasses, primaryClass, dispatch]);

  useEffect(() => {
    const weaponIds: WeaponID[] = [
      ...(primaryClass?.Class.freeWeaponProficiencyIds || []),
      ...multiClasses.reduce<string[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeWeaponIdProficiencies || []),
        ];
      }, []),
    ];
    dispatch(setProficientWeaponIds(makeArrayUnique(weaponIds)));
  }, [multiClasses, primaryClass, dispatch]);

  useEffect(() => {
    const weaponGroups: WeaponGroup[] = [
      ...(primaryClass?.Class.freeWeaponProficiencyGroups || []),
      ...multiClasses.reduce<WeaponGroup[]>((acc, cur) => {
        return [
          ...acc,
          ...(cur.Class.MultiClassing?.freeWeaponGroupProficiencies || []),
        ];
      }, []),
    ];
    dispatch(setProficientWeaponGroups(makeArrayUnique(weaponGroups)));
  }, [multiClasses, primaryClass, dispatch]);

  useEffect(() => {
    dispatch(setProficiencyBonus(Math.ceil(level / 4) + 1));
  }, [level, dispatch]);
};

export default useProficiency;
