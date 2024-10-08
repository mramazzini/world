import { cinfo, csuccess } from "@/lib/utils/chalkLog";
import { createSpells } from "./seeds/_seeders/001_createSpells.seeder";
import { PrismaClient } from "@prisma/client";
import { createSpellList } from "./seeds/_seeders/002_createSpellList.seeder";
import { linkSpellListToSpell } from "./seeds/_seeders/003_SpellListToSpell.linker";
import { createArmor } from "./seeds/_seeders/004_createArmor.seeder";
import { createEquipmentPacks } from "./seeds/_seeders/005_createEquipmentPacks.seeder";
import { createTools } from "./seeds/_seeders/006_createTools.seeder";
import { createWeapons } from "./seeds/_seeders/007_createWeapons.seeder";
import { createItems } from "./seeds/_seeders/008_createItems.seeder";
import { ammunitionToWeapon } from "./seeds/_seeders/009_AmmunitionToWeapon.linker";
import { createBackgrounds } from "./seeds/_seeders/010_createBackgrounds.seeder";
import { createClasses } from "./seeds/_seeders/011_createClasses.seeder";
import { itemToClass } from "./seeds/_seeders/012_ItemToClass.linker";
import { createSubclass } from "./seeds/_seeders/013_createSubclass.seeder";
import { createSpecies } from "./seeds/_seeders/014_createSpecies.seeder";
import { createVariants } from "./seeds/_seeders/015_createVariant.seeder";
import { createCharacter } from "./seeds/_seeders/017_createCharacter.seeder";
import createMaxyUser from "./seeds/_seeders/018_createMaxyUser.seeder";
import { createFeats } from "./seeds/_seeders/016_createFeats.seeder";
import { createBlogPosts } from "./seeds/_seeders/019_createBlogPosts.seeder";
const db = new PrismaClient();

const seedarr: {
  index: string;
  callback: (db: PrismaClient) => Promise<void>;
  description: string;
  enabled?: boolean;
}[] = [
  {
    index: "001",
    callback: createSpells,
    description: "Creating spells from the spell seed.",
    //enabled: true,
  },
  {
    index: "002",
    callback: createSpellList,
    description: "Creating spell lists from the spell list seed.",
    //enabled: true,
  },
  {
    index: "003",
    callback: linkSpellListToSpell,
    description: "Linking spell lists to spells.",
    //enabled: true,
  },
  {
    index: "004",
    callback: createArmor,
    description: "Creating armor from the armor seed.",
    //enabled: true,
  },
  {
    index: "005",
    callback: createEquipmentPacks,
    description: "Creating equipment packs from the equipment pack seed.",
    //enabled: true,
  },
  {
    index: "006",
    callback: createTools,
    description: "Creating tools from the tools seed.",
    //enabled: true,
  },
  {
    index: "007",
    callback: createWeapons,
    description: "Creating weapons from the weapons seed.",
    //enabled: true,
  },
  {
    index: "008",
    callback: createItems,
    description: "Creating items from the item seed.",
    // enabled: true,
  },
  {
    index: "009",
    callback: ammunitionToWeapon,
    description: "Linking ammunition to weapons.",
    //enabled: true,
  },
  {
    index: "010",
    callback: createBackgrounds,
    description: "Creating backgrounds from the background seed.",
    // enabled: true,
  },
  {
    index: "011",
    callback: createClasses,
    description: "Creating classes from the class seed.",
    //enabled: true,
  },
  {
    index: "012",
    callback: itemToClass,
    description: "Linking items to classes.",
    //enabled: true,
  },
  {
    index: "013",
    callback: createSubclass,
    description: "Creating subclasses from the subclass seed.",
    //enabled: true,
  },
  {
    index: "014",
    callback: createSpecies,
    description: "Creating species from the species seed.",
    // enabled: true,
  },
  {
    index: "015",
    callback: createVariants,
    description: "Creating variants from the variant seed.",
    // enabled: true,
  },
  {
    index: "016",
    callback: createFeats,
    description: "Creating feats from the species seed.",
    // enabled: true,
  },
  {
    index: "017",
    callback: createCharacter,
    description: "Creating characters from the character seed.",
    // enabled: true,
  },
  {
    index: "018",
    callback: createMaxyUser,
    description: "Creating maxy user from the maxy user seed.",
    //enabled: true,
  },
  {
    index: "019",
    callback: createBlogPosts,
    description: "Creating blogpost from the blogpost seed.",
    // enabled: true,
  },
];

const seed = async (db: PrismaClient) => {
  cinfo("🌱 Seeding database 🌱");
  for (const seed of seedarr) {
    if (seed.enabled) {
      cinfo(seed.description);
      await seed.callback(db);
    }
  }
  csuccess("✅ Successfully seeded database ✅");
};

seed(db)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
