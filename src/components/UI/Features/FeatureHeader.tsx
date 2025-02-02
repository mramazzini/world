import { FeatureInfo, FeatureInGroupInfo } from '@/lib/types/modelInfo';
import { numberColor, numberColorBefore } from '@/Utility/colorBefore';
import Tooltip from '@/Utility/Tooltip';
import { useMemo } from 'react';

interface Props {
  feature: FeatureInfo | FeatureInGroupInfo;
}

const FeatureHeader = ({ feature }: Props) => {
  const levels = useMemo(() => {
    return feature.Effects?.map((effect) => effect.level);
  }, [feature.Effects]);
  return (
    <div className="flex justify-between  w-full">
      <h2 className="p-0 flex items-center justify-center gap-4">
        {feature.name}{' '}
        {feature.unimplemented && (
          <Tooltip
            element={<span className="badge badge-warning">Unimplemented</span>}
          >
            This Feature is not yet implemented into the character sheets and
            will not affect your character sheet in any way.
          </Tooltip>
        )}
      </h2>
      <div className="flex flex-wrap items-center">
        {levels && levels.length == 20 ? (
          <span className="badge badge-accent font-bold rounded-full">
            All Levels
          </span>
        ) : (
          levels
            ?.sort((a, b) => a - b)
            .map((level) => {
              return (
                <div
                  key={level}
                  className={`bg-neutral rounded-full w-8 h-8 flex justify-center items-center text-neutral-content font-bold ${numberColor(
                    level
                  )} border border-4 mx-1 before:absolute  before:rounded-full before:border-4 z-[1] before:w-8 before:h-8 ${
                    numberColorBefore[level].bg
                  } ${numberColorBefore[level].opacity}`}
                >
                  {level}
                </div>
              );
            })
        )}
      </div>
    </div>
  );
};

export default FeatureHeader;
