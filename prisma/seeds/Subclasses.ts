import { Prisma } from "@prisma/client";

const ids = {
  fighter: 1,
  wizard: 2,
  cleric: 3,
  rogue: 4,
  barbarian: 5,
  bard: 6,
  druid: 7,
  monk: 8,
  paladin: 9,
  ranger: 10,
  sorcerer: 11,
  warlock: 12,
};

const SubClasses: Prisma.SubClassCreateManyInput[] = [
  //Fighter
  {
    name: "Arcane Archer",
    description:
      "An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects. Arcane Archers are some of their most elite warriors among the elves. They stand watch over the fringes of elven domains, keeping a keen eye out for trespassers and using magic-infused arrows to defeat monsters and invaders before they can reach elven settlements. Over the centuries, the methods of these elf archers have been learned by members of other races who can also balance arcane aptitude with archery.",
    classId: ids.fighter,
  },
  {
    name: "Banneret",
    description:
      "A banneret is a knight who inspires greatness in others by committing brave deeds in battle. The mere presence of one in a hamlet is enough to cause some orcs and bandits to seek easier prey. A lone banneret is a skilled warrior, but a banneret leading a band of allies can transform even the most poorly equipped militia into a ferocious war band. A banneret prefers to lead through deeds, not words. As a banneret spearheads an attack, their actions can awaken reserves of courage and conviction in allies that they never suspected they had. Banneret serves as the generic name for the Purple Dragon Knight archetype if you use it in campaign settings other than the Forgotten Realms or to model warlords other than Purple Dragon Knights.",
    classId: ids.fighter,
  },
  {
    name: "Battle Master",
    description:
      "Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. To a Battle Master, combat is an academic field, sometimes including subjects beyond battle such as weaponsmithing and calligraphy. Not every fighter absorbs the lessons of history, theory, and artistry that are reflected in the Battle Master archetype, but those who do are well-rounded fighters of great skill and knowledge.",
    classId: ids.fighter,
  },
  {
    name: "Cavalier",
    description:
      "The archetypal cavalier excels at mounted combat. Usually born among the nobility and raised at court, a cavalier is equally at home leading a cavalry charge or exchanging repartee at a state dinner. Cavaliers also learn how to guard those in their charge from harm, often serving as the protectors of their superiors and of the weak. Compelled to right wrongs or earn prestige, many of these fighters leave their lives of comfort to embark on glorious adventure.",
    classId: ids.fighter,
  },
  {
    name: "Champion",
    description:
      "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.",
    classId: ids.fighter,
  },
  {
    name: "Echo Knight",
    description:
      "A mysterious and feared frontline warrior of the Kryn Dynasty, the Echo Knight has mastered the art of using dunamis to summon the fading shades of unrealized timelines to aid them in battle. Surrounded by echoes of their own might, they charge into the fray as a cycling swarm of shadows and strikes.",
    classId: ids.fighter,
  },
  {
    name: "Eldritch Knight",
    description:
      "The archetypal Eldritch Knight combines the martial mastery common to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards. They focus their study on two of the eight schools of magic: abjuration and evocation. Abjuration spells grant an Eldritch Knight additional protection in battle, and evocation spells deal damage to many foes at once, extending the fighter's reach in combat. These knights learn a comparatively small number of spells, committing them to memory instead of keeping them in a spellbook.",
    classId: ids.fighter,
  },
  {
    name: "Psi Warrior",
    description:
      "Awake to the psionic power within, a Psi Warrior is a fighter who augments their physical might with psi-infused weapon strikes, telekinetic lashes, and barriers of mental force. Many githyanki train to become such warriors, as do some of the most disciplined high elves. In the world of Eberron, many young kalashtar dream of becoming Psi Warriors. As a Psi Warrior, you might have honed your psionic abilities through solo discipline, unlocked it under the tutelage of a master, or refined it at an academy dedicated to wielding the mind's power as both weapon and shield.",
    classId: ids.fighter,
  },
  {
    name: "Rune Knight",
    description:
      "Rune Knights enhance their martial prowess using the supernatural power of runes, an ancient practice that originated with giants. Rune cutters can be found among any family of giants, and you likely learned your methods first or second hand from such a mystical artisan. Whether you found the giant's work carved into a hill or cave, learned of the runes from a sage, or met the giant in person, you studied the giant's craft and learned how to apply magic runes to empower your equipment.",
    classId: ids.fighter,
  },
  {
    name: "Samurai",
    description:
      "The Samurai is a fighter who draws on an implacable fighting spirit to overcome enemies. A samurai’s resolve is nearly unbreakable, and the enemies in a samurai’s path have two choices: yield or die fighting.",
  },
];

export default SubClasses;
