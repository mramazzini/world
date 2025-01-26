import { useAppDispatch, useAppSelector } from '@/store/hooks';
import useCharacterState from './useCharacter/useCharacterState';
import { useCallback } from 'react';
import { setCharacterState } from '@/store/sheetSlice';

const useHitpointsMutator = () => {
  const { maxHP } = useAppSelector((state) => state.sheet);
  const state = useCharacterState();
  const dispatch = useAppDispatch();
  const applyDamage = useCallback(
    (damage: number) => {
      if (!state) return;
      let tempHpToLose = 0;
      if (state.tempHp > 0) {
        if (state.tempHp >= damage) {
          tempHpToLose = damage;
        } else {
          tempHpToLose = state.tempHp;
        }
      }
      const damageToApply = damage - tempHpToLose;

      if (damageToApply <= 0) return;

      if (state.currentHp <= 0) return;

      dispatch(
        setCharacterState({
          ...state,
          currentHp: state.currentHp - damageToApply,
          tempHp: state.tempHp - tempHpToLose,
        })
      );
    },
    [state, dispatch]
  );

  const applyHealing = useCallback(
    (healing: number) => {
      if (!state) return;
      if (state.currentHp >= maxHP) return;
      dispatch(
        setCharacterState({
          ...state,
          currentHp: state.currentHp + healing,
        })
      );
    },
    [state, dispatch, maxHP]
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

  const resetHp = useCallback(() => {
    if (!state) return;
    dispatch(
      setCharacterState({
        ...state,
        currentHp: maxHP,
        tempHp: 0,
      })
    );
  }, [state, dispatch, maxHP]);

  return {
    applyDamage,
    applyHealing,
    applyTempHp,
    resetHp,
  };
};

export default useHitpointsMutator;
