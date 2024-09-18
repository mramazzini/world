import { skillAtritbuteMap } from "@/lib/globalVars";
import { AbilityToModifier } from "./AbilityToModifier";
import { Ability, Skill } from "@prisma/client";
import { calculateLevel } from "./calcLevel";
import { calcProficiency } from "./calcProficiency";

export const calcSkillModifier = (
  state: PrismaJson.CharacterState,
  skill: Skill
) => {
  const base = AbilityToModifier(
    state.abilityScores[skillAtritbuteMap[skill] as Ability]
  );

  const proficiency = state.proficiencies.skills.includes(skill);
  const expertise = state.proficiencies.skillExpertise.includes(skill);
  const prof = calcProficiency(calculateLevel(state));
  if (expertise) {
    return base + prof * 2;
  }
  if (proficiency) {
    return base + prof;
  }
  return base;
};
