"use client";

import { useState } from "react";
import { ClassInfo } from "@/lib/types";
import SearchPageComponent from "../SearchPageComponent";
import { getHomebrewClassChunk } from "@/lib/actions/db/class/read.actions";

const HomebrewClassSearchPage = () => {
  const [data, setData] = useState<ClassInfo[] | null>(null);

  const handleSearch = async (index: number, query: string) => {
    setData(null);
    const res = await getHomebrewClassChunk(index, query);
    setData(res);
    console.log(res);
    return res ? res.length : 0;
  };

  return (
    <SearchPageComponent<ClassInfo>
      title="Homebrew Classes"
      description="Classes created by the community. These are unnofficial and may be unbalanced. Ask your Dungeon Master before using them in your game."
      searchPlaceholder="Search Class..."
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
          header: "Source",
          dbHeader: "userId",
        },
        {
          headerWidth: 5,
          header: "Last Updated",
          dbHeader: "updatedAt",
          modifiers: ["Date"],
        },
      ]}
      routeName="class"
      createText="Create a Class ->"
      homebrewOfficialText="View Official Classes ->"
      homebrew={true}
    />
  );
};

export default HomebrewClassSearchPage;
