import { getCharacter } from '@/lib/actions/db/character/read.actions';
import { CharacterInfo } from '@/lib/types/modelInfo';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setRawCharacter } from '@/store/sheetSlice';
import { useCallback, useEffect, useState } from 'react';

const useCharacter = (characterID: string) => {
  const [loading, setLoading] = useState(true);
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const dispatch = useAppDispatch();

  const calculateCharacter = useCallback(async (character: CharacterInfo) => {
    console.log('Recalc triggered');
    console.log(character);
    if (!character) return;
    // Do some
  }, []);

  const refetch = useCallback(async () => {
    const character = await getCharacter({
      query: characterID,
      type: 'id',
    });
    if (!character) return;
    dispatch(setRawCharacter(character));
  }, [characterID, dispatch]);

  useEffect(() => {
    setLoading(true);
    refetch();
    setLoading(false);
  }, [refetch]);

  useEffect(() => {
    if (!character) return;
    setLoading(true);
    calculateCharacter(character).then(() => setLoading(false));
  }, [character, calculateCharacter]);

  return { loading, refetch };
};

export default useCharacter;
