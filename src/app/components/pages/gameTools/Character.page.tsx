"use client";

import { getCharacter } from "@/lib/actions/db/character/read.actions";
import { AbilityScores, CharacterInfo, SpellListInfo } from "@/lib/types";
import { useEffect, useState } from "react";
import { generateCharacter } from "../../Utility/characterStateFunctions/update/generateCharacter";
import Image from "next/image";
import AbilityToText from "@/lib/utils/AbilityToText";
import { AbilityToModifier } from "../../Utility/characterStateFunctions/calc/AbilityToModifier";
import Tooltip from "../../Utility/Tooltip";
import P from "../../Utility/FormatAndSanitize";
import JsonTable from "../../Utility/JsonTable";
import { numberColor, numberColorBefore } from "../../Utility/colorBefore";
import "@/lib/string.extensions";
import { skillAtritbuteMap, skills } from "@/lib/globalVars";
import { calcProficiency } from "../../Utility/characterStateFunctions/calc/calcProficiency";
import MainSheet from "./main/MainSheet";
import InventoryTab from "./Inventory/InventoryTab";
import ChooseChoices from "./Choices/Choices";
import SpellSheet from "./Spells/SpellSheet";
import Notes from "./Notes/Notes";
import Traits from "./Traits/Traits";
import { applyPendingModels } from "../../Utility/characterStateFunctions/update/applyPendingModels";
type Tab = "sheet" | "inventory" | "spells" | "notes" | "choices" | "traits";

interface Props {
  charName: string;
}

const CharacterSheet = ({ charName }: Props) => {
  const [character, setCharacter] = useState<CharacterInfo | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("sheet");

  useEffect(() => {
    // check to see if class/subclass needs to be linked
    if (!character) return;
    if (!character.state) return;
    if (!character.state.pendingLinks) return;
    applyPendingModels(character);
  }, [character]);

  useEffect(() => {
    getCharacter(charName).then((res) => {
      if (!res) return;
      const abilityScoresDemo: {
        orion: AbilityScores;
        constantine: AbilityScores;
        boon: AbilityScores;
        ranis: AbilityScores;
        jay: AbilityScores;
        oliver: AbilityScores;
      } = {
        orion: {
          STR: 14,
          DEX: 10,
          CON: 14,
          INT: 8,
          WIS: 16,
          CHA: 14,
        },
        constantine: {
          STR: 15,
          DEX: 10,
          CON: 15,
          INT: 8,
          WIS: 8,
          CHA: 16,
        },
        boon: {
          STR: 12,
          DEX: 10,
          CON: 14,
          INT: 15,
          WIS: 16,
          CHA: 8,
        },
        ranis: {
          STR: 8,
          DEX: 16,
          CON: 13,
          INT: 16,
          WIS: 12,
          CHA: 10,
        },
        jay: {
          STR: 14,
          DEX: 14,
          CON: 12,
          INT: 8,
          WIS: 8,
          CHA: 15,
        },
        oliver: {
          //just put some wizard stats for now
          STR: 9,
          DEX: 16,
          CON: 14,
          INT: 18,
          WIS: 12,
          CHA: 9,
        },
      };
      generateCharacter(res).then((c) => {
        console.log(res);
        const char: CharacterInfo = {
          ...res,
          state: c,
        };
        setCharacter(char);
        console.log(char);
      });
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
              <MainSheet character={character} setCharacter={setCharacter} />
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
              <InventoryTab character={character} updateState={setState} />
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
              <SpellSheet character={character} setState={setState} />
            </div>
            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 ${
                activeTab === "traits" ? "tab-active" : ""
              }`}
              aria-label="Traits"
              onClick={() => setActiveTab("traits")}
            />
            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            >
              <Traits
                state={character.state}
                setState={setState}
                background={character.Background}
              />
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
              <Notes
                notes={character.state.notes}
                updateNotes={(notes) => {
                  if (!character.state) return;
                  setState({ ...character.state, notes });
                }}
              />
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

export default CharacterSheet;
