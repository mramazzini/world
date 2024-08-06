import { Prisma } from "@prisma/client";

const ids = {
  bard: 1,
  cleric: 2,
  druid: 3,
  paladin: 4,
  ranger: 5,
  sorcerer: 6,
  warlock: 7,
  wizard: 8,
  artificer: 9,
};

interface SpellListToSpell {
  spellListIds: number[];
  spellName: string;
}

const SpellListToSpellArr: SpellListToSpell[] = [
  {
    spellName: "Acid Splash",
    spellListIds: [ids.artificer, ids.sorcerer, ids.wizard],
  },
  {
    spellName: "Blade Ward",
    spellListIds: [ids.bard, ids.sorcerer, ids.warlock, ids.wizard],
  },
  {
    spellName: "Booming Blade",
    spellListIds: [ids.artificer, ids.sorcerer, ids.warlock, ids.wizard],
  },
  {
    spellName: "Chill Touch",
    spellListIds: [ids.sorcerer, ids.warlock, ids.wizard],
  },
  {
    spellName: "Control Flames",
    spellListIds: [ids.druid, ids.sorcerer, ids.wizard],
  },
  {
    spellName: "Create Bonfire",
    spellListIds: [
      ids.druid,
      ids.sorcerer,
      ids.wizard,
      ids.warlock,
      ids.artificer,
    ],
  },
  {
    spellName: "Dancing Lights",
    spellListIds: [ids.artificer, ids.druid, ids.sorcerer, ids.wizard],
  },
  {
    spellName: "Druidcraft",
    spellListIds: [ids.druid],
  },
  {
    spellName: "Eldritch Blast",
    spellListIds: [ids.warlock],
  },
  {
    spellName: "Encode Thoughts",
    spellListIds: [ids.wizard],
  },
  {
    spellName: "Fire Bolt",
    spellListIds: [ids.artificer, ids.sorcerer, ids.wizard],
  },
  {
    spellName: "Friends",
    spellListIds: [ids.bard, ids.sorcerer, ids.warlock, ids.wizard],
  },
  {
    spellName: "Frostbite",
    spellListIds: [
      ids.sorcerer,
      ids.warlock,
      ids.wizard,
      ids.artificer,
      ids.druid,
    ],
  },
  {
    spellName: "Green-Flame Blade",
    spellListIds: [ids.artificer, ids.sorcerer, ids.warlock, ids.wizard],
  },
  {
    spellName: "Guidance",
    spellListIds: [ids.cleric, ids.druid, ids.artificer],
  },
  {
    spellName: "Gust",
    spellListIds: [ids.druid, ids.sorcerer, ids.wizard],
  },
  {
    spellName: "Infestation",
    spellListIds: [ids.sorcerer, ids.wizard, ids.druid, ids.warlock],
  },
  {
    spellName: "Light",
    spellListIds: [
      ids.artificer,
      ids.bard,
      ids.sorcerer,
      ids.wizard,
      ids.cleric,
    ],
  },
  {
    spellName: "Lightning Lure",
    spellListIds: [ids.sorcerer, ids.wizard, ids.warlock, ids.artificer],
  },
  {
    spellName: "Mage Hand",
    spellListIds: [
      ids.artificer,
      ids.bard,
      ids.sorcerer,
      ids.wizard,
      ids.warlock,
    ],
  },
  {
    spellName: "Magic Stone",
    spellListIds: [ids.druid, ids.warlock, ids.artificer],
  },
  {
    spellName: "Mending",
    spellListIds: [
      ids.artificer,
      ids.bard,
      ids.druid,
      ids.sorcerer,
      ids.wizard,
      ids.cleric,
    ],
  },
  {
    spellName: "Message",
    spellListIds: [ids.bard, ids.sorcerer, ids.wizard, ids.warlock],
  },
  {
    spellName: "Mind Sliver",
    spellListIds: [ids.sorcerer, ids.wizard, ids.warlock],
  },
  {
    spellName: "Minor Illusion",
    spellListIds: [ids.bard, ids.sorcerer, ids.wizard, ids.warlock],
  },
  {
    spellName: "Mold Earth",
    spellListIds: [ids.druid, ids.sorcerer, ids.wizard],
  },
  {
    spellName: "Poison Spray",
    spellListIds: [
      ids.sorcerer,
      ids.wizard,
      ids.warlock,
      ids.artificer,
      ids.druid,
    ],
  },
  {
    spellName: "Prestidigitation",
    spellListIds: [
      ids.artificer,
      ids.bard,
      ids.warlock,
      ids.sorcerer,
      ids.wizard,
    ],
  },
  {
    spellName: "Primal Savagery",
    spellListIds: [ids.druid],
  },
  {
    spellName: "Produce Flame",
    spellListIds: [ids.druid],
  },
  {
    spellName: "Ray of Frost",
    spellListIds: [ids.artificer, ids.sorcerer, ids.wizard],
  },
  {
    spellName: "Resistance",
    spellListIds: [ids.cleric, ids.druid, ids.artificer],
  },
  {
    spellName: "Sacred Flame",
    spellListIds: [ids.cleric],
  },
  {
    spellName: "Sapping Sting",
    spellListIds: [ids.wizard],
  },
  {
    spellName: "Shape Water",
    spellListIds: [ids.druid, ids.sorcerer, ids.wizard],
  },
  {
    spellName: "Shillelagh",
    spellListIds: [ids.druid],
  },
  {
    spellName: "Shocking Grasp",
    spellListIds: [ids.sorcerer, ids.wizard, ids.artificer],
  },
  {
    spellName: "Spare the Dying",
    spellListIds: [ids.cleric, ids.artificer],
  },
  {
    spellName: "Sword Burst",
    spellListIds: [ids.wizard, ids.artificer, ids.warlock, ids.sorcerer],
  },
  {
    spellName: "Thaumaturgy",
    spellListIds: [ids.cleric],
  },
  {
    spellName: "Thorn Whip",
    spellListIds: [ids.druid, ids.artificer],
  },
  {
    spellName: "Thunderclap",
    spellListIds: [
      ids.sorcerer,
      ids.wizard,
      ids.warlock,
      ids.artificer,
      ids.bard,
      ids.druid,
    ],
  },
  {
    spellName: "Toll the Dead",
    spellListIds: [ids.cleric, ids.warlock, ids.wizard],
  },
  {
    spellName: "True Strike",
    spellListIds: [ids.sorcerer, ids.wizard, ids.warlock, ids.bard],
  },
  {
    spellName: "Vicious Mockery",
    spellListIds: [ids.bard],
  },
  {
    spellName: "Word of Radiance",
    spellListIds: [ids.cleric],
  },
];

export default SpellListToSpellArr;
