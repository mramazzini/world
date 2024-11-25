'use client';
import P from '@/Utility/FormatAndSanitize';
import numberArray from '@/lib/utils/numberArray';
import Image from 'next/image';
import useInventoryMutator from '@/hooks/useInventoryMutator';
import useCharacterState from '@/hooks/useCharacter/useCharacterState';
import useInventory from '@/hooks/useInventory';
import useAbility from '@/hooks/useAbilityScore';
import useLoadout from '@/hooks/useLoadout';
import { useArmorClass } from '@/hooks/useArmorClass';

const LoadoutUI = () => {
  const scores = useAbility();
  const state = useCharacterState();
  const { unequipItem, unequipArmor } = useInventoryMutator();
  const armorClass = useArmorClass();
  const { equippedState, handsUsed } = useLoadout();
  const { weight } = useInventory();

  if (!state) return null;

  return (
    <div className="grid grid-cols-6 w-full  gap-4 rounded-xl h-full">
      <section
        className="indicator col-span-2  bg-base-200  p-4 w-full flex justify-center flex-col items-start col-span-6 rounded-xl"
        style={{
          borderTopRightRadius: '0.75rem',
          borderTopLeftRadius: '0.75rem',
        }}
      >
        {/* <Tooltip
            element={
              <span className="indicator-item badge badge-info ">i</span>
            }
            title="Number of Hands"
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
                    {character.equipped.hands.numberOfHandsReasons.map(
                      (reason, index) => (
                        <tr key={index}>
                          <td>{reason.reason}</td>
                          <td>{reason.effect}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            }
          >
            The number of weapons you can wield at once is determined by the
            number of hands you have and how many hands each weapon requires.
          </Tooltip> */}
        <div className="flex flex-col bg-base-300 rounded-xl border border-primary w-full bo">
          <p className="text-sm text-center px-2 pt-2 font-bold">
            Equipped: {equippedState}
          </p>
          <div className="divider m-0" />
          <div className="flex flex-wrap justify-center">
            {state.weaponEquippedIds.map((i, index) => (
              <div
                className="m-2 border-2 border-accent rounded-xl p-2 bg-base-100"
                key={index}
              >
                <div className="indicator">
                  <button
                    onClick={() => {
                      unequipItem(i);
                    }}
                    className="indicator-item  bg-error flex justify-center items-center hover:bg-error/80 rounded-full w-4 h-4 top-[-5px] right-[-5px] cursor-pointer"
                  >
                    <Image
                      src="/images/exit.svg"
                      width={10}
                      height={10}
                      alt="hand"
                      className=""
                    />
                  </button>
                  <span className="flex items-center justify-center min-w-[50px] h-[50px]">
                    <span className="text-xs text-center">
                      <P>{`^${i}{}^`}</P>
                    </span>
                  </span>
                </div>
              </div>
            ))}
            {state.shieldEquippedId && (
              <div
                className="m-2 border-2 border-accent rounded-xl p-2 bg-base-100"
                key={state.shieldEquippedId}
              >
                <div className="indicator">
                  <button
                    onClick={() => {
                      if (state.shieldEquippedId)
                        unequipItem(state.shieldEquippedId);
                    }}
                    className="indicator-item  bg-error flex justify-center items-center hover:bg-error/80 rounded-full w-4 h-4 top-[-5px] right-[-5px] cursor-pointer"
                  >
                    <Image
                      src="/images/exit.svg"
                      width={10}
                      height={10}
                      alt="hand"
                      className=""
                    />
                  </button>
                  <span className="flex items-center justify-center min-w-[50px] h-[50px]">
                    <span className="text-xs text-center">
                      <P>{`^${state.shieldEquippedId}{}^`}</P>
                    </span>
                  </span>
                </div>
              </div>
            )}

            {numberArray(1, 2 - handsUsed).map((index) => (
              <div
                className="m-2 border-2 border-accent rounded-xl p-2 bg-base-100"
                key={index}
              >
                <Image
                  src="/sword.svg"
                  width={50}
                  height={50}
                  alt="hand"
                  key={index}
                  className="opacity-30 "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="indicator indicator    bg-base-200  rounded-xl p-4 w-full flex justify-center col-span-6">
        {/* <Tooltip
          element={<span className="indicator-item badge badge-info">i</span>}
          title="Armor"
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
                  {character.state.armorClassReasons.map((reason, index) => (
                      <tr key={index}>
                        <td>{reason.reason}</td>
                        <td>{reason.effect}</td>
                      </tr>
                    ))} 
                </tbody>
              </table>
            </div>
          }
        >
          The armor you wear determines your Armor Class (AC), which represents
          how well you can defend yourself from attacks
        </Tooltip> 
        */}

        <div className="flex flex-col bg-base-300 rounded-xl border border-primary w-full ">
          <p className="text-sm text-center px-2 pt-2 font-bold">
            Armor: AC = {armorClass}
          </p>
          <div className="divider m-0" />
          <div className="flex flex-wrap justify-center">
            <div className="m-2 border-2 border-accent rounded-xl p-2 bg-base-100 ">
              {state.armorEquippedId ? (
                <div className="indicator">
                  <button
                    onClick={() => {
                      unequipArmor();
                    }}
                    className="indicator-item  bg-error flex justify-center items-center hover:bg-error/80 rounded-full w-4 h-4 top-[-5px] right-[-5px] cursor-pointer"
                  >
                    <Image
                      src="/images/exit.svg"
                      width={10}
                      height={10}
                      alt="hand"
                      className=""
                    />
                  </button>
                  <span className="flex items-center justify-center min-w-[50px] h-[50px]">
                    <span className="text-xs text-center">
                      <P>{`^${state.armorEquippedId}{}^`}</P>
                    </span>
                  </span>
                </div>
              ) : (
                <Image
                  src="/armor.svg"
                  width={50}
                  height={50}
                  alt="hand"
                  className="opacity-30 "
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="indicator indicator  col-span-2  bg-base-200  rounded-xl p-4 w-full   flex justify-center col-span-6 ">
        {/* <Tooltip
          element={<span className="indicator-item badge badge-info">i</span>}
          title="Carrying Capacity"
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
                  {character.state.carryingCapacityReasons.map(
                      (reason, index) => (
                        <tr key={index}>
                          <td>{reason.reason}</td>
                          <td>{reason.effect}</td>
                        </tr>
                      )
                    )}
                </tbody>
              </table>
            </div>
          }
        >
          The amount of weight you can carry is determined by your Strength
          score.
        </Tooltip> */}
        <div className="flex flex-col bg-base-300 rounded-xl border border-primary w-full ">
          <p className="text-sm text-center px-2 pt-2 font-bold">
            Carrying Capacity
          </p>
          <div className="divider m-0" />{' '}
          <p className="text-center">{Math.round(weight)} lbs carried</p>
          <div className="divider m-0" />{' '}
          <p className="text-center items-center flex justify-center pb-3">
            Max: {scores.STR * 15} lbs
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoadoutUI;
