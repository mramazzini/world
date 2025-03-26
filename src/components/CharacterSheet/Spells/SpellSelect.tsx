import { SpellInfo } from '@/lib/types/modelInfo';
import { SpellID, SpellLevel } from '@/lib/types/types';
import { memoizeGetSpell } from '@/Utility/Indexed/globalCache';
import { useEffect, useState } from 'react';
import SpellSlotSelect from './SpellSlotSelect';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCharacterState } from '@/store/sheetSlice';
import { toSpellLevel } from '@/lib/utils/toSpellLevel';
import Image from 'next/image';
import Tooltip from '@/Utility/Tooltip';

interface SpellSelectProps {
  freeSpell: boolean;
  spell: SpellID;
  selectSpell: (spellId: SpellID) => void;
}

const SpellSelect = ({
  spell,
  selectSpell,
  freeSpell = false,
}: SpellSelectProps) => {
  const [hide, setHide] = useState<boolean>(true);
  const { spellSlots } = useAppSelector((state) => state.sheet);
  const [spellData, setSpellData] = useState<SpellInfo | null>(null);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.sheet.state);
  const [spellLevel, setSpellLevel] = useState<SpellLevel>(0 as SpellLevel);

  useEffect(() => {
    const fetchSpell = async () => {
      const res = await memoizeGetSpell({
        query: spell,
        type: 'id',
      });
      setSpellData(res);
      setSpellLevel(res?.level as SpellLevel);
    };
    fetchSpell();
  }, [spell]);

  const castSpell = (level: SpellLevel) => {
    if (freeSpell && spellLevel == spellData?.level) return;
    if (state === undefined) return;
    if (state?.spellSlotsUsedSinceLastRefresh === undefined) return;
    if (state.spellSlotsUsedSinceLastRefresh[level] === undefined) {
      dispatch(
        setCharacterState({
          ...state,
          spellSlotsUsedSinceLastRefresh: {
            ...state.spellSlotsUsedSinceLastRefresh,
            [level]: 1,
          },
        })
      );
      return;
    }
    if (state.spellSlotsUsedSinceLastRefresh[level] === spellSlots[level])
      return;
    dispatch(
      setCharacterState({
        ...state,
        spellSlotsUsedSinceLastRefresh: {
          ...state.spellSlotsUsedSinceLastRefresh,
          [level]: (state?.spellSlotsUsedSinceLastRefresh[level] ?? 0) + 1,
        },
      })
    );
  };

  return (
    <div
      className="flex flex-col items-start justify-start bg-base-300 rounded-xl w-full p-4 gap-4"
      id={spell}
    >
      <div className="flex flex-row items-center justify-start bg-base-300 rounded-xl w-full ">
        <div
          className="tooltip font-bold"
          data-tip={hide ? 'Read More' : 'Hide'}
        >
          <button
            onClick={() => {
              setHide(!hide);
              selectSpell(spell);
            }}
            className={`btn ${hide ? 'btn-ghost border border-gray-500' : 'btn-primary'}`}
          >
            <h3 className="text-lg ">{spellData?.name}</h3>
          </button>
        </div>
        <div className="divider divider-vertical flex-grow px-4"></div>
        <div className="flex flex-row gap-2 items-center justify-start ml-auto">
          <Tooltip
            element={
              spellLevel === spellData?.level ? (
                <button
                  className="btn btn-ghost border border-gray-500"
                  onClick={() => castSpell(spellLevel)}
                >
                  Casting - {toSpellLevel(spellLevel ?? 0)}
                </button>
              ) : (
                <button
                  className="btn btn-ghost border border-gray-500 relative bg-red-800 bg-opacity-50 overflow-hidden"
                  onClick={() => castSpell(spellLevel)}
                >
                  <Image
                    src="/gifs/fire-pixel.gif"
                    width={20}
                    height={20}
                    className="absolute w-full  bottom-0 right-0 z-0 opacity-100"
                    alt="asdasd"
                  />
                  <p className="relative z-1 bg-black bg-opacity-75 p-1 rounded-full  text-white">
                    Upcasting - {toSpellLevel(spellLevel ?? 0)}
                  </p>
                </button>
              )
            }
          >
            {spellData?.level === spellLevel
              ? 'Cast a Spell at the given spell slot level.'
              : `Upcast a Spell to the given spell slot level. ${!spellData?.upcastInfo && '\nWARNING: This spell gains no benefit from upcasting.'}`}
          </Tooltip>
        </div>
      </div>
      {!hide && (
        <>
          <p className="text-sm">Casting Time: {spellData?.castingTime}</p>
          <p className="text-sm">Range: {spellData?.range}</p>
          <p className="text-sm">
            Components: {spellData?.verbal && 'V'} {spellData?.somatic && 'S'}{' '}
            {spellData?.material && 'M'} {spellData?.materialCost}
          </p>
          <p className="text-sm">Duration: {spellData?.duration}</p>

          {spellData && (
            <SpellSlotSelect
              spell={spellData}
              selectedSlot={spellLevel}
              setSelectedSlot={setSpellLevel}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SpellSelect;
