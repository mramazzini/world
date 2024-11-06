'use client';
import LoadoutUI from './LoadoutUI';
import ItemsUI from './ItemsUI';
import { useState } from 'react';
import ItemPreview from './ItemPreview';
import ItemFeatures from './ItemFeatures';

const InventoryTab = () => {
  const [selectedItem, setSelectedItem] =
    useState<PrismaJson.QuantityItem | null>(null);

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-2 w-full">
        {/* loadout */}
        <LoadoutUI />
        {/* inventory */}
        <ItemsUI
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
        <ItemPreview
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
      </div>
      <ItemFeatures />
    </div>
  );
};

export default InventoryTab;
