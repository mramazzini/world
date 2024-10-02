import SearchPageComponent from "../SearchPage";

import { SubSpeciesInfo } from "@/lib/utils/types/types";

import { officialSources, species } from "@/lib/globalVars";
import { getSubSpeciesChunk } from "@/lib/actions/db/subSpecies/read.actions";

interface Props {
  subSpecies: SubSpeciesInfo[];
}
const SubSpeciesSearchPage = ({ subSpecies }: Props) => {
  return (
    <SearchPageComponent<SubSpeciesInfo>
      title="Subspecies"
      description="Subspecies are a slight variation of its base species, such as a Hill Dwarf or a Wood Elf. They provide additional abilities and features that differentiate your character from others."
      createText="Create a Subspecies ->"
      homebrewOfficialText="View Homebrew Subspecies ->"
      searchPlaceholder="Search Subspecies..."
      routeName="subspecies"
      handleSearch={getSubSpeciesChunk}
      staticInput={subSpecies}
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
          model: "subSpecies",
          alias: "Species",
          key: "name",
          modifiers: ["Button-Accent", "CapitalCase"],
          headerWidth: 5,
          priority: "all",
          options: species,
        },
      ]}
      homebrew={false}
    />
  );
};

export default SubSpeciesSearchPage;
