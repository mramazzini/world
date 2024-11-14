'use client';
import { SubClassInfo } from '@/lib/types/modelInfo';
// This is only required if the subclass is a spellcaster, and thus needs a spell slot table

import { Level, SpellLevel } from '@/lib/types/types';
import numberArray from '@/lib/utils/numberArray';
import numPlace from '@/lib/utils/numPlace';
import { useState } from 'react';

interface Props {
  subClass: SubClassInfo;
}

const SubClassTable: React.FC<Props> = ({ subClass }) => {
  const spellCasting = subClass.spellCastingInfo;
  const spellCastingFeatures = subClass.SpellCastingFeatures;
  const [expand, setExpand] = useState(false);
  if (!spellCasting) return null;
  return (
    <>
      <div className={`overflow-auto ${expand ? 'h-90vh' : 'max-h-[300px]'}`}>
        <table className="table table-zebra sm:table-xs md:table-sm lg:table-md my-4 table-pin-rows   max-w-[1800px] ">
          <thead>
            <tr>
              <th className="text-left bg-black/20 w-[20%]">Level</th>
              {spellCastingFeatures.map((feature) => {
                const cols = feature.SubClassColumnedFeature;
                if (!cols) return null;
                return cols.map((col, index) => {
                  return (
                    <th key={index} className="text-left bg-black/20">
                      {col.name}
                    </th>
                  );
                });
              })}
              {/* spell slots */}
              {spellCasting.displaySpellLevels &&
                numberArray(1, 9).map((num) => {
                  let displaySpellSlot = false;
                  for (let i = 1; i < 20; i++) {
                    const level = spellCasting.spellLevels[i as Level];
                    if (level) {
                      const slots = level[num as SpellLevel];
                      if (slots) {
                        displaySpellSlot = true;
                        break;
                      }
                    }
                  }
                  return (
                    displaySpellSlot && (
                      <th key={num} className="text-left bg-black/20 w-[10px]">
                        {numPlace(num)}
                      </th>
                    )
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {numberArray(spellCasting.levelAquired, 20).map((num) => {
              return (
                <tr key={num}>
                  <th>{num}</th>
                  {/* spellcasting features */}
                  {spellCastingFeatures &&
                    spellCastingFeatures.map((feature) => {
                      const tableCol = feature.SubClassColumnedFeature;

                      if (!tableCol) return null;
                      return tableCol.map((col, index) => {
                        return <td key={index}>{col.rows[num - 1]}</td>;
                      });
                    })}
                  {/* spell slots */}
                  {spellCasting &&
                    spellCasting.displaySpellLevels &&
                    numberArray(1, 9).map((spellLevel) => {
                      let displaySpellSlot = false;
                      for (let i = 1; i < 20; i++) {
                        const level = spellCasting.spellLevels[i as Level];
                        if (level) {
                          const slots = level[spellLevel as SpellLevel];
                          if (slots) {
                            displaySpellSlot = true;
                            break;
                          }
                        }
                      }

                      if (!displaySpellSlot) return null;
                      const thisLevel = spellCasting.spellLevels[num as Level];
                      if (!thisLevel) return <td key={spellLevel}>{'-'}</td>;
                      const slots = thisLevel[spellLevel as SpellLevel];
                      return <td key={spellLevel}>{slots || '-'}</td>;
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex w-full justify-center">
        <button
          onClick={() => setExpand(!expand)}
          className="btn btn-ghost mt-2"
        >
          {expand ? 'Collapse' : 'Expand'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ transform: expand ? 'rotate(180deg)' : '' }}
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SubClassTable;
