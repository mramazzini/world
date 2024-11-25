'use client';
import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import useCharacterState from '@/hooks/useCharacter/useCharacterState';
import useHitpoints from '@/hooks/useHitpoints';
import Skeleton from '@/components/UI/Skeleton';

const HitPointsHandler = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const state = useCharacterState();
  const [hpDeltaValue, setHpDeltaValue] = useState<number>(1);

  const { maxhp, currenthp, temphp, applyDamage, applyHealing } =
    useHitpoints();

  if (!character) return <Skeleton height={100} />;

  if (!state) return <Skeleton height={100} />;

  return (
    <div className="indicator w-full">
      {/* <Tooltip
          element={
            <span className="indicator-item badge badge-info badge-sm p-2 flex justify-center items-center z-[1] indicator-top indicator-start">
              i
            </span>
          }
          title={'Hit Points'}
          additionalContent={
            <div>
              <div className="divider m-0" />
              <p className="text-center font-bold">Max HP</p>
              <div className="bg-base-200 text-base-content">
                <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                  <thead>
                    <tr className="bg-black/30">
                      <th>Reason</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    {character.state.hp.maxReasons.map((reason, index) => (
                      <tr key={index}>
                        <td>{reason.reason}</td>
                        <td>{reason.effect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {character.state.hp.current != character.state.hp.max && (
                <>
                  {' '}
                  <div className="divider m-0" />
                  <p className="text-center font-bold">Current HP</p>
                  <div className="bg-base-200 text-base-content">
                    <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                      <thead>
                        <tr className="bg-black/30">
                          <th>Reason</th>
                          <th>Effect</th>
                        </tr>
                      </thead>
                      <tbody>
                        {character.state.hp.damageLog.map((reason, index) => (
                          <tr key={index}>
                            <td>{reason.reason}</td>
                            <td>{reason.effect}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {character.state.hp.temporary > 0 && (
                <>
                  <div className="divider m-0" />
                  <p className="text-center font-bold">Temporary HP</p>
                  <div className="bg-base-200 text-base-content">
                    <table className="table  table-zebra table-xs  mt-2 rounded-xl">
                      <thead>
                        <tr className="bg-black/30">
                          <th>Reason</th>
                          <th>Effect</th>
                        </tr>
                      </thead>
                      <tbody>
                        {character.state.hp.temporary > 0 && (
                          <tr>
                            <td>Temporary HP</td>
                            <td>{character.state.hp.temporary}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          }
        >
          {`Your hitpoints are defined by the following:`}
        </Tooltip> */}
      <div className="flex flex-col w-full">
        <div className="rounded-t-xl px-2 pt-2 font-bold text-center border-primary text-xs border-t border-x w-full">
          Hit Points
        </div>
        <div className="divider px-2 m-0 border-x border-primary"></div>
        <div className="px-2 text-center border-x text-xl font-bold border-primary flex items-center justify-center">
          {currenthp} / {maxhp}{' '}
          {temphp > 0 && <span className="ml-1 text-success">+ {temphp}</span>}
        </div>
        <div className="divider px-2 m-0 border-x border-primary"></div>
        <div className="rounded-b-xl px-2 pb-2 text-center border-primary text-xs border-b border-x font-bold ">
          <div className="join w-full flex items-center justify-center">
            <button
              className="btn btn-error btn-xs w-12  join-item"
              onClick={(e) => {
                e.preventDefault();
                if (hpDeltaValue <= 0) return;
                applyDamage(hpDeltaValue);
              }}
            >
              -{' '}
            </button>
            <input
              type="number"
              className="input input-xs w-12 join-item  border-y-neutral border-2 text-center"
              value={hpDeltaValue}
              onChange={(e) => setHpDeltaValue(parseInt(e.target.value))}
            />

            <button
              className="btn btn-success btn-xs w-12 join-item"
              onClick={(e) => {
                e.preventDefault();
                if (hpDeltaValue <= 0) return;
                applyHealing(hpDeltaValue);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HitPointsHandler;
