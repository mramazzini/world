'use client';

import ModelDisplay from '@/Utility/ModelDisplay';
import { ToolID } from '@/lib/utils/types/types';
import numberArray from '@/lib/utils/numberArray';
import { useEffect, useState, useMemo, useCallback } from 'react';

interface Props {
  choice: {
    numberOfChoices: number;
    options: ToolID[];
  };
  updateSelections: (ToolList: ToolID[]) => void;
}

const ToolChoice = ({ choice, updateSelections }: Props) => {
  const [selections, setSelections] = useState<number[]>(
    new Array<number>(choice.numberOfChoices - 1)
  );

  // Memoize the list of selected tools
  const toolList = useMemo(
    () =>
      selections
        .map((index) => choice.options[index])
        .filter((tool) => tool !== undefined),
    [selections, choice.options]
  );

  useEffect(() => {
    updateSelections(toolList);
  }, [toolList, updateSelections]);

  // Memoize the select options to avoid unnecessary re-renders
  const toolOptions = useMemo(
    () =>
      choice.options.map((tool, index) => (
        <option key={index} value={index}>
          <ModelDisplay model="Tool" id={tool as ToolID} />
        </option>
      )),
    [choice.options]
  );

  // Memoize the `onChange` handler to prevent unnecessary re-renders
  const handleSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>, choiceIndex: number) => {
      const index = parseInt(e.target.value);
      const newSelections = [...selections];
      newSelections[choiceIndex] = index;
      setSelections(newSelections);
    },
    [selections]
  );

  return (
    <div className="flex bg-base-300 rounded-xl p-4 flex-col mb-4">
      <p>Choose {choice.numberOfChoices} from:</p>
      <div className="divider divider-accent m-0"></div>
      <ul className="list-disc ml-4">
        {choice.options.map((tool, index) => (
          <li
            key={index}
            className={
              selections.includes(index) ? 'pl-2 bg-neutral rounded-xl' : 'pl-2'
            }
          >
            <ModelDisplay model="Tool" id={tool as ToolID} />
          </li>
        ))}
      </ul>
      {numberArray(0, choice.numberOfChoices - 1).map((_, choiceIndex) => (
        <select
          key={choiceIndex}
          defaultValue="Pick One"
          className={`select select-bordered w-full max-w-xs mt-2 ${
            selections.length >= choice.numberOfChoices
              ? 'select-secondary'
              : ''
          }`}
          onChange={(e) => handleSelectChange(e, choiceIndex)}
        >
          <option disabled>Pick One</option>
          {toolOptions}
        </select>
      ))}
    </div>
  );
};

export default ToolChoice;
