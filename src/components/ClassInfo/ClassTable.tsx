'use client';

import numberArray from '@/lib/utils/numberArray';
import numPlace from '@/lib/utils/numPlace';
import { useState } from 'react';
import { Level, SpellLevel } from '@/lib/types/types';
import { ClassInfo } from '@/lib/types/modelInfo';
import useClassSpellSlots from '@/hooks/useClassSpellSlots';
import Loading from '../UI/Loading';
interface Props {
  classObj: ClassInfo;
}

const ClassTable = ({ classObj }: Props) => {
  const features = classObj.Features;
  const spellCastingFeatures = classObj.SpellcastingFeatures;
  const { spellSlots, loading } = useClassSpellSlots(classObj.id);
  const [expand, setExpand] = useState(false);

  if (loading || !spellSlots) return <Loading />;
  return (
    <>
      <div className={`overflow-auto ${expand ? 'h-90vh' : 'max-h-[300px]'}`}>
        <table className="table table-zebra sm:table-xs md:table-sm lg:table-md my-4 table-pin-rows   max-w-[1800px] ">
          <thead>
            <tr className="text-base-content ">
              <th className="text-left bg-black/20 w-[5%]">Level</th>
              <th className="text-left bg-black/20 ">Proficiency Bonus</th>

              {features &&
                features.map((feature) => {
                  const tableCol = feature.columnedFeatures;

                  if (!tableCol) return null;
                  return tableCol.map((col, index) => {
                    return (
                      <th key={index} className="text-left bg-black/20">
                        {col.name}
                      </th>
                    );
                  });
                })}
              <th className="text-left bg-black/20 ">Features</th>
              {/* spellcasting features */}
              {spellCastingFeatures &&
                spellCastingFeatures.map((feature) => {
                  const tableCol = feature.columnedFeatures;

                  if (!tableCol) return null;
                  return tableCol.map((col, index) => {
                    return (
                      <th key={index} className="text-left bg-black/20">
                        {col.name}
                      </th>
                    );
                  });
                })}
              {/* spell slots */}
              {numberArray(1, 9).map((num) => {
                let displaySpellSlot = false;
                for (let i = 1; i < 20; i++) {
                  const level = spellSlots[i as Level];
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
            {numberArray(1, 20).map((num) => (
              <tr key={num}>
                {/* level */}
                <th>{numPlace(num)}</th>
                {/* proficiency bonus */}
                <td>+{Math.ceil(num / 4) + 1}</td>
                {features.map((feature) => {
                  const tableCol = feature.columnedFeatures;
                  if (!tableCol) return null;
                  return tableCol.map((col, index) => {
                    return <td key={index}>{col.rows[num - 1]}</td>;
                  });
                })}
                {/* features */}
                <td>
                  <ul>
                    {/* {classObj.spellCastingInfo &&
                      classObj.spellCastingInfo.levelAquired === num && (
                        <li>Spellcasting </li>
                      )} */}
                    {features.map((feature, index) => {
                      const lvls = feature.Effects.map((e) => e.level);

                      return (
                        lvls &&
                        lvls.map((lvl) => {
                          if (lvl === num) {
                            return (
                              <li key={index}>
                                {feature.name}{' '}
                                {lvl != lvls[0] &&
                                  lvls.length < 5 &&
                                  `(x${
                                    lvls.findIndex((value) => value === lvl) + 1
                                  })`}
                              </li>
                            );
                          }
                        })
                      );
                    })}
                    {classObj.subClassFeatureLevels.includes(num) ? (
                      <li>
                        {classObj.subClassName}{' '}
                        {classObj.subClassFeatureLevels.findIndex(
                          (value) => value === num
                        ) > 0 && 'Feature'}
                      </li>
                    ) : null}
                  </ul>
                </td>

                {/* spellcasting features */}
                {spellCastingFeatures &&
                  spellCastingFeatures.map((feature) => {
                    const tableCol = feature.columnedFeatures;

                    if (!tableCol) return null;
                    return tableCol.map((col, index) => {
                      return <td key={index}>{col.rows[num - 1]}</td>;
                    });
                  })}
                {/* spell slots */}
                {numberArray(1, 9).map((spellLevel) => {
                  let displaySpellSlot = false;
                  for (let i = 1; i < 20; i++) {
                    const level = spellSlots[i as Level];
                    if (level) {
                      const slots = level[spellLevel as SpellLevel];
                      if (slots) {
                        displaySpellSlot = true;
                        break;
                      }
                    }
                  }

                  if (!displaySpellSlot) return null;
                  const thisLevel = spellSlots[num as Level];
                  if (!thisLevel) return <td key={spellLevel}>{'-'}</td>;
                  const slots = thisLevel[spellLevel as SpellLevel];
                  return <td key={spellLevel}>{slots || '-'}</td>;
                })}
              </tr>
            ))}
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

export default ClassTable;
