'use client';

import ModelDisplay from '@/Utility/ModelDisplay';
import { WeaponID } from '@/lib/utils/types/types';
import numberArray from '@/lib/utils/numberArray';
import { useEffect, useState } from 'react';
interface Props {
  choice: {
    numberOfChoices: number;
    options: WeaponID[];
  };
  updateSelections: (WeaponList: WeaponID[]) => void;
}

const WeaponChoice = ({ choice, updateSelections }: Props) => {
  const [selections, setSelections] = useState<number[]>(
    new Array<number>(choice.numberOfChoices - 1)
  );

  useEffect(() => {
    //get weapons
    const weaponList = selections.map((index) => choice.options[index]);
    //make sure all selected
    updateSelections(weaponList);
  }, [selections, updateSelections, choice.options]);

  return (
    <div className="flex bg-base-300 rounded-xl p-4 flex-col mb-4">
      <p>Choose {choice.numberOfChoices} from:</p>
      <div className="divider divider-accent  m-0"></div>
      <ul className="list-disc ml-4">
        {choice.options.map((weapon, index) => {
          return (
            <li
              key={index}
              className={
                selections.some((selection) => selection === index)
                  ? 'pl-2 bg-neutral  rounded-xl'
                  : 'pl-2 '
              }
            >
              <ModelDisplay model="Weapon" id={weapon as WeaponID} />
            </li>
          );
        })}
      </ul>
      {numberArray(0, choice.numberOfChoices - 1).map((choiceIndex, index) => {
        return (
          <select
            key={index}
            defaultValue={'Pick One'}
            className={`select select-bordered   w-full max-w-xs mt-2
            ${
              selections.length >= choice.numberOfChoices
                ? 'select-secondary'
                : ''
            }`}
            onChange={(e) => {
              const index = parseInt(e.target.value);
              const newSelections = [...selections];

              newSelections[choiceIndex] = index;

              setSelections(newSelections);
            }}
          >
            <option disabled>Pick One</option>
            {choice.options.map((weapon, index) => (
              <option key={index} value={index}>
                <ModelDisplay model="Weapon" id={weapon as WeaponID} />
              </option>
            ))}
          </select>
        );
      })}
    </div>
  );
};

export default WeaponChoice;
