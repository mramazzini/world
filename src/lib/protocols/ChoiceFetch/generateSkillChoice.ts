import {
  SetSkillExpertiseParams,
  SetSkillProficiencyParams,
} from '@/lib/types/protocols';
import { ChoiceProtocol, Prisma } from '@prisma/client';

export const generateSkillProficiencyChoice = (
  id: string,
  classId: string,
  description: string,
  skills: SetSkillProficiencyParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    classId,
    description,
    fetchParams: skills,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.SET_SKILL_PROFICIENCY,
  };
};

export const generateSkillExpertiseChoice = (
  id: string,
  classId: string,
  description: string,
  skills: SetSkillExpertiseParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    classId,
    description,
    fetchParams: skills,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.SET_SKILL_EXPERTISE,
  };
};
