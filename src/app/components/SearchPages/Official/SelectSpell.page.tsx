"use client";

import { Spell } from "@prisma/client";
import SearchPageComponent from "../SearchPageComponent";
import { getSpellChunk } from "@/lib/actions/db/spell/read.actions";
import { useState } from "react";
import { SpellInfo } from "@/lib/types";
const SelectSpellPage = () => {
  const [data, setData] = useState<SpellInfo[] | null>(null);

  const handleSearch = async (index: number, query: string) => {
    setData(null);
    const res = await getSpellChunk(index, query);
    setData(res);
    console.log(res, index, query);
    return res ? res.length : 0;
  };
  return (
    <SearchPageComponent<Spell>
      title="Spells"
      description="Search for Spells in DND."
      createText="Create a Spell ->"
      homebrewOfficialText="View Homebrew Spells ->"
      searchPlaceholder="Search Spell..."
      routeName="spells"
      data={data}
      handleSearch={handleSearch}
      table={[
        {
          headerWidth: 15,
          header: "Name",
          dbHeader: "name",
          modifiers: ["Bold", "Link"],
        },
        {
          headerWidth: 10,
          header: "Spell Level",
          dbHeader: "level",
          modifiers: ["SpellLevel"],
        },
        {
          headerWidth: 10,
          header: "Range",
          dbHeader: "range",
        },
        {
          headerWidth: 10,
          header: "Cast Time",
          dbHeader: "castingTime",
        },
        {
          headerWidth: 10,
          header: "Spell School",
          dbHeader: "school",
          modifiers: ["CapitalCase"],
        },
        {
          headerWidth: 5,
          header: "Last Updated",
          dbHeader: "updatedAt",
          modifiers: ["Date"],
        },
      ]}
      homebrew={false}
    />
  );
};

export default SelectSpellPage;
