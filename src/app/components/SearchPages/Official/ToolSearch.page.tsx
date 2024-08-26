import SearchPageComponent from "../SearchPage";

import { useState } from "react";
import { ToolInfo, QueryParams } from "@/lib/types";
import { Tool } from "@prisma/client";
import { getToolChunk } from "@/lib/actions/db/tool/read.actions";
import { officialSources } from "@/lib/globalVars";
interface Props {
  tools: ToolInfo[];
}
const ToolSearchPage = ({ tools }: Props) => {
  return (
    <SearchPageComponent<ToolInfo>
      title="Tools"
      description="Tools are items that can be used to perform certain specialized task. They can be used to craft items, repair items, or even to gather information. Proficiency with a tool allows you to add your proficiency bonus to any ability check you make using that tool. Tools also grant advantage on certain skill checks."
      createText="Create a Tool ->"
      homebrewOfficialText="View Homebrew Tools ->"
      searchPlaceholder="Search Tool..."
      routeName="tool"
      handleSearch={getToolChunk}
      staticInput={tools}
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
          headerWidth: 2,
          header: "Last Updated",
          dbHeader: "updatedAt",
          modifiers: ["Date"],
          index: 2,
          priority: "md",
        },
      ]}
      homebrew={false}
    />
  );
};

export default ToolSearchPage;
