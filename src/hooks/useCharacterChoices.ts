import { useAppSelector } from '@/store/hooks';
import { Choice } from '@prisma/client';
import { useCallback, useMemo } from 'react';
import useCombinedSpecies from './useCombinedSpecies';
import { ChoiceOutput } from '@/lib/types/protocols';

interface CompletedChoice extends Choice {
  selections: ChoiceOutput;
}

const useCharacterChoices = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const selectedChoiceID = useAppSelector(
    (state) => state.sheet.activeChoiceId
  );
  const combinedSpecies = useCombinedSpecies();

  const isFufilled = useCallback(
    (choice: Choice) => {
      if (!character) return false;
      const choiceStatus = character.CharacterChoiceStatus.find(
        (status) => status.choiceId === choice.id
      );
      return choiceStatus?.fufilled || false;
    },
    [character]
  );

  const choices = useMemo(() => {
    if (!character) return [];
    const choices = [
      ...character.CharacterToClass.reduce<Choice[]>((acc, cur) => {
        return [...acc, ...cur.Class.Choices];
      }, []),
      ...(character.Background?.Choices || []),
      ...(combinedSpecies?.Choices || []),
    ];
    return choices;
  }, [character, combinedSpecies?.Choices]);

  const completedChoices = useMemo(() => {
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
    completedChoices,
    pendingChoices,
    selectedChoice,
  };
};

export default useCharacterChoices;
