import useProficiency from '@/hooks/CharacterControllers/useProficiency';
import { SetSkillProficiencyParams } from '@/lib/types/protocols';
import { SkillToText } from '@/lib/utils/toText/SkillToText';
import P from '@/Utility/FormatAndSanitize';
import { Choice, Skill } from '@prisma/client';
import { useMemo, useState } from 'react';
import ChoiceResolverButton from '../../ChoiceResolverButton';
import { useAppSelector } from '@/store/hooks';

const SetSkillProficiencyResolver = ({ choice }: { choice: Choice }) => {
  const { skillProficiencies } = useAppSelector((state) => state.sheet);
  const params = choice.fetchParams as SetSkillProficiencyParams;
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);

  const filteredParams = useMemo(
    () => params.filter((p) => !skillProficiencies.includes(p)),
    [params, skillProficiencies]
  );

  const alreadyChosen = useMemo(
    () => params.filter((p) => skillProficiencies.includes(p)),
    [params, skillProficiencies]
  );

  return (
    <div>
      <h3>Set Skill Proficiencies</h3>
      {choice.amountOfOptionToChoose === 1 ? (
        <p>Choose a skill to be proficient in.</p>
      ) : (
        <p>
          Choose {choice.amountOfOptionToChoose} skills to be proficient in.
        </p>
      )}
      <div className="divider"></div>

      <ul className="flex flex-col gap-2">
        {filteredParams.map((p) => (
          <li key={p} className="form-control flex flex-row w-full gap-4 ">
            <input
              type="checkbox"
              id={p}
              className="checkbox "
              disabled={
                selectedSkills.length >= choice.amountOfOptionToChoose &&
                !selectedSkills.includes(p)
              }
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedSkills([...selectedSkills, p]);
                } else {
                  setSelectedSkills(selectedSkills.filter((s) => s !== p));
                }
              }}
              checked={selectedSkills.includes(p)}
            />
            <label htmlFor={p}>
              <P>{SkillToText(p)}</P>
            </label>
          </li>
        ))}

        {alreadyChosen.map((p) => (
          <li key={p} className="form-control flex flex-row w-full gap-4 ">
            <input
              type="checkbox"
              id={p}
              className="checkbox checkbox-disabled"
              disabled
            />
            <label htmlFor={p} className="text-neutral">
              {SkillToText(p)} (Already Proficient)
            </label>
          </li>
        ))}
      </ul>
      <div className="divider"></div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <h3>Current Proficiencies</h3>
          <ul className="list-disc ml-4">
            {skillProficiencies.map((p) => (
              <li key={p}>
                <P>{SkillToText(p)}</P>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3>After Selections</h3>
          <ul>
            {skillProficiencies.map((p) => (
              <li key={p} className="list-disc ml-4">
                <P>{SkillToText(p)}</P>
              </li>
            ))}
            {selectedSkills.map((p) => (
              <li key={p}>
                <span className="font-bold">+</span> <P>{SkillToText(p)}</P>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ChoiceResolverButton
        choiceId={choice.id}
        selected={selectedSkills}
        disabled={selectedSkills.length !== choice.amountOfOptionToChoose}
      />
    </div>
  );
};

export default SetSkillProficiencyResolver;
