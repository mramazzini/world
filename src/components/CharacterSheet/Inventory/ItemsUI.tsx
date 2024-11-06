'use client';
import ModelDisplay from '@/Utility/ModelDisplay';
import numberArray from '@/lib/utils/numberArray';
import { useAppSelector } from '@/store/hooks';

interface Props {
  setSelectedItem: (item: PrismaJson.QuantityItem | null) => void;
  selectedItem: PrismaJson.QuantityItem | null;
}

const GridItem = ({
  data,
  setSelectedItem,
  selectedItem,
}: {
  data?: PrismaJson.QuantityItem;
  setSelectedItem?: (item: PrismaJson.QuantityItem | null) => void;
  selectedItem?: PrismaJson.QuantityItem | null;
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

const ItemsUI = ({ setSelectedItem, selectedItem }: Props) => {
  const state = useAppSelector((state) => state.character.state);
  if (!state) return null;
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {state.inventory.map((item, index) => (
        <GridItem
          key={index}
          data={item}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
      ))}
      {numberArray(1, 56 - state.inventory.length).map((index) => (
        <GridItem key={index} />
      ))}
    </div>
  );
};

export default ItemsUI;
