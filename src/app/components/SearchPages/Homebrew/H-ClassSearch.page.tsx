"use client";

import { useState } from "react";
import { ClassInfo, QueryParams } from "@/lib/utils/types/types";
import SearchPageComponent from "../SearchPage";
import { getHomebrewClassChunk } from "@/lib/actions/db/class/read.actions";

const HomebrewClassSearchPage = ({ classes }: { classes: ClassInfo[] }) => {
  return (
    <SearchPageComponent<ClassInfo>
      title="Homebrew Classes"
      description="Classes created by the community. These are unnofficial and may be unbalanced. Ask your Dungeon Master before using them in your game."
      searchPlaceholder="Search Class..."
      staticInput={classes}
      handleSearch={getHomebrewClassChunk}
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
          index: 3,
          priority: "all",
        },
      ]}
      relationalFields={[
        {
          model: "User",
          alias: "Author",
          key: "username",
          index: 2,
          headerWidth: 10,
          priority: "all",
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
