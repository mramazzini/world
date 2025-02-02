import Loading from '@/components/UI/Loading';
import useQuerySpellsFromGroup from '@/hooks/apiHooks/useQueryFilteredSpells';
import { AddPreparedSpellParams } from '@/lib/types/protocols';
import { Choice } from '@prisma/client';
import { useState } from 'react';
import ChoiceResolverButton from '../../ChoiceResolverButton';
import P from '@/Utility/FormatAndSanitize';

const AddKnownSpellResolver = ({ choice }: { choice: Choice }) => {
  const params = choice.fetchParams as AddPreparedSpellParams;
  const [selected, setSelected] = useState<string[]>([]);

  const { spells, loading } = useQuerySpellsFromGroup({
    spellLevels: params.fromGroup?.levels ?? [],
    spellListIds: params.fromGroup?.spellListIds ?? [],
  });
  return (
    <div>
      <h3>Add Prepared Spell</h3>
      {choice.amountOfOptionToChoose === 1 ? (
        <p>
          Choose a spell to always have prepared. This will allow you to cast
          this spell using a spell slot.
        </p>
      ) : (
        <p>
          Choose {choice.amountOfOptionToChoose} spells to always have prepared.
          This will allow you to cast these spells using a spell slot.
        </p>
      )}
      <div className="divider"></div>
      {loading ? (
        <Loading />
      ) : (
        <ul className="flex flex-col gap-2">
          {spells.map((spell) => (
            <li
              key={spell.id}
              className="form-control flex flex-row w-full gap-4 "
            >
              <input
                type="checkbox"
                id={spell.id}
                className="checkbox"
                disabled={
                  selected.length >= choice.amountOfOptionToChoose &&
                  !selected.includes(spell.id)
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelected([...selected, spell.id]);
                  } else {
                    setSelected(selected.filter((s) => s !== spell.id));
                  }
                }}
                checked={selected.includes(spell.id)}
              />
              <label htmlFor={spell.id}>
                <P>{`%${spell.id}{${spell.name}}%`}</P>
              </label>
            </li>
          ))}
        </ul>
      )}{' '}
      <div className="divider"></div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <h3>Current Free Spells</h3>
          <ul className="list-disc ml-4">
            {/* {skillProficiencies.map((p) => (
              <li key={p}>
                <P>{SkillToText(p)}</P>
              </li>
            ))} */}
          </ul>
        </div>
        <div className="col-span-1">
          <h3>After Selections</h3>
          <ul>
            {/* {skillProficiencies.map((p) => (
              <li key={p} className="list-disc ml-4">
                <P>{SkillToText(p)}</P>
              </li>
            ))} */}
            {selected.map((p) => (
              <li key={p}>
                <span className="font-bold">+</span>{' '}
                <P>{`%${p}{${spells.find((s) => s.id === p)?.name}}%`}</P>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ChoiceResolverButton
        choiceId={choice.id}
        selected={selected}
        disabled={selected.length !== choice.amountOfOptionToChoose}
      />
    </div>
  );
};

export default AddKnownSpellResolver;
