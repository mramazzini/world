import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback } from 'react';
import useDiceRoller from './useDiceRoller';
import { setCharacterState } from '@/store/sheetSlice';
import { v4 } from 'uuid';

const useLog = () => {
  const state = useAppSelector((state) => state.sheet.state);
  const dispatch = useAppDispatch();

  const { rollFormula } = useDiceRoller();

  const dispatchLog = useCallback(
    (log: LogEntry) => {
      if (!state) {
        return;
      }

      const newLog = [...state.characterLog, log];

      if (newLog.length > 20) {
        newLog.shift();
      }

      dispatch(
        setCharacterState({
          ...state,
          characterLog: [...newLog],
        })
      );
    },
    [dispatch, state]
  );

  const logPush = useCallback(
    (log: string, type: 'info' | 'error' | 'success', from: string) => {
      dispatchLog({
        id: v4(),
        log,
        type,
        timestamp: new Date().toISOString(),
        from: from,
      });
    },
    [dispatchLog]
  );

  const diceLogPush = useCallback(
    async (formula: string, from: string) => {
      const { total, rolls, status } = await rollFormula(formula);

      if (status === 'error') {
        logPush('Invalid formula.', 'error', from);
        return;
      }

      dispatchLog({
        id: v4(),
        log: `Rolled ${formula} for ${total}.`,
        type: 'dice',
        from,
        timestamp: new Date().toISOString(),
        diceRollResult: {
          formula,
          rolls: rolls,
        },
      });
    },
    [dispatchLog, rollFormula, logPush]
  );

  return { logPush, diceLogPush };
};

export default useLog;
