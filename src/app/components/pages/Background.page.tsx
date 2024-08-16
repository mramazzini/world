"use client";
import { BackgroundInfo } from "@/lib/types";
import Loading from "../UI/Loading";
import Link from "next/link";
import P from "../Utility/FormatAndSanitize";
import "@/lib/string.extensions";
import { languages, skills } from "@/lib/globalVars";
import { arraysEqual } from "@/lib/utils/arraysEqual";
import Tooltip from "../Utility/Tooltip";
import Info from "../UI/Info";
import JsonTable from "../Utility/JsonTable";
import NewLineParse from "../Utility/NewLineParse";
interface Props {
  background: BackgroundInfo | null;
}
const BackgroundPage = ({ background }: Props) => {
  return (
    <main className="p-4 md:p-8">
      {!background && <Loading />}
      {background && (
        <>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:w-4/5">
              <h1>{background.name.toCapitalCase() || "Class Name"}</h1>
              <p className="italic pr-4">
                <NewLineParse>
                  {background.description ||
                    "Your Class Description will go here."}
                </NewLineParse>
              </p>
              <p className="pt-4">
                Source:
                <span className="font-bold italic"> {background.source}</span>
              </p>
            </div>
            <div className="flex justify-start items-start md:items-end my-2 flex-col ">
              {/* go back */}
              <Link
                className={"btn btn-ghost border border-gray-500 w-full"}
                href={`/class`}
              >
                View all Backgrounds -&gt;
              </Link>
            </div>
          </div>
          <div className="divider"></div>
          <h2>Proficiencies</h2>
          <div className="py-2">
            <p>
              <span className="font-bold">
                <P>Skill Proficiencies: </P>
              </span>
              {arraysEqual(background.skillProficiencies, skills) ? (
                <span>Pick any {background.skillChoiceCount} skills</span>
              ) : (
                <span>
                  <P>
                    Pick {background.skillChoiceCount.toString()} skills from:{" "}
                    {background.skillProficiencies
                      .map((s) => s.toCapitalCase())
                      .join(", ")
                      .replaceAll("_", " ") || "None"}
                  </P>
                </span>
              )}
            </p>
            <p>
              <span className="font-bold">
                <P>Tool Proficiencies: </P>
              </span>
              {background.toolProficiencies
                .map((t) => t.toCapitalCase())
                .join(", ") || "None"}
            </p>
            <p>
              <span className="font-bold">
                <P>Languages: </P>
              </span>

              {background.languageChoiceCount == 0 ? (
                <span>None</span>
              ) : arraysEqual(background.languages, languages) ? (
                <span>Pick any {background.languageChoiceCount} languages</span>
              ) : (
                <span>
                  Pick {background.languageChoiceCount} languages from:{" "}
                  {background.languages
                    .map((l) => l.toCapitalCase().replaceAll("_", " "))
                    .join(", ") || "None"}
                </span>
              )}
            </p>
          </div>
          <h2>Equipment</h2>
          <ul className="p-4">
            {background.equipment.map((item, index) => (
              <li className="list-disc" key={index}>
                {item.toCapitalCase()}
              </li>
            ))}
          </ul>
          <div className="divider"></div>
          <h2>
            Background Features{" "}
            <Info tooltip="Abilities that your background grants your character." />
          </h2>
          <div className="divider"> </div>
          <ul>
            {background.Features.map((feature, index) => (
              <li key={index}>
                <h3>{feature.name.toCapitalCase()}</h3>
                <p>
                  <P>{feature.description}</P>
                </p>
                {feature.options.length > 0 && (
                  <>
                    <ul className="list-disc p-2">
                      {feature.options.map((option, index) => (
                        <li key={index} className="m-4">
                          {option}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {feature.extendedTable && (
                  <JsonTable json={feature.extendedTable} />
                )}
                <div className="divider"></div>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default BackgroundPage;
