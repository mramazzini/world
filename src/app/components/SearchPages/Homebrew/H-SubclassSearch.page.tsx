"use client";

import { useState } from "react";
import { QueryParams, SubClassInfo } from "@/lib/types";
import SearchPageComponent from "../SearchPage";
import { getHomebrewSubclassChunk } from "@/lib/actions/db/subclass/read.actions";

interface Props {
  subclasses: SubClassInfo[];
}

const HomebrewSubclassSearchPage = ({ subclasses }: Props) => {
  return (
    <SearchPageComponent<SubClassInfo>
      title="Homebrew Subclasses"
      description="Subclasses created by the community. These are unnofficial and may be unbalanced. Ask your Dungeon Master before using them in your game."
      searchPlaceholder="Search Subclass..."
      handleSearch={getHomebrewSubclassChunk}
      staticInput={subclasses}
      table={[
        {
          headerWidth: 15,
          header: "Name",
          dbHeader: "name",
          modifiers: ["Button", "Bold"],
          index: 0,
          priority: "all",
        },
        {
          headerWidth: 50,
          header: "Description",
          dbHeader: "flavorText",
          index: 1,
          priority: "md",
        },

        {
          headerWidth: 5,
          header: "Last Updated",
          dbHeader: "updatedAt",
          modifiers: ["Date"],
          index: 4,
          priority: "sm",
        },
      ]}
      relationalFields={[
        {
          model: "Class",
          alias: "Class Name",
          key: "name",
          index: 2,
          headerWidth: 15,
          priority: "all",
        },
        {
          model: "User",
          alias: "Author",
          key: "username",
          index: 3,
          headerWidth: 5,
          priority: "all",
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
