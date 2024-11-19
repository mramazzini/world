import { getCharacter } from '@/lib/actions/db/character/read.actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setRawCharacter, setRefreshSheet } from '@/store/sheetSlice';
import { useCallback, useEffect, useState } from 'react';

const useCharacter = (characterID: string) => {
  const [loading, setLoading] = useState(true);
  const refreshPending = useAppSelector((state) => state.sheet.refreshPending);
  const dispatch = useAppDispatch();

  const refetch = useCallback(async () => {
    const character = await getCharacter({
      query: characterID,
      type: 'id',
    });
    if (!character) return;
    dispatch(setRawCharacter(character));
  }, [characterID, dispatch]);

  useEffect(() => {
    if (!refreshPending) return;
    setLoading(true);
    refetch();
    setLoading(false);
    dispatch(setRefreshSheet(false));
  }, [refetch, refreshPending, dispatch]);

  return { loading, refetch };
};

export default useCharacter;
