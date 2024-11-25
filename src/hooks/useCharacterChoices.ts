import { useAppSelector } from '@/store/hooks';
import { Choice } from '@prisma/client';
import { useCallback, useMemo } from 'react';
import useCombinedSpecies from './useCombinedSpecies';
import { ChoiceOutput } from '@/lib/types/protocols';
import usePrimaryClass from './usePrimaryClass';

interface CompletedChoice extends Choice {
  selections: ChoiceOutput;
}

const useCharacterChoices = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const selectedChoiceID = useAppSelector(
    (state) => state.sheet.activeChoiceId
  );
  const primaryClass = usePrimaryClass();
  const combinedSpecies = useCombinedSpecies();

  const multiclasses = useMemo(() => {
    if (!character) return [];
    const classes = character.CharacterToClass.filter(
      (c) => !c.primaryClass
    ).map((c) => c.Class.MultiClassing);
    return classes;
  }, [character]);

  const isFufilled = useCallback(
    (choice: Choice) => {
      if (!character) return false;
      const choiceStatus = character.CharacterChoiceStatus.find(
        (status) => status.choiceId === choice.id
      );
      if (!choiceStatus) return false;
      return true;
    },
    [character]
  );

  const choices = useMemo(() => {
    if (!character) return [];
    const choices = [
      ...(primaryClass?.Class.Choices || []),
      ...multiclasses.reduce<Choice[]>((acc, cur) => {
        return [...acc, ...(cur?.Choices || [])];
      }, []),
      ...(character.Background?.Choices || []),
      ...(combinedSpecies?.Choices || []),
    ];
    return choices;
  }, [
    character,
    combinedSpecies?.Choices,
    primaryClass?.Class.Choices,
    multiclasses,
  ]);

  const fufilledChoices = useMemo(() => {
    if (!character) return [];
    const completedChoices = choices.reduce<CompletedChoice[]>((acc, cur) => {
      if (isFufilled(cur)) {
        const selections =
          character.CharacterChoiceStatus.find(
            (status) => status.choiceId === cur.id
          )?.values || [];
        return [...acc, { ...cur, selections }];
      }
      return acc;
    }, []);

    return completedChoices;
  }, [character, choices, isFufilled]);

  const pendingChoices = useMemo(() => {
    if (!character) return [];
    const pendingChoices = choices.reduce<Choice[]>((acc, cur) => {
      if (!isFufilled(cur)) {
        return [...acc, cur];
      }
      return acc;
    }, []);
    return pendingChoices;
  }, [character, choices, isFufilled]);

  const selectedChoice = useMemo(() => {
    const choice =
      choices.find((choice) => choice.id === selectedChoiceID) || null;
    if (!choice) return null;
    return {
      ...choice,
    };
  }, [selectedChoiceID, choices]);

  return {
    choices,
    pendingChoices,
    selectedChoice,
    fufilledChoices,
  };
};

export default useCharacterChoices;
