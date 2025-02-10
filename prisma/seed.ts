import { cinfo, csuccess } from '@/lib/utils/chalkLog';
import { createSpells } from './seeds/_seeders/001_createSpells.seeder';
import { PrismaClient } from '@prisma/client';
import { createSpellList } from './seeds/_seeders/002_createSpellList.seeder';
import { linkSpellListToSpell } from './seeds/_seeders/003_SpellListToSpell.linker';
import { createArmor } from './seeds/_seeders/005_createArmor.seeder';
import { createEquipmentPacks } from './seeds/_seeders/006_createEquipmentPacks.seeder';
import { createWeapons } from './seeds/_seeders/009_createWeapons.seeder';
import { createItems } from './seeds/_seeders/008_createItems.seeder';
import { createBackgrounds } from './seeds/_seeders/010_createBackgrounds.seeder';
import { createClasses } from './seeds/_seeders/011_createClasses.seeder';
import { createSubclass } from './seeds/_seeders/013_createSubclass.seeder';
import { createSpecies } from './seeds/_seeders/014_createSpecies.seeder';
import { createSubspecies } from './seeds/_seeders/015_createSubSpecies.seeder';
import { createFeats } from './seeds/_seeders/016_createFeats.seeder';
import { createBlogPosts } from './seeds/_seeders/021_createBlogPosts.seeder';
import { createCreatures } from './seeds/_seeders/017_createCreatures.seeder';
import { createTool } from './seeds/_seeders/007_createTools.seeder';
import createUsers from './seeds/_seeders/022_createMaxyUser.seeder';
import { createFeatureGroup } from './seeds/_seeders/004_createFeatureGroup.seeder';
import { createCustomResources } from './seeds/_seeders/000_customResource.seed';
import { createCharacter } from './seeds/_seeders/020_createCharacter.seeder';
const db = new PrismaClient();

const seedarr: {
  index: string;
  callback: (db: PrismaClient) => Promise<void>;
  description: string;
  enabled?: boolean;
}[] = [
  {
    index: '000',
    callback: createCustomResources,
    description: 'Creating custom resources from the custom resource seed.',
    enabled: true,
  },
  // {
  //   index: '001',
  //   callback: createSpells,
  //   description: 'Creating spells from the spell seed.',
  //   enabled: true,
  // },
  // {
  //   index: '002',
  //   callback: createSpellList,
  //   description: 'Creating spell lists from the spell list seed.',
  //   enabled: true,
  // },
  // {
  //   index: '003',
  //   callback: linkSpellListToSpell,
  //   description: 'Linking spell lists to spells.',
  //   enabled: true,
  // },
  // {
  //   index: '004',
  //   callback: createArmor,
  //   description: 'Creating armor from the armor seed.',
  //   enabled: true,
  // },
  // {
  //   index: 'Im lazy',
  //   callback: createFeatureGroup,
  //   description: 'Creating feature groups from the feature group seed.',
  //   enabled: true,
  // },
  // {
  //   index: '005',
  //   callback: createEquipmentPacks,
  //   description: 'Creating equipment packs from the equipment pack seed.',
  //   enabled: true,
  // },
  // {
  //   index: '006',
  //   callback: createTool,
  //   description: 'Creating tools from the tools seed.',
  //   enabled: true,
  // },
  // {
  //   index: '007',
  //   callback: createWeapons,
  //   description: 'Creating weapons from the weapons seed.',
  //   enabled: true,
  // },
  // {
  //   index: '008',
  //   callback: createItems,
  //   description: 'Creating items from the item seed.',
  //   enabled: true,
  // },
  // {
  //   index: '010',
  //   callback: createBackgrounds,
  //   description: 'Creating backgrounds from the background seed.',
  //   enabled: true,
  // },
  {
    index: '011',
    callback: createClasses,
    description: 'Creating classes from the class seed.',
    enabled: true,
  },
  {
    index: '013',
    callback: createSubclass,
    description: 'Creating subclasses from the subclass seed.',
    enabled: true,
  },
  // {
  //   index: '014',
  //   callback: createSpecies,
  //   description: 'Creating species from the species seed.',
  //   enabled: true,
  // },
  // {
  //   index: '015',
  //   callback: createSubspecies,
  //   description: 'Creating subspecies from subspecies seed.',
  //   enabled: true,
  // },
  // {
  //   index: '016',
  //   callback: createFeats,
  //   description: 'Creating feats from the species seed.',
  //   enabled: true,
  // },
  // {
  //   index: '017',
  //   callback: createCreatures,
  //   description: 'Creating characters from the character seed.',
  //   enabled: true,
  // },
  // {
  //   index: '020',
  //   callback: createCharacter,
  //   description: 'Creating characters from the character seed.',
  //   enabled: true,
  // },
  // {
  //   index: '021',
  //   callback: createBlogPosts,
  //   description: 'Creating blogpost from the blogpost seed.',
  //   enabled: true,
  // },
  // {
  //   index: '022',
  //   callback: createUsers,
  //   description: 'Creating maxy user from the maxy user seed.',
  //   enabled: true,
  // },
];

const seed = async (db: PrismaClient) => {
  cinfo('🌱 Seeding database 🌱');
  for (const seed of seedarr) {
    if (seed.enabled) {
      cinfo(seed.description);
      try {
        await seed.callback(db);
      } catch (error) {
        console.error('Error seeding:', seed.index, error);
        return;
      }
    }
  }
  csuccess('✅ Successfully seeded database ✅');
};

seed(db)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
