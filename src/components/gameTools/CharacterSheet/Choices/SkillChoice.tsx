'use client';

import P from '@/Utility/FormatAndSanitize';
import numberArray from '@/lib/utils/numberArray';
import { Skill } from '@prisma/client';
import { useCallback, useEffect, useMemo, useState } from 'react';
interface Props {
  modalID: string;
  choice: {
    numberOfChoices: number;
    options: Skill[];
  };
  updateSelections: (SkillList: Skill[]) => void;
}

const SkillChoice = ({ choice, updateSelections, modalID }: Props) => {
  const [selections, setSelections] = useState<number[]>(
    new Array<number>(choice.numberOfChoices - 1)
  );
  const skillList = useMemo(
    () => selections.map((index) => choice.options[index]),
    [selections, choice.options]
  );

  useEffect(() => {
    updateSelections(skillList);
  }, [skillList, updateSelections]);

  const skillOptions = useMemo(
    () =>
      choice.options.map((skill, index) => (
        <option key={index} value={index} disabled={selections.includes(index)}>
          {skill.toCapitalCase().replaceAll('_', ' ')}
        </option>
      )),
    [choice.options, selections]
  );

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
        {choice.options.map((skill, index) => (
          <li
            key={index}
            className={
              selections.includes(index) ? 'pl-2 bg-neutral rounded-xl' : 'pl-2'
            }
          >
            <P modalID={modalID}>
              {skill.toCapitalCase().replaceAll('_', ' ')}
            </P>
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
          {skillOptions}
        </select>
      ))}
    </div>
  );
};

export default SkillChoice;
