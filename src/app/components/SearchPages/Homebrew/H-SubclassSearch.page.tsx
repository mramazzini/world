"use client";

import { useState } from "react";
import { SubClassInfo } from "@/lib/types";
import SearchPageComponent from "../../SearchPageComponent";
import { getHomebrewSubclassChunk } from "@/lib/actions/db/subclass/read.actions";

const HomebrewSubclassSearchPage = () => {
  const [data, setData] = useState<SubClassInfo[] | null>(null);

  const handleSearch = async (index: number, query: string) => {
    setData(null);
    const res = await getHomebrewSubclassChunk(index, query);
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
      tableHeaders={["Name", "Description", "Source", "Last Updated"]}
      headerSizes={[15, 50, 10, 5]}
      dataHeaders={["name", "flavorText", "userId", "updatedAt"]}
      routeName="subclass"
      createText="Create a Subclass ->"
      homebrewOfficialText="View Official Subclasses ->"
      homebrew={true}
    />
  );
};

export default HomebrewSubclassSearchPage;
