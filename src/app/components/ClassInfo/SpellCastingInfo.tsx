"use client";
import AbilityToText from "@/lib/utils/AbilityToText";
import numPlace from "@/lib/utils/numPlace";
import { CasterType, Class } from "@prisma/client";
import Link from "next/link";
import P from "../Utility/FormatAndSanitize";

interface Props {
  classObj: Class;
  casterType: CasterType;
}
const SpellCastingInfo = ({ classObj, casterType }: Props) => {
  return (
    <>
      <div className="divider" />
      <h2>
        Spellcasting
        <Link
          className="text-blue-500 underline text-sm ml-2 hover:text-blue-700"
          href="/rules/spellcasting"
        >
          Spellcasting Rules -&gt;
        </Link>
      </h2>
      <div className="divider" />
      <h3 className="font-bold">
        Spellcasting Ability:{" "}
        {AbilityToText(classObj.spellCastingAbility || "None")}
      </h3>
      <div className="p-4">
        <p>
          <P>
            You use {AbilityToText(classObj.spellCastingAbility || "None")} as
            your spellcasting ability for your {classObj.name} spells. This
            impacts the following:{" "}
          </P>
        </p>

        <p className="p-4">
          <span className="font-bold">
            <P>Spell Save DC: </P>
          </span>
          <P>
            8 + your proficiency bonus + your{" "}
            {AbilityToText(classObj.spellCastingAbility || "None")} modifier
          </P>
          <br />
          <span className="font-bold">
            <P>Spell Attack Modifier: </P>
          </span>
          <P>
            your proficiency bonus + your{" "}
            {AbilityToText(classObj.spellCastingAbility || "None")} modifier
          </P>
          <br />
        </p>
      </div>
      {classObj.cantripsKnown && (
        <>
          <h3 className="font-bold">Cantrips</h3>
          <p className="p-4">
            <P>
              At {numPlace(classObj.cantripsKnown)} level you know a certain
              amount of cantrips from the {classObj.name} spell list as dictated
              in the Cantrips known Column of the{" "}
              {classObj.name.toCapitalCase()} table. The number of cantrips
              increases each level.
            </P>
          </p>
        </>
      )}
      {classObj.spellsKnown && (
        <>
          <h3 className="font-bold">Spells Known</h3>
          <p className="p-4">
            <P>
              Each level you know a certain amount of spells from the{" "}
              {classObj.name} spell list as dictated in the Spells Known Column
              of the {classObj.name.toCapitalCase()} table. The number of spells
              increases each level.
            </P>
          </p>
        </>
      )}
      {classObj.ritualCaster && (
        <>
          <h3 className="font-bold">Ritual Casting</h3>
          <p className="p-4">
            <P>
              You can cast any {classObj.name} spell you know as a ritual if it
              has the ritual tag.{" "}
              {classObj.ritualSpellPrepared
                ? "You must have the spell prepared."
                : "You don't need to have the spell prepared."}
            </P>
          </p>
        </>
      )}
      {classObj.spellFocus && (
        <>
          <h3 className="font-bold">Spellcasting Focus</h3>
          <p className="p-4">
            <P>
              You can use a {classObj.spellFocus.toLowerCase()} as a
              spellcasting focus for your {classObj.name} spells.
            </P>
          </p>
        </>
      )}

      {(classObj.prepareSpellInfo || classObj.spellCastingInfo) && (
        <>
          <h3 className="font-bold">Casting and Preparing Spells</h3>
          {classObj.spellCastingInfo && (
            <p className="p-4">
              <P>{classObj.spellCastingInfo}</P>
            </p>
          )}
          {classObj.prepareSpellInfo && (
            <p className="p-4">
              <P>{classObj.prepareSpellInfo}</P>
            </p>
          )}
        </>
      )}
    </>
  );
};

export default SpellCastingInfo;
