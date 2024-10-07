import { SubSpeciesInfo } from "@/lib/utils/types/types";
import NewLineParse from "@/app/components/Utility/NewLineParse";
import Link from "next/link";
import Info from "@/app/components/UI/Info";
import P from "@/app/components/Utility/FormatAndSanitize";
import GenerateTable from "@/app/components/UI/GenerateTable";

interface Props {
  subSpecies: SubSpeciesInfo | null;
}
import "@/lib/string.extensions";

import { objEqual } from "@/lib/utils/deepEqual";
import JsonTable from "@/app/components/Utility/JsonTable";
import { AssociatedModel } from "@prisma/client";
import CommentSection from "@/app/components/CommentSection/CommentSection";
const SubSpeciesPage = ({ subSpecies }: Props) => {
  if (!subSpecies) return null;
  const species = subSpecies.species;

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
  const calcDifference = (subSpecies: SubSpeciesInfo) => {
    const base = subSpecies.species;
    const sub = subSpecies;

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
        base.weaponProficiencyDescription === null &&
        sub.weaponProficiencyDescription !== null
          ? TraitStatus.NEW
          : base.weaponProficiencyDescription !==
              sub.weaponProficiencyDescription &&
            sub.weaponProficiencyDescription !== null
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

  const difference = calcDifference(subSpecies);
  return (
    <main className="p-4 md:p-8">
      {subSpecies && (
        <>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:w-4/5">
              <h1>{subSpecies.name || "Class Name"}</h1>
              <p className="mb-4 font-bold">{species.name} Subspecies</p>

              <p className="italic pr-4">
                <NewLineParse>
                  {subSpecies.description ||
                    "Your Class Description will go here."}
                </NewLineParse>
              </p>
              <p className="pt-4">
                Source:
                <span className="font-bold italic"> {subSpecies.source}</span>
              </p>
            </div>
            <div className="flex justify-start items-start md:items-end my-2 flex-col ">
              {/* go back */}
              <Link
                className={"btn btn-ghost border border-gray-500 w-full mb-2"}
                href={`/subspecies`}
              >
                View all Subspecies -&gt;
              </Link>
              <Link
                className={"btn btn-ghost border border-gray-500 w-full "}
                href={`/species/${species.name.replaceAll(" ", "-")}`}
              >
                See {species.name} Species -&gt;
              </Link>
            </div>
          </div>

          <div className="divider"></div>
          <div className="bg-base-300 p-4 rounded-xl">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                <h2 className="pb-0">
                  What&apos;s new{" "}
                  <Info tooltip="By selecting this subspecies, you gain the following species traits." />
                </h2>
                <div className="divider m-0"></div>
                <ul className="list-disc pl-4">
                  {Object.entries(difference).map(([key, value], index) => {
                    if (value == TraitStatus.NEW) {
                      return <li key={index}>{key.camelToCapitalCase()}</li>;
                    }
                  })}
                  {subSpecies.features.map((trait, index) => (
                    <li key={index}>{trait.name}</li>
                  ))}
                  {subSpecies.features.length == 0 &&
                    Object.values(difference).every(
                      (val) => val == TraitStatus.NONE
                    ) && <li>None</li>}
                </ul>
              </div>
              <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                <h2 className="pb-0">
                  What&apos;s replaced{" "}
                  <Info
                    tooltip={`By selecting this subspecies, the following traits from your species are replaced.`}
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
                    tooltip={`By selecting this subspecies, the following traits from your species are lost`}
                  />
                </h2>
                <div className="divider m-0"></div>

                <ul className="list-disc pl-4">
                  {subSpecies.removedTraits.map((trait, index) => (
                    <li key={index}>{trait}</li>
                  ))}
                  {subSpecies.removedTraits.length == 0 && <li>None</li>}
                </ul>
                <ul className="list-disc pl-4"></ul>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="bg-base-300 p-4 rounded-xl">
            <h2 className="pb-0">Basic Traits</h2>
            <div className="divider"></div>
            <GenerateTable
              data={{
                "": {
                  headers: ["Name", "Description"],
                  headersLength: [15, 70],
                  data: [
                    {
                      Name: "Age",
                      Description: subSpecies.age || species.age,
                    },
                    {
                      Name: "Alignment",
                      Description: subSpecies.alignment || species.alignment,
                    },
                    {
                      Name: "Size",
                      Description:
                        subSpecies.sizeDescription ||
                        species.sizeDescription ||
                        "N/A",
                    },
                    {
                      Name: "Speed",
                      Description: `Your base walking speed is ${
                        subSpecies.speed || species.speed
                      } ft.`,
                    },
                    {
                      Name: "Darkvision",
                      Description:
                        subSpecies.darkvisionDescription ||
                        species.darkvisionDescription ||
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
                  {subSpecies.abilityScoreDescription !== null ? (
                    <div className="badge badge-accent">{subSpecies.name}</div>
                  ) : (
                    <div className="badge badge-neutral">{species.name}</div>
                  )}
                </h2>
                <div className="divider m-0"></div>
                {subSpecies.abilityScoreDescription ||
                  species.abilityScoreDescription}
              </div>
              <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                <h2 className="pb-0 flex justify-between flex-row items-center">
                  <div>
                    Languages{" "}
                    <Info
                      tooltip={`A character who is a ${subSpecies.name} is proficient in the following languages.`}
                    />{" "}
                  </div>
                  {subSpecies.languageDescription !== null ? (
                    <div className="badge badge-accent">{subSpecies.name}</div>
                  ) : (
                    <div className="badge badge-neutral">{species.name}</div>
                  )}
                </h2>
                <div className="divider m-0"></div>
                <p>
                  {subSpecies.languageDescription ||
                    species.languageDescription}
                </p>
              </div>
              {subSpecies.weaponProficiencyDescription !== null && (
                <div className="bg-base-200 rounded-xl p-4  max-w-1/3 ">
                  <h2 className="pb-0 flex justify-between flex-row items-center">
                    <div>
                      Weapons{" "}
                      <Info
                        tooltip={`A character who is a ${subSpecies.name} has proficiency with the following weapons.`}
                      />
                    </div>
                    {subSpecies.weaponProficiencyDescription !== null ? (
                      <div className="badge badge-accent">
                        {subSpecies.name}
                      </div>
                    ) : (
                      <div className="badge badge-neutral">{species.name}</div>
                    )}
                  </h2>
                  <div className="divider m-0"></div>
                  <p>{subSpecies.weaponProficiencyDescription || "None"}</p>
                </div>
              )}
            </div>

            <div className="divider mb-0"></div>
          </div>
          {/* traits */}
          <div className="divider"></div>
          <div className="bg-base-300 p-4 rounded-xl">
            <h2 className="pb-0">
              Species Traits{" "}
              <Info tooltip="Unique Abilities granted to your character due to its subspecies." />
            </h2>
            <div className="divider"></div>
            {subSpecies.features.length > 0 && (
              <>
                {subSpecies.features.map((trait, index) => (
                  <div key={index} className="bg-base-200 rounded-xl p-4 my-2">
                    <h3>
                      {trait.name}{" "}
                      <div className="badge badge-accent">
                        {subSpecies.name}
                      </div>
                    </h3>
                    <div className="divider m-0"></div>
                    <p>
                      <P>{trait.description}</P>
                    </p>
                    {trait.extendedTable && trait.extendedTable.length > 0 && (
                      <div className="bg-base-300 mt-4">
                        <JsonTable json={trait.extendedTable} />
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
            {species.features.map(
              (trait, index) =>
                !subSpecies.removedTraits.includes(trait.name) && (
                  <div key={index} className="bg-base-200 rounded-xl p-4 my-2">
                    <h3>
                      {trait.name}{" "}
                      <div className="badge badge-neutral">{species.name}</div>
                    </h3>
                    <div className="divider m-0"></div>
                    <p>
                      <P>{trait.description}</P>
                    </p>
                    {trait.extendedTable && trait.extendedTable.length > 0 && (
                      <div className="bg-base-300 mt-4">
                        <JsonTable json={trait.extendedTable} />
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
          <CommentSection
            id={subSpecies.id}
            model={AssociatedModel.SUBSPECIES}
          />
        </>
      )}
    </main>
  );
};

export default SubSpeciesPage;
