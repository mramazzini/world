import { CallbackOptions, CharacterInfo } from '@/lib/utils/types/types';
import { ItemToInventory } from '../../ChoiceFunctions/ItemToInventory';
import { addArmorProficiencies } from '../../ChoiceFunctions/addArmorProficiencies';
import { addToolProficiencies } from '../../ChoiceFunctions/addToolProficiencies';
import { setAbilityScore } from '../../ChoiceFunctions/setAbilityScore';
import { subclassSelection } from '../../ChoiceFunctions/subclassSelection';
import { SpeciesAbilityScoreIncrease } from '../../ChoiceFunctions/speciesAbilityScoreIncrease';
import { addLanguageProficiencies } from '../../ChoiceFunctions/addLanguageProficiencies';
import { addSavingThrowProficiencies } from '../../ChoiceFunctions/addSavingThrowProficiencies';
import { addSkillProficiencies } from '../../ChoiceFunctions/addSkillProficiencies';
import { addWeaponProficiencies } from '../../ChoiceFunctions/addWeaponProficiencies';
import { removeChoice } from './removeChoice';

export const runCallback = async (
  character: CharacterInfo,
  protocol: PrismaJson.CallbackProtocol,
  from: string,
  choiceId: string,
  data: CallbackOptions
): Promise<PrismaJson.CharacterState> => {
  if (!data) return character.state as PrismaJson.CharacterState;
  const callback: PrismaJson.StateCallback =
    protocol == 'ItemToInventory'
      ? ItemToInventory
      : protocol == 'addArmorProficiencies'
        ? addArmorProficiencies
        : protocol == 'addToolProficiencies'
          ? addToolProficiencies
          : protocol == 'SetAbilityScore'
            ? setAbilityScore
            : protocol == 'SubclassSelection'
              ? subclassSelection
              : protocol == 'SpeciesAbilityScoreIncrease'
                ? SpeciesAbilityScoreIncrease
                : protocol == 'addLanguageProficiencies'
                  ? addLanguageProficiencies
                  : protocol == 'addSavingThrowProficiencies'
                    ? addSavingThrowProficiencies
                    : protocol == 'addSkillProficiencies'
                      ? addSkillProficiencies
                      : addWeaponProficiencies;
  const callbackRes = await callback(character, data, from);

  const removedChoice = removeChoice(callbackRes, choiceId);
  return {
    ...removedChoice,
  };
};
