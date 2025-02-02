import { useAppSelector } from '@/store/hooks';
import { useCallback, useEffect, useState } from 'react';
import useDiceRoller from './useDiceRoller';

enum SpeedType {
  WALK = 'WALK',
  FLY = 'FLY',
  SWIM = 'SWIM',
  CLIMB = 'CLIMB',
  BURROW = 'BURROW',
  RUN = 'RUN',
}

const useSpeed = () => {
  const combinedSpecies = useAppSelector(
    (state) => state.sheet.combinedSpecies
  );
  const activeEffects = useAppSelector((state) => state.sheet.activeEffects);
  const { rollFormula } = useDiceRoller();
  const [speedBonus, setSpeedBonus] = useState(0);
  useEffect(() => {
    const getBonus = async () => {
      let totalBonus = 0;
      for (const effect of activeEffects) {
        if (effect.speedBonusFormula) {
          totalBonus += (await rollFormula(effect.speedBonusFormula)).total;
        }
      }
      return totalBonus;
    };
    getBonus().then((bonus) => setSpeedBonus(bonus));
  }, [activeEffects, rollFormula]);

  const getSpeed = useCallback(
    (type: SpeedType): number => {
      if (!combinedSpecies) return 0;

      //TODO add speed bonus from effects

      switch (type) {
        case SpeedType.WALK:
          return (combinedSpecies.speed || 0) + speedBonus;
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
          return Math.round(getSpeed(SpeedType.WALK) * 2);
      }
    },
    [combinedSpecies, speedBonus]
  );

  return { getSpeed, SpeedType };
};

export default useSpeed;
