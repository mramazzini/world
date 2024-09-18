"use client";
import { calcWeight } from "@/app/components/Utility/characterStateFunctions/calc/calcWeight";
import P from "@/app/components/Utility/FormatAndSanitize";
import { memoizeGetItem } from "@/app/components/Utility/globalCache";
import ModelDisplay from "@/app/components/Utility/ModelDisplay";
import Tooltip from "@/app/components/Utility/Tooltip";
import { CharacterInfo, WeaponInfo } from "@/lib/types";
import numberArray from "@/lib/utils/numberArray";
import Image from "next/image";
import { use, useEffect, useState } from "react";

interface Props {
  character: CharacterInfo;
  setState: (state: PrismaJson.CharacterState) => void;
}

const LoadoutUI = ({ character, setState }: Props) => {
  const [currentWeight, setCurrentWeight] =
    useState<null | PrismaJson.QuantityUnit>(null);
  const [equippedWeapons, setEquippedWeapons] = useState<WeaponInfo[]>([]);
  useEffect(() => {
    if (!character.state) return;
    calcWeight(character.state).then((res) => setCurrentWeight(res));
  }, [character.state?.inventory]);
  useEffect(() => {
    const fetchWeapons = async () => {
      if (!character.state?.equipped.hands.items) return;
      const weaponData = character.state.equipped.hands.items.map(
        (weapon) => memoizeGetItem(weapon) as Promise<WeaponInfo>
      );
      const res = (await Promise.all(weaponData)) as WeaponInfo[];
      setEquippedWeapons(res);
    };
    fetchWeapons();
  }, [character.state?.equipped.hands.items]);
  return (
    character &&
    character.state && (
      <div className="grid grid-cols-6 w-full  gap-4 rounded-xl mb-4">
        <section className="indicator indicator col-span-2  bg-base-200  rounded-xl p-4 w-full flex justify-center col-span-6">
          <Tooltip
            element={<span className="indicator-item badge badge-info">i</span>}
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
                    {character.state.equipped.hands.numberOfHandsReasons.map(
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
          </Tooltip>
          <div className="flex flex-col bg-base-300 rounded-xl border border-primary w-full">
            <p className="text-sm text-center px-2 pt-2 font-bold">Equipped</p>
            <div className="divider m-0" />
            <div className="flex flex-wrap justify-center">
              {numberArray(1, character.state.equipped.hands.numberOfHands).map(
                (i) => (
                  <div
                    className="m-2 border-2 border-accent rounded-xl p-2 bg-base-100"
                    key={i}
                  >
                    {character.state?.equipped.hands.items &&
                    character.state?.equipped.hands.items[i - 1] ? (
                      <div className="indicator">
                        <button
                          onClick={() => {
                            const newHands = [
                              ...(character.state?.equipped.hands.items || []),
                            ];
                            newHands.splice(i - 1, 1);
                            if (!character.state) return;
                            setState({
                              ...character.state,
                              equipped: {
                                ...character.state.equipped,
                                hands: {
                                  ...character.state.equipped.hands,
                                  items: newHands,
                                },
                              },
                            });
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
                        <span className="flex items-center justify-center w-[50px] h-[50px]">
                          <span className="text-xs text-center">
                            <P>{`^${
                              character.state.equipped.hands.items[i - 1]
                            }{}^`}</P>
                          </span>
                        </span>
                      </div>
                    ) : (
                      <Image
                        src="/sword.svg"
                        width={50}
                        height={50}
                        alt="hand"
                        key={i}
                        className="opacity-30 "
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
        <section className="indicator indicator    bg-base-200  rounded-xl p-4 w-full flex justify-center col-span-6">
          <Tooltip
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
            The armor you wear determines your Armor Class (AC), which
            represents how well you can defend yourself from attacks
          </Tooltip>
          <div className="flex flex-col bg-base-300 rounded-xl border border-primary w-full">
            <p className="text-sm text-center px-2 pt-2 font-bold">Armor</p>
            <div className="divider m-0" />
            <div className="flex flex-wrap justify-center">
              <div className="m-2 border-2 border-accent rounded-xl p-2 bg-base-100 ">
                {character.state.equipped.armor ? (
                  <span className="flex items-center justify-center w-[50px] h-[50px]">
                    <span className="text-xs text-center">
                      <P>{`^${character.state.equipped.armor}{}^`}</P>
                    </span>
                  </span>
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
        <section className="indicator indicator  col-span-2  bg-base-200  rounded-xl p-4 w-full flex justify-center col-span-6">
          <Tooltip
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
          </Tooltip>
          <div className="flex flex-col bg-base-300 rounded-xl border border-primary w-full">
            <p className="text-sm text-center px-2 pt-2 font-bold">
              Carrying Capacity
            </p>
            <div className="divider m-0" />{" "}
            <p className="text-center">
              {Math.round(currentWeight?.quantity || 0)} {currentWeight?.unit}{" "}
              carried
            </p>
            <div className="divider m-0" />{" "}
            <p className="text-center items-center flex justify-center pb-3">
              Max: {character.state.carryingCapacity} lbs
            </p>
          </div>
        </section>
      </div>
    )
  );
};

export default LoadoutUI;
