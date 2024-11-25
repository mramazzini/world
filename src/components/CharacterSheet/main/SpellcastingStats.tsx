import Tooltip from '@/Utility/Tooltip';
import AbilityToText from '@/lib/utils/toText/AbilityToText';
import Image from 'next/image';
import useSpellcaster from '@/hooks/useSpellcaster';
import useProficiency from '@/hooks/useProficiency';
import useCharacterState from '@/hooks/useCharacter/useCharacterState';
import Skeleton from '@/components/UI/Skeleton';
import useLog from '@/hooks/useLog';
import { useAppDispatch } from '@/store/hooks';
import { setActiveSpellCastingClassId } from '@/store/sheetSlice';

const SpellcastingStats = () => {
  const dispatch = useAppDispatch();

  const state = useCharacterState();
  const {
    ability,
    modifier,
    isSpellcaster,
    spellSaveDC,
    spellAttackBonus,
    spellcastingClasses,
  } = useSpellcaster();
  const { diceLogPush } = useLog();
  const { proficiencyBonus } = useProficiency();

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const classId = e.target.value;
    dispatch(setActiveSpellCastingClassId(classId));
  };

  if (!state) return <Skeleton height={200} />;

  return (
    <div className="flex flex-col   rounded-xl border-secondary border bg-base-300 h-full">
      <h2 className="pb-0 px-4 text-sm text-center">Spellcasting</h2>
      <div className="divider m-0"></div>
      {isSpellcaster ? (
        <div className="flex flex-wrap justify-center flex-col px-4 pb-4">
          {/* spellcasting ability, spell save, spell attack roll */}
          <div className="flex flex-row items-center justify-between w-full">
            <h3 className="p-0 text-base">Ability</h3>
            <div className="flex flex-row items-center">
              <p className="badge badge-secondary  font-bold">{ability}</p>
            </div>
          </div>
          <div className="divider m-0"></div>
          <div className="flex flex-row items-center justify-between w-full">
            <h3 className="p-0 text-base">Save DC</h3>
            <div className="flex flex-row items-center join">
              <Tooltip
                title="Spell Save DC"
                additionalContent={
                  <div className="bg-base-200 text-base-content">
                    <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                      <thead>
                        <tr className="bg-black/30">
                          <th>Reason</th>
                          <th>Effect</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Base Spell Save DC</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <td>Proficiency</td>
                          <td>+ {proficiencyBonus}</td>
                        </tr>
                        <tr>
                          <td>{AbilityToText(ability)} Modifier</td>
                          <td>
                            {modifier >= 0 ? `+ ${modifier}` : `- ${modifier}`}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                }
                element={
                  <span className="badge badge-info  p-2 flex justify-center items-center z-[1] join-item text-xs">
                    i
                  </span>
                }
              />
              <p className="badge badge-secondary  font-bold join-item">
                {spellSaveDC}
              </p>
            </div>
          </div>
          <div className="divider m-0"></div>
          <div className="flex flex-row items-center justify-between w-full">
            <h3 className="p-0 text-base">Attack</h3>
            <div className="flex flex-row items-center join">
              <Tooltip
                title="Spell Attack Roll"
                additionalContent={
                  <div className="bg-base-200 text-base-content">
                    <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                      <thead>
                        <tr className="bg-black/30">
                          <th>Reason</th>
                          <th>Effect</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Proficiency</td>
                          <td>+ {proficiencyBonus}</td>
                        </tr>
                        <tr>
                          <td>{modifier} Modifier</td>
                          <td>
                            {modifier > 0 ? `+ ${modifier}` : `- ${modifier}`}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                }
                element={
                  <span className="badge badge-info badge-lg p-2 flex justify-center items-center z-[1] join-item text-xs">
                    i
                  </span>
                }
              />
              <button
                className="btn btn-accent btn-xs font-bold join-item"
                onClick={(e) => {
                  e.preventDefault();
                  diceLogPush(
                    `1d20 + ${spellAttackBonus}`,
                    `Spell Attack Roll`
                  );
                }}
              >
                + {spellAttackBonus}
              </button>
            </div>
          </div>
          <div className="divider m-0"></div>
          {/* Class selection */}
          {spellcastingClasses.length > 1 && (
            <>
              <div className="flex flex-row items-center justify-between w-full">
                <h3 className="p-0 text-base">Class</h3>
                <select
                  className="select select-bordered select-accent max-w-32 select-sm "
                  onChange={handleClassChange}
                >
                  {spellcastingClasses.map((c) => (
                    <option key={c.classId} value={c.classId}>
                      {c.Class.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="divider m-0"></div>
            </>
          )}
        </div>
      ) : (
        <div className="bg-base-300 rounded-xl p-4  mt-2 py-0 flex flex-col items-center">
          <p className="italic font-bold p-2 text-center">
            {state.name} is many things, but a spellcaster they are not!
          </p>
          <Image
            className="rounded-lg w-[100px] h-[100px] object-cover object-top m-4"
            src={'/images/Magic-ball.png'}
            width={100}
            height={100}
            alt="Magic Ball"
          />
        </div>
      )}
    </div>
  );
};

export default SpellcastingStats;
