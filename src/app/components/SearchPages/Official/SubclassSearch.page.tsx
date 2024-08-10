"use client";

import { getSubclassChunk } from "@/lib/actions/db/subclass/read.actions";
import { useState } from "react";
import { QueryParams, SubclassSearchResults } from "@/lib/types";
import SearchPageComponent from "../SearchPageComponent";
import { officialSources } from "@/lib/globalVars";

const SubclassSearchPage = () => {
  const [data, setData] = useState<SubclassSearchResults[] | null>(null);

  const handleSearch = async (query: QueryParams) => {
    setData(null);
    const res = await getSubclassChunk(query);
    setData(res);

    return res ? res.length : 0;
  };

  return (
    <SearchPageComponent<SubclassSearchResults>
      title="Subclasses"
      description="Select a subclass to view more information. Subclasses are additional class options that provide more customization to your character. They provide additional abilities and features that differentiate your character from others of the same class."
      searchPlaceholder="Search Subclass..."
      handleSearch={handleSearch}
      data={data}
      table={[
        {
          headerWidth: 15,
          header: "Name",
          dbHeader: "name",
          modifiers: ["Link", "Bold"],
          index: 0,
        },
        {
          headerWidth: 50,
          header: "Description",
          dbHeader: "flavorText",
          index: 1,
        },
        {
          headerWidth: 10,
          header: "Source",
          dbHeader: "source",
          searchFields: officialSources,
          index: 3,
        },
        {
          headerWidth: 5,
          header: "Last Updated",
          dbHeader: "updatedAt",
          modifiers: ["Date"],
          index: 4,
        },
      ]}
      relationalFields={[
        {
          index: 2,
          model: "Class",
          alias: "Class",
          key: "name",
          modifiers: ["Link", "CapitalCase", "Bold"],
          headerWidth: 5,
        },
      ]}
      routeName="subclass"
      createText="Create a Subclass ->"
      homebrewOfficialText="View Homebrew Subclasses ->"
      homebrew={false}
    />
  );
};

export default SubclassSearchPage;
