'use client';

import { useEffect, useState } from 'react';
import { generateCharacter } from '../../Utility/characterStateFunctions/update/generateCharacter';
import '@/lib/string.extensions';
import MainSheet from '@/components/CharacterSheet/main/MainSheet';
import InventoryTab from '@/components/CharacterSheet/Inventory/InventoryTab';
import ChooseChoices from '@/components/CharacterSheet/Choices/Choices';
import SpellSheet from '@/components/CharacterSheet/Spells/SpellSheet';
// import Notes from '@/components/CharacterSheet/Notes/Notes';
import Traits from '@/components/CharacterSheet/Traits/Traits';
import { applyPendingModels } from '../../Utility/characterStateFunctions/update/applyPendingModels';
import CharacterStatsTab from '@/components/CharacterSheet/Stats/CharacterStatsTab';
import { CharacterInfo } from '@/lib/types/modelInfo';
import { useAppSelector } from '@/store/hooks';
import { useDispatch } from 'react-redux';
import { setCharacter } from '@/store/characterSlice';
import Loading from '@/components/UI/Loading';

type Tab =
  | 'sheet'
  | 'inventory'
  | 'spells'
  | 'notes'
  | 'choices'
  | 'traits'
  | 'stats';

interface Props {
  characterData: CharacterInfo;
}

const CharacterSheet = ({ characterData }: Props) => {
  const [activeTab, setActiveTab] = useState<Tab>('sheet');
  const character = useAppSelector((state) => state.character);
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // check to see if class/subclass needs to be linked
    if (!character.state) return;
    if (!character.state.pendingLinks) return;
    applyPendingModels(character).then((c) => {
      dispatch(setCharacter(c));
    });
  }, [character, dispatch]);

  useEffect(() => {
    if (isInitialized && character.state) return;
    setIsInitialized(true);

    if (characterData.state) {
      dispatch(setCharacter(characterData));
      return;
    }

    generateCharacter(characterData).then((c) => {
      dispatch(
        setCharacter({
          ...characterData,
          state: c,
        })
      );
    });
  }, [characterData, dispatch, character.state, isInitialized]);

  useEffect(() => {
    console.log(character);
  }, [character]);

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
      {character.state ? (
        <>
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 ${
                activeTab === 'sheet' ? 'tab-active' : ''
              }`}
              onClick={() => setActiveTab('sheet')}
              aria-label="Sheet"
            />
            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            >
              <MainSheet />
            </div>
            {/* dummy tabs for now */}
            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 ${
                activeTab === 'inventory' ? 'tab-active' : ''
              }`}
              aria-label="Inventory"
              onClick={() => setActiveTab('inventory')}
            />
            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            >
              <InventoryTab />
            </div>
            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 ${
                activeTab === 'spells' ? 'tab-active' : ''
              }`}
              aria-label="Spells"
              onClick={() => setActiveTab('spells')}
            />
            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            >
              <SpellSheet />
            </div>
            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 ${
                activeTab === 'traits' ? 'tab-active' : ''
              }`}
              aria-label="Traits"
              onClick={() => setActiveTab('traits')}
            />
            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            >
              <Traits />
            </div>
            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 ${
                activeTab === 'stats' ? 'tab-active' : ''
              }`}
              aria-label="Stats"
              onClick={() => setActiveTab('stats')}
            />
            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            >
              <CharacterStatsTab />
            </div>

            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 ${
                activeTab === 'notes' ? 'tab-active' : ''
              }`}
              aria-label="Notes"
              onClick={() => setActiveTab('notes')}
            />
            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            ></div>
            <input
              type="radio"
              name="charcter_tabs"
              role="tab"
              className={`tab tab-base-300 indicator ${
                activeTab === 'choices' ? 'tab-active' : ''
              }`}
              aria-label="Choices"
              onClick={() => setActiveTab('choices')}
            />

            <div
              role="tabpanel"
              className="bg-base-300 p-4 rounded-xl tab-content "
            >
              <ChooseChoices />
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default CharacterSheet;
