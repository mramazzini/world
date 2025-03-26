import { Prisma, RefreshEvent, Skill } from '@prisma/client';
import { speciesFeaturesIds as fids } from './SpeciesFeatures.seed';
import { spellIds } from '../Spells/SpellSeed';
import { CustomResourceIds } from '../CustomResource/CustomResource.seed';

export const speciesEffectIds = {
  aasimarMMOMCelestialResistance: 'aasimarMMOMCelestialResistance',
  aasimarMMOMHealingHands: 'aasimarMMOMHealingHands',
  aasimarMMOMLightBearer: 'aasimarMMOMLightBearer',
  aasimarMMOMCelestialRevelation: 'aasimarMMOMCelestialRevelation',
  aasimarVGMCelestialResistance: 'aasimarVGMCelestialResistance',
  aasimarVGMHealingHands: 'aasimarVGMHealingHands',
  aasimarVGMLightBearer: 'aasimarVGMLightBearer',
  airGenasiMMOMUnendingBreath: 'airGenasiMMOMUnendingBreath',
  airGenasiMMOMLightningResistance: 'airGenasiMMOMLightningResistance',
  airGenasiMMOMMingleWithTheWind1: 'airGenasiMMOMMingleWithTheWind1',
  airGenasiMMOMMingleWithTheWind3: 'airGeasiMMOMMingleWithTheWind3',
  airGenasiMMOMMingleWithTheWind5: 'airGenasiMMOMMingleWithTheWind5',
  airGenasiEEPCUnendingBreath: 'airGenasiEEPCUnendingBreath',
  airGenasiEEPCMingleWithTheWind: 'airGenasiEEPCMingleWithTheWind',
  airGenasiEEPCLightningResistance: 'airGenasiEEPCLightningResistance',
  waterGenasiMMOMAmphibious: 'waterGenasiMMOMAmphibious',
  waterGenasiMMOMAcidResistance: 'waterGenasiMMOMAcidResistance',
  waterGenasiMMOMCallToTheWave: 'waterGenasiMMOMCallToTheWave',
  stonesEnduranceGolaithEEPC: 'stonesEnduranceGolaithEEPC',
  powerfulBuildGolaithEEPC: 'powerfulBuildGolaithEEPC',
  mountainBornGolaithEEPC: 'mountainBornGolaithEEPC',
  luckyFootworkHarengonMMOM: 'luckyFootworkHarengonMMOM',
  rabbitHopHarengonMMOM: 'rabbitHopHarengonMMOM',
  hareTriggerHarengonMMOM: 'hareTriggerHarengonMMOM',
  leoprineSensesHarengonMMOM: 'leoprineSensesHarengonMMOM',
  constructedResilienceWarforgedMMOM: 'constructedResilienceWarforgedMMOM',
  sentrysRestWarforgedMMOM: 'sentrysRestWarforgedMMOM',
  integratedProtectionWarforgedMMOM: 'IntegratedProtectionWarforgedMMOM',
  specializedDesignWarforgedMMOM: 'specializedDesignWarforgedMMOM',
  draconicAncestryDragonborn: 'draconicAncestryDragonborn',
  dwarvenResilienceDwarf: 'dwarvenResilienceDwarf',
  dwarvenCombatTrainingDwarf: 'dwarvenCombatTrainingDwarf',
  dwarfToolProficiencyDwarf: 'dwarfToolProficiencyDwarf',
  dwarfStonecunningDwarf: 'dwarfStonecunningDwarf',
  feyAncestryElf: 'feyAncestryElf',
  tranceElf: 'tranceElf',
  keenSensesElf: 'keenSensesElf',
  gnomeCunning: 'gnomeCunning',
  halfElfFeyAncestry: 'halfElfFeyAncestry',
  halfOrcRelentlessEndurance: 'halfOrcRelentlessEndurance',
  halfOrcSavageAttacks: 'halfOrcSavageAttacks',
  halfOrcMenacing: 'halfOrcMenacing',
  halflingLucky: 'halflingLucky',
  halflingBrave: 'halflingBrave',
  halflingNimbleness: 'halflingNimbleness',
  hellishResistanceTiefling: 'hellishResistanceTiefling',
};

const SpeciesFeatureEffectSeed: Prisma.EffectCreateInput[] = [
  {
    id: speciesEffectIds.aasimarMMOMCelestialResistance,
    Feature: {
      connect: {
        id: fids.aasimarMMOMCelestialResistance,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.aasimarMMOMHealingHands,
    level: 1,
    Feature: {
      connect: {
        id: fids.aasimarMMOMHealingHands,
      },
    },
    rollFormulas: ['1d4 * PROF'],
  },
  {
    id: speciesEffectIds.aasimarMMOMLightBearer,
    level: 1,
    Feature: {
      connect: {
        id: fids.aasimarMMOMLightBearer,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: speciesEffectIds.aasimarMMOMLightBearer,
            spellId: spellIds.light,
          },
        },
        create: {
          spellId: spellIds.light,
        },
      },
    },
  },
  {
    id: speciesEffectIds.aasimarMMOMCelestialRevelation,
    level: 3,
    Feature: {
      connect: {
        id: fids.aasimarMMOMCelestialRevelation,
      },
    },
  },
  {
    id: speciesEffectIds.aasimarVGMCelestialResistance,
    level: 1,
    Feature: {
      connect: {
        id: fids.aasimarVGMCelestialResistance,
      },
    },
  },
  {
    id: speciesEffectIds.aasimarVGMHealingHands,
    level: 1,
    Feature: {
      connect: {
        id: fids.aasimarVGMHealingHands,
      },
    },
    rollFormulas: ['LEVEL'],
  },
  {
    id: speciesEffectIds.aasimarVGMLightBearer,
    level: 1,
    Feature: {
      connect: {
        id: fids.aasimarVGMLightBearer,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: speciesEffectIds.aasimarVGMLightBearer,
            spellId: spellIds.light,
          },
        },
        create: {
          spellId: spellIds.light,
        },
      },
    },
  },
  {
    id: speciesEffectIds.airGenasiMMOMUnendingBreath,
    Feature: {
      connect: {
        id: fids.airGenasiMMOMUnendingBreath,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.airGenasiMMOMLightningResistance,
    Feature: {
      connect: {
        id: fids.airGenasiMMOMLightningResistance,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.airGenasiMMOMMingleWithTheWind1,
    Feature: {
      connect: {
        id: fids.airGenasiMMOMMingleWithTheWind,
      },
    },
    level: 1,
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: speciesEffectIds.airGenasiMMOMMingleWithTheWind1,
            spellId: spellIds.shockingGrasp,
          },
        },
        create: {
          spellId: spellIds.shockingGrasp,
        },
      },
    },
  },
  {
    id: speciesEffectIds.airGenasiMMOMMingleWithTheWind3,
    Feature: {
      connect: {
        id: fids.airGenasiMMOMMingleWithTheWind,
      },
    },
    level: 3,
    parentEffect: {
      connect: {
        id: speciesEffectIds.airGenasiMMOMMingleWithTheWind1,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: speciesEffectIds.airGenasiMMOMMingleWithTheWind3,
            spellId: spellIds.featherFall,
          },
        },
        create: {
          spellId: spellIds.featherFall,
          requireMaterial: false,
          restType: RefreshEvent.LONG_REST,
          amountBeforeRest: 1,
        },
      },
    },
  },
  {
    id: speciesEffectIds.airGenasiMMOMMingleWithTheWind5,
    Feature: {
      connect: {
        id: fids.airGenasiMMOMMingleWithTheWind,
      },
    },
    parentEffect: {
      connect: {
        id: speciesEffectIds.airGenasiMMOMMingleWithTheWind3,
      },
    },
    level: 5,
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: speciesEffectIds.airGenasiMMOMMingleWithTheWind5,
            spellId: spellIds.levitate,
          },
        },
        create: {
          spellId: spellIds.levitate,
          requireMaterial: false,
          restType: RefreshEvent.LONG_REST,
          amountBeforeRest: 1,
        },
      },
    },
  },
  {
    id: speciesEffectIds.airGenasiEEPCUnendingBreath,
    Feature: {
      connect: {
        id: fids.airGenasiEEPCUnendingBreath,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.airGenasiEEPCMingleWithTheWind,
    level: 1,
    Feature: {
      connect: {
        id: fids.airGenasiEEPCMingleWithTheWind,
      },
    },
    EffectToSpell: {
      connectOrCreate: {
        where: {
          effectId_spellId: {
            effectId: speciesEffectIds.airGenasiEEPCMingleWithTheWind,
            spellId: spellIds.levitate,
          },
        },
        create: {
          spellId: spellIds.levitate,
          requireMaterial: false,
          restType: RefreshEvent.LONG_REST,
          amountBeforeRest: 1,
        },
      },
    },
  },
  {
    id: speciesEffectIds.airGenasiEEPCLightningResistance,
    level: 1,
    Feature: {
      connect: {
        id: fids.airGenasiEEPCLightningResistance,
      },
    },
  },
  {
    id: speciesEffectIds.waterGenasiMMOMAmphibious,
    level: 1,
    Feature: {
      connect: {
        id: fids.waterGenasiMMOMAmphibious,
      },
    },
  },
  {
    id: speciesEffectIds.waterGenasiMMOMAcidResistance,
    level: 1,
    Feature: {
      connect: {
        id: fids.waterGenasiMMOMAcidResistance,
      },
    },
  },
  {
    id: speciesEffectIds.waterGenasiMMOMCallToTheWave,
    level: 1,
    Feature: {
      connect: {
        id: fids.waterGenasiMMOMCallToTheWave,
      },
    },
  },
  {
    id: speciesEffectIds.stonesEnduranceGolaithEEPC,
    level: 1,
    Feature: {
      connect: {
        id: fids.stonesEnduranceGolaithEEPC,
      },
    },
    rollFormulas: ['1d12 + CON'],
  },
  {
    id: speciesEffectIds.powerfulBuildGolaithEEPC,
    level: 1,
    Feature: {
      connect: {
        id: fids.powerfulBuildGolaithEEPC,
      },
    },
  },
  {
    id: speciesEffectIds.mountainBornGolaithEEPC,
    level: 1,
    Feature: {
      connect: {
        id: fids.mountainBornGolaithEEPC,
      },
    },
  },
  {
    id: speciesEffectIds.luckyFootworkHarengonMMOM,
    level: 1,
    Feature: {
      connect: {
        id: fids.luckyFootworkHarengonMMOM,
      },
    },
    rollFormulas: ['1d4'],
  },
  {
    id: speciesEffectIds.rabbitHopHarengonMMOM,
    level: 1,
    Feature: {
      connect: {
        id: fids.rabbitHopHarengonMMOM,
      },
    },
    rollFormulas: ['5 * PROF'],
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: speciesEffectIds.rabbitHopHarengonMMOM,
            resourceId: CustomResourceIds.rabbitHopHarengon,
          },
        },
        create: {
          resourceId: CustomResourceIds.rabbitHopHarengon,
          refreshOn: RefreshEvent.LONG_REST,
          scalingFormula: 'PROF',
        },
      },
    },
  },
  {
    id: speciesEffectIds.hareTriggerHarengonMMOM,
    Feature: {
      connect: {
        id: fids.hareTriggerHarengonMMOM,
      },
    },
    level: 1,
    initiativeBonusFormula: 'PROF',
  },
  {
    id: speciesEffectIds.leoprineSensesHarengonMMOM,
    Feature: {
      connect: {
        id: fids.leoprineSensesHarengonMMOM,
      },
    },
    level: 1,
    fullSkillProficiencies: [Skill.PERCEPTION],
  },
  {
    id: speciesEffectIds.constructedResilienceWarforgedMMOM,
    Feature: {
      connect: {
        id: fids.constructedResilienceWarforgedMMOM,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.sentrysRestWarforgedMMOM,
    Feature: {
      connect: {
        id: fids.sentrysRestWarforgedMMOM,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.integratedProtectionWarforgedMMOM,
    Feature: {
      connect: {
        id: fids.integratedProtectionWarforgedMMOM,
      },
    },
    acBonusFormula: '1',
    level: 1,
  },
  {
    id: speciesEffectIds.specializedDesignWarforgedMMOM,
    Feature: {
      connect: {
        id: fids.specializedDesignWarforgedMMOM,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.draconicAncestryDragonborn,
    Feature: {
      connect: {
        id: fids.draconicAncestryDragonborn,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.dwarvenResilienceDwarf,
    level: 1,
    Feature: {
      connect: {
        id: fids.dwarvenResilienceDwarf,
      },
    },
  },
  {
    id: speciesEffectIds.dwarvenCombatTrainingDwarf,
    level: 1,
    Feature: {
      connect: {
        id: fids.dwarvenCombatTrainingDwarf,
      },
    },
  },
  {
    id: speciesEffectIds.dwarfToolProficiencyDwarf,
    level: 1,
    Feature: {
      connect: {
        id: fids.dwarfToolProficiencyDwarf,
      },
    },
  },
  {
    id: speciesEffectIds.dwarfStonecunningDwarf,
    level: 1,
    Feature: {
      connect: {
        id: fids.dwarfStonecunningDwarf,
      },
    },
  },
  {
    id: speciesEffectIds.feyAncestryElf,
    level: 1,
    Feature: {
      connect: {
        id: fids.feyAncestryElf,
      },
    },
  },
  {
    id: speciesEffectIds.tranceElf,
    level: 1,
    Feature: {
      connect: {
        id: fids.tranceElf,
      },
    },
  },
  {
    id: speciesEffectIds.keenSensesElf,
    level: 1,
    Feature: {
      connect: {
        id: fids.keenSensesElf,
      },
    },
    fullSkillProficiencies: [Skill.PERCEPTION],
  },
  {
    id: speciesEffectIds.gnomeCunning,
    level: 1,
    Feature: {
      connect: {
        id: fids.gnomeCunning,
      },
    },
  },
  {
    id: speciesEffectIds.halfElfFeyAncestry,
    level: 1,
    Feature: {
      connect: {
        id: fids.halfElfFeyAncestry,
      },
    },
  },
  {
    id: speciesEffectIds.halfOrcMenacing,
    level: 1,
    Feature: {
      connect: {
        id: fids.halfOrcMenacing,
      },
    },
    fullSkillProficiencies: [Skill.INTIMIDATION],
  },
  {
    id: speciesEffectIds.halfOrcRelentlessEndurance,
    Feature: {
      connect: {
        id: fids.halfOrcRelentlessEndurance,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.halfOrcSavageAttacks,
    Feature: {
      connect: {
        id: fids.halfOrcSavageAttacks,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.halflingLucky,
    Feature: {
      connect: {
        id: fids.halflingLucky,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.halflingBrave,
    Feature: {
      connect: {
        id: fids.halflingBrave,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.halflingNimbleness,
    Feature: {
      connect: {
        id: fids.halflingNimbleness,
      },
    },
    level: 1,
  },
  {
    id: speciesEffectIds.hellishResistanceTiefling,
    Feature: {
      connect: {
        id: fids.hellishResistanceTiefling,
      },
    },
    level: 1,
  },
];

export default SpeciesFeatureEffectSeed;
