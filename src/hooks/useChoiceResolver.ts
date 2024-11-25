import { resolveChoice } from '@/lib/actions/db/characterChoiceStatus/create.actions';
import { ChoiceOutput } from '@/lib/types/protocols';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setRefreshSheet } from '@/store/sheetSlice';
import { useCallback, useState } from 'react';

const useChoiceResolver = (choiceId: string) => {
  const characterId = useAppSelector((state) => state.sheet.rawCharacter?.id);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const resolve = useCallback(
    async (selections: ChoiceOutput) => {
      if (!characterId) return;
      setLoading(true);
      const res = await resolveChoice({ characterId, choiceId, selections });
      if (res === 'failure') {
        setLoading(false);
        return;
      }
      dispatch(setRefreshSheet(true));
      setLoading(false);
    },
    [characterId, choiceId, dispatch]
  );

  return { resolve, loading };
};

export default useChoiceResolver;
