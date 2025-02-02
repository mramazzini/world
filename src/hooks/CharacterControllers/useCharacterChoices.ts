import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCharacterChoices } from '@/store/sheetSlice';
import { Choice } from '@prisma/client';
import { useEffect } from 'react';
const useCharacterChoices = () => {
  const {
    rawCharacter: character,
    combinedSpecies,
    primaryClass,
    multiClasses,
    activeEffects,
  } = useAppSelector((state) => state.sheet);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!character) return;
    const choices = [
      ...(primaryClass?.Class.Choices || []),
      ...multiClasses.reduce<Choice[]>((acc, cur) => {
        return [...acc, ...(cur?.Class.Choices || [])];
      }, []),
      ...(character.Background?.Choices || []),
      ...(combinedSpecies?.Choices || []),
      ...activeEffects.reduce<Choice[]>((acc, cur) => {
        return [...acc, ...(cur.Choices || [])];
      }, []),
    ];
    dispatch(setCharacterChoices(choices));
  }, [
    dispatch,
    character,
    combinedSpecies?.Choices,
    primaryClass?.Class.Choices,
    multiClasses,
    activeEffects,
  ]);
};

export default useCharacterChoices;
