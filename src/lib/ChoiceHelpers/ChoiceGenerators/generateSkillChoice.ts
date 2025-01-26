import {
  ChoiceModelId,
  SetSkillExpertiseParams,
  SetSkillProficiencyParams,
} from '@/lib/types/protocols';
import { ChoiceProtocol, Prisma } from '@prisma/client';

export const generateSkillProficiencyChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string,
  skills: SetSkillProficiencyParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: skills,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.SET_SKILL_PROFICIENCY,
  };
};

export const generateSkillExpertiseChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string,
  skills: SetSkillExpertiseParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: skills,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.SET_SKILL_EXPERTISE,
  };
};

export const generateUpgradeSkillProficiencyToExpertiseChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: null,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.UPGRADE_SKILL_PROFICIENCY_TO_EXPERTISE,
  };
};
