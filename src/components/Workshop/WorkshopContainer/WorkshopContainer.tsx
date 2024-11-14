'use client';

import { useAppSelector } from '@/store/hooks';
import { WorkshopProtocol } from '@prisma/client';
import { useMemo } from 'react';
import ClassEditor from '../ModelEditors/ClassEditor';
import SubClassEditor from '../ModelEditors/SubClassEditor';
import SpeciesEditor from '../ModelEditors/SpeciesEditor';
import SubSpeciesEditor from '../ModelEditors/SubSpeciesEditor';
import FeatEditor from '../ModelEditors/FeatEditor';
import SpellEditor from '../ModelEditors/SpellEditor';
import CreatureEditor from '../ModelEditors/CreatureEditor';
import BackgroundEditor from '../ModelEditors/BackgroundEditor';
import ItemEditor from '../ModelEditors/ItemEditor';
import FeatureEditor from '../ModelEditors/FeatureEditor';

const {
  CLASS,
  SUBCLASS,
  SPECIES,
  SUBSPECIES,
  FEAT,
  SPELL,
  CREATURE,
  ITEM,
  FEATURE,
  BACKGROUND,
} = WorkshopProtocol;

const WorkshopContainer = () => {
  const { selectedTab, workshopItems } = useAppSelector(
    (state) => state.workshop
  );

  const selectedTabData = useMemo(
    () => (selectedTab ? workshopItems[selectedTab] : null),
    [workshopItems, selectedTab]
  );

  const protocol = useMemo(
    () => (selectedTabData ? selectedTabData.protocol : null),
    [selectedTabData]
  );

  return (
    <div
      className="flex w-full overflow-auto"
      style={{
        height: 'calc(100vh - 4rem)',
      }}
    >
      {selectedTabData ? (
        <div className="flex flex-col w-full p-8">
          {protocol === CLASS ? (
            <ClassEditor />
          ) : protocol === SUBCLASS ? (
            <SubClassEditor />
          ) : protocol === SPECIES ? (
            <SpeciesEditor />
          ) : protocol === SUBSPECIES ? (
            <SubSpeciesEditor />
          ) : protocol === FEAT ? (
            <FeatEditor />
          ) : protocol === SPELL ? (
            <SpellEditor />
          ) : protocol === CREATURE ? (
            <CreatureEditor />
          ) : protocol === ITEM ? (
            <ItemEditor />
          ) : protocol === BACKGROUND ? (
            <BackgroundEditor />
          ) : protocol === FEATURE ? (
            <FeatureEditor />
          ) : null}
        </div>
      ) : (
        <div className="flex flex-col w-full p-8 items-center justify-center">
          <span className="text-2xl font-bold">Welcome to your Workshop</span>
          <span className="text-lg text-gray-500">
            Select or create a new item to get started
          </span>
        </div>
      )}
    </div>
  );
};

export default WorkshopContainer;
