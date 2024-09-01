import SearchPageComponent from "../SearchPage";

import { useState } from "react";
import { ItemInfo, QueryParams } from "@/lib/types";
import { Item } from "@prisma/client";
import { getItemChunk } from "@/lib/actions/db/item/read.actions";
import { officialSources } from "@/lib/globalVars";
interface Props {
  items: ItemInfo[];
}
const ItemSearchPage = ({ items }: Props) => {
  return (
    <SearchPageComponent<ItemInfo>
      title="Items"
      description="Items are objects that can be used by players to enhance their characters. They can be weapons, armor, potions, or other objects. Select an item to view more information."
      createText="Create a Item ->"
      homebrewOfficialText="View Homebrew Items ->"
      searchPlaceholder="Search Item..."
      routeName="item"
      handleSearch={getItemChunk}
      staticInput={items}
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

export default ItemSearchPage;
