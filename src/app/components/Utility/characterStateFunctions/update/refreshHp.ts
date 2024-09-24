import { CharacterInfo } from "@/lib/types";
import { calculateLevel } from "../calc/calcLevel";
import { AbilityToModifier } from "../calc/AbilityToModifier";

export const refreshHp = (
  character: CharacterInfo,
  state: PrismaJson.CharacterState
): PrismaJson.CharacterState => {
  // max hp  = hitdie + (con mod * level) + ceil(hitdie/2 * level)
  if (!character.Classes) return state;
  const hitDie = character.Classes[0].hitDie;
  const conMod = AbilityToModifier(state.abilityScores.CON);
  const level = calculateLevel(state);

  const maxHp = hitDie + conMod * level + Math.ceil((hitDie / 2) * (level - 1));

  return {
    ...state,
    hp: {
      ...state.hp,
      current: maxHp,
      damageLog: [],
      max: maxHp,
      maxReasons: [
        {
          reason: "Base Hit Points",
          effect: hitDie,
        },
        {
          reason: "Con Mod * Level",
          effect: `+ ${conMod * level}`,
        },
        {
          reason: "Level Bonus",
          effect: `+ ${Math.ceil((hitDie / 2) * (level - 1))}`,
        },
      ],
    },
  };
};
