import {
  DamageTypes,
  Prisma,
  RefreshEvent,
  RitualCasterType,
  Skill,
  WeaponGroup,
} from '@prisma/client';
import { ClassFeatureIds as fids } from './Features.seed';
import { CustomResourceIds } from '../CustomResource/CustomResource.seed';
import {
  FeatureGroupIds,
  FeaturesFromFeatureGroupIds,
} from '../FeatureGroup/FeatureGroup.seed';

export const ClassFeatureEffectIds = {
  bardCantrips1: 'bardCantrips-1',
  bardCantrips4: 'bardCantrips-4',
  bardCantrips10: 'bardCantrips-10',
  bardSpellsKnown1: 'bardSpellsKnown-1',
  bardSpellsKnown2: 'bardSpellsKnown-2',
  bardSpellsKnown3: 'bardSpellsKnown-3',
  bardSpellsKnown4: 'bardSpellsKnown-4',
  bardSpellsKnown5: 'bardSpellsKnown-5',
  bardSpellsKnown6: 'bardSpellsKnown-6',
  bardSpellsKnown7: 'bardSpellsKnown-7',
  bardSpellsKnown8: 'bardSpellsKnown-8',
  bardSpellsKnown9: 'bardSpellsKnown-9',
  bardSpellsKnown10: 'bardSpellsKnown-10',
  bardSpellsKnown11: 'bardSpellsKnown-11',
  bardSpellsKnown13: 'bardSpellsKnown-13',
  bardSpellsKnown14: 'bardSpellsKnown-14',
  bardSpellsKnown15: 'bardSpellsKnown-15',
  bardSpellsKnown17: 'bardSpellsKnown-17',
  bardSpellsKnown18: 'bardSpellsKnown-18',
  bardRitualCaster: 'bardRitualCaster',
  bardicInspiration1: 'bardicInspiration-1',
  bardicInspiration5: 'bardicInspiration-5',
  bardicInspiration10: 'bardicInspiration-10',
  bardicInspiration15: 'bardicInspiration-15',
  jackOfAllTrades: 'jackOfAllTrades',
  bardSongOfRest2: 'bardSongOfRest-2',
  bardSongOfRest6: 'bardSongOfRest-9',
  bardSongOfRest13: 'bardSongOfRest-13',
  bardSongOfRest17: 'bardSongOfRest-17',
  bardMagicalInspiration2: 'bardMagicalInspiration-2',
  bardMagicalInspiration5: 'bardMagicalInspiration-5',
  bardMagicalInspiration10: 'bardMagicalInspiration-10',
  bardMagicalInspiration15: 'bardMagicalInspiration-15',
  bardExpertise3: 'bardExpertise-3',
  bardExpertise10: 'bardExpertise-10',
  bardicVersatility4: 'bardicVersatility4',
  bardicVersatility8: 'bardicVersatility8',
  bardicVersatility12: 'bardicVersatility12',
  bardicVersatility16: 'bardicVersatility16',
  bardicVersatility19: 'bardicVersatility19',
  bardFontOfInspiration: 'bardFontOfInspiration',
  bardCounterCharm: 'bardCounterCharm',
  bardMagicalSecrets10: 'bardMagicalSecrets10',
  bardMagicalSecrets14: 'bardMagicalSecrets14',
  bardMagicalSecrets18: 'bardMagicalSecrets18',
  bardSuperiorInspiration20: 'bardSuperiorInspiration20',
  clericChannelDivinity2: 'clericChannelDivinity-2',
  clericChannelDivinity6: 'clericChannelDivinity-6',
  clericChannelDivinity18: 'clericChannelDivinity-18',
  clericTurnUndead2: 'clericTurnUndead-2',
  harnessDivinePower2: 'harnessDivinePower-2',
  harnessDivinePower6: 'harnessDivinePower-6',
  harnessDivinePower18: 'harnessDivinePower-18',
  clericCantripVersatility4: 'clericCantripVersatility-4',
  clericCantripVersatility8: 'clericCantripVersatility-8',
  clericCantripVersatility12: 'clericCantripVersatility-12',
  clericCantripVersatility16: 'clericCantripVersatility-16',
  clericCantripVersatility19: 'clericCantripVersatility-19',
  clericDestroyUndead5: 'clericDestroyUndead-5',
  clericDestroyUndead8: 'clericDestroyUndead-8',
  clericDestroyUndead11: 'clericDestroyUndead-11',
  clericDestroyUndead14: 'clericDestroyUndead-14',
  clericDestroyUndead17: 'clericDestroyUndead-17',
  clericBlessedStrikes8: 'clericBlessedStrikes-8',
  clericDivineIntervention10: 'clericDivineIntervention-10',
  clericDivineIntervention11: 'clericDivineIntervention-11',
  clericDivineIntervention12: 'clericDivineIntervention-12',
  clericDivineIntervention13: 'clericDivineIntervention-13',
  clericDivineIntervention14: 'clericDivineIntervention-14',
  clericDivineIntervention15: 'clericDivineIntervention-15',
  clericDivineIntervention16: 'clericDivineIntervention-16',
  clericDivineIntervention17: 'clericDivineIntervention-17',
  clericDivineIntervention18: 'clericDivineIntervention-18',
  clericDivineIntervention19: 'clericDivineIntervention-19',
  clericDivineIntervention20: 'clericDivineIntervention-20',
  clericCantrips1: 'clericCantrips-1',
  clericCantrips4: 'clericCantrips-4',
  clericCantrips10: 'clericCantrips-10',
  clericRitualCaster: 'clericRitualCaster',
  paladinDivineSense1: 'paladinDivineSense-1',
  layOnHands1: 'layOnHands-1',
  layOnHands2: 'layOnHands-2',
  layOnHands3: 'layOnHands-3',
  layOnHands4: 'layOnHands-4',
  layOnHands5: 'layOnHands-5',
  layOnHands6: 'layOnHands-6',
  layOnHands7: 'layOnHands-7',
  layOnHands8: 'layOnHands-8',
  layOnHands9: 'layOnHands-9',
  layOnHands10: 'layOnHands-10',
  layOnHands11: 'layOnHands-11',
  layOnHands12: 'layOnHands-12',
  layOnHands13: 'layOnHands-13',
  layOnHands14: 'layOnHands-14',
  layOnHands15: 'layOnHands-15',
  layOnHands16: 'layOnHands-16',
  layOnHands17: 'layOnHands-17',
  layOnHands18: 'layOnHands-18',
  layOnHands19: 'layOnHands-19',
  layOnHands20: 'layOnHands-20',
  paladinFightStyle2: 'paladinFightStyle-2',
  divineSmite2: 'divineSmite-2',
  divineHealth3: 'divineHealth-3',
  paladingHarnessDivinePower3: 'paladingHarnessDivinePower-3',
  paladingHarnessDivinePower7: 'paladingHarnessDivinePower-7',
  paladingHarnessDivinePower15: 'paladingHarnessDivinePower-15',
  paladinMartialVersatility4: 'paladinMartialVersatility-4',
  paladinMartialVersatility8: 'paladinMartialVersatility-8',
  paladinMartialVersatility12: 'paladinMartialVersatility-12',
  paladinMartialVersatility16: 'paladinMartialVersatility-16',
  paladinMartialVersatility19: 'paladinMartialVersatility-19',
  paladinExtraAttack5: 'paladinExtraAttack-5',
  paladinAuraOfProtection6: 'paladinAuraOfProtection-6',
  paladinAuraOfProtection18: 'paladinAuraOfProtection-18',
  paladinAuraOfCourage10: 'paladinAuraOfCourage-10',
  paladinAuraOfCourage18: 'paladinAuraOfCourage-18',
  paladinImprovedDivineSmite11: 'paladinImprovedDivineSmite-11',
  paladinCleansingTouch14: 'paladinCleansingTouch-14',
  paladinChannelDivinity3: 'paladinChannelDivinity3',
  rangerSpellsKnown2: 'rangerSpellsKnown-2',
  rangerSpellsKnown3: 'rangerSpellsKnown-3',
  rangerSpellsKnown5: 'rangerSpellsKnown-5',
  rangerSpellsKnown7: 'rangerSpellsKnown-7',
  rangerSpellsKnown9: 'rangerSpellsKnown-9',
  rangerSpellsKnown11: 'rangerSpellsKnown-11',
  rangerSpellsKnown13: 'rangerSpellsKnown-13',
  rangerSpellsKnown15: 'rangerSpellsKnown-15',
  rangerSpellsKnown17: 'rangerSpellsKnown-17',
  rangerSpellsKnown19: 'rangerSpellsKnown-19',
  rangerFavoredEnemyFoe1: 'rangerFavoredEnemyFoe-1',
  rangerExplorer1: 'rangerExplorer-1',
  rangerFightingStyle: 'rangerFightingStyle',
  rangerAwareness3: 'rangerAwareness-3',
  rangerMartialVersatility4: 'rangerMartialVersatility-4',
  rangerMartialVersatility8: 'rangerMartialVersatility-8',
  rangerMartialVersatility12: 'rangerMartialVersatility-12',
  rangerMartialVersatility16: 'rangerMartialVersatility-16',
  rangerMartialVersatility19: 'rangerMartialVersatility-19',
  rangerExtraAttack5: 'rangerExtraAttack-5',
  rangerLandsStride8: 'rangerLandsStride-8',
  rangerDisguise10: 'rangerDisguise-10',
  rangerVanish14: 'rangerVanish-14',
  rangerFeralSenses18: 'rangerFeralSenses-18',
  rangerFoeSlayer20: 'rangerFoeSlayer-20',
  monkUnarmoredDefense1: 'monkUnarmoredDefense-1',
  monkMartialArts1: 'monkMartialArts-1',
  monkMartialArts5: 'monkMartialArts-5',
  monkMartialArts11: 'monkMartialArts-11',
  monkMartialArts17: 'monkMartialArts-17',
  monkKiPoints2: 'monkKiPoints-2',
  monkKiPoints3: 'monkKiPoints-3',
  monkKiPoints4: 'monkKiPoints-4',
  monkKiPoints5: 'monkKiPoints-5',
  monkKiPoints6: 'monkKiPoints-6',
  monkKiPoints7: 'monkKiPoints-7',
  monkKiPoints8: 'monkKiPoints-8',
  monkKiPoints9: 'monkKiPoints-9',
  monkKiPoints10: 'monkKiPoints-10',
  monkKiPoints11: 'monkKiPoints-11',
  monkKiPoints12: 'monkKiPoints-12',
  monkKiPoints13: 'monkKiPoints-13',
  monkKiPoints14: 'monkKiPoints-14',
  monkKiPoints15: 'monkKiPoints-15',
  monkKiPoints16: 'monkKiPoints-16',
  monkKiPoints17: 'monkKiPoints-17',
  monkKiPoints18: 'monkKiPoints-18',
  monkKiPoints19: 'monkKiPoints-19',
  monkKiPoints20: 'monkKiPoints-20',
  monkUnarmoredMovement2: 'monkUnarmoredMovement-2',
  monkUnarmoredMovement6: 'monkUnarmoredMovement-6',
  monkUnarmoredMovement9: 'monkUnarmoredMovement-9',
  monkUnarmoredMovement10: 'monkUnarmoredMovement-10',
  monkUnarmoredMovement14: 'monkUnarmoredMovement-14',
  monkUnarmoredMovement18: 'monkUnarmoredMovement-18',
  monkDedicatedWeapon2: 'monkDedicatedWeapon-2',
  monkDeflectMissiles3: 'monkDeflectMissiles-3',
  monkDeflectMissiles4: 'monkDeflectMissiles-4',
  monkDeflectMissiles5: 'monkDeflectMissiles-5',
  monkDeflectMissiles6: 'monkDeflectMissiles-6',
  monkDeflectMissiles7: 'monkDeflectMissiles-7',
  monkDeflectMissiles8: 'monkDeflectMissiles-8',
  monkDeflectMissiles9: 'monkDeflectMissiles-9',
  monkDeflectMissiles10: 'monkDeflectMissiles-10',
  monkDeflectMissiles11: 'monkDeflectMissiles-11',
  monkDeflectMissiles12: 'monkDeflectMissiles-12',
  monkDeflectMissiles13: 'monkDeflectMissiles-13',
  monkDeflectMissiles14: 'monkDeflectMissiles-14',
  monkDeflectMissiles15: 'monkDeflectMissiles-15',
  monkDeflectMissiles16: 'monkDeflectMissiles-16',
  monkDeflectMissiles17: 'monkDeflectMissiles-17',
  monkDeflectMissiles18: 'monkDeflectMissiles-18',
  monkDeflectMissiles19: 'monkDeflectMissiles-19',
  monkDeflectMissiles20: 'monkDeflectMissiles-20',
  monkKiFueledAttack3: 'monkKiFueledAttack-3',
  monkSlowFall4: 'monkSlowFall-4',
  monkSlowFall5: 'monkSlowFall-5',
  monkSlowFall6: 'monkSlowFall-6',
  monkSlowFall7: 'monkSlowFall-7',
  monkSlowFall8: 'monkSlowFall-8',
  monkSlowFall9: 'monkSlowFall-9',
  monkSlowFall10: 'monkSlowFall-10',
  monkSlowFall11: 'monkSlowFall-11',
  monkSlowFall12: 'monkSlowFall-12',
  monkSlowFall13: 'monkSlowFall-13',
  monkSlowFall14: 'monkSlowFall-14',
  monkSlowFall15: 'monkSlowFall-15',
  monkSlowFall16: 'monkSlowFall-16',
  monkSlowFall17: 'monkSlowFall-17',
  monkSlowFall18: 'monkSlowFall-18',
  monkSlowFall19: 'monkSlowFall-19',
  monkSlowFall20: 'monkSlowFall-20',
  monkQuickedHealing4: 'monkQuickedHealing-4',
  monkQuickedHealing5: 'monkQuickedHealing-5',
  monkQuickedHealing11: 'monkQuickedHealing-11',
  monkQuickedHealing17: 'monkQuickedHealing-17',
  monkExtraAttack5: 'monkExtraAttack-5',
  monkStunningStrike5: 'monkStunningStrike-5',
  monkFocusedAim5: 'monkFocusedAim-5',
  monkKiEmpoweredStrikes6: 'monkKiEmpoweredStrikes-6',
  monkEvasion7: 'monkEvasion-7',
  monkStillnessOfMind7: 'monkStillnessOfMind-7',
  monkPurityOfBody10: 'monkPurityOfBody-10',
  monkTongueOfTheSunAndMoon13: 'monkTongueOfTheSunAndMoon-13',
  monkDiamondSoul14: 'monkDiamondSoul-14',
  monkTimelessBody15: 'monkTimelessBody-15',
  monkEmptyBody18: 'monkEmptyBody-18',
  monkPerfectSelf20: 'monkPerfectSelf-20',
  barbarianRage1: 'barbarianRage-1',
  barbarianRage3: 'barbarianRage-3',
  barbarianRage6: 'barbarianRage-6',
  barbarianRage9: 'barbarianRage-9',
  barbarianRage12: 'barbarianRage-12',
  barbarianRage16: 'barbarianRage-16',
  barbarianRage17: 'barbarianRage-17',
  barbarianRage20: 'barbarianRage-20',
  barbarianUnarmoredDefense1: 'unarmoredDefense-1',
  barbarianDangerSense2: 'dangerSense-2',
  barbarianRecklessAttack2: 'recklessAttack-2',
  barbarianPrimalKnowledge3: 'primalKnowledge-3',
  barbarianPrimalKnowledge10: 'primalKnowledge-10',
  barbarianExtraAttack5: 'extraAttack-5',
  barbarianFastMovement5: 'fastMovement-5',
  barbarianFeralInstinct7: 'feralInstinct-7',
  barbarianInstinctivePounce7: 'instinctivePounce-7',
  barbarianBrutalCritical9: 'brutalCritical-9',
  barbarianBrutalCritical13: 'brutalCritical-13',
  barbarianBrutalCritical17: 'brutalCritical-17',
  barbarianRelentlessRage11: 'relentlessRage-11',
  barbarianPersistentRage15: 'persistentRage-15',
  barbarianIndomitableMight18: 'indomitableMight-18',
  barbarianPrimalChampion20: 'primalChampion-20',
  fighterASI4: 'fighterASI-4',
  fighterASI6: 'fighterASI-6',
  fighterASI8: 'fighterASI-8',
  fighterASI12: 'fighterASI-12',
  fighterASI14: 'fighterASI-14',
  fighterASI16: 'fighterASI-16',
  fighterASI19: 'fighterASI-19',
  wizardASI4: 'wizardASI-4',
  wizardASI8: 'wizardASI-8',
  wizardASI12: 'wizardASI-12',
  wizardASI16: 'wizardASI-16',
  wizardASI19: 'wizardASI-19',
  clericASI4: 'clericASI-4',
  clericASI8: 'clericASI-8',
  clericASI12: 'clericASI-12',
  clericASI16: 'clericASI-16',
  clericASI19: 'clericASI-19',
  rogueASI4: 'rogueASI-4',
  rogueASI8: 'rogueASI-8',
  rogueASI10: 'rogueASI-10',
  rogueASI12: 'rogueASI-12',
  rogueASI16: 'rogueASI-16',
  rogueASI19: 'rogueASI-19',
  barbarianASI4: 'barbarianASI-4',
  barbarianASI6: 'barbarianASI-6',
  barbarianASI8: 'barbarianASI-8',
  barbarianASI12: 'barbarianASI-12',
  barbarianASI14: 'barbarianASI-14',
  barbarianASI16: 'barbarianASI-16',
  barbarianASI19: 'barbarianASI-19',
  bardASI4: 'bardASI-4',
  bardASI8: 'bardASI-8',
  bardASI12: 'bardASI-12',
  bardASI16: 'bardASI-16',
  bardASI19: 'bardASI-19',
  druidASI4: 'druidASI-4',
  druidASI8: 'druidASI-8',
  druidASI12: 'druidASI-12',
  druidASI16: 'druidASI-16',
  druidASI19: 'druidASI-19',
  monkASI4: 'monkASI-4',
  monkASI6: 'monkASI-6',
  monkASI8: 'monkASI-8',
  monkASI10: 'monkASI-10',
  monkASI12: 'monkASI-12',
  monkASI16: 'monkASI-16',
  monkASI19: 'monkASI-19',
  paladinASI4: 'paladinASI-4',
  paladinASI8: 'paladinASI-8',
  paladinASI12: 'paladinASI-12',
  paladinASI16: 'paladinASI-16',
  paladinASI19: 'paladinASI-19',
  rangerASI4: 'rangerASI-4',
  rangerASI8: 'rangerASI-8',
  rangerASI12: 'rangerASI-12',
  rangerASI16: 'rangerASI-16',
  rangerASI19: 'rangerASI-19',
  sorcererASI4: 'sorcererASI-4',
  sorcererASI8: 'sorcererASI-8',
  sorcererASI12: 'sorcererASI-12',
  sorcererASI16: 'sorcererASI-16',
  sorcererASI19: 'sorcererASI-19',
  warlockASI4: 'warlockASI-4',
  warlockASI8: 'warlockASI-8',
  warlockASI12: 'warlockASI-12',
  warlockASI16: 'warlockASI-16',
  warlockASI19: 'warlockASI-19',
  artificerASI4: 'artificerASI-4',
  artificerASI8: 'artificerASI-8',
  artificerASI12: 'artificerASI-12',
  artificerASI16: 'artificerASI-16',
  artificerASI19: 'artificerASI-19',
};

const ClassFeatureEffectSeed: Prisma.EffectCreateInput[] = [
  //druid (skip for now)
  ...[4, 8, 12, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.druidASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.druidASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`druidASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.druidASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`druidASI${arr[i - 1]}`],
        },
      },
    };
  }),
  // warlock (skip for now)
  ...[4, 8, 12, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.warlockASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.warlockASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`warlockASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.warlockASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`warlockASI${arr[i - 1]}`],
        },
      },
    };
  }),
  //sorcerer (skip for now)
  ...[4, 8, 12, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.sorcererASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.sorcererASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`sorcererASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.sorcererASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`sorcererASI${arr[i - 1]}`],
        },
      },
    };
  }),
  // artificer (skip for now)
  ...[4, 8, 12, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.artificerASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.artificerASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`artificerASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.artificerASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`artificerASI${arr[i - 1]}`],
        },
      },
    };
  }),
  //rogue (skip for now)
  ...[4, 8, 10, 12, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.rogueASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.rogueASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`rogueASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.rogueASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`rogueASI${arr[i - 1]}`],
        },
      },
    };
  }),
  //Fighter (Skip for now)
  ...[4, 6, 8, 12, 14, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.fighterASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.fighterASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`fighterASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.fighterASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`fighterASI${arr[i - 1]}`],
        },
      },
    };
  }),
  //Wizard Skip for now
  ...[4, 8, 12, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.wizardASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.wizardASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`wizardASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.wizardASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`wizardASI${arr[i - 1]}`],
        },
      },
    };
  }),
  //Bard
  ...[4, 8, 12, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.bardASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.bardASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`bardASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.bardASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`bardASI${arr[i - 1]}`],
        },
      },
    };
  }),
  //Cantrips
  {
    id: ClassFeatureEffectIds.bardCantrips1,
    level: 1,
    Feature: {
      connect: {
        id: fids.bardCantrips,
      },
    },
  },
  {
    Feature: {
      connect: {
        id: fids.bardCantrips,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardCantrips1,
      },
    },
    id: ClassFeatureEffectIds.bardCantrips4,
    level: 4,
  },
  {
    Feature: {
      connect: {
        id: fids.bardCantrips,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardCantrips4,
      },
    },
    id: ClassFeatureEffectIds.bardCantrips10,
    level: 10,
  },
  //bard spells known
  {
    Feature: {
      connect: {
        id: fids.bardSpellsKnown,
      },
    },
    id: ClassFeatureEffectIds.bardSpellsKnown1,
    level: 1,
  },
  ...[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17].map((level) => {
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`bardSpellsKnown${level}`],
      level: level,
      parentEffect: {
        connect: {
          id: ClassFeatureEffectIds.bardSpellsKnown1,
        },
      },
      Feature: {
        connect: {
          id: fids.bardSpellsKnown,
        },
      },
    };
  }),
  {
    id: ClassFeatureEffectIds.bardSpellsKnown18,
    level: 18,
    Feature: {
      connect: {
        id: fids.bardSpellsKnown,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardSpellsKnown17,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardRitualCaster,
    level: 1,
    Feature: {
      connect: {
        id: fids.ritualCastingBard,
      },
    },
    ritualCasterType: RitualCasterType.PREPARED,
  },
  //bardic inspiration
  {
    id: ClassFeatureEffectIds.bardicInspiration1,
    level: 1,
    Feature: {
      connect: {
        id: fids.bardicInspiration,
      },
    },
    rollFormulas: ['1d6'],
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.bardicInspiration1,
            resourceId: CustomResourceIds.bardicInspiration,
          },
        },
        create: {
          resourceId: CustomResourceIds.bardicInspiration,
          scalingFormula: 'max(1, CHA)',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardicInspiration5,
    level: 5,
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardicInspiration1,
      },
    },
    Feature: {
      connect: {
        id: fids.bardicInspiration,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.bardicInspiration5,
            resourceId: CustomResourceIds.bardicInspiration,
          },
        },
        create: {
          resourceId: CustomResourceIds.bardicInspiration,
          scalingFormula: 'max(1, CHA)',
          refreshOn: RefreshEvent.SHORT_REST,
        },
      },
    },
    rollFormulas: ['1d8'],
  },
  {
    id: ClassFeatureEffectIds.bardicInspiration10,
    level: 10,
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardicInspiration5,
      },
    },
    Feature: {
      connect: {
        id: fids.bardicInspiration,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.bardicInspiration10,
            resourceId: CustomResourceIds.bardicInspiration,
          },
        },
        create: {
          resourceId: CustomResourceIds.bardicInspiration,
          scalingFormula: 'max(1, CHA)',
          refreshOn: RefreshEvent.SHORT_REST,
        },
      },
    },
    rollFormulas: ['1d10'],
  },
  {
    id: ClassFeatureEffectIds.bardicInspiration15,
    level: 15,
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardicInspiration10,
      },
    },
    Feature: {
      connect: {
        id: fids.bardicInspiration,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.bardicInspiration15,
            resourceId: CustomResourceIds.bardicInspiration,
          },
        },
        create: {
          resourceId: CustomResourceIds.bardicInspiration,
          scalingFormula: 'max(1, CHA)',
          refreshOn: RefreshEvent.SHORT_REST,
        },
      },
    },
    rollFormulas: ['1d12'],
  },
  {
    id: ClassFeatureEffectIds.jackOfAllTrades,
    level: 2,
    Feature: {
      connect: {
        id: fids.jackOfAllTrades,
      },
    },
    halfSkillProficiencies: Object.values(Skill),
  },
  {
    id: ClassFeatureEffectIds.bardSongOfRest2,
    level: 2,
    Feature: {
      connect: {
        id: fids.songOfRest,
      },
    },
    rollFormulas: ['1d6'],
  },
  {
    id: ClassFeatureEffectIds.bardSongOfRest6,
    level: 6,
    Feature: {
      connect: {
        id: fids.songOfRest,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardSongOfRest2,
      },
    },
    rollFormulas: ['1d8'],
  },
  {
    id: ClassFeatureEffectIds.bardSongOfRest13,
    level: 13,
    Feature: {
      connect: {
        id: fids.songOfRest,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardSongOfRest6,
      },
    },
    rollFormulas: ['1d10'],
  },
  {
    id: ClassFeatureEffectIds.bardSongOfRest17,
    level: 17,
    Feature: {
      connect: {
        id: fids.songOfRest,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardSongOfRest13,
      },
    },
    rollFormulas: ['1d12'],
  },
  {
    id: ClassFeatureEffectIds.bardMagicalInspiration2,
    level: 2,
    Feature: {
      connect: {
        id: fids.magicalInspiration,
      },
    },
    rollFormulas: ['1d6'],
  },
  {
    id: ClassFeatureEffectIds.bardMagicalInspiration5,
    level: 5,
    Feature: {
      connect: {
        id: fids.magicalInspiration,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardMagicalInspiration2,
      },
    },
    rollFormulas: ['1d8'],
  },
  {
    id: ClassFeatureEffectIds.bardMagicalInspiration10,
    level: 10,
    Feature: {
      connect: {
        id: fids.magicalInspiration,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardMagicalInspiration5,
      },
    },
    rollFormulas: ['1d10'],
  },
  {
    id: ClassFeatureEffectIds.bardMagicalInspiration15,
    level: 15,
    Feature: {
      connect: {
        id: fids.magicalInspiration,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardMagicalInspiration10,
      },
    },
    rollFormulas: ['1d12'],
  },
  {
    id: ClassFeatureEffectIds.bardExpertise3,
    level: 3,
    Feature: {
      connect: {
        id: fids.bardExpertise,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardExpertise10,
    level: 10,
    Feature: {
      connect: {
        id: fids.bardExpertise,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardExpertise3,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardicVersatility4,
    level: 4,
    Feature: {
      connect: {
        id: fids.bardicVersatility,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardicVersatility8,
    level: 8,
    Feature: {
      connect: {
        id: fids.bardicVersatility,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardicVersatility4,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardicVersatility12,
    level: 12,
    Feature: {
      connect: {
        id: fids.bardicVersatility,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardicVersatility8,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardicVersatility16,
    level: 16,
    Feature: {
      connect: {
        id: fids.bardicVersatility,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardicVersatility12,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardicVersatility19,
    level: 19,
    Feature: {
      connect: {
        id: fids.bardicVersatility,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardicVersatility16,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardFontOfInspiration,
    level: 5,
    Feature: {
      connect: {
        id: fids.fontOfInspiration,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardCounterCharm,
    level: 6,
    Feature: {
      connect: {
        id: fids.countercharm,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardMagicalSecrets10,
    level: 10,
    Feature: {
      connect: {
        id: fids.magicalSecrets,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardMagicalSecrets14,
    level: 14,
    Feature: {
      connect: {
        id: fids.magicalSecrets,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardMagicalSecrets10,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardMagicalSecrets18,
    level: 18,
    Feature: {
      connect: {
        id: fids.magicalSecrets,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.bardMagicalSecrets14,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.bardSuperiorInspiration20,
    level: 20,
    Feature: {
      connect: {
        id: fids.superiorInspiration,
      },
    },
  },
  //cleric
  ...[4, 8, 12, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.clericASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.clericASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`clericASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.clericASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`clericASI${arr[i - 1]}`],
        },
      },
    };
  }),
  {
    id: ClassFeatureEffectIds.clericChannelDivinity2,
    level: 2,
    Feature: {
      connect: {
        id: fids.channelDivinity,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.clericChannelDivinity2,
            resourceId: CustomResourceIds.channelDivinity,
          },
        },
        create: {
          resourceId: CustomResourceIds.channelDivinity,
          scalingFormula: '1',
          refreshOn: RefreshEvent.SHORT_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericChannelDivinity6,
    level: 6,
    Feature: {
      connect: {
        id: fids.channelDivinity,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericChannelDivinity2,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.clericChannelDivinity6,
            resourceId: CustomResourceIds.channelDivinity,
          },
        },
        create: {
          resourceId: CustomResourceIds.channelDivinity,
          scalingFormula: '2',
          refreshOn: RefreshEvent.SHORT_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericChannelDivinity18,
    level: 18,
    Feature: {
      connect: {
        id: fids.channelDivinity,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericChannelDivinity6,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.clericChannelDivinity18,
            resourceId: CustomResourceIds.channelDivinity,
          },
        },
        create: {
          resourceId: CustomResourceIds.channelDivinity,
          scalingFormula: '3',
          refreshOn: RefreshEvent.SHORT_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericTurnUndead2,
    level: 2,
    Feature: {
      connect: {
        id: fids.turnUndead,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.harnessDivinePower2,
    level: 2,
    Feature: {
      connect: {
        id: fids.clericHarnessDivinePower,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.harnessDivinePower2,
            resourceId: CustomResourceIds.harnessDivinePowerCleric,
          },
        },
        create: {
          resourceId: CustomResourceIds.harnessDivinePowerCleric,
          scalingFormula: '1',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.harnessDivinePower6,
    level: 6,
    Feature: {
      connect: {
        id: fids.clericHarnessDivinePower,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.harnessDivinePower2,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.harnessDivinePower6,
            resourceId: CustomResourceIds.harnessDivinePowerCleric,
          },
        },
        create: {
          resourceId: CustomResourceIds.harnessDivinePowerCleric,
          scalingFormula: '2',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.harnessDivinePower18,
    level: 18,
    Feature: {
      connect: {
        id: fids.clericHarnessDivinePower,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.harnessDivinePower6,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.harnessDivinePower18,
            resourceId: CustomResourceIds.harnessDivinePowerCleric,
          },
        },
        create: {
          resourceId: CustomResourceIds.harnessDivinePowerCleric,
          scalingFormula: '3',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericCantripVersatility4,
    level: 4,
    Feature: {
      connect: {
        id: fids.clericCantripVersatility,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericCantripVersatility8,
    level: 8,
    Feature: {
      connect: {
        id: fids.clericCantripVersatility,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericCantripVersatility4,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericCantripVersatility12,
    level: 12,
    Feature: {
      connect: {
        id: fids.clericCantripVersatility,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericCantripVersatility8,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericCantripVersatility16,
    level: 16,
    Feature: {
      connect: {
        id: fids.clericCantripVersatility,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericCantripVersatility12,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericCantripVersatility19,
    level: 19,
    Feature: {
      connect: {
        id: fids.clericCantripVersatility,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericCantripVersatility16,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDestroyUndead5,
    level: 5,
    Feature: {
      connect: {
        id: fids.destroyUndead,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDestroyUndead8,
    level: 8,
    Feature: {
      connect: {
        id: fids.destroyUndead,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDestroyUndead5,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDestroyUndead11,
    level: 11,
    Feature: {
      connect: {
        id: fids.destroyUndead,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDestroyUndead8,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDestroyUndead14,
    level: 14,
    Feature: {
      connect: {
        id: fids.destroyUndead,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDestroyUndead11,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDestroyUndead17,
    level: 17,
    Feature: {
      connect: {
        id: fids.destroyUndead,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDestroyUndead14,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericBlessedStrikes8,
    level: 8,
    Feature: {
      connect: {
        id: fids.blessedStrikes,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDivineIntervention10,
    level: 10,
    Feature: {
      connect: {
        id: fids.divineIntervention,
      },
    },
    rollFormulas: ['1d100'],
  },
  {
    id: ClassFeatureEffectIds.clericDivineIntervention11,
    level: 11,
    Feature: {
      connect: {
        id: fids.divineIntervention,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDivineIntervention10,
      },
    },
    rollFormulas: ['1d100'],
  },
  {
    id: ClassFeatureEffectIds.clericDivineIntervention12,
    level: 12,
    Feature: {
      connect: {
        id: fids.divineIntervention,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDivineIntervention11,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDivineIntervention13,
    level: 13,
    Feature: {
      connect: {
        id: fids.divineIntervention,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDivineIntervention12,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDivineIntervention14,
    level: 14,
    Feature: {
      connect: {
        id: fids.divineIntervention,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDivineIntervention13,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDivineIntervention15,
    level: 15,
    Feature: {
      connect: {
        id: fids.divineIntervention,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDivineIntervention14,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDivineIntervention16,
    level: 16,
    Feature: {
      connect: {
        id: fids.divineIntervention,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDivineIntervention15,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDivineIntervention17,
    level: 17,
    Feature: {
      connect: {
        id: fids.divineIntervention,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDivineIntervention16,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDivineIntervention18,
    level: 18,
    Feature: {
      connect: {
        id: fids.divineIntervention,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDivineIntervention17,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDivineIntervention19,
    level: 19,
    Feature: {
      connect: {
        id: fids.divineIntervention,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDivineIntervention18,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericDivineIntervention20,
    level: 20,
    Feature: {
      connect: {
        id: fids.divineIntervention,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericDivineIntervention19,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericCantrips1,
    level: 1,
    Feature: {
      connect: {
        id: fids.clericCantrips,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericCantrips4,
    level: 4,
    Feature: {
      connect: {
        id: fids.clericCantrips,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericCantrips1,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericCantrips10,
    level: 10,
    Feature: {
      connect: {
        id: fids.clericCantrips,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.clericCantrips4,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.clericRitualCaster,
    level: 1,
    Feature: {
      connect: {
        id: fids.ritualCastingCleric,
      },
    },
    ritualCasterType: RitualCasterType.PREPARED,
  },
  //paladin
  ...[4, 8, 12, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.paladinASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.paladinASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`paladinASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.paladinASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`paladinASI${arr[i - 1]}`],
        },
      },
    };
  }),
  {
    id: ClassFeatureEffectIds.paladinDivineSense1,
    level: 1,
    Feature: {
      connect: {
        id: fids.divineSense,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.paladinDivineSense1,
            resourceId: CustomResourceIds.paladinDivineSense,
          },
        },
        create: {
          resourceId: CustomResourceIds.paladinDivineSense,
          scalingFormula: '1 + CHA',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.layOnHands1,
    level: 1,
    Feature: {
      connect: {
        id: fids.layOnHands,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.layOnHands1,
            resourceId: CustomResourceIds.layOnHands,
          },
        },
        create: {
          resourceId: CustomResourceIds.layOnHands,
          scalingFormula: '5',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  ...[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
    (level) => {
      return {
        //@ts-expect-error level can index
        id: ClassFeatureEffectIds[`layOnHands${level}`],
        level: level,
        parentEffect: {
          connect: {
            // @ts-expect-error level can index
            id: ClassFeatureEffectIds[`layOnHands${level - 1}`],
          },
        },
        Feature: {
          connect: {
            id: fids.layOnHands,
          },
        },
        EffectToResource: {
          connectOrCreate: {
            where: {
              effectId_resourceId: {
                // @ts-expect-error level can index
                effectId: ClassFeatureEffectIds[`layOnHands${level}`],
                resourceId: CustomResourceIds.layOnHands,
              },
            },
            create: {
              resourceId: CustomResourceIds.layOnHands,
              scalingFormula: `${5 * level}`,
              refreshOn: RefreshEvent.LONG_REST,
            },
          },
        },
      };
    }
  ),
  {
    id: ClassFeatureEffectIds.paladinFightStyle2,
    level: 2,
    Feature: {
      connect: {
        id: fids.fightingStylePaladin,
      },
    },
    EffectGrantsGroup: {
      connectOrCreate: {
        where: {
          effectId_groupId: {
            effectId: ClassFeatureEffectIds.paladinFightStyle2,
            groupId: FeatureGroupIds.fightingStyle,
          },
        },
        create: {
          FeaturesToChooseFrom: {
            connect: [
              {
                id: FeaturesFromFeatureGroupIds.blessedWarriorFightingStyle,
              },
              {
                id: FeaturesFromFeatureGroupIds.blindFightingFightingStyle,
              },
              {
                id: FeaturesFromFeatureGroupIds.defenseFightingStyle,
              },
              {
                id: FeaturesFromFeatureGroupIds.duelingFightingStyle,
              },
              {
                id: FeaturesFromFeatureGroupIds.greatWeaponFightingFightingStyle,
              },
              {
                id: FeaturesFromFeatureGroupIds.interceptionFightingStyle,
              },
              {
                id: FeaturesFromFeatureGroupIds.protectionFightingStyle,
              },
            ],
          },
          groupId: FeatureGroupIds.fightingStyle,
          amount: 1,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.divineSmite2,
    level: 2,
    Feature: {
      connect: {
        id: fids.divineSmite,
      },
    },
    //Grants spell divine smite TODO
  },
  {
    id: ClassFeatureEffectIds.divineHealth3,
    level: 3,
    Feature: {
      connect: {
        id: fids.divineHealth,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.paladingHarnessDivinePower3,
    level: 3,
    Feature: {
      connect: {
        id: fids.harnessDivinePowerPaladin,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.paladingHarnessDivinePower3,
            resourceId: CustomResourceIds.harnessDivinePowerPaladin,
          },
        },
        create: {
          resourceId: CustomResourceIds.harnessDivinePowerPaladin,
          scalingFormula: '1',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.paladingHarnessDivinePower7,
    level: 7,
    Feature: {
      connect: {
        id: fids.harnessDivinePowerPaladin,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.paladingHarnessDivinePower3,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.paladingHarnessDivinePower7,
            resourceId: CustomResourceIds.harnessDivinePowerPaladin,
          },
        },
        create: {
          resourceId: CustomResourceIds.harnessDivinePowerPaladin,
          scalingFormula: '2',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.paladingHarnessDivinePower15,
    level: 15,
    Feature: {
      connect: {
        id: fids.harnessDivinePowerPaladin,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.paladingHarnessDivinePower7,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.paladingHarnessDivinePower15,
            resourceId: CustomResourceIds.harnessDivinePowerPaladin,
          },
        },
        create: {
          resourceId: CustomResourceIds.harnessDivinePowerPaladin,
          scalingFormula: '3',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.paladinExtraAttack5,
    level: 5,
    Feature: {
      connect: {
        id: fids.extraAttackPaladin,
      },
    },
    //todo extra attack
  },
  {
    id: ClassFeatureEffectIds.paladinAuraOfProtection6,
    level: 6,
    Feature: {
      connect: {
        id: fids.auraOfProtection,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.paladinAuraOfProtection18,
    level: 18,
    Feature: {
      connect: {
        id: fids.auraOfProtection,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.paladinAuraOfProtection6,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.paladinAuraOfCourage10,
    level: 10,
    Feature: {
      connect: {
        id: fids.auraOfCourage,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.paladinAuraOfCourage18,
    level: 18,
    Feature: {
      connect: {
        id: fids.auraOfCourage,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.paladinAuraOfCourage10,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.paladinImprovedDivineSmite11,
    level: 11,
    Feature: {
      connect: {
        id: fids.improvedDivineSmite,
      },
    },
    damageModifier: '+ 1d8',
    weaponGroupRef: WeaponGroup.ALL_MELEE,
  },
  {
    id: ClassFeatureEffectIds.paladinCleansingTouch14,
    level: 14,
    Feature: {
      connect: {
        id: fids.cleansingTouch,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.paladinCleansingTouch14,
            resourceId: CustomResourceIds.cleansingTouch,
          },
        },
        create: {
          resourceId: CustomResourceIds.cleansingTouch,
          scalingFormula: 'max(1, CHA)',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.paladinChannelDivinity3,
    level: 3,
    Feature: {
      connect: {
        id: fids.channelDivinityPaladin,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.paladinChannelDivinity3,
            resourceId: CustomResourceIds.channelDivinity,
          },
        },
        create: {
          resourceId: CustomResourceIds.channelDivinity,
          scalingFormula: '1',
          refreshOn: RefreshEvent.SHORT_REST,
        },
      },
    },
  },
  //ranger asi
  ...[4, 8, 12, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.rangerASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.rangerASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`rangerASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.rangerASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`rangerASI${arr[i - 1]}`],
        },
      },
    };
  }),

  {
    id: ClassFeatureEffectIds.rangerSpellsKnown2,
    level: 2,
    Feature: {
      connect: {
        id: fids.rangerSpellsKnown,
      },
    },
  },
  ...[3, 5, 7, 9, 11, 13, 15, 17, 19].map((level) => {
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`rangerSpellsKnown${level}`],
      level: level,
      parentEffect: {
        connect: {
          // @ts-expect-error level can index
          id: ClassFeatureEffectIds[
            `rangerSpellsKnown${level !== 3 ? level - 2 : 2}`
          ],
        },
      },
      Feature: {
        connect: {
          id: fids.rangerSpellsKnown,
        },
      },
    };
  }),
  {
    id: ClassFeatureEffectIds.rangerFavoredEnemyFoe1,
    level: 1,
    Feature: {
      connect: {
        id: fids.favoredEnemyFoe,
      },
    },
    EffectGrantsGroup: {
      connectOrCreate: {
        where: {
          effectId_groupId: {
            effectId: ClassFeatureEffectIds.rangerFavoredEnemyFoe1,
            groupId: FeatureGroupIds.rangerFavored,
          },
        },
        create: {
          groupId: FeatureGroupIds.rangerFavored,
          amount: 1,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerExplorer1,
    level: 1,
    Feature: {
      connect: {
        id: fids.rangerExplorer,
      },
    },
    EffectGrantsGroup: {
      connectOrCreate: {
        where: {
          effectId_groupId: {
            effectId: ClassFeatureEffectIds.rangerExplorer1,
            groupId: FeatureGroupIds.rangerExplorer,
          },
        },
        create: {
          groupId: FeatureGroupIds.rangerExplorer,
          amount: 1,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerFightingStyle,
    level: 2,
    Feature: {
      connect: {
        id: fids.rangerFightingStyle,
      },
    },
    EffectGrantsGroup: {
      connectOrCreate: {
        where: {
          effectId_groupId: {
            effectId: ClassFeatureEffectIds.rangerFightingStyle,
            groupId: FeatureGroupIds.fightingStyle,
          },
        },
        create: {
          groupId: FeatureGroupIds.fightingStyle,
          amount: 1,
          FeaturesToChooseFrom: {
            connect: [
              {
                id: FeaturesFromFeatureGroupIds.archeryFightingStyle,
              },
              {
                id: FeaturesFromFeatureGroupIds.blindFightingFightingStyle,
              },
              {
                id: FeaturesFromFeatureGroupIds.defenseFightingStyle,
              },
              {
                id: FeaturesFromFeatureGroupIds.druidicWarriorFightingStyle,
              },
              {
                id: FeaturesFromFeatureGroupIds.duelingFightingStyle,
              },
              {
                id: FeaturesFromFeatureGroupIds.thrownWeaponFightingStyle,
              },
              {
                id: FeaturesFromFeatureGroupIds.twoWeaponFightingFightingStyle,
              },
            ],
          },
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerAwareness3,
    level: 3,
    Feature: {
      connect: {
        id: fids.rangerAwareness,
      },
    },
    EffectGrantsGroup: {
      connectOrCreate: {
        where: {
          effectId_groupId: {
            effectId: ClassFeatureEffectIds.rangerAwareness3,
            groupId: FeatureGroupIds.rangerAwareness,
          },
        },
        create: {
          groupId: FeatureGroupIds.rangerAwareness,
          amount: 1,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerMartialVersatility4,
    level: 4,
    Feature: {
      connect: {
        id: fids.rangerMartialVersatility,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerMartialVersatility8,
    level: 8,
    Feature: {
      connect: {
        id: fids.rangerMartialVersatility,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.rangerMartialVersatility4,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerMartialVersatility12,
    level: 12,
    Feature: {
      connect: {
        id: fids.rangerMartialVersatility,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.rangerMartialVersatility8,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerMartialVersatility16,
    level: 16,
    Feature: {
      connect: {
        id: fids.rangerMartialVersatility,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.rangerMartialVersatility12,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerMartialVersatility19,
    level: 19,
    Feature: {
      connect: {
        id: fids.rangerMartialVersatility,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.rangerMartialVersatility16,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerExtraAttack5,
    level: 5,
    Feature: {
      connect: {
        id: fids.rangerExtraAttack,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerLandsStride8,
    level: 8,
    Feature: {
      connect: {
        id: fids.landStride,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerDisguise10,
    level: 10,
    Feature: {
      connect: {
        id: fids.rangerDisuise,
      },
    },
    EffectGrantsGroup: {
      connectOrCreate: {
        where: {
          effectId_groupId: {
            effectId: ClassFeatureEffectIds.rangerDisguise10,
            groupId: FeatureGroupIds.rangerDisguise,
          },
        },
        create: {
          groupId: FeatureGroupIds.rangerDisguise,
          amount: 1,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerVanish14,
    level: 14,
    Feature: {
      connect: {
        id: fids.vanish,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerFeralSenses18,
    level: 18,
    Feature: {
      connect: {
        id: fids.feralSenses,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.rangerFoeSlayer20,
    level: 20,
    Feature: {
      connect: {
        id: fids.foeSlayer,
      },
    },
  },
  //monk
  ...[4, 8, 12, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.monkASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.monkASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`monkASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.monkASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`monkASI${arr[i - 1]}`],
        },
      },
    };
  }),
  {
    id: ClassFeatureEffectIds.monkUnarmoredDefense1,
    level: 1,
    Feature: {
      connect: {
        id: fids.monkUnarmoredDefense,
      },
    },
    acBonusFormula: 'WIS',
    preRequisite: {
      protocol: 'AND',
      data: [
        {
          isWearingArmor: false,
        },
        {
          isHoldingShield: false,
        },
      ],
    },
  },
  {
    id: ClassFeatureEffectIds.monkMartialArts1,
    level: 1,
    Feature: {
      connect: {
        id: fids.martialArts,
      },
    },
    unarmedAttack: '1d20 + max(DEX, STR)',
    unarmedDamageType: DamageTypes.BLUDGEONING,
    unarmedDamage: '1d4 + max(DEX, STR)',
  },
  {
    id: ClassFeatureEffectIds.monkMartialArts5,
    level: 5,
    Feature: {
      connect: {
        id: fids.martialArts,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.monkMartialArts1,
      },
    },
    unarmedAttack: '1d20 + max(DEX, STR)',
    unarmedDamageType: DamageTypes.BLUDGEONING,
    unarmedDamage: '1d6 + max(DEX, STR)',
  },
  {
    id: ClassFeatureEffectIds.monkMartialArts11,
    level: 11,
    Feature: {
      connect: {
        id: fids.martialArts,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.monkMartialArts5,
      },
    },
    unarmedAttack: '1d20 + max(DEX, STR)',
    unarmedDamageType: DamageTypes.BLUDGEONING,
    unarmedDamage: '1d8 + max(DEX, STR)',
  },
  {
    id: ClassFeatureEffectIds.monkMartialArts17,
    level: 17,
    Feature: {
      connect: {
        id: fids.martialArts,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.monkMartialArts11,
      },
    },
    unarmedAttack: '1d20 + max(DEX, STR)',
    unarmedDamage: '1d10 + max(DEX, STR)',
    unarmedDamageType: DamageTypes.BLUDGEONING,
  },
  {
    id: ClassFeatureEffectIds.monkKiPoints2,
    level: 2,
    Feature: {
      connect: {
        id: fids.ki,
      },
    },
    rollFormulas: ['8 + PROF + WIS'],
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.monkKiPoints2,
            resourceId: CustomResourceIds.kiPoints,
          },
        },
        create: {
          resourceId: CustomResourceIds.kiPoints,
          scalingFormula: '2',
          refreshOn: RefreshEvent.SHORT_REST,
        },
      },
    },
  },
  ...[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(
    (level) => {
      return {
        //@ts-expect-error level can index
        id: ClassFeatureEffectIds[`monkKiPoints${level}`],
        level: level,
        parentEffect: {
          connect: {
            // @ts-expect-error level can index
            id: ClassFeatureEffectIds[`monkKiPoints${level - 1}`],
          },
        },
        Feature: {
          connect: {
            id: fids.ki,
          },
        },
        EffectToResource: {
          connectOrCreate: {
            where: {
              effectId_resourceId: {
                // @ts-expect-error level can index
                effectId: ClassFeatureEffectIds[`monkKiPoints${level}`],
                resourceId: CustomResourceIds.kiPoints,
              },
            },
            create: {
              resourceId: CustomResourceIds.kiPoints,
              scalingFormula: `${level}`,
              refreshOn: RefreshEvent.SHORT_REST,
            },
          },
        },
      };
    }
  ),
  {
    id: ClassFeatureEffectIds.monkUnarmoredMovement2,
    level: 2,
    Feature: {
      connect: {
        id: fids.unarmoredMovement,
      },
    },
    speedBonusFormula: '10',
    preRequisite: {
      protocol: 'AND',
      data: [
        {
          isWearingArmor: false,
        },
        {
          isHoldingShield: false,
        },
      ],
    },
  },
  {
    id: ClassFeatureEffectIds.monkUnarmoredMovement6,
    level: 6,
    Feature: {
      connect: {
        id: fids.unarmoredMovement,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.monkUnarmoredMovement2,
      },
    },
    speedBonusFormula: '15',
  },
  {
    id: ClassFeatureEffectIds.monkUnarmoredMovement10,
    level: 10,
    Feature: {
      connect: {
        id: fids.unarmoredMovement,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.monkUnarmoredMovement6,
      },
    },
    speedBonusFormula: '20',
  },
  {
    id: ClassFeatureEffectIds.monkUnarmoredMovement14,
    level: 14,
    Feature: {
      connect: {
        id: fids.unarmoredMovement,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.monkUnarmoredMovement10,
      },
    },
    speedBonusFormula: '25',
  },
  {
    id: ClassFeatureEffectIds.monkUnarmoredMovement18,
    level: 18,
    Feature: {
      connect: {
        id: fids.unarmoredMovement,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.monkUnarmoredMovement14,
      },
    },
    speedBonusFormula: '30',
  },
  {
    id: ClassFeatureEffectIds.monkDedicatedWeapon2,
    level: 2,
    Feature: {
      connect: {
        id: fids.dedicatedWeapon,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.monkDeflectMissiles3,
    level: 3,
    Feature: {
      connect: {
        id: fids.deflectMissiles,
      },
    },
    rollFormulas: ['1d10 + DEX + 3'],
  },
  ...[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
    (level) => {
      return {
        //@ts-expect-error level can index
        id: ClassFeatureEffectIds[`monkDeflectMissiles${level}`],
        level: level,
        parentEffect: {
          connect: {
            // @ts-expect-error level can index
            id: ClassFeatureEffectIds[`monkDeflectMissiles${level - 1}`],
          },
        },
        Feature: {
          connect: {
            id: fids.deflectMissiles,
          },
        },
        rollFormulas: [`1d10 + DEX + ${level}`],
      };
    }
  ),
  {
    id: ClassFeatureEffectIds.monkKiFueledAttack3,
    level: 3,
    Feature: {
      connect: {
        id: fids.kiFueledAttack,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.monkSlowFall4,
    level: 4,
    Feature: {
      connect: {
        id: fids.slowFall,
      },
    },
    rollFormulas: [`5 * 4`],
  },
  ...[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
    (level) => {
      return {
        //@ts-expect-error level can index
        id: ClassFeatureEffectIds[`monkSlowFall${level}`],
        level: level,
        parentEffect: {
          connect: {
            // @ts-expect-error level can index
            id: ClassFeatureEffectIds[`monkSlowFall${level - 1}`],
          },
        },
        Feature: {
          connect: {
            id: fids.slowFall,
          },
        },
        rollFormulas: [`5 * ${level}`],
      };
    }
  ),
  {
    id: ClassFeatureEffectIds.monkQuickedHealing4,
    level: 4,
    Feature: {
      connect: {
        id: fids.quickenedHealing,
      },
    },
    rollFormulas: ['1d4 + WIS'],
  },
  {
    id: ClassFeatureEffectIds.monkQuickedHealing5,
    level: 5,
    Feature: {
      connect: {
        id: fids.quickenedHealing,
      },
    },
    rollFormulas: ['1d6 + WIS'],
  },
  {
    id: ClassFeatureEffectIds.monkQuickedHealing11,
    level: 11,
    Feature: {
      connect: {
        id: fids.quickenedHealing,
      },
    },
    rollFormulas: ['1d8 + WIS'],
  },
  {
    id: ClassFeatureEffectIds.monkQuickedHealing17,
    level: 17,
    Feature: {
      connect: {
        id: fids.quickenedHealing,
      },
    },
    rollFormulas: ['1d10 + WIS'],
  },
  {
    id: ClassFeatureEffectIds.monkExtraAttack5,
    level: 5,
    Feature: {
      connect: {
        id: fids.monkExtraAttack,
      },
    },
    multiAttackAmount: 2,
  },
  {
    id: ClassFeatureEffectIds.monkStunningStrike5,
    level: 5,
    Feature: {
      connect: {
        id: fids.stunningStrike,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.monkFocusedAim5,
    level: 5,
    Feature: {
      connect: {
        id: fids.focusedAim,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.monkKiEmpoweredStrikes6,
    level: 6,
    Feature: {
      connect: {
        id: fids.kiEmpoweredStrikes,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.monkEvasion7,
    level: 7,
    Feature: {
      connect: {
        id: fids.evasion,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.monkStillnessOfMind7,
    level: 7,
    Feature: {
      connect: {
        id: fids.stillnessOfMind,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.monkPurityOfBody10,
    level: 10,
    Feature: {
      connect: {
        id: fids.purityOfBody,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.monkTongueOfTheSunAndMoon13,
    level: 13,
    Feature: {
      connect: {
        id: fids.tongueOfTheSunAndMoon,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.monkDiamondSoul14,
    level: 14,
    Feature: {
      connect: {
        id: fids.diamondSouled,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.monkTimelessBody15,
    level: 15,
    Feature: {
      connect: {
        id: fids.timelessBody,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.monkEmptyBody18,
    level: 18,
    Feature: {
      connect: {
        id: fids.emptyBody,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.monkPerfectSelf20,
    level: 20,
    Feature: {
      connect: {
        id: fids.perfectSelf,
      },
    },
  },
  //barbarian
  ...[4, 6, 8, 12, 14, 16, 19].map((level, i, arr) => {
    if (i === 0)
      return {
        id: ClassFeatureEffectIds.barbarianASI4,
        level: 4,
        Feature: {
          connect: {
            id: fids.barbarianASI,
          },
        },
      };
    return {
      //@ts-expect-error level can index
      id: ClassFeatureEffectIds[`barbarianASI${level}`],
      level: level,
      Feature: {
        connect: {
          id: fids.barbarianASI,
        },
      },
      parentEffect: {
        connect: {
          //@ts-expect-error level can index
          id: ClassFeatureEffectIds[`barbarianASI${arr[i - 1]}`],
        },
      },
    };
  }),
  {
    id: ClassFeatureEffectIds.barbarianRage1,
    level: 1,
    Feature: {
      connect: {
        id: fids.rage,
      },
    },
    rollFormulas: ['2'],
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.barbarianRage1,
            resourceId: CustomResourceIds.rage,
          },
        },
        create: {
          resourceId: CustomResourceIds.rage,
          scalingFormula: '2',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianRage3,
    level: 3,
    Feature: {
      connect: {
        id: fids.rage,
      },
    },
    rollFormulas: ['2'],

    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.barbarianRage1,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.barbarianRage3,
            resourceId: CustomResourceIds.rage,
          },
        },
        create: {
          resourceId: CustomResourceIds.rage,
          scalingFormula: '3',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },

  {
    id: ClassFeatureEffectIds.barbarianRage6,
    rollFormulas: ['2'],
    level: 6,
    Feature: {
      connect: {
        id: fids.rage,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.barbarianRage3,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.barbarianRage6,
            resourceId: CustomResourceIds.rage,
          },
        },
        create: {
          resourceId: CustomResourceIds.rage,
          scalingFormula: '4',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianRage9,
    rollFormulas: ['3'],
    level: 9,
    Feature: {
      connect: {
        id: fids.rage,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.barbarianRage6,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianRage12,
    rollFormulas: ['3'],
    level: 12,
    Feature: {
      connect: {
        id: fids.rage,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.barbarianRage9,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.barbarianRage12,
            resourceId: CustomResourceIds.rage,
          },
        },
        create: {
          resourceId: CustomResourceIds.rage,
          scalingFormula: '5',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianRage16,
    level: 16,
    Feature: {
      connect: {
        id: fids.rage,
      },
    },
    rollFormulas: ['4'],
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.barbarianRage12,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.barbarianRage16,
            resourceId: CustomResourceIds.rage,
          },
        },
        create: {
          resourceId: CustomResourceIds.rage,
          scalingFormula: '5',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianRage17,
    level: 17,
    Feature: {
      connect: {
        id: fids.rage,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.barbarianRage16,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.barbarianRage17,
            resourceId: CustomResourceIds.rage,
          },
        },
        create: {
          resourceId: CustomResourceIds.rage,
          scalingFormula: '6',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianRage20,
    level: 20,
    Feature: {
      connect: {
        id: fids.rage,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.barbarianRage17,
      },
    },
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ClassFeatureEffectIds.barbarianRage20,
            resourceId: CustomResourceIds.rage,
          },
        },
        create: {
          resourceId: CustomResourceIds.rage,
          scalingFormula: '100',
          refreshOn: RefreshEvent.LONG_REST,
        },
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianUnarmoredDefense1,
    acBonusFormula: 'CON',
    level: 1,
    Feature: {
      connect: {
        id: fids.unarmoredDefense,
      },
    },
    preRequisite: {
      protocol: 'AND',
      data: [
        {
          isWearingArmor: false,
        },
      ],
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianRecklessAttack2,
    level: 2,
    Feature: {
      connect: {
        id: fids.recklessAttack,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianDangerSense2,
    level: 2,
    Feature: {
      connect: {
        id: fids.dangerSense,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianPrimalKnowledge3,
    level: 3,
    Feature: {
      connect: {
        id: fids.primalKnowledge,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianPrimalKnowledge10,
    level: 10,
    Feature: {
      connect: {
        id: fids.primalKnowledge,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.barbarianPrimalKnowledge3,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianExtraAttack5,
    level: 5,
    Feature: {
      connect: {
        id: fids.extraAttackBarbarian,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianFastMovement5,
    level: 5,
    Feature: {
      connect: {
        id: fids.fastMovement,
      },
    },
    speedBonusFormula: '10',
    preRequisite: {
      protocol: 'AND',
      data: [
        {
          isWearingArmor: false,
        },
      ],
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianFeralInstinct7,
    level: 7,
    Feature: {
      connect: {
        id: fids.feralInstinct,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianInstinctivePounce7,
    level: 7,
    Feature: {
      connect: {
        id: fids.instinctivePounce,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianBrutalCritical9,
    level: 9,
    Feature: {
      connect: {
        id: fids.brutalCritical,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianBrutalCritical13,
    level: 13,
    Feature: {
      connect: {
        id: fids.brutalCritical,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.barbarianBrutalCritical9,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianBrutalCritical17,
    level: 17,
    Feature: {
      connect: {
        id: fids.brutalCritical,
      },
    },
    parentEffect: {
      connect: {
        id: ClassFeatureEffectIds.barbarianBrutalCritical13,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianRelentlessRage11,
    level: 11,
    Feature: {
      connect: {
        id: fids.relentlessRage,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianPersistentRage15,
    level: 15,
    Feature: {
      connect: {
        id: fids.persistentRage,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianIndomitableMight18,
    level: 18,
    Feature: {
      connect: {
        id: fids.indomitableMight,
      },
    },
  },
  {
    id: ClassFeatureEffectIds.barbarianPrimalChampion20,
    level: 20,
    Feature: {
      connect: {
        id: fids.primalChampion,
      },
    },
    abilityScoreImprovements: [
      { ability: 'STR', value: 4 },
      { ability: 'CON', value: 4 },
    ],
  },
];

export default ClassFeatureEffectSeed;
