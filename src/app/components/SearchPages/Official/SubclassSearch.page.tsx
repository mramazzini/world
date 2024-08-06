"use client";

import { getSubclassChunk } from "@/lib/actions/db/subclass/read.actions";
import { useState } from "react";
import { SubclassSearchResults } from "@/lib/types";
import SearchPageComponent from "../SearchPageComponent";

const SubclassSearchPage = () => {
  const [data, setData] = useState<SubclassSearchResults[] | null>(null);

  const handleSearch = async (index: number, query: string) => {
    setData(null);
    const res = await getSubclassChunk(index, query);
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
        },
        {
          headerWidth: 50,
          header: "Description",
          dbHeader: "flavorText",
        },
        {
          headerWidth: 10,
          header: "Source",
          dbHeader: "source",
        },
        {
          headerWidth: 5,
          header: "Last Updated",
          dbHeader: "updatedAt",
          modifiers: ["Date"],
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
