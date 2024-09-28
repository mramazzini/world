import { BackgroundInfo } from "@/lib/utils/types/types";
import Loading from "../../../UI/Loading";
import Link from "next/link";
import P from "../../../Utility/FormatAndSanitize";
import "@/lib/string.extensions";
import { languages, skills } from "@/lib/globalVars";
import { arraysEqual } from "@/lib/utils/arraysEqual";

import Info from "../../../UI/Info";
import NewLineParse from "../../../Utility/NewLineParse";
import FeatureList from "@/app/components/UI/FeatureList";
import { Fragment } from "react";
import DieTable from "@/app/components/UI/DieTable";
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
                href={`/background`}
              >
                View all Backgrounds -&gt;
              </Link>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            <div className="bg-base-200 rounded-xl p-4 max-w-1/2">
              <h2 className="pb-0">
                Proficiencies <Info tooltip="Proficient" />
              </h2>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Tools: </P>
                </span>
                <P>{background.toolProficiencyDescription || "None"}</P>
              </p>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Skills: </P>
                </span>
                <P>{background.skillProficiencyDescription || "None"}</P>
              </p>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Languages: </P>
                </span>
                <P>{background.languageProficiencyDescription || "None"}</P>
              </p>
              <div className="divider m-0"></div>
            </div>
            <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <h2 className="pb-0">
                Equipment{" "}
                <Info tooltip="In addition to other items you gain from your class, your character can start with the following equipment." />
              </h2>
              <div className="divider m-0"></div>
              <ul>
                {background.equipmentDescription.map((item, index) => (
                  <Fragment key={index}>
                    <li>
                      - <P>{item}</P>
                    </li>
                    <div className="divider m-0"></div>
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>

          <div className="divider"></div>
          <h2>
            Background Features{" "}
            <Info tooltip="Abilities that your background grants your character." />
          </h2>
          <div className="divider"> </div>
          <FeatureList features={background.features} />
          <div className="divider"></div>
          {background.suggestedCharacteristics && (
            <>
              <h2>
                Suggested Characteristics{" "}
                <Info tooltip="Ideas for how to roleplay your character." />
              </h2>
              <p className="italic">{background.suggestedCharacteristics}</p>
              <div className="divider"></div>
              {background.traits && (
                <>
                  <DieTable
                    data={background.traits}
                    title="Traits"
                    resultString="Trait"
                  />
                  <div className="divider"></div>
                </>
              )}
              {background.ideals && (
                <>
                  <DieTable
                    data={background.ideals}
                    title="Ideals"
                    resultString="Ideal"
                  />
                  <div className="divider"></div>
                </>
              )}
              {background.bonds && (
                <>
                  <DieTable
                    data={background.bonds}
                    title="Bonds"
                    resultString="Bond"
                  />
                  <div className="divider"></div>
                </>
              )}
              {background.flaws && (
                <>
                  <DieTable
                    data={background.flaws}
                    title="Flaws"
                    resultString="Flaw"
                  />
                  <div className="divider"></div>
                </>
              )}
            </>
          )}
        </>
      )}
    </main>
  );
};

export default BackgroundPage;
