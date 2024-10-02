import SearchPageComponent from "../SearchPage";

import { SpeciesInfo, QueryParams } from "@/lib/utils/types/types";

import { getSpeciesChunk } from "@/lib/actions/db/species/get.actions";
import { officialSources } from "@/lib/globalVars";
interface Props {
  species: SpeciesInfo[];
}
const SpeciesSearchPage = ({ species }: Props) => {
  return (
    <SearchPageComponent<SpeciesInfo>
      title="Species"
      description="Species provide a unique set of abilities and traits to your character based on their heritage. They can provide additional skills, languages, and abilities. Select a Species to view more information."
      createText="Create a Species ->"
      homebrewOfficialText="View Homebrew Species ->"
      searchPlaceholder="Search Species..."
      routeName="species"
      handleSearch={getSpeciesChunk}
      staticInput={species}
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

export default SpeciesSearchPage;
