import { Prisma, RefreshEvent, WeaponGroup } from '@prisma/client';
import { artificerFeatureSubclassIds as fids } from '../SubclassFeatures/Artificer.seed';
import { toolIds } from '../../Items/Tools/Tool.seed';
import { spellIds } from '../../Spells/SpellSeed';
import { CustomResourceIds } from '../../CustomResource/CustomResource.seed';

export const ArtificerSubclassEffectIds = {
  toolProficiencyArtillerist3: 'ArtilleristToolProficiency3',
  artilleristSpells3: 'ArtilleristSpells3',
  artilleristSpells5: 'ArtilleristSpells5',
  artilleristSpells9: 'ArtilleristSpells9',
  artilleristSpells13: 'ArtilleristSpells13',
  artilleristSpells17: 'ArtilleristSpells17',
  eldritchCannon3: 'EldritchCannon3',
  arcaneFirearm5: 'ArcaneFirearm5',
  explosiveCannon9: 'ExplosiveCannon9',
  fortifiedPosition15: 'FortifiedPosition15',
  toolProficiencyBattleSmith3: 'BattleSmithToolProficiency3',
  battleSmithSpells3: 'BattleSmithSpells3',
  battleSmithSpells5: 'BattleSmithSpells5',
  battleSmithSpells9: 'BattleSmithSpells9',
  battleSmithSpells13: 'BattleSmithSpells13',
  battleReady3: 'BattleReady3',
  steelDefender3: 'SteelDefender3',
  extraAttack5: 'ExtraAttack5',
  arcaneJolt9: 'ArcaneJolt9',
  improvedDefender15: 'ImprovedDefender15',
};

const ArtificerSubclassFeatureEffectsSeed: Prisma.EffectCreateInput[] = [
  {
    id: ArtificerSubclassEffectIds.toolProficiencyArtillerist3,
    Feature: {
      connect: {
        id: fids.toolProficiencyArtillerist,
      },
    },
    level: 3,
    toolProficienciesIds: [toolIds.woodcarversTools],
  },
  {
    id: ArtificerSubclassEffectIds.artilleristSpells3,
    Feature: {
      connect: {
        id: fids.artilleristSpells,
      },
    },
    level: 3,
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: ArtificerSubclassEffectIds.artilleristSpells3,
              spellId: spellIds.shield,
            },
          },
          create: {
            spellId: spellIds.shield,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: ArtificerSubclassEffectIds.artilleristSpells3,
              spellId: spellIds.thunderwave,
            },
          },
          create: {
            spellId: spellIds.thunderwave,
          },
        },
      ],
    },
  },
  {
    id: ArtificerSubclassEffectIds.artilleristSpells5,
    level: 5,
    Feature: {
      connect: {
        id: fids.artilleristSpells,
      },
    },
    parentEffect: {
      connect: {
        id: ArtificerSubclassEffectIds.artilleristSpells3,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.scorchingRay,
              effectId: ArtificerSubclassEffectIds.artilleristSpells5,
            },
          },
          create: {
            spellId: spellIds.scorchingRay,
          },
        },
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.shatter,
              effectId: ArtificerSubclassEffectIds.artilleristSpells5,
            },
          },
          create: {
            spellId: spellIds.shatter,
          },
        },
      ],
    },
  },
  {
    id: ArtificerSubclassEffectIds.artilleristSpells9,
    level: 9,
    Feature: {
      connect: {
        id: fids.artilleristSpells,
      },
    },
    parentEffect: {
      connect: {
        id: ArtificerSubclassEffectIds.artilleristSpells5,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.fireball,
              effectId: ArtificerSubclassEffectIds.artilleristSpells9,
            },
          },
          create: {
            spellId: spellIds.fireball,
          },
        },
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.windWall,
              effectId: ArtificerSubclassEffectIds.artilleristSpells9,
            },
          },
          create: {
            spellId: spellIds.windWall,
          },
        },
      ],
    },
  },
  {
    id: ArtificerSubclassEffectIds.artilleristSpells13,
    level: 13,
    Feature: {
      connect: {
        id: fids.artilleristSpells,
      },
    },
    parentEffect: {
      connect: {
        id: ArtificerSubclassEffectIds.artilleristSpells9,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.wallOfFire,
              effectId: ArtificerSubclassEffectIds.artilleristSpells13,
            },
          },
          create: {
            spellId: spellIds.wallOfFire,
          },
        },
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.iceStorm,
              effectId: ArtificerSubclassEffectIds.artilleristSpells13,
            },
          },
          create: {
            spellId: spellIds.iceStorm,
          },
        },
      ],
    },
  },
  {
    id: ArtificerSubclassEffectIds.artilleristSpells17,
    level: 17,
    Feature: {
      connect: {
        id: fids.artilleristSpells,
      },
    },
    parentEffect: {
      connect: {
        id: ArtificerSubclassEffectIds.artilleristSpells13,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.coneOfCold,
              effectId: ArtificerSubclassEffectIds.artilleristSpells17,
            },
          },
          create: {
            spellId: spellIds.coneOfCold,
          },
        },
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.wallOfForce,
              effectId: ArtificerSubclassEffectIds.artilleristSpells17,
            },
          },
          create: {
            spellId: spellIds.wallOfForce,
          },
        },
      ],
    },
  },
  {
    id: ArtificerSubclassEffectIds.eldritchCannon3,
    Feature: {
      connect: {
        id: fids.eldritchCannon,
      },
    },
    level: 3,
  },
  {
    id: ArtificerSubclassEffectIds.arcaneFirearm5,
    Feature: {
      connect: {
        id: fids.arcaneFirearm,
      },
    },
    level: 5,
  },
  {
    id: ArtificerSubclassEffectIds.explosiveCannon9,
    Feature: {
      connect: {
        id: fids.explosiveCannon,
      },
    },
    level: 9,
  },
  {
    id: ArtificerSubclassEffectIds.fortifiedPosition15,
    Feature: {
      connect: {
        id: fids.fortifiedPosition,
      },
    },
    level: 15,
  },
  {
    id: ArtificerSubclassEffectIds.toolProficiencyBattleSmith3,
    Feature: {
      connect: {
        id: fids.toolProficiencyBattleSmith,
      },
    },
    level: 3,
    toolProficienciesIds: [toolIds.smithTools],
  },
  {
    id: ArtificerSubclassEffectIds.battleSmithSpells3,
    Feature: {
      connect: {
        id: fids.battleSmithSpells,
      },
    },
    level: 3,
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              effectId: ArtificerSubclassEffectIds.battleSmithSpells3,
              spellId: spellIds.heroism,
            },
          },
          create: {
            spellId: spellIds.heroism,
          },
        },
        {
          where: {
            effectId_spellId: {
              effectId: ArtificerSubclassEffectIds.battleSmithSpells3,
              spellId: spellIds.shield,
            },
          },
          create: {
            spellId: spellIds.shield,
          },
        },
      ],
    },
  },
  {
    id: ArtificerSubclassEffectIds.battleSmithSpells5,
    level: 5,
    Feature: {
      connect: {
        id: fids.battleSmithSpells,
      },
    },
    parentEffect: {
      connect: {
        id: ArtificerSubclassEffectIds.battleSmithSpells3,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.brandingSmite,
              effectId: ArtificerSubclassEffectIds.battleSmithSpells5,
            },
          },
          create: {
            spellId: spellIds.brandingSmite,
          },
        },
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.wardingBond,
              effectId: ArtificerSubclassEffectIds.battleSmithSpells5,
            },
          },
          create: {
            spellId: spellIds.wardingBond,
          },
        },
      ],
    },
  },
  {
    id: ArtificerSubclassEffectIds.battleSmithSpells9,
    level: 9,
    Feature: {
      connect: {
        id: fids.battleSmithSpells,
      },
    },
    parentEffect: {
      connect: {
        id: ArtificerSubclassEffectIds.battleSmithSpells5,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.auraOfVitality,
              effectId: ArtificerSubclassEffectIds.battleSmithSpells9,
            },
          },
          create: {
            spellId: spellIds.auraOfVitality,
          },
        },
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.conjureBarrage,
              effectId: ArtificerSubclassEffectIds.battleSmithSpells9,
            },
          },
          create: {
            spellId: spellIds.conjureBarrage,
          },
        },
      ],
    },
  },
  {
    id: ArtificerSubclassEffectIds.battleSmithSpells13,
    level: 13,
    Feature: {
      connect: {
        id: fids.battleSmithSpells,
      },
    },
    parentEffect: {
      connect: {
        id: ArtificerSubclassEffectIds.battleSmithSpells9,
      },
    },
    EffectToSpell: {
      connectOrCreate: [
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.fireShield,
              effectId: ArtificerSubclassEffectIds.battleSmithSpells13,
            },
          },
          create: {
            spellId: spellIds.fireShield,
          },
        },
        {
          where: {
            effectId_spellId: {
              spellId: spellIds.auraOfPurity,
              effectId: ArtificerSubclassEffectIds.battleSmithSpells13,
            },
          },
          create: {
            spellId: spellIds.auraOfPurity,
          },
        },
      ],
    },
  },
  {
    id: ArtificerSubclassEffectIds.battleReady3,
    Feature: {
      connect: {
        id: fids.battleReady,
      },
    },
    weaponGroupProficiencies: [WeaponGroup.ALL_MARTIAL],
    level: 3,
  },
  {
    id: ArtificerSubclassEffectIds.steelDefender3,
    Feature: {
      connect: {
        id: fids.steelDefender,
      },
    },
    level: 3,
  },
  {
    id: ArtificerSubclassEffectIds.extraAttack5,
    Feature: {
      connect: {
        id: fids.extraAttack,
      },
    },
    level: 5,
  },
  {
    id: ArtificerSubclassEffectIds.arcaneJolt9,
    Feature: {
      connect: {
        id: fids.arcaneJolt,
      },
    },
    rollFormulas: ['2d6'],
    level: 9,
    EffectToResource: {
      connectOrCreate: {
        where: {
          effectId_resourceId: {
            effectId: ArtificerSubclassEffectIds.arcaneJolt9,
            resourceId: CustomResourceIds.arcaneJolt,
          },
        },
        create: {
          resourceId: CustomResourceIds.arcaneJolt,
          refreshOn: RefreshEvent.LONG_REST,
          scalingFormula: 'max(1, INT)',
        },
      },
    },
  },
  {
    id: ArtificerSubclassEffectIds.improvedDefender15,
    Feature: {
      connect: {
        id: fids.improvedDefender,
      },
    },
    level: 15,
  },
];

export default ArtificerSubclassFeatureEffectsSeed;
