import { Skill } from '@prisma/client';

export const SkillToText = (skill: Skill) => {
  return skill.replaceAll('_', ' ').toCapitalCase();
};
