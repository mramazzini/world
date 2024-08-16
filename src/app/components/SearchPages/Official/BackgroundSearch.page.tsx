"use client";

import SearchPageComponent from "../SearchPageComponent";

import { useState } from "react";
import { BackgroundInfo, QueryParams } from "@/lib/types";
import { Background } from "@prisma/client";
import { getBackgroundChunk } from "@/lib/actions/db/background/read.actions";

const BackgroundSearchPage = () => {
  const [data, setData] = useState<BackgroundInfo[] | null>(null);

  const handleSearch = async (query: QueryParams) => {
    setData(null);
    const res = await getBackgroundChunk(query);
    setData(res);
    console.log(res);
    return res ? res.length : 0;
  };
  return (
    <SearchPageComponent<Background>
      title="Backgrounds"
      description="Backgrounds provide additional flavor and roleplaying opportunities for characters. They can provide additional skills, languages, and equipment. Select a background to view more information."
      createText="Create a Background ->"
      homebrewOfficialText="View Homebrew Backgrounds ->"
      searchPlaceholder="Search Background..."
      routeName="background"
      data={data}
      handleSearch={handleSearch}
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
          headerWidth: 10,
          dbHeader: "source",
          header: "Source",
          modifiers: [],
          index: 2,
          priority: "md",
        },
        {
          headerWidth: 2,
          header: "Last Updated",
          dbHeader: "updatedAt",
          modifiers: ["Date"],
          index: 3,
          priority: "md",
        },
      ]}
      homebrew={false}
    />
  );
};

export default BackgroundSearchPage;
