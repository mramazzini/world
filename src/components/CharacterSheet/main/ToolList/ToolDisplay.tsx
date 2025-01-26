import Loading from '@/components/UI/Loading';
import useLog from '@/hooks/useLog';
import useModifier from '@/hooks/useModifier';
import { ToolInfo } from '@/lib/types/modelInfo';
import AbilityToText from '@/lib/utils/toText/AbilityToText';
import Tooltip from '@/Utility/Tooltip';
import { Ability } from '@prisma/client';
import { useEffect, useMemo, useState } from 'react';
import useProficiencySelector from '@/hooks/useProficiencySelector';

const ToolDisplay = ({ tool }: { tool: ToolInfo }) => {
  const [selectedAbility, setSelectedAbility] = useState<Ability>(Ability.STR);
  const { getSkillModifier, getToolModifier } = useModifier();
  const { isProficientInTool } = useProficiencySelector();
  const [toolModifier, setToolModifier] = useState<number>(0);
  const [isProficient, setIsProficient] = useState(false);
  const [loading, setLoading] = useState(true);
  const { diceLogPush } = useLog();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const isProf = await isProficientInTool(tool.id);

      const mod = await getToolModifier(tool.id, selectedAbility);
      setIsProficient(isProf);
      setToolModifier(mod);
      setLoading(false);
    };
    getData();
  }, [tool.id, isProficientInTool, getToolModifier, selectedAbility]);

  const modifier = useMemo(() => {
    return toolModifier + (isProficient ? 2 : 0);
  }, [toolModifier, isProficient]);

  return (
    <div className="flex flex-col items-center border-primary border p-2 rounded-xl h-full w-64">
      <p>{tool.name}</p>
      <p className="text-xs">
        {isProficient ? (
          <span className="badge-success badge badge-xs font-bold p-2">
            Proficient
          </span>
        ) : (
          <span className="badge-error badge badge-xs font-bold p-2">
            Not Proficient
          </span>
        )}
      </p>
      <div className="divider m-0"></div>
      <div className="join mx-2 mt-1 ">
        <Tooltip
          element={
            <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
              i
            </span>
          }
        >
          Make an ability check with this tool. Select the ability score your GM
          tells you to roll with.
        </Tooltip>
        <select
          className="join-item w-32 select text-xs select-xs text-center font-bold"
          onChange={(e) =>
            setSelectedAbility(Ability[e.target.value as keyof typeof Ability])
          }
        >
          {Object.values(Ability).map((ability, index) => (
            <option key={index} value={ability}>
              {AbilityToText(ability)}
            </option>
          ))}
        </select>
        {loading ? (
          <Loading />
        ) : (
          <button
            className="btn btn-xs btn-accent join-item w-10"
            onClick={(e) => {
              e.preventDefault();
              diceLogPush(
                `1d20 + ${modifier}`,
                `${tool.name} ${AbilityToText(selectedAbility)} check`
              );
            }}
          >
            {modifier >= 0 ? `+ ${modifier}` : `- ${Math.abs(modifier)}`}
          </button>
        )}
      </div>
      {isProficient &&
        tool.skills.map((skill, index) => (
          <div className="join mx-2 mt-1" key={index}>
            <Tooltip
              title={skill.skill.toCapitalCase().replaceAll('_', ' ')}
              element={
                <span className=" bg-info text-info-content badge-lg badge p-2 flex justify-center items-center  join-item text-xs">
                  i
                </span>
              }
              additionalContent={
                <p>
                  <br />
                  {skill.description}
                </p>
              }
            >
              {`Because you are proficient in ${
                tool.name
              }, the following situation grants you advantage on ${skill.skill
                .toCapitalCase()
                .replaceAll('_', ' ')} checks.`}
            </Tooltip>
            <p
              className="badge join-item w-32 badge-lg text-xs font-bold whitespace-nowrap overflow-hidden text-ellipsis"
              key={index}
            >
              {skill.skill.toCapitalCase()} (Adv)
            </p>
            {loading ? (
              <Loading />
            ) : (
              <button
                className="btn btn-xs btn-accent join-item w-10"
                onClick={() => {
                  diceLogPush(
                    `1d20 + ${getSkillModifier(skill.skill)}`,
                    `${skill.skill.toCapitalCase().replaceAll('_', ' ')} Check (Advantage)`
                  );
                  diceLogPush(
                    `1d20 + ${getSkillModifier(skill.skill)}`,
                    `${skill.skill.toCapitalCase().replaceAll('_', ' ')} Check (Advantage)`
                  );
                }}
              >
                {getSkillModifier(skill.skill) >= 0
                  ? `+ ${getSkillModifier(skill.skill)}`
                  : `- ${getSkillModifier(skill.skill)}`}
              </button>
            )}
          </div>
        ))}
    </div>
  );
};

export default ToolDisplay;
