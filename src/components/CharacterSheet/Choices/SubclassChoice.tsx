'use client';

import { memoizeGetSubclass } from '@/Utility/globalCache';
import ModelDisplay from '@/Utility/ModelDisplay';
import ModelLink from '@/Utility/ModelLink';
import { SubClassID } from '@/lib/types/types';
import numberArray from '@/lib/utils/numberArray';
import { useEffect, useState } from 'react';
import { SubClassInfo } from '@/lib/types/modelInfo';

interface Props {
  choice: {
    numberOfChoices: number;
    options: SubClassID[];
  };
  modalID: string;
  updateSelections: (subClassList: SubClassID[]) => void;
}

const SubclassChoice = ({ choice, updateSelections, modalID }: Props) => {
  const [selections, setSelections] = useState<number[]>([]);
  const [subclasses, setSubclasses] = useState<SubClassInfo[]>([]);

  useEffect(() => {
    const fetchSubclasses = async () => {
      try {
        const fetchedSubclasses = await Promise.all(
          choice.options.map((subClass) => memoizeGetSubclass(subClass))
        );
        setSubclasses(fetchedSubclasses as SubClassInfo[]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubclasses();
  }, [choice.options]);

  useEffect(() => {
    // Get subclass IDs based on selections
    const subclassList = selections.map((index) => choice.options[index]);
    updateSelections(subclassList);
  }, [selections, updateSelections, choice.options]);

  return (
    <div className="flex bg-base-300 rounded-xl p-4 flex-col mb-4 w-full">
      <h3 className="text-lg font-bold text-center">Subclass Choice</h3>
      <div className="divider divider-accent m-0"></div>
      <p>Choose {choice.numberOfChoices} from:</p>
      <div className="divider divider-accent m-0"></div>
      <ul className="list-disc ml-4">
        {choice.options.map((subclass, index) => (
          <li
            key={index}
            className={
              selections.includes(index) ? 'pl-2 bg-neutral rounded-xl' : 'pl-2'
            }
          >
            <ModelLink
              modalID={modalID}
              potential={subclasses}
              linkBase="subclass"
            >
              {subclass.toString()}
              {`{${subclasses[index]?.name || ''}}`}
            </ModelLink>
          </li>
        ))}
      </ul>
      {numberArray(0, choice.numberOfChoices - 1).map((_, idx) => (
        <select
          key={idx}
          defaultValue={'Pick One'}
          className={`select select-bordered w-full max-w-xs mt-2 ${
            selections.length >= choice.numberOfChoices
              ? 'select-secondary'
              : ''
          }`}
          onChange={(e) => {
            const selectedIdx = parseInt(e.target.value);
            if (isNaN(selectedIdx)) return;

            setSelections((prev) => {
              const newSelections = [...prev];
              if (newSelections.includes(selectedIdx)) return newSelections;

              if (newSelections.length >= choice.numberOfChoices) {
                newSelections.shift();
              }
              newSelections.push(selectedIdx);
              return newSelections;
            });
          }}
        >
          <option disabled>Pick One</option>
          {choice.options.map((subclass, index) => (
            <option key={index} value={index}>
              <ModelDisplay model="Subclass" id={subclass as SubClassID} />
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default SubclassChoice;
