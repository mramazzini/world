'use client';
import { CallbackOptions } from '@/lib/types/types';
import Choice from './Choice';
import { useEffect, useState } from 'react';
import { runCallback } from '@/Utility/characterStateFunctions/update/runCallback';
import { removeChoice } from '@/Utility/characterStateFunctions/update/removeChoice';
import Loading from '@/components/UI/Loading';
import { useAppSelector } from '@/store/hooks';
import { useDispatch } from 'react-redux';
import { setCharacterState } from '@/store/characterSlice';

const ChooseChoices = () => {
  const [loading, setLoading] = useState(false);
  const character = useAppSelector((state) => state.character);
  const dispatch = useDispatch();

  useEffect(() => {
    // check to see if choice can be auto resolved
    if (!character) return;
    if (!character.state) return;
    if (!character.state.pendingChoices) return;

    const pendingChoices = character.state.pendingChoices;
    const resolveChoices = async () => {
      const tempCharacter = { ...character };
      for (const choiceData of pendingChoices) {
        const validProtocols: PrismaJson.CallbackProtocol[] = [
          'SpeciesAbilityScoreIncrease',
          'addArmorProficiencies',
          'addLanguageProficiencies',
          'addSkillProficiencies',
          'addWeaponProficiencies',
          'addToolProficiencies',
          'addSavingThrowProficiencies',
        ];
        if (!validProtocols.includes(choiceData.callbackProtocol)) {
          continue;
        }
        if (!choiceData.choice.choices) {
          if (!choiceData.choice.default) {
            tempCharacter.state = removeChoice(
              tempCharacter.state as PrismaJson.CharacterState,
              choiceData.id
            );
            continue;
          }
          tempCharacter.state = await runCallback(
            tempCharacter,
            choiceData.callbackProtocol,
            choiceData.from,
            choiceData.id,
            choiceData.choice.default as CallbackOptions
          );
        }
      }
      dispatch(
        setCharacterState(tempCharacter.state as PrismaJson.CharacterState)
      );
    };
    resolveChoices().then(() => {
      setLoading(false);
    });
  }, [character.state?.pendingChoices, character, dispatch]);
  if (!character) return null;
  if (!character.state) return null;

  return (
    <div className="flex flex-col items-center w-full ">
      <p className="text-xl mb-4 font-bold">
        {character.state.pendingChoices.length > 0 ? (
          <span> {character.state.pendingChoices.length} pending choices.</span>
        ) : (
          'All Done!'
        )}
      </p>
      <div className="flex flex-wrap justify-center  gap-4  overflow-x-hidden">
        {loading ? (
          <Loading />
        ) : (
          character.state.pendingChoices.map((choice) => {
            return (
              <Choice
                id={choice.id}
                key={choice.id}
                hidden={false}
                choiceData={choice}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChooseChoices;
