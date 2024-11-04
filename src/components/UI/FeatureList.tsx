import { Feature } from '@prisma/client';
import FeatureDisplay from './FeatureDisplay';

interface Props {
  features: Feature[];
}
const FeatureList = ({ features }: Props) => {
  return (
    <div className="grid gap-4 grid-cols-1">
      {features
        .sort((a, b) => {
          //sort by levels
          const levelsA = a.levels;
          const levelsB = b.levels;
          const smallestLevelA = Math.min(...levelsA);
          const smallestLevelB = Math.min(...levelsB);
          return smallestLevelA - smallestLevelB;
        })
        .map((feature) => (
          <FeatureDisplay key={feature.id} feature={feature} />
        ))}
    </div>
  );
};

export default FeatureList;
