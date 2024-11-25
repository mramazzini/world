import useCharacterState from '@/hooks/useCharacter/useCharacterState';
import useLog from '@/hooks/useLog';
import Image from 'next/image';
import { Fragment, useEffect, useMemo, useRef } from 'react';
import FormulaRoller from './FormulaRoller';
import LogEntryDisplay from './LogEntryDisplay';
import Skeleton from '@/components/UI/Skeleton';

const DiceLog = () => {
  const state = useCharacterState();
  const { diceLogPush } = useLog();

  const log = useMemo(() => {
    return state?.characterLog;
  }, [state?.characterLog]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //to autoscroll to bottom of log on new log entry
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [log]);

  if (!log) return <Skeleton height={400} />;

  return (
    <>
      <div className=" w-full flex flex-col join-vertical">
        <div
          className="bg-base-300 p-4 rounded-xl h-64 overflow-scroll"
          ref={containerRef}
        >
          {log.length > 0 ? (
            log.map((logEntry, index) => (
              <LogEntryDisplay key={index} entry={logEntry} />
            ))
          ) : (
            <div className="flex items-center justify-center h-full flex-col ">
              <p className="text-center p-4 font-bold">No rolls yet...</p>
              <Image
                src="/images/d20.svg"
                alt="Dice"
                width={100}
                height={100}
                className="opacity-50"
              />
              <p className="text-center p-4">
                Click a button to roll dice and see the results here.
              </p>
            </div>
          )}
        </div>
        <FormulaRoller
          onRoll={(formula) => {
            diceLogPush(formula, 'Roll');
          }}
        />
        <div className="flex flex-row  m-2 ">
          <div className=" flex flex-col ">
            <p className="flex items-center justify-center w-full my-2 badge-neutral badge">
              Roll
            </p>
            {[4, 6, 8, 10, 12, 20, 100].map((die) => {
              return (
                <button
                  key={die}
                  className=" btn btn-ghost border border-gray-500 btn-sm mb-2"
                  onClick={(e) => {
                    diceLogPush(`1d${die}`, `d${die} Roll`);
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
              <div key={index} className=" flex flex-col mx-1 w-full">
                <p className="flex items-center justify-center w-full my-2 badge-neutral badge">
                  {numberOfDice} Dice
                </p>
                {[4, 6, 8, 10, 12, 20, 100].map((die) => {
                  return (
                    <button
                      key={die}
                      className=" btn btn-ghost border border-gray-500 btn-sm mb-2"
                      onClick={() => {
                        diceLogPush(
                          `${numberOfDice}d${die}`,
                          `${numberOfDice}d${die} Roll`
                        );
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

export default DiceLog;
