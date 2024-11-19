import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';
import useModifier from './useModifier';
import { Ability } from '@prisma/client';

const useHitpoints = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const { getAbilityModifier } = useModifier();
  const temphp = useMemo(() => {
    if (!character) return 0;
    return character.tempHp;
  }, [character]);

  const maxhp = useMemo(() => {
    if (!character) return 0;
    //calculate maxhp from constitution and class
    const con = getAbilityModifier(Ability.CON);
    const dice: {
      [key: number]: number;
    } = {};
    for (const _class of character.CharacterToClass) {
      if (!dice[_class.Class.hitDie])
        dice[_class.Class.hitDie] = _class.levelsInClass;
      else dice[_class.Class.hitDie] += _class.levelsInClass;
    }

    const largestHitDie = Math.max(...Object.keys(dice).map(Number));
    if (largestHitDie in dice) {
      dice[largestHitDie] -= 1;
    }

    const totalHp =
      Object.keys(dice).reduce((acc, key) => {
        return acc + dice[Number(key)] * (Number(key) + con);
      }, 0) +
      largestHitDie +
      con;

    return totalHp;
  }, [character, getAbilityModifier]);

  const currenthp = useMemo(() => {
    if (!character) return 0;
    return character.currentHp;
  }, [character]);
  return { temphp, maxhp, currenthp };
};

export default useHitpoints;
