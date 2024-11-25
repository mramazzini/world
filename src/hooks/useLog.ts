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
    (log: PrismaJson.LogEntry) => {
      if (!state) {
        return;
      }

      dispatch(
        setCharacterState({
          ...state,
          characterLog: [...state.characterLog, log],
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
    (formula: string, from: string) => {
      const { total, rolls, status } = rollFormula(formula);

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
    [dispatchLog, rollFormula]
  );

  return { logPush, diceLogPush };
};

export default useLog;
