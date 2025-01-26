'use client';

import { useEffect, useState } from 'react';
import '@/lib/string.extensions';
import MainSheet from '@/components/CharacterSheet/main/MainSheet';
import Loading from '@/components/UI/Loading';
import useCharacter from '@/hooks/CharacterControllers/useCharacter';
import CharacterStatsTab from '@/components/CharacterSheet/Stats/CharacterStatsTab';
import Notes from '@/components/CharacterSheet/Notes/NotesTab';
import ChoicesTab from '@/components/CharacterSheet/ChoicesTab/ChoicesTab';
import InventoryTab from '@/components/CharacterSheet/Inventory/InventoryTab';
import Traits from '@/components/CharacterSheet/Traits/Traits';
import SpellSheet from '@/components/CharacterSheet/Spells/SpellSheet';
import AbilityScoreModal from '@/components/CharacterSheet/AbilityScoreModal/AbilityScoreModal';
import useCharacterLogic from '@/hooks/CharacterControllers/useCharacterLogic';
import { clearSheetState } from '@/store/sheetSlice';
import { useAppDispatch } from '@/store/hooks';

type Tab =
  | 'sheet'
  | 'inventory'
  | 'spells'
  | 'notes'
  | 'choices'
  | 'traits'
  | 'stats';

interface Props {
  characterID: string;
}

const CharacterSheet = ({ characterID }: Props) => {
  const [activeTab, setActiveTab] = useState<Tab>('sheet');
  const { loading } = useCharacter(characterID);

  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      console.log('clearing sheet state');
      dispatch(clearSheetState());
    };
  }, [dispatch]);

  // A wrapper for all the character logic
  useCharacterLogic();

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
      {loading ? (
        <Loading />
      ) : (
        <>
          <div role="tablist" className="tabs tabs-lifted ">
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
              {activeTab === 'sheet' && <MainSheet />}
            </div>
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
              {activeTab === 'inventory' && <InventoryTab />}
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
              {activeTab === 'spells' && <SpellSheet />}
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
              {activeTab === 'traits' && <Traits />}
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
              {activeTab === 'stats' && <CharacterStatsTab />}
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
            >
              {activeTab === 'notes' && <Notes />}
            </div>
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
              {activeTab === 'choices' && <ChoicesTab />}
            </div>
          </div>
        </>
      )}
      <AbilityScoreModal />
    </main>
  );
};

export default CharacterSheet;
