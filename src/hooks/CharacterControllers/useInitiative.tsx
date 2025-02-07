import useModifier from '../useModifier';
import { useEffect } from 'react';
import { Ability } from '@prisma/client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setInitiative } from '@/store/sheetSlice';
import useDiceRoller from '../useDiceRoller';

export const useInitiative = () => {
  const { getAbilityModifier } = useModifier();
  const activeEffects = useAppSelector((state) => state.sheet.activeEffects);
  const dispatch = useAppDispatch();
  const { rollFormula } = useDiceRoller();
  useEffect(() => {
    const getInitiative = async () => {
      let initiative = getAbilityModifier(Ability.DEX);

      for (const effect of activeEffects) {
        if (effect.initiativeBonusFormula) {
          const bonus = await rollFormula(effect.initiativeBonusFormula);
          initiative += bonus.total;
        }
      }

      dispatch(setInitiative(initiative));
    };

    getInitiative();
  }, [getAbilityModifier, dispatch, activeEffects, rollFormula]);
};

export default useInitiative;
