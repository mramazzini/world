import { SpellInfo } from '@/lib/types/modelInfo';
import { SpellID, SpellLevel } from '@/lib/types/types';
import numberArray from '@/lib/utils/numberArray';
import numPlace from '@/lib/utils/numPlace';
import { useAppSelector } from '@/store/hooks';
import { Fragment, useEffect, useState } from 'react';
import SpellSelect from './SpellSelect';
import { memoizeGetSpell } from '@/Utility/Indexed/globalCache';
import P from '@/Utility/FormatAndSanitize';
import DiceLog from '../main/DiceLog/DiceLog';
import SpellSearch from './SpellSearch';
import SpellDisplay from '@/components/Spells/SpellDisplay';
import Image from 'next/image';
import useCharacterState from '@/hooks/useCharacter/useCharacterState';

//Show free spells
//Show prepared spells
//Change prepared spell if castertype is prepared
//show spell slots max + current

const SpellSheet = () => {
  const { spellSlots, freeSpells, preparedSpells } = useAppSelector(
    (state) => state.sheet
  );

  const state = useCharacterState();

  const [selectedSpellId, setSelectedSpellId] = useState<SpellID | null>(null);
  const [selectedSpell, setSelectedSpell] = useState<SpellInfo | null>(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!selectedSpellId) {
      setSelectedSpellId(preparedSpells[0] || freeSpells[0] || null);
    }
    const setSpell = async () => {
      if (!selectedSpellId) return;
      const spell = await memoizeGetSpell({
        query: selectedSpellId,
        type: 'id',
      });
      setSelectedSpell(spell);
    };
    setSpell();
  }, [preparedSpells, selectedSpellId, freeSpells]);

  console.log(state?.spellSlotsUsedSinceLastRefresh);
  return (
    <div className="grid grid-cols-12  bg-base-200 p-4 rounded-xl gap-4">
      <h2 className="divider bg-base-300 p-4 m-0 col-span-12 rounded-xl">
        Spell Casting
      </h2>
      <div
        className={`flex flex-col gap-4  w-full col-span-2 bg-base-300 rounded-xl p-4 border border-primary max-h-[326px] overflow-scroll`}
      >
        <h3 className="text-center divider m-0">Spell Slots</h3>
        {Object.entries(spellSlots).map(([level, slots]) => (
          <Fragment key={level}>
            <div className="flex flex-row items-center justify-between bg-base-300 rounded-xl w-full">
              <p className="badge badge-accent text-nowrap">
                {numPlace(Number(level))} level
              </p>
              <div className="flex flex-wrap gap-2 items-center justify-center w-1/2">
                {numberArray(1, slots).map((num) => (
                  <div
                    key={num}
                    className={`w-4 h-4 rounded-full  transition-all duration-300 ${
                      num <=
                      (spellSlots[Number(level) as SpellLevel] ?? 0) -
                        (state?.spellSlotsUsedSinceLastRefresh[
                          Number(level) as SpellLevel
                        ] ?? 0)
                        ? 'bg-primary'
                        : 'bg-base-300 border border-white'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="divider m-0"></div>
          </Fragment>
        ))}
      </div>
      <div className="bg-base-300 p-4 rounded-xl col-span-4 border border-primary max-h-[326px] overflow-scroll">
        <DiceLog excludeRollButtons />
      </div>

      <div className="bg-base-300 rounded-xl col-span-6 border border-primary overflow-scroll row-span-2 max-h-[926px] flex flex-col">
        {selectedSpell ? (
          <>
            <div className="join pt-4 px-4">
              <button className="btn btn-primary join-item">Prepare</button>
              <button
                className="btn btn-primary join-item"
                onClick={() => setShow(!show)}
              >
                Penis
              </button>
              {show && (
                <Image
                  src={
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Penis_with_Labels.jpg/800px-Penis_with_Labels.jpg'
                  }
                  width={512}
                  height={512}
                  alt="pen"
                />
              )}
            </div>
            <div className="divider "></div>
            <SpellDisplay spell={selectedSpell} hideSpellLink />
          </>
        ) : (
          <div className="h-32 p-4 flex justify-center items-center">
            <h3 className="divider bg-base-200 w-full px-2 rounded-xl">
              No Spell Selected
            </h3>
          </div>
        )}
      </div>
      <div className="bg-base-300 p-4 rounded-xl gap-4 flex flex-row  border border-primary col-span-6">
        <div className="flex flex-col gap-4 max-h-[549px] overflow-scroll">
          {freeSpells.length > 0 && (
            <div className="bg-base-200 p-4 rounded-xl flex gap-4 flex-col">
              <h2 className="divider  mt-0">Free Spells</h2>
              <p className="text-center">
                <P>
                  Spells you can cast without expending a spell slot. Upcasting
                  will still use a slot.
                </P>
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
          <div className="bg-base-200 p-4 rounded-xl flex gap-4 flex-col">
            <h2 className="divider mt-0">Prepared Spells</h2>
            <p className="text-center">
              <P>
                Spells you have prepared and can cast by expending a spell slot.
              </P>
            </p>
            {preparedSpells.length === 0 && (
              <p className="text-center">
                <P>You do not have any spells prepared.</P>
              </p>
            )}
            {preparedSpells.map((spellId) => (
              <SpellSelect
                key={spellId}
                spell={spellId}
                selectSpell={setSelectedSpellId}
              />
            ))}
          </div>
        </div>
        <div className="bg-base-200 p-4 rounded-xl flex flex-col gap-4 w-1/3">
          <SpellSearch
            setSelectedSpellId={setSelectedSpellId}
            selectedSpellId={selectedSpellId || ''}
          />
        </div>
      </div>
    </div>
  );
};

export default SpellSheet;
