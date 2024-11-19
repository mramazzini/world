import useProficiency from '@/hooks/useProficiency';
import { SetSkillExpertiseParams } from '@/lib/types/protocols';
import { SkillToText } from '@/lib/utils/toText/SkillToText';
import P from '@/Utility/FormatAndSanitize';
import { Choice } from '@prisma/client';
import { useMemo } from 'react';

const SetSkillExpertiseResolver = ({ choice }: { choice: Choice }) => {
  const { skillExpertises } = useProficiency();
  const params = choice.fetchParams as SetSkillExpertiseParams;

  const filteredParams = useMemo(
    () => params.filter((p) => !skillExpertises.includes(p)),
    [params, skillExpertises]
  );

  const alreadyChosen = useMemo(
    () => params.filter((p) => skillExpertises.includes(p)),
    [params, skillExpertises]
  );
  return (
    <div>
      <h3>Set Skill Expertises</h3>
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
            <input type="checkbox" id={p} className="checkbox " />
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
            <label htmlFor={p}>
              <P>{SkillToText(p)}</P>
            </label>
          </li>
        ))}
      </ul>
      <div className="divider"></div>
      <h3>Current Expertises</h3>
      <ul>
        {skillExpertises.map((p) => (
          <li key={p}>
            <P>{SkillToText(p)}</P>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SetSkillExpertiseResolver;
