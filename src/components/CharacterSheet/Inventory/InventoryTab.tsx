'use client';
import LoadoutUI from './LoadoutUI';
import ItemsUI from './ItemsUI';
import { useState } from 'react';
import ItemPreview from './ItemPreview';
import ItemFeatures from './ItemFeatures';
import ItemShop from './ItemShop';

export interface SelectedItemInfo {
  itemQuantity: PrismaJson.QuantityItem;
  purchasing: boolean;
}

const InventoryTab = () => {
  const [selectedItem, setSelectedItem] = useState<SelectedItemInfo | null>(
    null
  );

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-12 w-full gap-4">
        {/* loadout */}
        <div className="col-span-3">
          <LoadoutUI />
        </div>

        {/* inventory */}

        <div className="col-span-6 overflow-auto bg-base-200 rounded-xl border border-primary h-[34rem]">
          <ItemPreview
            setSelectedItem={(selected) => {
              if (!selected) {
                setSelectedItem(null);
                return;
              }
              setSelectedItem({ itemQuantity: selected, purchasing: false });
            }}
            selectedItemInfo={selectedItem}
          />
        </div>

        {/* item shop */}
        <div className="col-span-3">
          <ItemShop
            setSelectedItem={(selected) => {
              if (!selected) {
                setSelectedItem(null);
                return;
              }
              setSelectedItem({ itemQuantity: selected, purchasing: true });
            }}
            selectedItemInfo={selectedItem}
          />
        </div>
        <div className="col-span-12">
          <ItemsUI
            setSelectedItem={(selected) => {
              if (!selected) {
                return;
              }
              setSelectedItem({ itemQuantity: selected, purchasing: false });
            }}
            selectedItemInfo={selectedItem}
          />
        </div>
        <ItemFeatures />
      </div>
    </div>
  );
};

export default InventoryTab;
