import { Fragment, useState } from 'react';
import ChoiceResolverButton from '../../ChoiceResolverButton';
import { ImproveAbilityScoreOutput } from '@/lib/types/protocols';
import { Ability, Choice } from '@prisma/client';
import AbilityToText from '@/lib/utils/toText/AbilityToText';

interface AbilityGroupResolverProps {
  choice: Choice;
  abilitiesToChooseFrom: string[];
  increaseAmounts: number[];
}

const AbilityGroupResolver = ({
  choice,
  abilitiesToChooseFrom,
  increaseAmounts,
}: AbilityGroupResolverProps) => {
  const [selected, setSelected] = useState<ImproveAbilityScoreOutput>([]);
  const [increaseAmountsRemaining, setIncreaseAmountsRemaining] =
    useState<number[]>(increaseAmounts);

  const handleSelect = (ability: Ability, increase: number) => {
    const newSelected = selected.filter((s) => s.ability !== ability);
    newSelected.push({ ability, value: increase });
    setSelected(newSelected);
    const index = increaseAmountsRemaining.findIndex((i) => i === increase);
    const newIncreaseAmountsRemaining = [...increaseAmountsRemaining];
    newIncreaseAmountsRemaining.splice(index, 1);
    setIncreaseAmountsRemaining(newIncreaseAmountsRemaining);
  };
  console.log(selected);

  return (
    <div className="bg-base-300 border border-gray-500 p-4 rounded-xl">
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
      {Object.values(abilitiesToChooseFrom).map((ability, index) => {
        return (
          <Fragment key={ability}>
            <div className="divider"></div>

            <h3>{ability}</h3>
            {selected.map((s) => {
              if (s.ability !== ability) return null;
              return (
                <p>
                  You have selected to increase {AbilityToText(ability)} by{' '}
                  {selected.map((s) => {
                    return (
                      <span
                        key={s.ability}
                        className="badge badge-primary mr-2"
                      >
                        + {s.value}
                      </span>
                    );
                  })}
                </p>
              );
            })}
            <ul className="flex flex-col gap-2">
              {Object.values(increaseAmountsRemaining).map(
                (increase, index) => (
                  <li key={`${ability}-${index}`} className="">
                    <button
                      className="btn btn-xs btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSelect(ability as Ability, increase);
                      }}
                    >
                      {AbilityToText(ability)} +{increase}
                    </button>
                  </li>
                )
              )}
            </ul>
          </Fragment>
        );
      })}
      <ChoiceResolverButton
        choiceId={choice.id}
        selected={selected}
        disabled={selected.length !== choice.amountOfOptionToChoose}
      />
    </div>
  );
};

export default AbilityGroupResolver;
