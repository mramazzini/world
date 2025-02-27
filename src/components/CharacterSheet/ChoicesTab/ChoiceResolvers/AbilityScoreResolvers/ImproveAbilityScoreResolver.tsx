import {
  ImproveAbilityScoreOutput,
  ImproveAbilityScoreParams,
} from '@/lib/types/protocols';
import { Ability, Choice } from '@prisma/client';
import AbilityGroupResolver, { AbilityPinner } from './AbilityGroupResolver';
import { v4 } from 'uuid';
import { Fragment, useCallback } from 'react';

const ImproveAbilityScoreResolver = ({ choice }: { choice: Choice }) => {
  const params = choice.fetchParams as ImproveAbilityScoreParams;

  const transformPins = useCallback(
    (pin: AbilityPinner[]): ImproveAbilityScoreOutput => {
      return pin.map((p) => {
        return {
          ability: p.assignedAbility as Ability,
          value: p.value,
        };
      });
    },
    []
  );

  return (
    <div>
      <h3>Ability Score Improvement</h3>
      <p>Select your ability score improvements.</p>
      <div className="divider"></div>
      <div className="flex flex-col gap-4">
        {params.map((p, index) => {
          if (index !== params.length - 1) {
            return (
              <Fragment key={v4()}>
                <div className="bg-base-300 rounded-xl border border-gray-500 p-4">
                  <AbilityGroupResolver
                    abilitiesToChooseFrom={p.abilitiesToIncrease}
                    increaseAmounts={p.increaseValues}
                    choice={choice}
                    valueFilter={transformPins}
                  />
                </div>
                <div className="divider">OR</div>
              </Fragment>
            );
          }
          return (
            <div
              className="bg-base-300 rounded-xl border border-gray-500 p-4"
              key={v4()}
            >
              <AbilityGroupResolver
                abilitiesToChooseFrom={p.abilitiesToIncrease}
                increaseAmounts={p.increaseValues}
                choice={choice}
                valueFilter={transformPins}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImproveAbilityScoreResolver;
