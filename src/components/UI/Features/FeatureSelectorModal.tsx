import { EffectGrantsGroupInfo } from '@/lib/types/modelInfo';
import { useAppSelector } from '@/store/hooks';
import useFeatureGroupMutator from '@/hooks/useFeatureGroupMutator';
import FeatureDisplay from './FeatureDisplay';
import { useMemo } from 'react';

interface Props {
  effect: EffectGrantsGroupInfo;
  locked?: boolean;
}

const FeatureSelectorModal = ({ effect, locked = true }: Props) => {
  const { activeFeaturesFromGroups } = useAppSelector((state) => state.sheet);
  const { activate, deactivate } = useFeatureGroupMutator();

  const allFeaturesUseable = useMemo(() => {
    return effect.FeaturesToChooseFrom.length === 0;
  }, [effect]);

  const canActivate = useMemo(() => {
    const totalActive = activeFeaturesFromGroups.filter((f) =>
      effect.FeatureGroup.FeaturesInGroup.some((feature) => feature.id === f.id)
    ).length;
    return totalActive < effect.amount && !locked;
  }, [effect, activeFeaturesFromGroups, locked]);

  return (
    <>
      <h2 className="text-center">Select Feature</h2>
      <p className="text-center">
        Choose which conflicting features below should be activated.
      </p>
      <div className="divider"></div>
      {!allFeaturesUseable
        ? effect.FeaturesToChooseFrom.map((feature) => {
            const isActive = activeFeaturesFromGroups.some(
              (f) => f.id === feature.id
            );
            return (
              <div key={feature.id}>
                <div className="indicator w-full">
                  <FeatureDisplay
                    feature={feature}
                    className={`border ${
                      isActive ? 'border-success' : 'border-error'
                    } w-full`}
                  />

                  <div className="indicator-item indicator-bottom indicator-center ">
                    <button
                      className={`btn btn-xs  ${
                        isActive ? 'btn-error' : 'btn-success'
                      } `}
                      style={{
                        transform: 'translateX(-50%)',
                      }}
                      disabled={!canActivate && !isActive}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        if (isActive) {
                          deactivate(feature.id);
                        } else {
                          activate(feature.id);
                        }
                      }}
                    >
                      {isActive ? 'Disable' : 'Activate'}
                    </button>
                  </div>
                </div>
                <div className="divider"></div>
              </div>
            );
          })
        : effect.FeatureGroup.FeaturesInGroup.map((feature) => {
            const isActive = activeFeaturesFromGroups.some(
              (f) => f.id === feature.id
            );
            return (
              <div key={feature.id}>
                <div className="indicator w-full">
                  <FeatureDisplay
                    feature={feature}
                    className={`border ${
                      isActive ? 'border-success' : 'border-error'
                    } w-full`}
                  />

                  <div className="indicator-item indicator-bottom indicator-center ">
                    <button
                      className={`btn btn-xs  ${
                        isActive ? 'btn-error' : 'btn-success'
                      } `}
                      style={{
                        transform: 'translateX(-50%)',
                      }}
                      disabled={!canActivate && !isActive}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        if (isActive) {
                          deactivate(feature.id);
                        } else {
                          activate(feature.id);
                        }
                      }}
                    >
                      {isActive ? 'Disable' : 'Activate'}
                    </button>
                  </div>
                </div>
                <div className="divider"></div>
              </div>
            );
          })}
    </>
  );
};

export default FeatureSelectorModal;
