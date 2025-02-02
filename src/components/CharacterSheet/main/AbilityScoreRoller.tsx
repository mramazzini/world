import AbilityToText from '@/lib/utils/toText/AbilityToText';
import { Ability } from '@prisma/client';
import useModifier from '@/hooks/useModifier';
import useLog from '@/hooks/useLog';
import { useAppSelector } from '@/store/hooks';

const AbilityScoreRoller = () => {
  const abilityScores = useAppSelector((state) => state.sheet.abilityScores);
  const { getAbilityModifier } = useModifier();

  const { diceLogPush } = useLog();

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center w-full">
      {Object.values(Ability).map((ability) => {
        const modifier = getAbilityModifier(ability);
        return (
          <div className="indicator " key={ability}>
            {/* <Tooltip
            element={
              <span className="indicator-item badge badge-info badge-sm p-2 flex justify-center items-center z-[1] ">
                i
              </span>
            }
            title={AbilityToText(key)}
            additionalContent={
              <div className="bg-base-200 text-base-content">
                <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                  <thead>
                    <tr className="bg-black/30">
                      <th>Reason</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    {character.state?.abilityScoreReasons[key as Ability]?.map(
                      (reason, index) => (
                        <tr key={index}>
                          <td>{reason.reason}</td>
                          <td>{reason.effect}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            }
          >
            {`Your ${AbilityToText(key)} is defined by the following:`}
          </Tooltip> */}
            <div key={ability} className="flex flex-col justify-center">
              <div className="rounded-t-xl px-2 pt-2 font-bold text-center border-primary text-xs border-t border-x w-24">
                {AbilityToText(ability)}
              </div>
              <div className="divider px-2 m-0 border-x border-primary"></div>
              <div className="px-2 text-center border-x text-xl font-bold border-primary flex items-center justify-center">
                <button
                  className="btn btn-xs btn-accent"
                  onClick={() =>
                    diceLogPush(
                      `1d20 + ${ability}`,
                      `${AbilityToText(ability)} Check`
                    )
                  }
                >
                  {modifier >= 0 ? `+ ${modifier}` : `- ${Math.abs(modifier)}`}
                </button>
              </div>
              <div className="divider px-2 m-0 border-x border-primary"></div>
              <div className="rounded-b-xl px-2 pb-2 text-center border-primary text-xs border-b border-x font-bold">
                {abilityScores[ability]}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AbilityScoreRoller;
