import { SpeciesInfo } from "@/lib/utils/types/types";
import Link from "next/link";
import NewLineParse from "@/app/components/Utility/NewLineParse";
import GenerateTable from "@/app/components/UI/GenerateTable";
import Info from "@/app/components/UI/Info";
import P from "@/app/components/Utility/FormatAndSanitize";
import JsonTable from "@/app/components/Utility/JsonTable";
import FeatureList from "@/app/components/UI/FeatureList";
import { AssociatedModel } from "@prisma/client";
import CommentSection from "@/app/components/CommentSection/CommentSection";

interface Props {
  species: SpeciesInfo | null;
}

const SpeciesPage = ({ species }: Props) => {
  return (
    <main className="p-4 md:p-8">
      {species && (
        <>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:w-4/5">
              <h1>{species.name || "Class Name"}</h1>
              <p className="italic pr-4">
                <NewLineParse>
                  {species.description ||
                    "Your Class Description will go here."}
                </NewLineParse>
              </p>
              <p className="pt-4">
                Source:
                <span className="font-bold italic"> {species.source}</span>
              </p>
            </div>
            <div className="flex justify-start items-start md:items-end my-2 flex-col ">
              {/* go back */}
              <Link
                className={"btn btn-ghost border border-gray-500 w-full"}
                href={`/species`}
              >
                View all Species -&gt;
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
                      Description: species.age,
                    },
                    {
                      Name: "Alignment",
                      Description: species.alignment,
                    },
                    {
                      Name: "Size",
                      Description: species.sizeDescription || species.size,
                    },
                    {
                      Name: "Speed",
                      Description: `Your base walking speed is ${species.speed} ft.`,
                    },
                    {
                      Name: "Darkvision",
                      Description: species.darkvisionDescription || "None",
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
                {species.abilityScoreDescription}
              </div>
              <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                <h2 className="pb-0">
                  Languages{" "}
                  <Info
                    tooltip={`A character who is a ${species.name} is proficient in the following languages.`}
                  />{" "}
                </h2>
                <div className="divider m-0"></div>
                <p>{species.languageDescription}</p>
              </div>
              {species.weaponProficiencyDescription !== null && (
                <div className="bg-base-200 rounded-xl p-4  max-w-1/3 ">
                  <h2 className="pb-0 flex justify-between flex-row items-center">
                    <div>
                      Weapons{" "}
                      <Info
                        tooltip={`A character who is a ${species.name} has proficiency with the following weapons.`}
                      />
                    </div>
                    {species.weaponProficiencyDescription !== null ? (
                      <div className="badge badge-accent">{species.name}</div>
                    ) : (
                      <div className="badge badge-neutral">{species.name}</div>
                    )}
                  </h2>
                  <div className="divider m-0"></div>
                  <p>{species.weaponProficiencyDescription || "None"}</p>
                </div>
              )}
            </div>
            <div className="divider mb-0"></div>
          </div>
          <div className="divider"></div>
          <FeatureList features={species.features} />
          <div className="divider"></div>
          {species.Variants.length > 0 && (
            <div className="bg-base-300 p-4 rounded-xl">
              <h2 className="pb-0">
                Subspecies{" "}
                <Info tooltip="Subspecies allow your character to more closely identify with a specific heritage. Your subspecies grants you a few extra species traits that further empower your character." />
              </h2>
              <div className="divider"></div>
              <div className="bg-base-100">
                <JsonTable
                  json={[
                    {
                      "": {
                        headers: ["Name", "Description", "Source"],
                        headersLength: [15, 70, 15],
                        links: species.Variants.map((variant) => {
                          return `/subspecies/${variant.name.replaceAll(
                            " ",
                            "-"
                          )}`;
                        }),
                        data: species.Variants.map((variant) => {
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
          )}
          <CommentSection id={species.id} model={AssociatedModel.SPECIES} />
        </>
      )}
    </main>
  );
};

export default SpeciesPage;
