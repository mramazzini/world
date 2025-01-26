import FeatureDisplay from './FeatureDisplay';
import { FeatureInfo, FeatureInGroupInfo } from '@/lib/types/modelInfo';

interface Props {
  features: FeatureInfo[] | FeatureInGroupInfo[];
}
const FeatureList = ({ features }: Props) => {
  return (
    <div className="grid gap-4 grid-cols-1">
      {features.map((feature) => (
        <FeatureDisplay key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default FeatureList;
