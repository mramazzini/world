import SearchPageComponent from "../SearchPage";

import { useState } from "react";
import { SpellListInfo, QueryParams } from "@/lib/types";
import { SpellList } from "@prisma/client";
import { getSpellListChunk } from "@/lib/actions/db/spellList/read.actions";
import { officialSources } from "@/lib/globalVars";
interface Props {
  spellLists: SpellListInfo[];
}
const SpellListSearchPage = ({ spellLists }: Props) => {
  return (
    <SearchPageComponent<SpellListInfo>
      title="SpellLists"
      description="SpellLists provide a list of spells that can be used by spellcasters. They can be used to create a spellbook or to prepare spells for the day. Select a SpellList to view more information."
      createText="Create a SpellList ->"
      homebrewOfficialText="View Homebrew SpellLists ->"
      searchPlaceholder="Search SpellList..."
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
