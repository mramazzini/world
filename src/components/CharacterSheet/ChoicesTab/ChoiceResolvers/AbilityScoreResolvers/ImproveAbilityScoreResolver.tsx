import { ImproveAbilityScoreParams } from '@/lib/types/protocols';
import { Choice } from '@prisma/client';
import AbilityGroupResolver from './AbilityGroupResolver';

const ImproveAbilityScoreResolver = ({ choice }: { choice: Choice }) => {
  const params = choice.fetchParams as ImproveAbilityScoreParams;
  return (
    <div>
      <h3>Ability Score Improvement</h3>
      <p>Select your ability score improvements.</p>
      <div className="divider"></div>
      <div className="flex flex-col gap-4">
        {params.map((p, index) => {
          return (
            <AbilityGroupResolver
              key={index}
              abilitiesToChooseFrom={p.abilitiesToIncrease}
              increaseAmounts={p.increaseValues}
              choice={choice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImproveAbilityScoreResolver;
