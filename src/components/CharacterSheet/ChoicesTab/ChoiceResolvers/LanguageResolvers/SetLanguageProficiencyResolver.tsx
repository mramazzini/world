import { SetLanguageProficiencyParams } from '@/lib/types/protocols';
import P from '@/Utility/FormatAndSanitize';
import { Choice, Language } from '@prisma/client';
import { useMemo, useState } from 'react';
import ChoiceResolverButton from '../../ChoiceResolverButton';
import { LanguageToText } from '@/lib/utils/toText/LanguageToText';
import { useAppSelector } from '@/store/hooks';

const SetLanguageProficiencyResolver = ({ choice }: { choice: Choice }) => {
  const { proficientLanguages: languages } = useAppSelector(
    (state) => state.sheet
  );
  const params = choice.fetchParams as SetLanguageProficiencyParams;
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);

  const filteredParams = useMemo(
    () => params.filter((p) => !languages.includes(p)),
    [params, languages]
  );

  const alreadyChosen = useMemo(
    () => params.filter((p) => languages.includes(p)),
    [params, languages]
  );

  return (
    <div>
      <h3>Set Language Proficiencies</h3>
      {choice.amountOfOptionToChoose === 1 ? (
        <p>Choose a language to be proficient in.</p>
      ) : (
        <p>
          Choose {choice.amountOfOptionToChoose} languages to be proficient in.
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
                selectedLanguages.length >= choice.amountOfOptionToChoose &&
                !selectedLanguages.includes(p)
              }
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedLanguages([...selectedLanguages, p]);
                } else {
                  setSelectedLanguages(
                    selectedLanguages.filter((s) => s !== p)
                  );
                }
              }}
              checked={selectedLanguages.includes(p)}
            />
            <label htmlFor={p}>
              <P>{LanguageToText(p)}</P>
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
              {LanguageToText(p)} (Already Proficient)
            </label>
          </li>
        ))}
      </ul>
      <div className="divider"></div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <h3>Current Proficiencies</h3>
          <ul className="list-disc ml-4">
            {languages.map((p) => (
              <li key={p}>
                <P>{LanguageToText(p)}</P>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3>After Selections</h3>
          <ul>
            {languages.map((p) => (
              <li key={p} className="list-disc ml-4">
                <P>{LanguageToText(p)}</P>
              </li>
            ))}
            {selectedLanguages.map((p) => (
              <li key={p}>
                <span className="font-bold">+</span> <P>{LanguageToText(p)}</P>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ChoiceResolverButton
        choiceId={choice.id}
        selected={selectedLanguages}
        disabled={selectedLanguages.length !== choice.amountOfOptionToChoose}
      />
    </div>
  );
};

export default SetLanguageProficiencyResolver;
