import { QueryParams, SubClassInfo, SubclassSearchResults } from "@/lib/types";
import SearchPageComponent from "../SearchPage";
import { officialSources } from "@/lib/globalVars";
import { getSubclassChunk } from "@/lib/actions/db/subclass/query.actions";
import { getSubclassChunkByClass } from "@/lib/actions/db/subclass/read.actions";

interface Props {
  subclasses: SubClassInfo[];
  className: string;
}
const SubclassClassSearchPage = ({ subclasses, className }: Props) => {
  return (
    <SearchPageComponent<SubClassInfo>
      title={`${className.toCapitalCase()} Subclasses`}
      description="Select a subclass to view more information. Subclasses are additional class options that provide more customization to your character. They provide additional abilities and features that differentiate your character from others of the same class."
      searchPlaceholder="Search Subclass..."
      staticInput={subclasses}
      handleSearch={async (params: QueryParams) => {
        "use server";
        return getSubclassChunkByClass(params, className);
      }}
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
      routeName="subclass"
      createText="Create a Subclass ->"
      homebrewOfficialText="View Homebrew Subclasses ->"
      homebrew={false}
    />
  );
};

export default SubclassClassSearchPage;
