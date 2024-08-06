"use client";

import { useState } from "react";
import { ClassInfo } from "@/lib/types";
import SearchPageComponent from "../../SearchPageComponent";
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
      tableHeaders={["Name", "Description", "Source", "Last Updated"]}
      headerSizes={[15, 50, 10, 5]}
      dataHeaders={["name", "flavorText", "source", "updatedAt"]}
      routeName="class"
      createText="Create a Class ->"
      homebrewOfficialText="View Official Classes ->"
      homebrew={true}
    />
  );
};

export default HomebrewClassSearchPage;
