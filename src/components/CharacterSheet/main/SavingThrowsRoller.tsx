import Tooltip from '@/Utility/Tooltip';
import AbilityToText from '@/lib/utils/toText/AbilityToText';
import { Ability } from '@prisma/client';
import useModifier from '@/hooks/useModifier';
import useProficiency from '@/hooks/useProficiency';
import useLog from '@/hooks/useLog';

const SavingThrowsRoller = () => {
  const { getAbilityModifier, getSavingThrowModifier } = useModifier();
  const { proficiencyBonus, isProficientInSavingThrow } = useProficiency();
  const { diceLogPush } = useLog();
  return (
    <div className="border border-primary rounded-xl bg-base-300 flex flex-col items-center p-2 h-full">
      <h2 className=" text-center badge badge-neutral mb-1 ">Saving Throws</h2>
      <div className="flex flex-wrap justify-center items-center h-full">
        {Object.values(Ability).map((ability, index) => (
          <div
            key={index}
            className="col-span-4 flex flex-row items-center join m-1"
          >
            <Tooltip
              element={
                <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
                  i
                </span>
              }
              title={AbilityToText(ability)}
              additionalContent={
                <div className="bg-base-200 text-base-content">
                  <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                    <thead>
                      <tr className="bg-black/30">
                        <th>Reason</th>
                        <th>Effect</th>
                      </tr>
                    </thead>
                    {/* ability modifier */}
                    <tbody>
                      <tr>
                        <td>{AbilityToText(ability)}</td>
                        <td>
                          {getAbilityModifier(ability) >= 0
                            ? `+ ${getAbilityModifier(ability)}`
                            : `- ${Math.abs(getAbilityModifier(ability))}`}
                        </td>
                      </tr>
                      {/* proficient */}
                      {isProficientInSavingThrow(ability) && (
                        <tr>
                          <td>Proficient</td>
                          <td>
                            {isProficientInSavingThrow(ability)
                              ? `+ ${proficiencyBonus}`
                              : ''}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              }
            >
              {`Your ${AbilityToText(
                ability
              )} saving throws are defined by the following:`}
            </Tooltip>
            <p className="join-item bg-base-100 badge font-bold badge-lg w-32 text-xs">
              {AbilityToText(ability)}
            </p>
            <button
              className="flex items-center justify-center join-item btn btn-accent btn-xs font-bold w-10"
              onClick={(e) => {
                e.preventDefault();
                diceLogPush(
                  `1d20 + ${getSavingThrowModifier(ability)}`,
                  `${AbilityToText(ability)} Saving Throw`
                );
              }}
            >
              {getSavingThrowModifier(ability) >= 0
                ? `+ ${getSavingThrowModifier(ability)}`
                : `- ${Math.abs(getSavingThrowModifier(ability))}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavingThrowsRoller;
