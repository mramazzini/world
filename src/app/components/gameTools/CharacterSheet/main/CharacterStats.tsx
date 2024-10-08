import Tooltip from "@/app/components/Utility/Tooltip";
import { CharacterInfo } from "@/lib/utils/types/types";

interface Props {
  character: CharacterInfo;
}

const CharacterStats = ({ character }: Props) => {
  return (
    character.state && (
      <>
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-row items-center justify-between">
            <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
              Armor Class{" "}
            </h2>
            <div className="flex flex-row items-center join">
              <Tooltip
                title="Armor Class"
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
                        {character.state.armorClassReasons.map(
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
                element={
                  <span className="badge badge-info p-2 flex justify-center items-center z-[1] join-item">
                    i
                  </span>
                }
              >
                Your Armor Class is defined by the following:
              </Tooltip>
              <p className="badge badge-secondary join-item font-bold w-14">
                {character.state.armorClass} AC
              </p>
            </div>
          </div>
          <div className="divider m-0"></div>
          {/* passive perception */}
          <div className="flex flex-row items-center justify-between">
            <h2 className="pb-0 px-4 text-sm flex flex-row items-center">PP</h2>
            <div className="flex flex-row items-center join">
              <Tooltip
                title="Passive Perception"
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
                        {character.state.passivePerceptionReasons?.map(
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
                element={
                  <span className="badge badge-info p-2 flex justify-center items-center z-[1] join-item">
                    i
                  </span>
                }
              >
                Your Passive Perception is defined by the following:
              </Tooltip>
              <p className="badge badge-secondary font-bold join-item w-14">
                DC {character.state.passivePerception}
              </p>
            </div>
          </div>
          <div className="divider m-0"></div>
          <div className="flex flex-row items-center justify-between">
            <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
              Speed{" "}
            </h2>
            <div className="flex flex-row items-center join">
              <Tooltip
                title="Speed"
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
                        {character.state.speed.bonuses.map((reason, index) => (
                          <tr key={index}>
                            <td>{reason.reason}</td>
                            <td>{reason.effect}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                }
                element={
                  <span className="badge badge-info p-2 flex join-item justify-center items-center z-[1]  ">
                    i
                  </span>
                }
              >
                Your Walking Speed is defined by the following:
              </Tooltip>
              <p className="badge badge-secondary font-bold join-item w-14">
                {character.state.speed.base} ft
              </p>
            </div>
          </div>
          <div className="divider m-0"></div>
          <div className="flex flex-row items-center justify-between">
            <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
              Running
            </h2>
            <div className="flex flex-row items-center join">
              <Tooltip
                title="Running Speed"
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
                        {character.state.speed.runningReasons.map(
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
                element={
                  <span className="badge badge-info p-2 flex justify-center items-center z-[1] join-item">
                    i
                  </span>
                }
              >
                Your Running Speed is defined by the following:
              </Tooltip>
              <p className="badge badge-secondary font-bold join-item w-14">
                {character.state.speed.running} ft
              </p>
            </div>
          </div>
          <div className="divider m-0" />
          <div className="flex flex-row items-center justify-between">
            <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
              Swimming
            </h2>
            <div className="flex flex-row items-center join">
              <Tooltip
                title="Swimming Speed"
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
                        {character.state.speed.swimmingReasons.map(
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
                element={
                  <span className="badge badge-info p-2 flex justify-center items-center z-[1] join-item">
                    i
                  </span>
                }
              >
                Your Swimming Speed is defined by the following:
              </Tooltip>
              <p className="badge badge-secondary  font-bold join-item w-14">
                {character.state.speed.swimming} ft
              </p>
            </div>
          </div>
          <div className="divider m-0"></div>
          <div className="flex flex-row items-center justify-between">
            <h2 className="pb-0 px-4 text-sm flex flex-row items-center ">
              <span>Climbing </span>
            </h2>
            <div className="flex flex-row items-center join">
              <Tooltip
                title="Climbing Speed"
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
                        {character.state.speed.climbingReasons.map(
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
                element={
                  <span className="badge badge-info p-2 flex justify-center items-center z-[1]  join-item">
                    i
                  </span>
                }
              >
                Your Climbing Speed is defined by the following:
              </Tooltip>
              <p className="badge badge-secondary font-bold join-item w-14">
                {character.state.speed.climbing} ft
              </p>
            </div>
          </div>
          <div className="divider m-0"></div>
          <div className="flex flex-row items-center justify-between">
            <h2 className="pb-0 px-4 text-sm flex flex-row items-center">
              Flying
            </h2>
            <div className="flex flex-row items-center join">
              <Tooltip
                title="Flying Speed"
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
                        {character.state.speed.flyingReasons.map(
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
                element={
                  <span className="badge badge-info join-item p-2 flex justify-center items-center z-[1] ">
                    i
                  </span>
                }
              >
                Your Flying Speed is defined by the following:
              </Tooltip>
              <p className="badge badge-secondary font-bold join-item w-14">
                {character.state.speed.flying} ft
              </p>
            </div>
          </div>
          <div className="divider m-0"></div>
        </div>
      </>
    )
  );
};

export default CharacterStats;
