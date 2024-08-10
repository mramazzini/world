"use client";

import { useState } from "react";
import { QueryParams, SubClassInfo } from "@/lib/types";
import SearchPageComponent from "../SearchPageComponent";
import { getHomebrewSubclassChunk } from "@/lib/actions/db/subclass/read.actions";

const HomebrewSubclassSearchPage = () => {
  const [data, setData] = useState<SubClassInfo[] | null>(null);

  const handleSearch = async (query: QueryParams) => {
    setData(null);
    const res = await getHomebrewSubclassChunk(query);
    setData(res);
    console.log(res);
    return res ? res.length : 0;
  };

  return (
    <SearchPageComponent<SubClassInfo>
      title="Homebrew Subclasses"
      description="Subclasses created by the community. These are unnofficial and may be unbalanced. Ask your Dungeon Master before using them in your game."
      searchPlaceholder="Search Subclass..."
      handleSearch={handleSearch}
      data={data}
      table={[
        {
          headerWidth: 15,
          header: "Name",
          dbHeader: "name",
          modifiers: ["Link", "Bold"],
        },
        {
          headerWidth: 50,
          header: "Description",
          dbHeader: "flavorText",
        },
        {
          headerWidth: 10,
          header: "Author",
          dbHeader: "userId",
        },
        {
          headerWidth: 5,
          header: "Last Updated",
          dbHeader: "updatedAt",
          modifiers: ["Date"],
        },
      ]}
      relationalFields={[
        {
          model: "Class",
          alias: "Class Name",
          key: "name",
        },
        {
          model: "User",
          alias: "Author",
          key: "username",
        },
      ]}
      routeName="subclass"
      createText="Create a Subclass ->"
      homebrewOfficialText="View Official Subclasses ->"
      homebrew={true}
    />
  );
};

export default HomebrewSubclassSearchPage;
