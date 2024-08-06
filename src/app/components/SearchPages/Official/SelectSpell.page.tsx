"use client";

import { Spell } from "@prisma/client";
import SearchPageComponent from "../../SearchPageComponent";

const data = [
  {
    name: "Fireball",
    description: "A ball of fire",
    source: "PHB",
    updatedAt: new Date(),
  },
  {
    name: "Magic Missile",
    description: "A missile of magic",
    source: "PHB",
    updatedAt: new Date(),
  },
] as Spell[];

const SelectSpellPage = () => {
  const handleSearch = async (index: number, query: string) => {
    return 0;
  };
  return (
    <SearchPageComponent<Spell>
      title="Spells"
      description="Search for Spells in DND."
      createText="Create a Spell ->"
      homebrewOfficialText="View Homebrew Spells ->"
      searchPlaceholder="Search Spell..."
      routeName="spells"
      data={data}
      handleSearch={handleSearch}
      tableHeaders={["Name", "Description", "Source", "Last Updated"]}
      dataHeaders={["name", "description", "source", "updatedAt"]}
      headerSizes={[15, 50, 10, 5]}
      homebrew={false}
    />
  );
};

export default SelectSpellPage;
