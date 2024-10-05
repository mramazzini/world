import SearchPageComponent from "../SearchPage";

import { useState } from "react";
import { SpellListInfo, QueryParams } from "@/lib/utils/types/types";
import { SpellList } from "@prisma/client";
import { getSpellListChunk } from "@/lib/actions/db/spellList/read.actions";
import { officialSources } from "@/lib/globalVars";
interface Props {
  spellLists: SpellListInfo[];
}
const SpellListSearchPage = ({ spellLists }: Props) => {
  return (
    <SearchPageComponent<SpellListInfo>
      title="Spell Lists"
      description="Spell Lists provide a list of spells that can be used by spellcasters. Each spell list is associated to a class that has a Spellcasting Feature. They can be used to create a spellbook or to prepare spells for the day. Select a Spell List to view more information."
      createText="Create a Spell List ->"
      homebrewOfficialText="View Homebrew SpellLists ->"
      searchPlaceholder="Search Spell Lists..."
      routeName="spell-list"
      handleSearch={getSpellListChunk}
      staticInput={spellLists}
      table={[
        {
          headerWidth: 15,
          header: "Name",
          dbHeader: "name",
          modifiers: ["Bold", "Button"],
          index: 0,
          priority: "all",
        },
        {
          headerWidth: 100,
          header: "Description",
          dbHeader: "flavorText",
          modifiers: ["Italic"],
          index: 1,
          priority: "all",
        },

        {
          headerWidth: 2,
          header: "Last Updated",
          dbHeader: "updatedAt",
          modifiers: ["Date"],
          index: 2,
          priority: "md",
        },
      ]}
      homebrew={false}
    />
  );
};

export default SpellListSearchPage;
