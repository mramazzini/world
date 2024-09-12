-- CreateTable
CREATE TABLE "Enums" (
    "id" SERIAL NOT NULL,
    "skill" "Skill" NOT NULL,
    "ability" "Ability" NOT NULL,
    "armorType" "ArmorType" NOT NULL,
    "size" "Size" NOT NULL,
    "spellSchool" "SpellSchool" NOT NULL,
    "currency" "Currency" NOT NULL,
    "damageTypes" "DamageTypes" NOT NULL,
    "creatureType" "CreatureType" NOT NULL,
    "alignment" "Alignment" NOT NULL,
    "language" "Language" NOT NULL,
    "rarity" "Rarity" NOT NULL,
    "itemTypes" "ItemTypes" NOT NULL,
    "unit" "Unit" NOT NULL,

    CONSTRAINT "Enums_pkey" PRIMARY KEY ("id")
);
