import SearchPageComponent from "../SearchPage";

import { RaceInfo, QueryParams } from "@/lib/utils/types/types";

import { getRaceChunk } from "@/lib/actions/db/race/get.actions";
import { officialSources } from "@/lib/globalVars";
interface Props {
  races: RaceInfo[];
}
const RaceSearchPage = ({ races }: Props) => {
  return (
    <SearchPageComponent<RaceInfo>
      title="Racial Origin"
      description="Races provide a unique set of abilities and traits to your character based on their heritage. They can provide additional skills, languages, and abilities. Select a Race to view more information."
      createText="Create a Race ->"
      homebrewOfficialText="View Homebrew Races ->"
      searchPlaceholder="Search Race..."
      routeName="race"
      handleSearch={getRaceChunk}
      staticInput={races}
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

export default RaceSearchPage;
