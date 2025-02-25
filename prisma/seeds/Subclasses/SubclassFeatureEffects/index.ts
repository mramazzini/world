import { Prisma } from '@prisma/client';
import ArtificerSubclassFeatureEffectsSeed from './ArtificerSubclassFeatureEffects.seed';
import { DruidSubclassFeatureEffects } from './DruidSubclassFeatureEffects.seed';
import { PaladinSubclassFeatureEffects } from './PaladinSubclassFeatureEffects.seed';
import { MonkSubclassFeatureEffects } from './MonkSubclassFeatureEffect.seed';
import BarbarianSubclassFeatureEffectsSeed from './BarbarianSubclassFeatureEffects.seed';
import { RangerSubclassFeatureEffects } from './RangerSubclassFeatureEffects.seed';

const SubclassFeatureEffects: Prisma.EffectCreateInput[] = [
  ...ArtificerSubclassFeatureEffectsSeed,
  ...DruidSubclassFeatureEffects,
  ...PaladinSubclassFeatureEffects,
  ...MonkSubclassFeatureEffects,
  ...BarbarianSubclassFeatureEffectsSeed,
  ...RangerSubclassFeatureEffects,
];

export default SubclassFeatureEffects;
