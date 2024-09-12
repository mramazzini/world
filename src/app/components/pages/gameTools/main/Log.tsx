import { roll } from "@/app/components/Utility/roll";
import { Log, Roll } from "@/lib/types";

interface Props {
  log: Log[];
  pushLog: (newLog: Log) => void;
}

const RenderLog = ({ log, pushLog }: Props) => {
  const rollLogString = (l: Log) => {
    const r = l.roll;
    if (!r) return "";
    //says what dice were rolled and the total
    const rollMap: { [key: number]: number } = {};
    r.rolls.forEach((roll) => {
      if (rollMap[roll.diceType]) {
        rollMap[roll.diceType] += 1;
      } else {
        rollMap[roll.diceType] = 1;
      }
    });
    return (
      <p>
        Roll{" "}
        {Object.entries(rollMap).map(([key, value]) => {
          return (
            <span key={key}>
              {value}d{key}
            </span>
          );
        })}
        :{" "}
        {r.rolls.map((roll, index) => {
          return (
            <>
              <span key={index} className="badge">
                {roll.rolled}
              </span>
              {index < r.rolls.length - 1 ? " + " : ""}
            </>
          );
        })}
        {r.plus ? ` + ${r.plus}` : ""}
        {" = "}
        <span className="badge badge-accent">{r.total}</span>
      </p>
    );
  };
  return (
    <>
      <div className=" w-full flex flex-col join-vertical">
        <div className="bg-base-300 p-4 rounded-xl h-64 overflow-scroll">
          {log.map((logEntry, index) => {
            if (logEntry.logType === "roll") {
              return (
                <>
                  <div
                    key={index}
                    className="flex flex-row items-center justify-between"
                  >
                    <span className="ml-2">{rollLogString(logEntry)}</span>
                    <span className="badge badge-secondary">
                      {logEntry.from}
                    </span>
                  </div>
                  <div className="divider m-0" />
                </>
              );
            }
          })}
        </div>
        <div className="flex flex-row  m-2">
          <div className=" flex flex-col ">
            <p className="flex items-center justify-center w-full my-2 badge-neutral badge">
              Roll
            </p>
            {[4, 6, 8, 10, 12, 20, 100].map((die) => {
              return (
                <button
                  key={die}
                  className=" btn btn-ghost border border-gray-500 btn-sm mb-2"
                  onClick={() => {
                    const total = roll(1, die);
                    pushLog({
                      logType: "roll",
                      from: `d${die} Roll`,
                      roll: {
                        rolls: [{ diceType: die, rolled: total }],
                        total: total,
                        plus: 0,
                      },
                    });
                  }}
                >
                  d{die}
                </button>
              );
            })}
          </div>
          <div className="divider divider-horizontal" />
          {[2, 3, 4, 5].map((numberOfDice, index) => {
            return (
              <div className=" flex flex-col mx-1 w-full">
                <p className="flex items-center justify-center w-full my-2 badge-neutral badge">
                  {numberOfDice} Dice
                </p>
                {[4, 6, 8, 10, 12, 20, 100].map((die) => {
                  return (
                    <button
                      key={die}
                      className=" btn btn-ghost border border-gray-500 btn-sm mb-2"
                      onClick={() => {
                        let total = 0;
                        const results = [];
                        for (let i = 0; i < numberOfDice; i++) {
                          const rollResult = roll(1, die);
                          results.push(rollResult);
                          total += rollResult;
                        }
                        pushLog({
                          logType: "roll",
                          from: `${numberOfDice}d${die} Roll`,
                          roll: {
                            rolls: results.map((r) => ({
                              diceType: die,
                              rolled: r,
                            })),
                            total: total,
                            plus: 0,
                          },
                        });
                      }}
                    >
                      {numberOfDice}d{die}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RenderLog;
