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
      title="Racial Origin"
      description="Feats provide a unique set of abilities and traits to your character based on their heritage. They can provide additional skills, languages, and abilities. Select a Feat to view more information."
      createText="Create a Feat ->"
      homebrewOfficialText="View Homebrew Feats ->"
      searchPlaceholder="Search Feat..."
      routeName="feat"
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
