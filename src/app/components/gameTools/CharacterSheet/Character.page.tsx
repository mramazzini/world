"use client";

import { getCharacter } from "@/lib/actions/db/character/read.actions";
import {
  AbilityScores,
  CharacterInfo,
  SpellListInfo,
} from "@/lib/utils/types/types";
import { useEffect, useState } from "react";
import { generateCharacter } from "../../Utility/characterStateFunctions/update/generateCharacter";
import "@/lib/string.extensions";
import MainSheet from "./main/MainSheet";
import InventoryTab from "./Inventory/InventoryTab";
import ChooseChoices from "./Choices/Choices";
import SpellSheet from "./Spells/SpellSheet";
import Notes from "./Notes/Notes";
import Traits from "./Traits/Traits";
import { applyPendingModels } from "../../Utility/characterStateFunctions/update/applyPendingModels";
type Tab = "sheet" | "inventory" | "spells" | "notes" | "choices" | "traits";

interface Props {
  characterData: CharacterInfo;
}

const CharacterSheet = ({ characterData }: Props) => {
  const [activeTab, setActiveTab] = useState<Tab>("sheet");
  const [character, setCharacter] = useState<CharacterInfo | null>(null);
  useEffect(() => {
    // check to see if class/subclass needs to be linked
    if (!character) return;
    if (!character.state) return;
    if (!character.state.pendingLinks) return;
    applyPendingModels(character).then((c) => {
      setCharacter(c);
    });
  }, [character?.state?.pendingLinks]);

  useEffect(() => {
    if (characterData.state) return setCharacter(characterData);
    generateCharacter(characterData).then((c) => {
      const char: CharacterInfo = {
        ...characterData,
        state: c,
      };
      setCharacter(char);
    });
  }, []);

  const setState = (newState: PrismaJson.CharacterState) => {
    if (!character) return;
    setCharacter({ ...character, state: newState });
  };

  return (
    <main className="p-4 md:p-8">
      <div role="alert" className="alert alert-info mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          Character sheets are currently in beta, and bugs are to be expected.
        </span>
      </div>
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
              <MainSheet
                character={character}
                setCharacter={setCharacter}
                regenerateCharacter={() => {
                  generateCharacter(character).then((c) => {
                    const char: CharacterInfo = {
                      ...character,
                      state: c,
                    };
                    setCharacter(char);
                  });
                }}
              />
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
