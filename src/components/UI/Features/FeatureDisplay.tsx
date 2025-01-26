'use client';
import { FeatureInfo, FeatureInGroupInfo } from '@/lib/types/modelInfo';
import FeatureHeader from './FeatureHeader';
import FeatureBody from './FeatureBody';

interface Props {
  feature: FeatureInfo | FeatureInGroupInfo;
  className?: string;
}
const FeatureDisplay = ({ feature, className = '' }: Props) => {
  return (
    <div className={`bg-base-200 p-4 rounded-xl w-full ${className}`}>
      <FeatureHeader feature={feature} />
      <FeatureBody feature={feature} />
    </div>
  );
};

export default FeatureDisplay;
