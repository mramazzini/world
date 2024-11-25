import { getCharacter } from '@/lib/actions/db/character/read.actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setCharacterState,
  setRawCharacter,
  setRefreshSheet,
} from '@/store/sheetSlice';
import { getLatestCharacter } from '@/Utility/Indexed/Sheet/SheetDB';
import { useCallback, useEffect, useState } from 'react';

const useCharacter = (characterID: string) => {
  const [loading, setLoading] = useState(false);
  const refreshPending = useAppSelector((state) => state.sheet.refreshPending);
  const dispatch = useAppDispatch();

  const getCharacterState = useCallback(async () => {
    getLatestCharacter(characterID).then((state) => {
      if (state) {
        dispatch(setCharacterState(state));
      }
    });
  }, [characterID, dispatch]);

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
    refetch().finally(() => {
      setLoading(false);
    });
    dispatch(setRefreshSheet(false));
  }, [refetch, refreshPending, dispatch]);

  useEffect(() => {
    getCharacterState();
  }, [getCharacterState]);

  return { loading, refetch };
};

export default useCharacter;
