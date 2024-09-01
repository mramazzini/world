import { RaceInfo } from "@/lib/types";
import Link from "next/link";
import NewLineParse from "@/app/components/Utility/NewLineParse";
import GenerateTable from "@/app/components/UI/GenerateTable";
import Info from "@/app/components/UI/Info";
import P from "@/app/components/Utility/FormatAndSanitize";
import JsonTable from "@/app/components/Utility/JsonTable";

interface Props {
  race: RaceInfo | null;
  weaponNames: string[];
}

const RacePage = ({ race, weaponNames }: Props) => {
  return (
    <main className="p-4 md:p-8">
      {race && (
        <>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:w-4/5">
              <h1>{race.name || "Class Name"}</h1>
              <p className="italic pr-4">
                <NewLineParse>
                  {race.description || "Your Class Description will go here."}
                </NewLineParse>
              </p>
              <p className="pt-4">
                Source:
                <span className="font-bold italic"> {race.source}</span>
              </p>
            </div>
            <div className="flex justify-start items-start md:items-end my-2 flex-col ">
              {/* go back */}
              <Link
                className={"btn btn-ghost border border-gray-500 w-full"}
                href={`/race`}
              >
                View all Races -&gt;
              </Link>
            </div>
          </div>
          <div className="divider"></div>
          <div className="bg-base-300 p-4 rounded-xl">
            <h2 className="pb-0">Basic Traits</h2>
            <div className="divider "></div>
            <GenerateTable
              data={{
                "": {
                  headers: ["Name", "Description"],
                  headersLength: [15, 70],
                  data: [
                    {
                      Name: "Age",
                      Description: race.age,
                    },
                    {
                      Name: "Alignment",
                      Description: race.alignment,
                    },
                    {
                      Name: "Size",
                      Description: race.sizeDescription || race.size,
                    },
                    {
                      Name: "Speed",
                      Description: `Your base walking speed is ${race.speed} ft.`,
                    },
                    {
                      Name: "Darkvision",
                      Description: race.darkvisionDescription || "None",
                    },
                  ],
                },
              }}
            />
            <div className="divider"></div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                <h2 className="pb-0">
                  Ability scores{" "}
                  <Info tooltip="Ability score improvements, or ASI, are numerical increases to your characters ability scores." />
                </h2>
                <div className="divider m-0"></div>
                {race.abilityScoreDescription}
              </div>
              <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                <h2 className="pb-0">
                  Languages{" "}
                  <Info
                    tooltip={`A character who is a ${race.name} is proficient in the following languages.`}
                  />{" "}
                </h2>
                <div className="divider m-0"></div>
                <p>{race.languageDescription}</p>
              </div>
              {weaponNames.length > 0 && (
                <div className="bg-base-200 rounded-xl p-4  max-w-1/3 ">
                  <h2 className="pb-0">
                    Weapons{" "}
                    <Info
                      tooltip={`A character who is a ${race.name} has proficiency with the following weapons.`}
                    />
                  </h2>
                  <div className="divider m-0"></div>
                  <ul className="list-disc pl-4">
                    {weaponNames.map((weapon, index) => (
                      <li key={index}>{weapon}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="divider mb-0"></div>
          </div>
          <div className="divider"></div>
          {/* traits */}

          {race.RacialTraits.length > 0 && (
            <>
              <div className="bg-base-300 p-4 rounded-xl">
                <h2 className="pb-0">
                  Racial Traits{" "}
                  <Info tooltip="Unique Abilities granted to your character due to its race." />
                </h2>
                <div className="divider"></div>
                {race.RacialTraits.map((trait, index) => (
                  <div key={index} className="bg-base-200 rounded-xl p-4 my-2">
                    <h3>{trait.name}</h3>
                    <p>
                      <P>{trait.description}</P>
                    </p>{" "}
                    {trait.extendedTable.length > 0 && (
                      <div className="bg-base-300 mt-4">
                        <JsonTable json={trait.extendedTable} />
                      </div>
                    )}
                  </div>
                ))}
                <div className="divider mb-0"></div>
              </div>
              <div className="divider"></div>
            </>
          )}
          <div className="bg-base-300 p-4 rounded-xl">
            <h2 className="pb-0">
              Subraces{" "}
              <Info tooltip="Subraces allow your character to more closely identify with a specific heritage. Your subrace grants you a few extra racial traits that further empower your character." />
            </h2>
            <div className="divider"></div>
            <div className="bg-base-100">
              <JsonTable
                json={[
                  {
                    "": {
                      headers: ["Name", "Description", "Source"],
                      headersLength: [15, 70, 15],
                      links: race.Variants.map((variant) => {
                        return `/subrace/${variant.name.replaceAll(" ", "-")}`;
                      }),
                      data: race.Variants.map((variant) => {
                        return {
                          Name: variant.name,
                          Description: variant.flavorText,
                          Source: variant.source,
                        };
                      }),
                    },
                  },
                ]}
              />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default RacePage;
