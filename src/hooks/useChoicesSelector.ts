import { ChoiceOutput } from '@/lib/types/protocols';
import { useAppSelector } from '@/store/hooks';
import { Choice } from '@prisma/client';
import { useCallback, useMemo } from 'react';
interface CompletedChoice extends Choice {
  selections: ChoiceOutput;
}

const useChoicesSelector = () => {
  const {
    rawCharacter: character,
    choices,
    activeChoiceId,
  } = useAppSelector((state) => state.sheet);
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
      choices.find((choice) => choice.id === activeChoiceId) || null;
    if (!choice) return null;
    return {
      ...choice,
    };
  }, [activeChoiceId, choices]);

  return {
    choices,
    pendingChoices,
    selectedChoice,
    fufilledChoices,
  };
};

export default useChoicesSelector;
