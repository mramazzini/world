import { FeatureInfo, FeatureInGroupInfo } from '@/lib/types/modelInfo';
import useFeatureSelector from '@/hooks/useFeatureSelector';
import FeatureHeader from '@/components/UI/Features/FeatureHeader';
import FeatureBody from '@/components/UI/Features/FeatureBody';
import { useMemo } from 'react';

const CharacterSheetFeatureDisplay = () => {
  const { fromList } = useFeatureSelector();

  const unlockedList = useMemo(() => fromList('unlocked'), [fromList]);
  const lockedList = useMemo(() => fromList('locked'), [fromList]);
  return (
    <>
      <h2 className="pb-0 px-4">Features</h2>
      {unlockedList.map((c) => {
        return (
          <div key={c.name}>
            {c.features.length > 0 && <h3 className="divider">{c.name}</h3>}
            {c.features.map((feature) => {
              return (
                <FeatureDisplay
                  key={feature.id}
                  featureInfo={feature}
                  locked={false}
                />
              );
            })}
          </div>
        );
      })}
      <div className="divider" />
      {/* locked features */}
      <h2 className="py-0 px-4">Locked Features</h2>
      <p className="italic px-4">Level up to unlock these features</p>
      {lockedList.map((c) => {
        return (
          <div key={c.name}>
            {c.features.length > 0 && <h3 className="divider">{c.name}</h3>}
            {c.features.map((feature) => {
              return (
                <FeatureDisplay key={feature.id} featureInfo={feature} locked />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

const FeatureDisplay = ({
  featureInfo,
  locked,
}: {
  featureInfo: FeatureInfo | FeatureInGroupInfo;
  locked?: boolean;
}) => {
  return (
    <div className="bg-base-300 rounded-xl p-4 pb-0 collapse collapse-arrow mt-2 collapse-sm py-0">
      <input type="checkbox" />
      <div className="collapse-title flex items-center w-full flex-row min-h-0">
        <FeatureHeader feature={featureInfo} />
      </div>
      <div className="collapse-content p-0 w-full">
        <div className="bg-base-200 rounded-xl p-4">
          <FeatureBody feature={featureInfo} locked={locked} />
        </div>
      </div>
    </div>
  );
};

export default CharacterSheetFeatureDisplay;
