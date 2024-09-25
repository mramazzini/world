"use client";
import { CharacterInfo } from "@/lib/types";
import LoadoutUI from "./LoadoutUI";
import ItemsUI from "./ItemsUI";
import { useState } from "react";
import ItemPreview from "./ItemPreview";
import ItemFeatures from "./ItemFeatures";

interface Props {
  character: CharacterInfo;
  updateState: (state: PrismaJson.CharacterState) => void;
}
const InventoryTab = ({ character, updateState }: Props) => {
  const [selectedItem, setSelectedItem] =
    useState<PrismaJson.QuantityItem | null>(null);

  return (
    character &&
    character.state && (
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-2 w-full">
          {/* loadout */}
          <LoadoutUI character={character} setState={updateState} />
          {/* inventory */}
          <ItemsUI
            character={character}
            updateState={updateState}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
          <ItemPreview
            character={character}
            updateState={updateState}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
        </div>
        <ItemFeatures inventory={character.state.inventory} />
      </div>
    )
  );
};

export default InventoryTab;
