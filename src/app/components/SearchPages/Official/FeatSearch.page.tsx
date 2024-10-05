import SearchPageComponent from "../SearchPage";

import { FeatInfo, QueryParams } from "@/lib/utils/types/types";

import { getFeatChunk } from "@/lib/actions/db/feat/read.actions";
import { officialSources } from "@/lib/globalVars";
interface Props {
  feats: FeatInfo[];
}
const FeatSearchPage = ({ feats }: Props) => {
  return (
    <SearchPageComponent<FeatInfo>
      title="Feats"
      description="Feats can be claimed by characters to give them special abilities. Whenever a character gains a level that grants them an Ability Score Improvement, they can choose to take a Feat instead."
      createText="Create a Feat ->"
      homebrewOfficialText="View Homebrew Feats ->"
      searchPlaceholder="Search Feat..."
      routeName="feats"
      handleSearch={getFeatChunk}
      staticInput={feats}
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

export default FeatSearchPage;
