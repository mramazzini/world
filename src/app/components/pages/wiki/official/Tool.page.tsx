import Info from "@/app/components/UI/Info";
import Loading from "@/app/components/UI/Loading";
import P from "@/app/components/Utility/FormatAndSanitize";
import NewLineParse from "@/app/components/Utility/NewLineParse";
import { parseUnit } from "@/app/components/Utility/parseUnit";
import { ToolInfo } from "@/lib/types";
import Link from "next/link";

interface Props {
  tool: ToolInfo | null;
}

const ToolPage = ({ tool }: Props) => {
  return (
    <main className="p-4 md:p-8">
      {!tool && <Loading />}
      {tool && (
        <>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:w-4/5">
              <h1>{tool.name}</h1>
              <p className="italic pr-4">
                <NewLineParse>{tool.description}</NewLineParse>
              </p>
              <p className="pt-4">
                Price:{" "}
                <span className="font-bold italic">{parseUnit(tool.cost)}</span>
                {" - "}
                Weight:{" "}
                <span className="font-bold italic">
                  {parseUnit(tool.weight)}
                </span>
              </p>
            </div>
            <div className="flex justify-start items-start md:items-end my-2 flex-col ">
              {/* go back */}
              <Link
                className={"btn btn-ghost border border-gray-500 w-full"}
                href={`/tool`}
              >
                View all Tools -&gt;
              </Link>
            </div>
          </div>{" "}
          <div className="divider"></div>
          <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
            <h2>
              Components{" "}
              <Info
                tooltip={`Included within this tool, you gain the following items. These represent the tool in question.`}
              />
            </h2>
            <div className="divider m-0"></div>
            <ul className="list-disc pl-4">
              {tool.components.map((component, index) => (
                <li key={index}>{component} </li>
              ))}
            </ul>
          </div>
          <div className="divider"></div>
          <h2>
            Skill Checks{" "}
            <Info
              tooltip={`When a character is proficient in ${tool.name}, certain situations will grant advantage on skill checks.`}
            />
          </h2>
          <div className="divider"></div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <h2 className="pb-0">
                Ability scores{" "}
                <Info tooltip="Ability score improvements, or ASI, are numerical increases to your characters ability scores." />
              </h2>
              <div className="divider m-0"></div>
              {race.abilityScoreDescription}
            </div> */}
            {tool.skills.map((skill, index) => (
              <div key={index} className="bg-base-200 rounded-xl p-4 max-w-1/3">
                <h2 className="pb-0">
                  {skill.skill.toCapitalCase()}{" "}
                  <Info
                    tooltip={`You situationally gain advantage on ${skill.skill.toCapitalCase()} checks when you are proficient with ${
                      tool.name
                    }. The description below describes when you would gain advantage.`}
                  />
                </h2>
                <div className="divider m-0"></div>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
          <div className="divider"></div>
          <h2>
            Additional Abilities{" "}
            <Info tooltip="When you are proficient in some tools, they grant you additional abilities that your able to do." />
          </h2>
          <div className="divider"></div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {tool.features.map((ability, index) => (
              <div key={index} className="bg-base-200 rounded-xl p-4 max-w-1/3">
                <h2 className="pb-0">
                  {ability.name.toCapitalCase()}{" "}
                  <Info
                    tooltip={`When you are proficient with ${tool.name}, you gain the following ability.`}
                  />
                </h2>
                <div className="divider m-0"></div>
                <p>
                  <P>{ability.description}</P>
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default ToolPage;
