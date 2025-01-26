import useSpellcaster from '@/hooks/CharacterControllers/useSpellcaster';
import { SpellLevel } from '@/lib/types/types';
import numberArray from '@/lib/utils/numberArray';
import numPlace from '@/lib/utils/numPlace';
import { useAppSelector } from '@/store/hooks';
import P from '@/Utility/FormatAndSanitize';

//Show free spells
//Show prepared spells
//Change prepared spell if castertype is prepared
//show spell slots max + current

const SpellSheet = () => {
  const { spellSlots, currentSpellSlots, freeSpells, preparedSpells } =
    useAppSelector((state) => state.sheet);
  return (
    <div className="grid grid-cols-2 gap-4 bg-base-200 p-4 rounded-xl">
      <h2 className="divider bg-base-300 p-4 m-0 col-span-2">Spell Slots</h2>
      <div
        className={`flex flex-wrap gap-4  items-center justify-center w-full col-span-2`}
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
      <div className="bg-base-300 p-4 rounded-xl">
        <h2 className="divider  mt-0">Free Spells</h2>
        <p>Spells you can cast without expending a spell slot.</p>
        {freeSpells.map((spellId) => (
          <div
            key={spellId}
            className="flex flex-col gap-2 items-center justify-center bg-base-300 p-4 rounded-xl"
          >
            <p className=" p-4">
              {' '}
              <P>
                %{spellId}
                {`{}`}%
              </P>
            </p>
          </div>
        ))}
      </div>
      <div className="bg-base-300 p-4 rounded-xl">
        <h2 className="divider mt-0">Prepared Spells</h2>
        <p>Spells you have prepared and can cast by expending a spell slot.</p>
        {preparedSpells.map((spellId) => (
          <div
            key={spellId}
            className="flex flex-col gap-2 items-center justify-center bg-base-300 p-4 rounded-xl"
          >
            <p className="p-4 ">
              <P>
                %{spellId}
                {`{}`}%
              </P>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpellSheet;
