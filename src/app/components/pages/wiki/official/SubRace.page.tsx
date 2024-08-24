import { SubRaceInfo } from "@/lib/types";
import NewLineParse from "@/app/components/Utility/NewLineParse";
import Link from "next/link";
import Info from "@/app/components/UI/Info";
import P from "@/app/components/Utility/FormatAndSanitize";
import GenerateTable from "@/app/components/UI/GenerateTable";

interface Props {
  subRace: SubRaceInfo | null;
  weaponNames: string[];
}
import "@/lib/string.extensions";
import { arraysEqual } from "@/lib/utils/arraysEqual";
import { deepEqual } from "assert";
import { objEqual } from "@/lib/utils/deepEqual";
import JsonTable from "@/app/components/Utility/JsonTable";
const SubRacePage = ({ subRace, weaponNames }: Props) => {
  if (!subRace) return null;
  const race = subRace.BaseRace;

  interface Difference {
    age: TraitStatus;
    alignment: TraitStatus;
    size: TraitStatus;
    speed: TraitStatus;
    darkvision: TraitStatus;
    abilityScore: TraitStatus;
    languages: TraitStatus;
    weaponProficiencies: TraitStatus;
    toolProficiencies: TraitStatus;
  }
  enum TraitStatus {
    NEW = "NEW",
    REPLACED = "REPLACED",
    NONE = "NONE",
  }
  const calcDifference = (subRace: SubRaceInfo) => {
    const base = subRace.BaseRace;
    const sub = subRace;

    // returns an object indicating the status of each trait
    let diff: Difference = {
      age:
        base.age === null && sub.age !== null
          ? TraitStatus.NEW
          : base.age !== sub.age && sub.age !== null
          ? TraitStatus.REPLACED
          : TraitStatus.NONE,

      alignment:
        base.alignment === null && sub.alignment !== null
          ? TraitStatus.NEW
          : base.alignment !== sub.alignment && sub.alignment !== null
          ? TraitStatus.REPLACED
          : TraitStatus.NONE,

      size:
        base.size === null && sub.size !== null
          ? TraitStatus.NEW
          : base.size !== sub.size && sub.size !== null
          ? TraitStatus.REPLACED
          : TraitStatus.NONE,

      speed:
        base.speed === null && sub.speed !== null
          ? TraitStatus.NEW
          : base.speed !== sub.speed && sub.speed !== null
          ? TraitStatus.REPLACED
          : TraitStatus.NONE,

      darkvision:
        base.darkvision === null && sub.darkvision !== null
          ? TraitStatus.NEW
          : base.darkvision !== sub.darkvision && sub.darkvision !== null
          ? TraitStatus.REPLACED
          : TraitStatus.NONE,

      abilityScore:
        base.abilityScoreDescription === null &&
        sub.abilityScoreDescription !== null
          ? TraitStatus.NEW
          : base.abilityScoreDescription !== sub.abilityScoreDescription &&
            sub.abilityScoreDescription !== null
          ? TraitStatus.REPLACED
          : TraitStatus.NONE,

      languages:
        base.languageDescription === null && sub.languageDescription !== null
          ? TraitStatus.NEW
          : base.languageDescription !== sub.languageDescription &&
            sub.languageDescription !== null
          ? TraitStatus.REPLACED
          : TraitStatus.NONE,

      weaponProficiencies:
        base.weaponProficiencies.length == 0 &&
        sub.weaponProficiencies.length > 0
          ? TraitStatus.NEW
          : base.weaponProficiencies.length > 0 &&
            sub.weaponProficiencies.length == 0
          ? TraitStatus.NONE
          : !arraysEqual(sub.weaponProficiencies, base.weaponProficiencies)
          ? TraitStatus.REPLACED
          : TraitStatus.NONE,

      toolProficiencies:
        base.toolProficiencies === null && sub.toolProficiencies !== null
          ? TraitStatus.NEW
          : !objEqual(base.toolProficiencies, sub.toolProficiencies) &&
            sub.toolProficiencies !== null
          ? TraitStatus.REPLACED
          : TraitStatus.NONE,
    };

    return diff;
  };

  const difference = calcDifference(subRace);
  return (
    <main className="p-4 md:p-8">
      {subRace && (
        <>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:w-4/5">
              <h1>{subRace.name || "Class Name"}</h1>
              <p className="mb-4 font-bold">{race.name} Subrace</p>

              <p className="italic pr-4">
                <NewLineParse>
                  {subRace.description ||
                    "Your Class Description will go here."}
                </NewLineParse>
              </p>
              <p className="pt-4">
                Source:
                <span className="font-bold italic"> {subRace.source}</span>
              </p>
            </div>
            <div className="flex justify-start items-start md:items-end my-2 flex-col ">
              {/* go back */}
              <Link
                className={"btn btn-ghost border border-gray-500 w-full mb-2"}
                href={`/subrace`}
              >
                View all Subraces -&gt;
              </Link>
              <Link
                className={"btn btn-ghost border border-gray-500 w-full "}
                href={`/race/${race.name.replaceAll(" ", "-")}`}
              >
                See {race.name} Race -&gt;
              </Link>
            </div>
          </div>

          <div className="divider"></div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <h2 className="pb-0">
                What&apos;s new{" "}
                <Info tooltip="By selecting this subrace, you gain the following racial traits." />
              </h2>
              <div className="divider m-0"></div>
              <ul className="list-disc pl-4">
                {Object.entries(difference).map(([key, value], index) => {
                  if (value == TraitStatus.NEW) {
                    return <li key={index}>{key.camelToCapitalCase()}</li>;
                  }
                })}
                {subRace.RacialTraits.map((trait, index) => (
                  <li key={index}>{trait.name}</li>
                ))}
                {subRace.RacialTraits.length == 0 &&
                  Object.values(difference).every(
                    (val) => val == TraitStatus.NONE
                  ) && <li>None</li>}
              </ul>
            </div>
            <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <h2 className="pb-0">
                What&apos;s replaced{" "}
                <Info
                  tooltip={`By selecting this subrace, the following traits from your race are replaced.`}
                />
              </h2>
              <div className="divider m-0"></div>
              <ul className="list-disc pl-4">
                {Object.entries(difference).map(([key, value], index) => {
                  if (value == TraitStatus.REPLACED) {
                    return <li key={index}>{key.camelToCapitalCase()}</li>;
                  }
                })}
                {Object.values(difference).every(
                  (val) => val == TraitStatus.NONE
                ) && <li>None</li>}
              </ul>
            </div>
            <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <h2 className="pb-0">
                What&apos;s lost{" "}
                <Info
                  tooltip={`By selecting this subrace, the following traits from your race are lost`}
                />
              </h2>
              <div className="divider m-0"></div>

              <ul className="list-disc pl-4">
                {subRace.removedTraits.map((trait, index) => (
                  <li key={index}>{trait}</li>
                ))}
                {subRace.removedTraits.length == 0 && <li>None</li>}
              </ul>
              <ul className="list-disc pl-4"></ul>
            </div>
          </div>

          <div className="divider"></div>
          <h2 className="">Basic Traits</h2>
          <GenerateTable
            data={{
              "": {
                headers: ["Name", "Description"],
                headersLength: [15, 70],
                data: [
                  {
                    Name: "Age",
                    Description: subRace.age || race.age,
                  },
                  {
                    Name: "Alignment",
                    Description: subRace.alignment || race.alignment,
                  },
                  {
                    Name: "Size",
                    Description:
                      subRace.sizeDescription || race.sizeDescription || "N/A",
                  },
                  {
                    Name: "Speed",
                    Description: `Your base walking speed is ${
                      subRace.speed || race.speed
                    } ft.`,
                  },
                  {
                    Name: "Darkvision",
                    Description:
                      subRace.darkvisionDescription ||
                      race.darkvisionDescription ||
                      "None",
                  },
                ],
              },
            }}
          />
          <div className="divider"></div>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <h2 className="pb-0 flex justify-between flex-row items-center">
                <div>
                  Ability scores{" "}
                  <Info tooltip="Ability score improvements, or ASI, are numerical increases to your characters ability scores." />
                </div>
                {subRace.abilityScoreDescription !== null ? (
                  <div className="badge badge-accent">{subRace.name}</div>
                ) : (
                  <div className="badge badge-neutral">{race.name}</div>
                )}
              </h2>
              <div className="divider m-0"></div>
              {subRace.abilityScoreDescription || race.abilityScoreDescription}
            </div>
            <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <h2 className="pb-0 flex justify-between flex-row items-center">
                <div>
                  Languages{" "}
                  <Info
                    tooltip={`A character who is a ${subRace.name} is proficient in the following languages.`}
                  />{" "}
                </div>
                {subRace.languageDescription !== null ? (
                  <div className="badge badge-accent">{subRace.name}</div>
                ) : (
                  <div className="badge badge-neutral">{race.name}</div>
                )}
              </h2>
              <div className="divider m-0"></div>
              <p>{subRace.languageDescription || race.languageDescription}</p>
            </div>
            {weaponNames.length > 0 && (
              <div className="bg-base-200 rounded-xl p-4  max-w-1/3 ">
                <h2 className="pb-0 flex justify-between flex-row items-center">
                  <div>
                    Weapons{" "}
                    <Info
                      tooltip={`A character who is a ${subRace.name} has proficiency with the following weapons.`}
                    />
                  </div>
                  {subRace.weaponProficiencies.length > 0 ? (
                    <div className="badge badge-accent">{subRace.name}</div>
                  ) : (
                    <div className="badge badge-neutral">{race.name}</div>
                  )}
                </h2>
                <div className="divider m-0"></div>
                <ul className="list-disc pl-4">
                  {weaponNames.map((weapon, index) => (
                    <li key={index}>{weapon}</li>
                  ))}
                </ul>
              </div>
            )}
            {/* {race.toolProficiencies && (
              <div className="bg-base-200 rounded-xl p-4  max-w-1/3">
                <h2 className="pb-0">Tool Proficiencies</h2>
                <div className="divider m-0"></div>
              </div>
            )} */}
          </div>
          {/* traits */}
          <div className="divider"></div>
          <h2>
            Racial Traits{" "}
            <Info tooltip="Unique Abilities granted to your character due to its subrace." />
          </h2>
          <div className="divider"></div>
          {subRace.RacialTraits.length > 0 && (
            <>
              {subRace.RacialTraits.map((trait, index) => (
                <div key={index} className="bg-base-200 rounded-xl p-4 my-2">
                  <h3>
                    {trait.name}{" "}
                    <div className="badge badge-accent">{subRace.name}</div>
                  </h3>
                  <p>
                    <P>{trait.description}</P>
                  </p>
                  {trait.extendedTable.length > 0 && (
                    <div className="bg-base-300 mt-4">
                      <JsonTable json={trait.extendedTable} />
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
          {race.RacialTraits.map((trait, index) => (
            <div key={index} className="bg-base-200 rounded-xl p-4 my-2">
              <h3>
                {trait.name}{" "}
                <div className="badge badge-neutral">{race.name}</div>
              </h3>
              <p>
                <P>{trait.description}</P>
              </p>
              {trait.extendedTable.length > 0 && (
                <div className="bg-base-300 mt-4">
                  <JsonTable json={trait.extendedTable} />
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </main>
  );
};

export default SubRacePage;
