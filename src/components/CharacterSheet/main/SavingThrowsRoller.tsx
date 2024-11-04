import { AbilityToModifier } from '@/Utility/characterStateFunctions/calc/AbilityToModifier';
import Tooltip from '@/Utility/Tooltip';
import AbilityToText from '@/lib/utils/AbilityToText';
import { Ability } from '@prisma/client';
import { CharacterInfo } from '@/lib/types/modelInfo';
import { useMemo } from 'react';
import { calcProficiency } from '@/Utility/characterStateFunctions/calc/calcProficiency';
import { calculateLevel } from '@/Utility/characterStateFunctions/calc/calcLevel';

interface Props {
  character: CharacterInfo;
  handleRoll: (modifier: number, reason: string) => void;
}

const SavingThrowsRoller = ({ character, handleRoll }: Props) => {
  const proficencyBonus = useMemo(() => {
    return (
      (character.state && calcProficiency(calculateLevel(character.state))) || 2
    );
  }, [character]);
  return (
    <>
      {' '}
      <div className="border border-primary rounded-xl bg-base-300 flex flex-col items-center p-2 h-full">
        <h2 className=" text-center badge badge-neutral mb-1 ">
          Saving Throws
        </h2>
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
                            {character.state &&
                            AbilityToModifier(
                              character.state.abilityScores[ability]
                            ) >= 0
                              ? `+ ${AbilityToModifier(
                                  character.state.abilityScores[ability]
                                )}`
                              : `- ${
                                  character.state &&
                                  Math.abs(
                                    AbilityToModifier(
                                      character.state.abilityScores[ability]
                                    )
                                  )
                                }`}
                          </td>
                        </tr>
                        {/* proficient */}
                        {character.state?.proficiencies.savingThrows.includes(
                          ability
                        ) && (
                          <tr>
                            <td>Proficient</td>
                            <td>
                              {character.state &&
                              character.state.proficiencies.savingThrows.includes(
                                ability
                              )
                                ? `+ ${proficencyBonus}`
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
                onClick={() =>
                  character.state &&
                  handleRoll(
                    AbilityToModifier(character.state.abilityScores[ability]) +
                      (character.state.proficiencies.savingThrows.includes(
                        ability
                      )
                        ? proficencyBonus
                        : 0),
                    ` ${AbilityToText(ability)} Saving Throw`
                  )
                }
              >
                {character.state &&
                AbilityToModifier(character.state.abilityScores[ability]) +
                  (character.state.proficiencies.savingThrows.includes(ability)
                    ? proficencyBonus
                    : 0) >=
                  0
                  ? `+ ${
                      AbilityToModifier(
                        character.state.abilityScores[ability]
                      ) +
                      (character.state.proficiencies.savingThrows.includes(
                        ability
                      )
                        ? proficencyBonus
                        : 0)
                    }`
                  : `- ${
                      character.state &&
                      Math.abs(
                        AbilityToModifier(
                          character.state.abilityScores[ability]
                        ) +
                          (character.state.proficiencies.savingThrows.includes(
                            ability
                          )
                            ? proficencyBonus
                            : 0)
                      )
                    }`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SavingThrowsRoller;
