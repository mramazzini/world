import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import useModifier from '../useModifier';
import { Ability } from '@prisma/client';
import { setMaxHp } from '@/store/sheetSlice';

const useHitpoints = () => {
  const dispatch = useAppDispatch();
  const { rawCharacter: character, hitDie } = useAppSelector(
    (state) => state.sheet
  );
  const { getAbilityModifier } = useModifier();

  useEffect(() => {
    if (!character) return;
    //calculate maxhp from constitution and class
    const con = getAbilityModifier(Ability.CON);

    const tempDie = { ...hitDie };

    const largestHitDie = Math.max(...Object.keys(tempDie).map(Number));
    if (largestHitDie in tempDie) {
      tempDie[largestHitDie] -= 1;
    }

    const totalHp =
      Object.keys(tempDie).reduce((acc, key) => {
        return acc + tempDie[Number(key)] * (Number(key) + con);
      }, 0) +
      largestHitDie +
      con;
    dispatch(setMaxHp(totalHp));
  }, [character, getAbilityModifier, hitDie, dispatch]);
};

export default useHitpoints;
