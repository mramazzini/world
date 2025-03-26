import { SpellID } from '@/lib/types/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCharacterState } from '@/store/sheetSlice';
import { useMemo } from 'react';

interface SelectedSpellOptionsProps {
  spell: SpellID;
}

const SelectedSpellOptions = ({ spell }: SelectedSpellOptionsProps) => {
  const { preparedSpells, state } = useAppSelector((state) => state.sheet);
  const dispatch = useAppDispatch();
  const addPreparedSpell = (spellId: SpellID) => {
    if (!state) return;
    dispatch(
      setCharacterState({
        ...state,
        preparedSpellsIds: [...(state?.preparedSpellsIds || []), spellId],
      })
    );
  };

  const removePreparedSpell = (spellId: SpellID) => {
    if (!state) return;
    dispatch(
      setCharacterState({
        ...state,
        preparedSpellsIds: state?.preparedSpellsIds?.filter(
          (id) => id !== spellId
        ),
      })
    );
  };

  const isPrepared = useMemo(
    () => preparedSpells.includes(spell),
    [preparedSpells, spell]
  );

  return (
    <div className="flex flex-row join mt-4 mx-4">
      {isPrepared ? (
        <button
          onClick={() => removePreparedSpell(spell)}
          className="btn border border-gray-500 join-item"
        >
          Unprepare Spell
        </button>
      ) : (
        <button
          onClick={() => addPreparedSpell(spell)}
          className="btn border border-gray-500 join-item"
        >
          Prepare Spell
        </button>
      )}
    </div>
  );
};

export default SelectedSpellOptions;
