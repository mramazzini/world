import { SpellLevel } from '@/lib/types/types';
import { useAppDispatch } from '@/store/hooks';
import { setCharacterState } from '@/store/sheetSlice';
import { useCallback } from 'react';
import useCharacterState from './useCharacter/useCharacterState';

const useSpellMutator = () => {
  const dispatch = useAppDispatch();
  const state = useCharacterState();
  const castSpellWithSlot = useCallback(
    (level: SpellLevel) => {
      if (!state) return;
      dispatch(
        setCharacterState({
          ...state,
          spellSlotsUsedSinceLastRefresh: {
            ...state.spellSlotsUsedSinceLastRefresh,
            [level]: (state.spellSlotsUsedSinceLastRefresh[level] || 0) + 1,
          },
        })
      );
    },
    [state, dispatch]
  );

  const refreshSpells = useCallback(
    (rest: 'long' | 'short') => {
      if (!state) return;
      dispatch(
        setCharacterState({
          ...state,
          spellSlotsUsedSinceLastRefresh: {},
        })
      );
    },
    [state, dispatch]
  );

  return {
    refreshSpells,
    castSpellWithSlot,
  };
};

export default useSpellMutator;
