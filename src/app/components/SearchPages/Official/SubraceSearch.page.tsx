import SearchPageComponent from "../SearchPage";

import { SubRaceInfo } from "@/lib/types";

import { officialSources } from "@/lib/globalVars";
import { getSubRaceChunk } from "@/lib/actions/db/subrace/get.actions";
import { Size } from "@prisma/client";
interface Props {
  subRaces: SubRaceInfo[];
}
const SubRaceSearchPage = ({ subRaces }: Props) => {
  return (
    <SearchPageComponent<SubRaceInfo>
      title="Subraces"
      description="Subraces are a slight variation of its base race, such as a Hill Dwarf or a Wood Elf. They provide additional abilities and features that differentiate your character from others."
      createText="Create a Subrace ->"
      homebrewOfficialText="View Homebrew Subraces ->"
      searchPlaceholder="Search Subrace..."
      routeName="subrace"
      handleSearch={getSubRaceChunk}
      staticInput={subRaces}
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
          searchFields: officialSources,
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

export default SubRaceSearchPage;
