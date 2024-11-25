import { Fragment, useMemo } from 'react';
import RollDetailsDisplay from './RollDetailDisplay';

interface LogEntryDisplayProps {
  entry: PrismaJson.LogEntry;
}

const LogEntryDisplay = ({ entry }: LogEntryDisplayProps) => {
  const cssValue = useMemo(() => {
    switch (entry.type) {
      case 'dice':
      case 'info':
        return 'text-base-content';
      case 'error':
        return 'text-error';
      case 'success':
        return 'text-success';
      default:
        return 'text-neutral';
    }
  }, [entry.type]);

  return (
    <Fragment>
      <div className="flex flex-row items-center justify-between ">
        <span className={`ml-2 ${cssValue}`}>
          {entry.log}{' '}
          {entry.type === 'dice' && entry.diceRollResult && (
            <RollDetailsDisplay rollDetails={entry.diceRollResult.rolls} />
          )}
        </span>{' '}
        <span className="badge badge-secondary h-auto text-center">
          {entry.from}
        </span>
      </div>
      <div className="divider m-0" />
    </Fragment>
  );
};

export default LogEntryDisplay;
