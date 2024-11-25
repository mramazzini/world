import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useMemo } from 'react';
import useModifier from './useModifier';
import { Ability } from '@prisma/client';
import useCharacterState from './useCharacter/useCharacterState';
import { setCharacterState } from '@/store/sheetSlice';

const useHitpoints = () => {
  const dispatch = useAppDispatch();
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const state = useCharacterState();
  const { getAbilityModifier } = useModifier();

  const temphp = useMemo(() => {
    if (!state) return 0;
    return state?.tempHp;
  }, [state]);

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
    if (!state) return 0;
    return state?.currentHp;
  }, [state]);

  const applyDamage = useCallback(
    (damage: number) => {
      if (!state) return;
      let tempHpToLose = 0;
      if (temphp > 0) {
        if (temphp >= damage) {
          tempHpToLose = damage;
        } else {
          tempHpToLose = temphp;
        }
      }
      const damageToApply = damage - tempHpToLose;

      dispatch(
        setCharacterState({
          ...state,
          currentHp: state.currentHp - damageToApply,
          tempHp: state.tempHp - tempHpToLose,
        })
      );
    },
    [state, dispatch, temphp]
  );

  const applyHealing = useCallback(
    (healing: number) => {
      if (!state) return;
      dispatch(
        setCharacterState({
          ...state,
          currentHp: state.currentHp + healing,
        })
      );
    },
    [state, dispatch]
  );

  const applyTempHp = useCallback(
    (tempHp: number) => {
      if (!state) return;
      dispatch(
        setCharacterState({
          ...state,
          tempHp: state.tempHp + tempHp,
        })
      );
    },
    [state, dispatch]
  );

  return { temphp, maxhp, currenthp, applyDamage, applyHealing, applyTempHp };
};

export default useHitpoints;
