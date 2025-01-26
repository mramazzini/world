import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import { setHitDie, setUsedHitDie } from '@/store/sheetSlice';
import useCharacterState from '../useCharacter/useCharacterState';

const useHitdie = () => {
  const state = useCharacterState();
  const dispatch = useAppDispatch();
  const { rawCharacter: character, hitDie } = useAppSelector(
    (state) => state.sheet
  );

  useEffect(() => {
    if (!character) return;
    const dice: {
      [key: number]: number;
    } = {};
    for (const _class of character.CharacterToClass) {
      if (!dice[_class.Class.hitDie])
        dice[_class.Class.hitDie] = _class.levelsInClass;
      else dice[_class.Class.hitDie] += _class.levelsInClass;
    }
    dispatch(setHitDie(dice));
  }, [character, dispatch]);

  useEffect(() => {
    if (!state) return;
    const dice: {
      [key: number]: number;
    } = {};

    // for (const [key, value] of Object.entries(hitDie)) {
    //   const die = dice[Number(key)];
    //   if (!die) {
    //     dice[Number(key)] = 0;
    //   }
    //   dice[Number(key)] +=
    //     value - (state.hitDieUsedSinceLastRest[Number(key)] || 0);
    // }

    dispatch(setUsedHitDie(dice));
  }, [state, hitDie, dispatch]);
};

export default useHitdie;
