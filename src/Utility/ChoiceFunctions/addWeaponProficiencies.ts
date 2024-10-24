import { WeaponID } from '@/lib/utils/types/types';

export const addWeaponProficiencies: PrismaJson.StateCallback = (
  char,
  c,
  from
) => {
  const state = char.state as PrismaJson.CharacterState;
  const weapons = c as WeaponID[];
  return {
    ...state,
    proficiencies: {
      ...state.proficiencies,
      weapons: weapons,
      weaponReasons: weapons.map(() => ({
        reason: from,
        effect: 'Proficient',
      })),
    },
  };
};
