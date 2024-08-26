import SearchPageComponent from "../SearchPage";

import { SubRaceInfo } from "@/lib/types";

import { officialSources } from "@/lib/globalVars";
import { getSubRaceChunk } from "@/lib/actions/db/subrace/read.actions";

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
          index: 3,
          priority: "md",
        },
        {
          headerWidth: 2,
          header: "Last Updated",
          dbHeader: "updatedAt",
          modifiers: ["Date"],
          index: 4,
          priority: "md",
        },
      ]}
      relationalFields={[
        {
          index: 2,
          model: "BaseRace",
          alias: "Race",
          key: "name",
          modifiers: ["Button-Accent", "CapitalCase"],
          headerWidth: 5,
          priority: "all",
        },
      ]}
      homebrew={false}
    />
  );
};

export default SubRaceSearchPage;
