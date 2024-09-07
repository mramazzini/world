"use client";

import { getCharacter } from "@/lib/actions/db/character/read.actions";
import { Ability, CharacterInfo } from "@/lib/types";
import { useEffect, useState } from "react";
import { generateCharacter } from "../../Utility/generateCharacter";
import Image from "next/image";
import AbilityToText from "@/lib/utils/AbilityToText";
import { AbilityToModifier } from "../../Utility/AbilityToModifier";
import Tooltip from "../../Utility/Tooltip";
import P from "../../Utility/FormatAndSanitize";
import JsonTable from "../../Utility/JsonTable";
import { numberColor, numberColorBefore } from "../../Utility/colorBefore";
import "@/lib/string.extensions";
import { skillAtritbuteMap, skills } from "@/lib/globalVars";
import { calcProficiency } from "../../Utility/calcProficiency";
import MainSheet from "./main/MainSheet";
import InventoryTab from "./Inventory/InventoryTab";
import ChooseChoices from "./Choices/Choices";
type Tab = "sheet" | "inventory" | "spells" | "notes" | "choices";
const CharacterCreate = () => {
  const [character, setCharacter] = useState<CharacterInfo | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("sheet");
  useEffect(() => {
    getCharacter("Larry").then((res) => {
      if (!res) return;
      const char: CharacterInfo = {
        ...res,
        state: generateCharacter(res, {
          STR: 13,
          DEX: 15,
          CON: 14,
          INT: 17,
          WIS: 19,
          CHA: 15,
        }),
      };
      setCharacter(char);
      console.log(char);
    });
  }, []);

  const setState = (newState: PrismaJson.CharacterState) => {
    if (!character) return;
    setCharacter({ ...character, state: newState });
  };

  useEffect(() => {
    if (character) {
      console.log(character);
    }
  }, [character]);

  return (
    <main className="p-4 md:p-8">
      {character && character.state && (
        <>
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 ${
                activeTab === "sheet" ? "tab-active" : ""
              }`}
              onClick={() => setActiveTab("sheet")}
              aria-label="Sheet"
            />
            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            >
              <MainSheet character={character} />
            </div>
            {/* dummy tabs for now */}
            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 ${
                activeTab === "inventory" ? "tab-active" : ""
              }`}
              aria-label="Inventory"
              onClick={() => setActiveTab("inventory")}
            />
            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            >
              <InventoryTab character={character} />
            </div>
            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 ${
                activeTab === "spells" ? "tab-active" : ""
              }`}
              aria-label="Spells"
              onClick={() => setActiveTab("spells")}
            />
            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            >
              Spells
            </div>
            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 ${
                activeTab === "notes" ? "tab-active" : ""
              }`}
              aria-label="Notes"
              onClick={() => setActiveTab("notes")}
            />
            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            >
              Notes
            </div>
            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 indicator ${
                activeTab === "choices" ? "tab-active" : ""
              }`}
              aria-label="Choices"
              onClick={() => setActiveTab("choices")}
            />

            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            >
              <ChooseChoices
                character={character}
                setCharacterState={setState}
              />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default CharacterCreate;
