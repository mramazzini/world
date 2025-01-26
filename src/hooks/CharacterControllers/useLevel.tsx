import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setLevel } from '@/store/sheetSlice';
import { useEffect } from 'react';

const useLevel = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!character) return;
    const level = character.CharacterToClass.reduce(
      (acc, cur) => acc + cur.levelsInClass,
      0
    );
    dispatch(setLevel(level));
  }, [character, dispatch]);
};

export default useLevel;
