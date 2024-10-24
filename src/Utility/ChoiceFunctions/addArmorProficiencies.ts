import { ArmorType } from '@prisma/client';

export const addArmorProficiencies: PrismaJson.StateCallback = (
  char,
  c,
  from
) => {
  const armor = c as ArmorType[];
  const s = char.state as PrismaJson.CharacterState;
  return {
    ...s,
    proficiencies: {
      ...s.proficiencies,
      armor: [...s.proficiencies.armor, ...armor],
      armorReasons: armor.map(() => ({
        reason: from,
        effect: 'Proficient',
      })),
    },
  };
};
