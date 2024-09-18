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
        <div className="flex flex-row w-full">
          {/* loadout */}
          <div className="w-1/2 flex flex-col">
            <LoadoutUI character={character} setState={updateState} />
          </div>
          <div className="divider divider-primary divider-horizontal mb-4"></div>
          {/* inventory */}
          <div className="w-1/2 flex flex-col">
            <ItemsUI
              character={character}
              updateState={updateState}
              setSelectedItem={setSelectedItem}
            />
            <ItemPreview
              character={character}
              updateState={updateState}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
          </div>
        </div>
        <ItemFeatures inventory={character.state.inventory} />
      </div>
    )
  );
};

export default InventoryTab;
