import { Spell, SpellSchool } from "@prisma/client";
import SearchPageComponent from "../SearchPageComponent";
import { SpellInfo } from "@/lib/types";
import { getSpellChunk } from "@/lib/actions/db/spell/read.actions";

const spellSchoolOptions = Object.values(SpellSchool);

interface Props {
  spells: SpellInfo[];
}

const SelectSpellPage = ({ spells }: Props) => {
  return (
    <SearchPageComponent<Spell>
      title="Spells"
      description="Spells are magical effects that can be cast by characters. They can be used to heal, harm, or manipulate the world around them. Select a spell to view more information."
      createText="Create a Spell ->"
      homebrewOfficialText="View Homebrew Spells ->"
      searchPlaceholder="Search Spell..."
      routeName="spells"
      handleSearch={getSpellChunk}
      staticInput={spells}
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
          headerWidth: 10,
          header: "Spell Level",
          dbHeader: "level",
          modifiers: ["SpellLevel"],
          searchFields: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          index: 1,
          priority: "all",
        },
        {
          headerWidth: 10,
          header: "Range",
          dbHeader: "range",
          index: 2,
          priority: "lg",
        },
        {
          headerWidth: 10,
          header: "Cast Time",
          dbHeader: "castingTime",
          searchFields: [
            "action",
            "bonus action",
            "reaction",
            "minute",
            "hour",
          ],
          includeOther: true,
          index: 3,
          priority: "lg",
        },
        {
          headerWidth: 10,
          header: "Spell School",
          dbHeader: "school",
          modifiers: ["CapitalCase"],
          searchFields: spellSchoolOptions,
          enum: true,
          index: 4,
          priority: "all",
        },
        {
          headerWidth: 5,
          header: "Last Updated",
          dbHeader: "updatedAt",
          modifiers: ["Date"],
          index: 5,
          priority: "md",
        },
      ]}
      homebrew={false}
    />
  );
};

export default SelectSpellPage;
