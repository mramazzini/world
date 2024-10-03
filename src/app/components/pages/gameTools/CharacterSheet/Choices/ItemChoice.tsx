"use client";
import P from "@/app/components/Utility/FormatAndSanitize";
import { memoizeGetItem } from "@/app/components/Utility/globalCache";
import { ItemInfo } from "@/lib/utils/types/types";
import numberArray from "@/lib/utils/numberArray";
import { useEffect, useState } from "react";
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
  const [options, setoptions] = useState<ItemInfo[]>([]);

  useEffect(() => {
    //get item ids and Quantities
    const itemQuantities = selections.map((index) => choice.options[index]);
    updateSelections(itemQuantities.flat());
  }, [selections]);

  useEffect(() => {
    choice.options.forEach((itemList) => {
      itemList.forEach((itemData) => {
        memoizeGetItem(itemData.item).then((item) => {
          setoptions((prev) => [...prev, item]);
        });
      });
    });
  }, []);
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
                  ? "pl-2 bg-neutral  rounded-xl"
                  : "pl-2 "
              }
            >
              {itemList.map((itemData, index) => (
                <P key={index} modalID={modalID}>
                  {index == itemList.length - 1 && itemList.length > 1
                    ? "and "
                    : ""}
                  {`${itemData.quantity} ^${itemData.item}{}^`}
                  {index < itemList.length - 1 ? ", " : ""}
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
            defaultValue={"Pick One"}
            className={`select select-bordered   w-full max-w-xs mt-2
            ${
              selections.length >= choice.numberOfChoices
                ? "select-secondary"
                : ""
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
                  .join(", ")}
              </option>
            ))}
          </select>
        );
      })}
    </div>
  );
};

export default ItemChoice;
