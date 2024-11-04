// Seed IDS are added to the Feature seeds ids, so that we can list 1,2,3 etc. in the seed files, and then add the SeedIDS flat value to ensure that the ids are unique across all seeds.
const SeedIDS = {
  ARMOR: 0,
  TOOL: 10000,
  WEAPON: 20000,
  ITEM: 30000,
  BACKGROUND: 40000,
  CLASSES: 50000,
  SUBCLASSES: 60000,
  SPECIES: 70000,
  SUBSPECIES: 80000,
  FEATS: 90000,
  CREATURE: 100000,
};

export default SeedIDS;
