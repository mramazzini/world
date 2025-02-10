import { Prisma } from '@prisma/client';
import ArtificerSubclassFeatureEffectsSeed from './ArtificerSubclassFeatureEffects.seed';
import { DruidSubclassFeatureEffects } from './DruidSubclassFeatureEffects.seed';
import { PaladinSubclassFeatureEffects } from './PaladinSubclassFeatureEffects.seed';

const SubclassFeatureEffects: Prisma.EffectCreateInput[] = [
  ...ArtificerSubclassFeatureEffectsSeed,
  ...DruidSubclassFeatureEffects,
  ...PaladinSubclassFeatureEffects,
];

export default SubclassFeatureEffects;
