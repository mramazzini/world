import Tooltip from '@/Utility/Tooltip';
import { skillAtritbuteMap } from '@/lib/globalVars';
import AbilityToText from '@/lib/utils/toText/AbilityToText';
import { Skill } from '@prisma/client';
import { Fragment } from 'react';
import useModifier from '@/hooks/useModifier';
import { useAppSelector } from '@/store/hooks';
import useProficiency from '@/hooks/useProficiency';

interface Props {
  handleRoll: (modifier: number, reason: string, diceSize: number) => void;
  skills: Skill[];
}

const SkillRoller = ({ handleRoll, skills }: Props) => {
  const { getSkillModifier, getAbilityModifier } = useModifier();
  const { proficiencyBonus } = useProficiency();
  const state = useAppSelector((state) => state.character.state);
  return (
    <>
      <div className="bg-base-300 p-2 rounded-xl border-primary border">
        <div className="flex flex-wrap justify-center items-center h-full">
          {Object.values(skills).map((skill, index) => (
            <Fragment key={index}>
              <div className="  col-span-4 flex flex-row items-center join m-1 ">
                <Tooltip
                  element={
                    <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
                      i
                    </span>
                  }
                  title={skill.toCapitalCase().replaceAll('_', ' ')}
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
                          {/* Three things - modifier - proficiency - expertise */}
                          <tr>
                            <td>{AbilityToText(skillAtritbuteMap[skill])}</td>
                            <td>
                              {getAbilityModifier(skillAtritbuteMap[skill]) >= 0
                                ? `+ ${getAbilityModifier(skillAtritbuteMap[skill])}`
                                : `- ${getAbilityModifier(skillAtritbuteMap[skill])}`}
                            </td>
                          </tr>
                          {state?.proficiencies.skills.includes(skill) && (
                            <tr>
                              <td>Proficient</td>
                              <td>{`+ ${proficiencyBonus}`}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  }
                >
                  {`Your ${skill
                    .toCapitalCase()
                    .replaceAll('_', ' ')} is defined by the following:`}
                </Tooltip>
                <p className="join-item bg-base-100 badge font-bold badge-lg w-32 text-xs whitespace-nowrap text-ellipsis">
                  {skill.toCapitalCase().replaceAll('_', ' ')}
                </p>
                <button
                  className="flex items-center justify-center join-item btn btn-accent btn-xs font-bold w-10"
                  onClick={() =>
                    handleRoll(
                      getSkillModifier(skill),
                      skill.toCapitalCase().replaceAll('_', ' '),
                      20
                    )
                  }
                >
                  {getSkillModifier(skill) >= 0
                    ? `+ ${getSkillModifier(skill)}`
                    : `- ${Math.abs(getSkillModifier(skill))}`}
                </button>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillRoller;
