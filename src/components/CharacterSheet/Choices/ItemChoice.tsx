'use client';
import P from '@/Utility/FormatAndSanitize';
import { memoizeGetItem } from '@/Utility/globalCache';
import { ItemInfo } from '@/lib/types/types';
import numberArray from '@/lib/utils/numberArray';
import { useEffect, useMemo, useState } from 'react';
interface Props {
  modalID: string;
  choice: {
    numberOfChoices: number;
    options: PrismaJson.QuantityItem[][];
  };
  updateSelections: (itemList: PrismaJson.QuantityItem[]) => void;
}

const ItemChoice = ({ choice, updateSelections, modalID }: Props) => {
  const [selections, setSelections] = useState<number[]>([]);
  const [options, setOptions] = useState<ItemInfo[]>([]);

  const itemQuantities = useMemo(
    () => selections.map((index) => choice.options[index]).flat(),
    [selections, choice.options]
  );

  useEffect(() => {
    // Only update selections when itemQuantities changes
    updateSelections(itemQuantities);
  }, [itemQuantities, updateSelections]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await Promise.all(
          choice.options.flat().map(async (itemData) => {
            return memoizeGetItem(itemData.item);
          })
        );
        setOptions(items as ItemInfo[]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, [choice.options]);
  return (
    <div className="flex bg-base-300 rounded-xl p-4 flex-col mb-4">
      <p>Choose {choice.numberOfChoices} from:</p>
      <div className="divider divider-accent  m-0"></div>
      <ul className="list-disc ml-4">
        {choice.options.map((itemList, index) => {
          if (index > 3) return null;
          if (index == 3)
            return <li key={index}>... +{choice.options.length - 3} more</li>;
          return (
            <li
              key={index}
              className={
                selections.some((selection) => selection === index)
                  ? 'pl-2 bg-neutral  rounded-xl'
                  : 'pl-2 '
              }
            >
              {itemList.map((itemData, index) => (
                <P key={index} modalID={modalID}>
                  {index == itemList.length - 1 && itemList.length > 1
                    ? 'and '
                    : ''}
                  {`${itemData.quantity} ^${itemData.item}{}^`}
                  {index < itemList.length - 1 ? ', ' : ''}
                </P>
              ))}
            </li>
          );
        })}
      </ul>
      {numberArray(1, choice.numberOfChoices).map((_, index) => {
        return (
          <select
            key={index}
            defaultValue={'Pick One'}
            className={`select select-bordered   w-full max-w-xs mt-2
            ${
              selections.length >= choice.numberOfChoices
                ? 'select-secondary'
                : ''
            }
          `}
            onChange={(e) => {
              const index = parseInt(e.target.value);
              const newSelections = [...selections];
              if (newSelections.length >= choice.numberOfChoices) {
                newSelections.shift();
              }
              newSelections.push(index);
              setSelections(newSelections);
            }}
          >
            <option disabled>Pick One</option>
            {choice.options.map((itemList, index) => (
              <option key={index} value={index}>
                {itemList
                  .map(
                    (itemData) =>
                      `${itemData.quantity} ${
                        options.find((i) => i.id === itemData.item)?.name
                      }`
                  )
                  .join(', ')}
              </option>
            ))}
          </select>
        );
      })}
    </div>
  );
};

export default ItemChoice;
