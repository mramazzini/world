import { SpellInfo } from '@/lib/types/modelInfo';
import { SpellID, SpellLevel } from '@/lib/types/types';
import numberArray from '@/lib/utils/numberArray';
import numPlace from '@/lib/utils/numPlace';
import SpellPage from '@/pages-lib/wiki/official/Spell.page';
import { useAppSelector } from '@/store/hooks';
import { useEffect, useState } from 'react';
import SpellSelect from './SpellSelect';
import { memoizeGetSpell } from '@/Utility/Indexed/globalCache';
import P from '@/Utility/FormatAndSanitize';

//Show free spells
//Show prepared spells
//Change prepared spell if castertype is prepared
//show spell slots max + current

const SpellSheet = () => {
  const { spellSlots, currentSpellSlots, freeSpells, preparedSpells } =
    useAppSelector((state) => state.sheet);
  const [selectedSpellId, setSelectedSpellId] = useState<SpellID | null>(null);
  const [selectedSpell, setSelectedSpell] = useState<SpellInfo | null>(null);

  useEffect(() => {
    const setSpell = async () => {
      if (!selectedSpellId) return;
      const spell = await memoizeGetSpell({
        query: selectedSpellId,
        type: 'id',
      });
      setSelectedSpell(spell);
    };
    console.log(currentSpellSlots);
    setSpell();
  }, [preparedSpells, selectedSpellId, currentSpellSlots]);
  return (
    <div className="grid grid-cols-2 gap-4 bg-base-200 p-4 rounded-xl ">
      <h2 className="divider bg-base-300 p-4 m-0 col-span-2">Spell Slots</h2>
      <div
        className={`flex flex-wrap gap-4  items-center justify-center w-full col-span-2 `}
      >
        {Object.entries(spellSlots).map(([level, slots]) => (
          <div
            key={level}
            className="flex flex-col gap-2 items-center justify-center bg-base-300 p-4 rounded-xl min-w-48"
          >
            <p className="badge badge-xl p-4 badge-accent">
              {numPlace(Number(level))} level
            </p>
            <div className="flex gap-2 items-center justify-center">
              {numberArray(1, slots).map((num) => (
                <div
                  key={num}
                  className={`w-6 h-6 rounded-full  ${
                    num <= (currentSpellSlots[Number(level) as SpellLevel] || 0)
                      ? 'bg-primary'
                      : 'bg-base-300 border border-white'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-base-300 p-4 rounded-xl col-span-1 border border-primary max-h-[986px] overflow-scroll">
        {selectedSpell ? (
          <SpellPage spell={selectedSpell} />
        ) : (
          <div className="h-32 p-4 flex justify-center items-center">
            <h3 className="divider bg-base-200 w-full px-2 rounded-xl">
              No Spell Selected
            </h3>
          </div>
        )}
      </div>
      <div className="bg-base-300 p-4 rounded-xl gap-4 flex flex-col max-h-[986px] overflow-scroll border border-primary">
        {freeSpells.length > 0 && (
          <div className="bg-base-200 p-4 rounded-xl flex gap-4 flex-col">
            <h2 className="divider  mt-0">Free Spells</h2>
            <p className="text-center">
              <P>Spells you can cast without expending a spell slot.</P>
            </p>
            {freeSpells.map((spellId) => (
              <SpellSelect
                key={spellId}
                spell={spellId}
                selectSpell={setSelectedSpellId}
              />
            ))}
          </div>
        )}
        {preparedSpells.length > 0 && (
          <div className="bg-base-200 p-4 rounded-xl flex gap-4 flex-col">
            <h2 className="divider mt-0">Prepared Spells</h2>
            <p className="text-center">
              <P>
                Spells you have prepared and can cast by expending a spell slot.
              </P>
            </p>

            {preparedSpells.map((spellId) => (
              <SpellSelect
                key={spellId}
                spell={spellId}
                selectSpell={setSelectedSpellId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpellSheet;
