'use client';
import ModelDisplay from '@/Utility/ModelDisplay';
import numberArray from '@/lib/utils/numberArray';
import { SelectedItemInfo } from './InventoryTab';
import useCharacterState from '@/hooks/useCharacter/useCharacterState';

interface Props {
  setSelectedItem: (item: QuantityItem | null) => void;
  selectedItemInfo: SelectedItemInfo | null;
}

const GridItem = ({
  data,
  setSelectedItem,
  selectedItem,
}: {
  data?: QuantityItem;
  setSelectedItem?: (item: QuantityItem | null) => void;
  selectedItem?: QuantityItem | null;
}) => {
  return data ? (
    <button
      className={`w-24 h-12  p-2 rounded-box flex flex-col items-center justify-center btn btn-neutral ${
        selectedItem?.item === data.item ? 'btn-primary' : ''
      }`}
      onClick={(e) => {
        e.preventDefault();
        if (!setSelectedItem) return;
        setSelectedItem(data);
      }}
    >
      <span className="text-xs text-center">
        {data.quantity > 1 ? data.quantity : ''}{' '}
        <ModelDisplay model="Item" id={data.item} />
      </span>
    </button>
  ) : (
    <div className="w-24 h-12 bg-neutral p-2 rounded-box flex items-center justify-center">
      <div className="w-6 h-6 bg-base-300 rounded-box flex items-center justify-center">
        <div className="w-4 h-4 bg-neutral rounded-box"></div>
      </div>
    </div>
  );
};

const ItemsUI = ({ setSelectedItem, selectedItemInfo }: Props) => {
  const state = useCharacterState();
  if (!state) return null;
  return (
    <div className="flex flex-wrap gap-2 justify-center bg-base-200 p-4 h-full rounded-xl">
      {state.inventory.map((item, index) => (
        <GridItem
          key={index}
          data={item}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItemInfo?.itemQuantity}
        />
      ))}
      {numberArray(1, 56 - state.inventory.length).map((index) => (
        <GridItem key={index} />
      ))}
    </div>
  );
};

export default ItemsUI;
