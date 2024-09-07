import Tooltip from "@/app/components/Utility/Tooltip";
import { CharacterInfo } from "@/lib/types";
import numberArray from "@/lib/utils/numberArray";
import Image from "next/image";

interface Props {
  character: CharacterInfo;
}

const LoadoutUI = ({ character }: Props) => {
  return (
    character &&
    character.state && (
      <div className="grid grid-cols-6 w-full  gap-4 rounded-xl">
        <section className="indicator indicator mb-2 col-span-2  bg-base-200  rounded-xl p-4 w-full flex justify-center">
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
                    <Image
                      src="/sword.svg"
                      width={50}
                      height={50}
                      alt="hand"
                      key={i}
                      className="opacity-30 "
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>
        <section className="indicator indicator mb-2 col-span-2  bg-base-200  rounded-xl p-4 w-full flex justify-center">
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
                <Image
                  src="/armor.svg"
                  width={50}
                  height={50}
                  alt="hand"
                  className="opacity-30 "
                />
              </div>
            </div>
          </div>
        </section>
        <section className="indicator indicator mb-2 col-span-2  bg-base-200  rounded-xl p-4 w-full flex justify-center">
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
          <div className="flex flex-col bg-base-300 rounded-xl border border-primary">
            <p className="text-sm text-center px-2 pt-2 font-bold">
              Carrying Capacity
            </p>
            <div className="divider m-0" />
            <p className="text-center">
              {character.state.carryingCapacity} lbs
            </p>
          </div>
        </section>
      </div>
    )
  );
};

export default LoadoutUI;
