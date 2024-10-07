import { Fragment } from "react";
import { ClassInfo } from "@/lib/utils/types/types";
import Loading from "../../../UI/Loading";
import { Ability, AssociatedModel } from "@prisma/client";
import Link from "next/link";
import NewLineParse from "@/app/components/Utility/NewLineParse";
import ClassTable from "@/app/components/ClassInfo/ClassTable";
import P from "@/app/components/Utility/FormatAndSanitize";
import "@/lib/string.extensions";
import Info from "@/app/components/UI/Info";
import AbilityToText from "@/lib/utils/AbilityToText";
import JsonTable from "@/app/components/Utility/JsonTable";
import numPlace from "@/lib/utils/numPlace";
import {
  numberColor,
  numberColorBefore,
} from "@/app/components/Utility/colorBefore";
import FeatureList from "@/app/components/UI/FeatureList";
import Feature from "@/app/components/UI/Feature";
import CommentSection from "@/app/components/CommentSection/CommentSection";

const ClassPage = ({ classObj }: { classObj: ClassInfo | null }) => {
  if (!classObj) return <span className="p-4">Class does not exist</span>;
  const spellCastingFeatures = classObj.spellCastingInfo?.features.sort(
    (a, b) => {
      if (a.levels === undefined) return -1; // Put a first if its levels are undefined
      if (b.levels === undefined) return 1; // Put b first if its levels are undefined

      const minA = Math.min(...a.levels);
      const minB = Math.min(...b.levels);

      return minA - minB;
    }
  );
  const lvls = classObj.abilityScoreLevels.sort((a, b) => a - b);
  const regularFeatures = classObj.features
    .concat([
      {
        levels: classObj.abilityScoreLevels,
        name: "Ability Score Improvement",
        description: `When you reach ${numPlace(
          lvls[0]
        )} level, and again at ${lvls
          .map((l, i) => {
            if (i === 0) return;
            if (i === lvls.length - 1) return `and ${numPlace(l)} level,`;
            return numPlace(l);
          })
          .filter((l) => l !== undefined)
          .join(
            ", "
          )} you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.`,
      } as PrismaJson.Feature,
      {
        levels: classObj.subClassFeatureLevels,
        name: `Subclass: ${classObj.subClassName}`,
        description: classObj.subClassDescription,
        extendedTable: [
          {
            "": {
              headers: ["Subclass", "Description"],
              links: classObj.SubClasses.map((subClass) => {
                return `/subclass/${subClass.name.replaceAll(" ", "-")}`;
              }),
              data: classObj.SubClasses.map((subClass) => {
                return {
                  Subclass: subClass.name,
                  Description: subClass.flavorText,
                };
              }),
            },
          },
        ],
      },
    ])
    .sort((a, b) => {
      if (a.levels === undefined) return -1; // Put a first if its levels are undefined
      if (b.levels === undefined) return 1; // Put b first if its levels are undefined

      const minA = Math.min(...a.levels);
      const minB = Math.min(...b.levels);

      return minA - minB;
    });

  return (
    <main className="p-4 md:p-8">
      {!classObj && <Loading />}

      {classObj && (
        <>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:w-4/5">
              <h1>{classObj.name.toCapitalCase() || "Class Name"}</h1>
              <p className="italic pr-4">
                <NewLineParse>{classObj.description}</NewLineParse>
              </p>
              <p className="pt-4">
                Source:
                <span className="font-bold italic"> {classObj.source}</span>
              </p>
            </div>
            <div className="flex justify-start items-start md:items-end my-2 flex-col ">
              {/* go back */}
              <Link
                className={"btn btn-ghost border border-gray-500 w-full"}
                href={`/class`}
              >
                View all Classes -&gt;
              </Link>
            </div>
          </div>
          <div className="divider"></div>
          <p>
            <P>{classObj.multiclassingDescription}</P>
          </p>
          <div className="divider"></div>
          <div className="bg-base-300 p-4 rounded-xl ">
            <h2>
              {classObj.name.toCapitalCase()} Class Table{" "}
              <Info tooltip="The Class Table provides a general overview of what your class gains at each level." />
            </h2>
            <div className="divider m-0"></div>
            <ClassTable classObj={classObj} />
          </div>
          <div className="divider"></div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <h2 className="pb-0">
                Hitpoints{" "}
                <Info tooltip="Hitpoints determine how much damage your character is able to take. See also: Hit Dice" />
              </h2>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Hit Dice: </P>
                </span>
                <P>
                  1d{classObj.hitDie.toString()} per {classObj.name} level
                </P>
              </p>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Hit Points at 1st Level: </P>
                </span>
                <P>{classObj.hitDie.toString()} + your Constitution modifier</P>
              </p>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Hit Points at Higher Levels: </P>
                </span>
                <P>
                  1d{classObj.hitDie.toString()} (or{" "}
                  {(Math.ceil(classObj.hitDie / 2) + 1).toString()}) + your
                  Constitution modifier per {classObj.name} level after 1st
                </P>
              </p>
              <div className="divider m-0"></div>
            </div>
            <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <h2 className="pb-0">
                Proficiencies <Info tooltip="Proficient" />
              </h2>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Armor: </P>
                </span>
                <P>{classObj.armorDescription}</P>
              </p>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Weapons: </P>
                </span>
                <P>{classObj.weaponDescription}</P>
              </p>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Tools: </P>
                </span>
                <P>{classObj.toolsDescription}</P>
              </p>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Skills: </P>
                </span>
                <P>{classObj.skillChoiceDescription}</P>
              </p>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Saving Throws: </P>
                </span>
                <P>
                  {classObj.savingThrows?.default
                    ?.map((s) => AbilityToText(Ability[s]))
                    .join(", ") || "None"}
                </P>
              </p>
              <div className="divider m-0"></div>
            </div>
            <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <h2 className="pb-0">
                Equipment{" "}
                <Info tooltip="In addition to other items you gain from your background, your character can start with the following equipment." />
              </h2>
              <div className="divider m-0"></div>
              <ul>
                {classObj.equipmentDescription.map((item, index) => (
                  <Fragment key={index}>
                    <li>
                      <P>{item}</P>
                    </li>
                    <div className="divider m-0"></div>
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
          {classObj.spellCastingInfo && (
            <>
              <div className="divider"></div>
              <h2>
                Spellcasting{" "}
                <Info tooltip="This Class has the ability to cast spells, as described below." />
              </h2>{" "}
              <p className="text-base font-normal italic">
                <P>{classObj.spellCastingInfo.description}</P>
              </p>
              <div className="divider"></div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                  <h2 className="pb-0">
                    Spellcasting Ability{" "}
                    <Info tooltip="Your Spellcasting Ability determines which Ability Score your character utilizes to cast spells." />
                  </h2>
                  <div className="divider m-0"></div>
                  <p>
                    <P>
                      {classObj.spellCastingInfo.spellCastingAbilityDescription}
                    </P>
                  </p>
                  <div className="divider m-0"></div>
                  <p>
                    <span className="font-bold">
                      <P>Spellcasting Ability: </P>
                    </span>
                    <P>
                      {AbilityToText(
                        Ability[classObj.spellCastingInfo.ability]
                      )}
                    </P>
                  </p>
                  <div className="divider m-0"></div>

                  <p>
                    <span className="font-bold">
                      <P>Spell Save DC: </P>
                    </span>
                    <P>
                      8 + your proficiency bonus + your{" "}
                      {AbilityToText(
                        Ability[classObj.spellCastingInfo.ability]
                      )}{" "}
                      modifier
                    </P>
                  </p>
                  <div className="divider m-0"></div>
                  <p>
                    <span className="font-bold">
                      <P>Spell Attack Modifier: </P>
                    </span>
                    <P>
                      your proficiency bonus + your{" "}
                      {AbilityToText(
                        Ability[classObj.spellCastingInfo.ability]
                      )}{" "}
                      modifier
                    </P>
                  </p>
                  <div className="divider m-0"></div>
                </div>
                <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                  <h2 className="pb-0">
                    Spellcasting Focus{" "}
                    <Info tooltip="Spellcasting Focuses allow the spellcaster to cast spells more freely. It removes the need for material components that specify a cost." />
                  </h2>
                  <div className="divider m-0"></div>
                  <p>
                    <P>
                      You can use a {classObj.spellCastingInfo.spellFocus} as a
                      spellcasting focus for your {classObj.name} spells.
                    </P>
                  </p>

                  <div className="divider m-0"></div>
                  <div role="tablist" className="tabs tabs-bordered"></div>
                </div>
                {classObj.SpellList && (
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <h2 className="pb-0">
                      Spell List{" "}
                      <Info tooltip="The list of spells that this class can prepare and cast." />
                    </h2>
                    <div className="divider m-0"></div>
                    <p>
                      <P>
                        {classObj.spellListDescription ||
                          `The ${classObj.name} class can cast spells from the ${classObj.SpellList.name} Spell-list.`}
                      </P>
                      <Link
                        href={`/spell-list/${classObj.SpellList?.name.replaceAll(
                          " ",
                          "-"
                        )}`}
                        className="btn btn-primary btn-sm mx-4"
                      >
                        View Spell List -&gt;
                      </Link>
                    </p>

                    <div className="divider m-0"></div>
                    <div role="tablist" className="tabs tabs-bordered"></div>
                  </div>
                )}

                {classObj.spellCastingInfo.castingSpellsDescription && (
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <h2 className="pb-0">
                      Casting Spells{" "}
                      <Info tooltip="Every Class has a unique manner in which they cast spells." />
                    </h2>
                    <div className="divider m-0"></div>
                    <p>
                      <P>
                        {classObj.spellCastingInfo.castingSpellsDescription}
                      </P>
                    </p>
                    <div className="divider m-0"></div>
                  </div>
                )}
                {classObj.spellCastingInfo.preparingSpellsDescription && (
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <h2 className="pb-0">
                      Preparing Spells{" "}
                      <Info tooltip="Every class has a unique manner in which they prepare their spells." />
                    </h2>
                    <div className="divider m-0"></div>
                    <p>
                      <P>
                        {classObj.spellCastingInfo.preparingSpellsDescription}
                      </P>
                    </p>
                    <div className="divider m-0"></div>
                  </div>
                )}
                {spellCastingFeatures &&
                  spellCastingFeatures.map((feature, index) => (
                    <Feature key={index} feature={feature} />
                  ))}
              </div>
            </>
          )}
          <div className="divider"></div>
          <h2>
            Class Features <Info tooltip="Features" />
          </h2>
          <div className="divider"></div>
          <FeatureList features={regularFeatures} />
          <CommentSection id={classObj.id} model={AssociatedModel.CLASS} />
        </>
      )}
    </main>
  );
};

export default ClassPage;
