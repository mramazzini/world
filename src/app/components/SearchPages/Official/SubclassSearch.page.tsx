import { QueryParams, SubClassInfo, SubclassSearchResults } from "@/lib/types";
import SearchPageComponent from "../SearchPageComponent";
import { officialSources } from "@/lib/globalVars";
import { getSubclassChunk } from "@/lib/actions/db/subclass/query.actions";

interface Props {
  subclasses: SubClassInfo[];
}
const SubclassSearchPage = ({ subclasses }: Props) => {
  return (
    <SearchPageComponent<SubClassInfo>
      title="Subclasses"
      description="Select a subclass to view more information. Subclasses are additional class options that provide more customization to your character. They provide additional abilities and features that differentiate your character from others of the same class."
      searchPlaceholder="Search Subclass..."
      staticInput={subclasses}
      handleSearch={getSubclassChunk}
      table={[
        {
          headerWidth: 15,
          header: "Name",
          dbHeader: "name",
          modifiers: ["Button"],
          index: 0,
          priority: "all",
        },
        {
          headerWidth: 50,
          header: "Description",
          dbHeader: "flavorText",
          index: 1,
          priority: "md",
        },
        {
          headerWidth: 10,
          header: "Source",
          dbHeader: "source",
          searchFields: officialSources,
          index: 3,
          priority: "all",
        },
        {
          headerWidth: 5,
          header: "Last Updated",
          dbHeader: "updatedAt",
          modifiers: ["Date"],
          index: 4,
          priority: "sm",
        },
      ]}
      relationalFields={[
        {
          index: 2,
          model: "Class",
          alias: "Class",
          key: "name",
          modifiers: ["Button", "CapitalCase"],
          headerWidth: 5,
          priority: "all",
        },
      ]}
      routeName="subclass"
      createText="Create a Subclass ->"
      homebrewOfficialText="View Homebrew Subclasses ->"
      homebrew={false}
    />
  );
};

export default SubclassSearchPage;
