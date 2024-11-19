import { useCallback } from 'react';
import useCombinedSpecies from './useCombinedSpecies';

enum SpeedType {
  WALK = 'WALK',
  FLY = 'FLY',
  SWIM = 'SWIM',
  CLIMB = 'CLIMB',
  BURROW = 'BURROW',
  RUN = 'RUN',
}

const useSpeed = () => {
  const combinedSpecies = useCombinedSpecies();

  const getSpeed = useCallback(
    (type: SpeedType): number => {
      if (!combinedSpecies) return 0;

      switch (type) {
        case SpeedType.WALK:
          return combinedSpecies.speed || 0;
        case SpeedType.FLY:
          return combinedSpecies.flightSpeed || 0;
        case SpeedType.SWIM:
          return combinedSpecies.swimSpeed
            ? combinedSpecies.swimSpeed
            : Math.round((getSpeed(SpeedType.WALK) * 2) / 3);
        case SpeedType.CLIMB:
          return combinedSpecies.climbSpeed
            ? combinedSpecies.climbSpeed
            : Math.round((getSpeed(SpeedType.WALK) * 2) / 3);
        case SpeedType.BURROW:
          return combinedSpecies.burrowSpeed || 0;
        case SpeedType.RUN:
          return combinedSpecies.speed ? combinedSpecies.speed * 2 : 0;
      }
    },
    [combinedSpecies]
  );

  return { getSpeed, SpeedType };
};

export default useSpeed;
