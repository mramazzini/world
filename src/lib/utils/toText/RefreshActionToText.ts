import { RefreshEvent } from '@prisma/client';

const RefreshEventToText = (r: RefreshEvent) => {
  switch (r) {
    case RefreshEvent.LONG_REST:
      return 'Long Rest';
    case RefreshEvent.SHORT_REST:
      return 'Short Rest';
    case RefreshEvent.ROUND:
      return 'Round';
    case RefreshEvent.TURN:
      return 'Turn';
    case RefreshEvent.OTHER:
      return 'Other';
  }
};

export default RefreshEventToText;
