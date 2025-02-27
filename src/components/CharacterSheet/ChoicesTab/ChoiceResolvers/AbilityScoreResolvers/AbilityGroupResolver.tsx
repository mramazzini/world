import { useEffect, useState } from 'react';
import { Ability, Choice } from '@prisma/client';
import AbilityToText from '@/lib/utils/toText/AbilityToText';
import { v4 } from 'uuid';
import ChoiceResolverButton from '../../ChoiceResolverButton';
import {
  FeatOrASIOutput,
  ImproveAbilityScoreOutput,
} from '@/lib/types/protocols';

type AbilityResolverOutput = FeatOrASIOutput | ImproveAbilityScoreOutput;

interface AbilityGroupResolverProps {
  choice: Choice;
  abilitiesToChooseFrom: string[];
  increaseAmounts: number[];
  valueFilter: (abilityScore: AbilityPinner[]) => AbilityResolverOutput;
}
export interface AbilityPinner {
  id: string;
  value: number;
  assignedAbility?: Ability;
}

const AbilityGroupResolver = ({
  choice,
  abilitiesToChooseFrom,
  increaseAmounts,
  valueFilter,
}: AbilityGroupResolverProps) => {
  const [pins, setPins] = useState<AbilityPinner[]>([]);

  useEffect(() => {
    //initialize pins
    const pins = increaseAmounts.map((i) => {
      return {
        id: v4(),
        value: i,
      };
    });
    setPins(pins);
  }, [increaseAmounts]);

  return (
    <>
      <p>
        Pick{' '}
        {increaseAmounts.length === 1 ? (
          '1 ability score to increase by ' + increaseAmounts[0] + '.'
        ) : (
          <span>
            {increaseAmounts.length} ability scores to increase by the following
            values:{' '}
            {increaseAmounts.map((i, index) => (
              <span key={index} className="badge badge-accent mr-2 font-bold">
                + {i}
              </span>
            ))}
          </span>
        )}
      </p>
      <div className="divider"></div>
      <ul className="flex flex-col gap-2">
        {pins.map((pin, index) => (
          <li
            key={pin.id}
            className="form-control flex flex-row w-full gap-2 items-center"
          >
            + {pin.value} to{' '}
            <select
              className="select select-sm"
              value={pin.assignedAbility || ''}
              onChange={(e) => {
                const value = e.target.value;
                const ability = abilitiesToChooseFrom.find((a) => a === value);
                if (!ability) return;
                setPins((prevPins) => {
                  const newPins = [...prevPins];
                  newPins[index].assignedAbility = ability as Ability;
                  return newPins;
                });
              }}
            >
              <option value={undefined}>Choose an ability</option>
              {abilitiesToChooseFrom.map((ability) => {
                const isDisabled = pins.some(
                  (pin) => pin.assignedAbility === ability
                );

                return (
                  <option key={ability} value={ability} disabled={isDisabled}>
                    {AbilityToText(ability)}
                  </option>
                );
              })}
            </select>
          </li>
        ))}
      </ul>
      <div className="divider"></div>
      <p>
        {!pins.some((pin) => !pin.assignedAbility)
          ? 'You have selected all the abilities.'
          : 'You have not selected all the abilities yet.'}
      </p>
      <ChoiceResolverButton
        choiceId={choice.id}
        selected={valueFilter(pins)}
        disabled={pins.some((pin) => !pin.assignedAbility)}
      />
    </>
  );
};

export default AbilityGroupResolver;
