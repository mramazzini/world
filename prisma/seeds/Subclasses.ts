import { Ability, Prisma } from "@prisma/client";
import { src } from "@/lib/types";
import P from "@/app/components/Utility/FormatAndSanitize";

const ids = {
  fighter: 1, //
  wizard: 2,
  cleric: 3,
  rogue: 4,
  barbarian: 5, //
  bard: 6, //
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
    id: 1,
    name: "Arcane Archer",
    description:
      "An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects. Arcane Archers are some of their most elite warriors among the elves. They stand watch over the fringes of elven domains, keeping a keen eye out for trespassers and using magic-infused arrows to defeat monsters and invaders before they can reach elven settlements. Over the centuries, the methods of these elf archers have been learned by members of other races who can also balance arcane aptitude with archery.",
    classId: ids.fighter,
    source: src.xanathar,
    flavorText:
      "An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects.",
  },
  {
    id: 2,
    name: "Banneret",
    description:
      "A banneret is a knight who inspires greatness in others by committing brave deeds in battle. The mere presence of one in a hamlet is enough to cause some orcs and bandits to seek easier prey. A lone banneret is a skilled warrior, but a banneret leading a band of allies can transform even the most poorly equipped militia into a ferocious war band. A banneret prefers to lead through deeds, not words. As a banneret spearheads an attack, their actions can awaken reserves of courage and conviction in allies that they never suspected they had. Banneret serves as the generic name for the Purple Dragon Knight archetype if you use it in campaign settings other than the Forgotten Realms or to model warlords other than Purple Dragon Knights.",
    classId: ids.fighter,
    source: src.sword,
    flavorText:
      "A banneret is a knight who inspires greatness in others by committing brave deeds in battle.",
  },
  {
    id: 3,
    name: "Battle Master",
    description:
      "Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. To a Battle Master, combat is an academic field, sometimes including subjects beyond battle such as weaponsmithing and calligraphy. Not every fighter absorbs the lessons of history, theory, and artistry that are reflected in the Battle Master archetype, but those who do are well-rounded fighters of great skill and knowledge.",
    classId: ids.fighter,
    source: src.phb,
    flavorText:
      "Battle Masters employ martial techniques passed down through generations.",
  },
  {
    id: 4,
    name: "Cavalier",
    description:
      "The archetypal cavalier excels at mounted combat. Usually born among the nobility and raised at court, a cavalier is equally at home leading a cavalry charge or exchanging repartee at a state dinner. Cavaliers also learn how to guard those in their charge from harm, often serving as the protectors of their superiors and of the weak. Compelled to right wrongs or earn prestige, many of these fighters leave their lives of comfort to embark on glorious adventure.",
    classId: ids.fighter,
    source: src.xanathar,
    flavorText:
      "The cavalier excels at mounted combat and is equally at home leading a cavalry charge or exchanging repartee at a state dinner.",
  },
  {
    id: 5,
    name: "Champion",
    description:
      "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.",
    classId: ids.fighter,
    source: src.phb,
    flavorText:
      "The Champion focuses on the development of raw physical power honed to deadly perfection.",
  },
  {
    id: 6,
    name: "Echo Knight",
    description:
      "A mysterious and feared frontline warrior of the Kryn Dynasty, the Echo Knight has mastered the art of using dunamis to summon the fading shades of unrealized timelines to aid them in battle. Surrounded by echoes of their own might, they charge into the fray as a cycling swarm of shadows and strikes.",
    classId: ids.fighter,
    source: src.wildemount,
    flavorText:
      "The Echo Knight has mastered the art of using dunamis to summon the fading shades of unrealized timelines to aid them in battle.",
  },
  {
    id: 7,
    name: "Eldritch Knight",
    description:
      "The archetypal Eldritch Knight combines the martial mastery common to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards. They focus their study on two of the eight schools of magic: abjuration and evocation. Abjuration spells grant an Eldritch Knight additional protection in battle, and evocation spells deal damage to many foes at once, extending the fighter's reach in combat. These knights learn a comparatively small number of spells, committing them to memory instead of keeping them in a spellbook.",
    classId: ids.fighter,
    source: src.phb,
    flavorText:
      "The Eldritch Knight combines the martial mastery common to all fighters with a careful study of magic.",
    spellCaster: true,
    cantripsKnown: 3,
    spellsKnown: 3,
    spellCastingAbility: Ability.INT,
    spellCastingInfo:
      "Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
    prepareSpellInfo:
      "You know three 1st-level wizard spells of your choice, two of which you must choose from the abjuration and evocation spells on the wizard spell list.\n\nThe Spells Known column of the Eldritch Knight Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an abjuration or evocation spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.\n\nThe spells you learn at 8th, 14th, and 20th level can come from any school of magic.\n\nWhenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an abjuration or evocation spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic.",
  },
  {
    id: 8,
    name: "Psi Warrior",
    description:
      "Awake to the psionic power within, a Psi Warrior is a fighter who augments their physical might with psi-infused weapon strikes, telekinetic lashes, and barriers of mental force. Many githyanki train to become such warriors, as do some of the most disciplined high elves. In the world of Eberron, many young kalashtar dream of becoming Psi Warriors. As a Psi Warrior, you might have honed your psionic abilities through solo discipline, unlocked it under the tutelage of a master, or refined it at an academy dedicated to wielding the mind's power as both weapon and shield.",
    classId: ids.fighter,
    source: src.tasha,
    flavorText:
      "Awake to the psionic power within, a Psi Warrior is a fighter who augments their physical might with psi-infused weaponory.",
  },
  {
    id: 9,
    name: "Rune Knight",
    description:
      "Rune Knights enhance their martial prowess using the supernatural power of runes, an ancient practice that originated with giants. Rune cutters can be found among any family of giants, and you likely learned your methods first or second hand from such a mystical artisan. Whether you found the giant's work carved into a hill or cave, learned of the runes from a sage, or met the giant in person, you studied the giant's craft and learned how to apply magic runes to empower your equipment.",
    classId: ids.fighter,
    source: src.tasha,
    flavorText:
      "Rune Knights enhance their martial prowess using the supernatural power of runes, an ancient practice that originated with giants.",
  },
  {
    id: 10,
    name: "Samurai",
    description:
      "The Samurai is a fighter who draws on an implacable fighting spirit to overcome enemies. A samurai’s resolve is nearly unbreakable, and the enemies in a samurai’s path have two choices: yield or die fighting.",
    classId: ids.fighter,
    source: src.xanathar,
    flavorText:
      "The Samurai is a fighter who draws on an implacable fighting spirit to overcome enemies.",
  },
  // Barbarian
  {
    id: 11,
    name: "Path of the Ancestral Guardian",
    description:
      "Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger in the world as mighty spirits, who can guide and protect the living. When a barbarian who follows this path rages, the barbarian contacts the spirit world and calls on these guardian spirits for aid. Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors’ deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals.",
    classId: ids.barbarian,
    source: src.xanathar,
    flavorText:
      "The Ancestral Guardian calls on guardian spirits for aid when they rage.",
  },
  {
    id: 12,
    name: "Battle Rager",
    description: `Known as Kuldjargh (literally "axe idiot") in Dwarvish, battleragers are dwarf followers of the gods of war and take the Path of the Battlerager. They specialize in wearing bulky, spiked armor and throwing themselves into combat, striking with their body itself and giving themselves over to the fury of battle.`,
    classId: ids.barbarian,
    source: src.sword,
    flavorText:
      "The Battle Rager specializes in wearing bulky, spiked armor and throwing themselves into combat.",
  },
  {
    id: 13,
    name: "Path Of The Beast",
    description:
      "Barbarians who walk the Path of the Beast draw their rage from a bestial spark burning within their souls. That beast bursts forth in the throes of rage, physically transforming the barbarian. Such a barbarian might be inhabited by a primal spirit or be descended from shape-shifters.",
    classId: ids.barbarian,
    source: src.tasha,
    flavorText:
      "Barbarians who walk the Path of the Beast draw their rage from a bestial spark burning within their souls.",
  },
  {
    id: 14,
    name: "Path of the Berserker",
    description:
      "For some barbarians, rage is a means to an end – that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
    classId: ids.barbarian,
    source: src.phb,
    flavorText:
      "For some barbarians, rage is a means to an end – that end being violence.",
  },
  {
    id: 15,
    name: "Path of the Giant",
    description:
      "Barbarians who walk the Path of the Giant draw strength from the same primal forces as giants. As they rage, these barbarians surge with elemental power and grow in size, taking on forms that evoke the glory of giants. Some barbarians look like oversized versions of themselves, perhaps with a hint of elemental energy flaring in their eyes and around their weapons. Others transform more dramatically, taking on the appearance of an actual giant or a form similar to an Elemental, wreathed in fire, frost, or lightning.",
    classId: ids.barbarian,
    source: src.Bigby,
    flavorText:
      "Barbarians who walk the Path of the Giant draw strength from the same primal forces as giants.",
  },
  {
    id: 16,
    name: "Storm Herald",
    description:
      "Typical barbarians harbor a fury that dwells within. Their rage grants them superior strength, durability, and speed. Barbarians who follow the Path of the Storm Herald learn instead to transform their rage into a mantle of primal magic that swirls around them. When in a fury, a barbarian of this path taps into nature to create powerful, magical effects. Storm heralds are typically elite champions who train alongside druids, rangers, and others sworn to protect the natural realm. Other storm heralds hone their craft in elite lodges founded in regions wracked by storms, in the frozen reaches at the world’s end, or deep in the hottest deserts.",
    classId: ids.barbarian,
    source: src.xanathar,
    flavorText:
      "Barbarians who follow the Path of the Storm Herald learn to transform their rage into a mantle of primal magic.",
  },
  {
    id: 17,
    name: "Path of the Totem Warrior",
    description:
      "The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage. Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist.",
    classId: ids.barbarian,
    source: src.phb,
    flavorText:
      "The Path of the Totem Warrior is a spiritual journey, using their spirit animal to fuel their rage with supernatural might.",
  },
  {
    id: 18,
    name: "Path of Wild Magic",
    description:
      "Many places in the multiverse abound with beauty, intense emotion, and rampant magic; the Feywild, the Upper Planes, and other realms of supernatural power radiate with such forces and can profoundly influence people. As folk of deep feeling, barbarians are especially susceptible to these wild influences, with some barbarians being transformed by the magic. These magic-suffused barbarians walk the Path of Wild Magic. Elf, tiefling, aasimar, and genasi barbarians often seek this path, eager to manifest the otherworldly magic of their ancestors.",
    classId: ids.barbarian,
    source: src.tasha,
    flavorText:
      "Transformed by curious magical forces, barbarians who walk the Path of Wild Magic are especially susceptible to wild influences.",
  },
  {
    id: 19,
    name: "Path of the Zealot",
    description:
      "Some deities inspire their followers to pitch themselves into a ferocious battle fury. These barbarians are zealots – warriors who channel their rage into powerful displays of divine power. A variety of gods across the worlds of D&D inspire their followers to embrace this path. Tempus from the Forgotten Realms and Hextor and Erythnul of Greyhawk are all prime examples. In general, the gods who inspire zealots are deities of combat, destruction, and violence. Not all are evil, but few are good.",
    classId: ids.barbarian,
    source: src.xanathar,
    flavorText:
      "Zealots are warriors who channel their rage into powerful displays of divine power.",
  },
  //bard
  {
    id: 20,
    name: "College of Creation",
    description: `Bards believe the cosmos is a work of art - the creation of the first dragons and gods. That creative work included harmonies that continue to resound through existence today, a power known as the Song of Creation. The bards of the College of Creation draw on that primeval song through dance, music, and poetry, and their teachers share this lesson: "Before the sun and the moon, there was the Song, and its music awoke the first dawn. Its melodies so delighted the stones and trees that some of them gained a voice of their own. And now they sing too. Learn the Song, students, and you too can teach the mountains to sing and dance."`,
    classId: ids.bard,
    source: src.tasha,
    flavorText:
      "Bards of the College of Creation draw on the primeval Song of Creation through dance, music, and poetry.",
  },
  {
    id: 21,
    name: "College of Eloquence",
    description:
      "Adherents of the College of Eloquence master the art of oratory. Persuasion is regarded as a high art, and a well-reasoned, well-spoken argument often proves more powerful than objective truth. These bards wield a blend of logic and theatrical wordplay, winning over skeptics and detractors with logical arguments, and plucking at heartstrings to appeal to the emotions of entire audiences.",
    classId: ids.bard,
    source: src.tasha,
    flavorText:
      "Adherents of the College of Eloquence master the art of oratory, wielding a blend of logic and theatrical wordplay.",
  },
  {
    id: 22,
    name: "College of Glamour",
    description:
      "The College of Glamour is the home of bards who mastered their craft in the vibrant realm of the Feywild or under the tutelage of someone who dwelled there. Tutored by satyrs, eladrin, and other fey, these bards learn to use their magic to delight and captivate others. The bards of this college are regarded with a mixture of awe and fear. Their performances are the stuff of legend. These bards are so eloquent that a speech or song that one of them performs can cause captors to release the bard unharmed and can lull a furious dragon into complacency. The same magic that allows them to quell beasts can also bend minds. Villainous bards of this college can leech off a community for weeks, abusing their magic to turn their hosts into thralls. Heroic bards of this college instead use this power to gladden the downtrodden and undermine oppressors.",
    classId: ids.bard,
    source: src.xanathar,
    flavorText:
      "The College of Glamour is the home of bards who mastered their craft to delight and capitivate others.",
  },
  {
    id: 23,
    name: "College of Lore",
    description:
      "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king. The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.",
    classId: ids.bard,
    source: src.phb,
    flavorText:
      "Bards of the College of Lore know something about most things, collecting bits of knowledge from diverse sources.",
  },
  {
    id: 24,
    name: "College of Spirits",
    description:
      "Bards of the College of Spirits seek tales with inherent power-be they legends, histories, or fictions-and bring their subjects to life. Using occult trappings, these bards conjure spiritual embodiments of powerful forces to change the world once more. Such spirits are capricious, though, and what a bard summons isn't always entirely under their control.",
    classId: ids.bard,
    source: src.vanRichten,
    flavorText:
      "Bards of the College of Spirits seek tales with inherent power and bring their subjects to life using occult trappings.",
  },
  {
    id: 25,
    name: "College of Swords",
    description:
      "Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess. Blades perform stunts such as sword swallowing, knife throwing and juggling, and mock combats. Though they use their weapons to entertain, they are also highly trained and skilled warriors in their own right. Their talent with weapons inspires many blades to lead double lives. One blade might use a circus troupe as cover for nefarious deeds such as assassination, robbery, and blackmail. Other blades strike at the wicked, bringing justice to bear against the cruel and powerful. Most troupes are happy to accept a blade’s talent for the excitement it adds to a performance, but few entertainers fully trust a blade in their ranks. Blades who abandon their lives as entertainers have often run into trouble that makes maintaining their secret activities impossible. A blade caught stealing or engaging in vigilante justice is too great a liability for most troupes. With their weapon skills and magic, these blades either take up work as enforcers for thieves’ guilds or strike out on their own as adventurers. ",
    classId: ids.bard,
    source: src.xanathar,
    flavorText:
      "Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess.",
  },
  {
    id: 26,
    name: "College of Valor",
    description:
      "Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present. They travel the land to witness great events firsthand and to ensure that the memory of those events doesn't pass from the world. With their songs, they inspire others to reach the same heights of accomplishment as the heroes of old.",
    classId: ids.bard,
    source: src.phb,
    flavorText:
      "Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past.",
  },
  {
    id: 27,
    name: "College of Whispers",
    description:
      "Most folk are happy to welcome a bard into their midst. Bards of the College of Whispers use this to their advantage. They appear to be like any other bard, sharing news, singing songs, and telling tales to the audiences they gather. In truth, the College of Whispers teaches its students that they are wolves among sheep. These bards use their knowledge and magic to uncover secrets and turn them against others through extortion and threats. Many other bards hate the College of Whispers, viewing it as a parasite that uses the bards’ reputation to acquire wealth and power. For this reason, these bards rarely reveal their true nature unless they must. They typically claim to follow some other college, or keep their true nature secret in order to better infiltrate and exploit royal courts and other settings of power.",
    classId: ids.bard,
    source: src.xanathar,
    flavorText:
      "Bards of the College of Whispers use their knowledge and magic to uncover secrets and turn them against others.",
  },
  //wizard
  {
    id: 28,
    name: "School of Abjuration",
    description:
      "The School of Abjuration emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void. It is a proud and respected vocation. Called abjurers, members of this school are sought when baleful spirits require exorcism, when important locations must be guarded against magical spying, and when portals to other planes of existence must be closed.",
    classId: ids.wizard,
    source: src.phb,
    flavorText:
      "The School of Abjuration emphasizes magic that blocks, banishes, or protects.",
  },
  {
    id: 29,
    classId: ids.wizard,
    name: "Bladesinging",
    description:
      "Bladesingers master a tradition of wizardry that incorporates swordplay and dance. Originally created by elves, this tradition has been adopted by non-elf practitioners, who honor and expand on the elven ways. In combat, a bladesinger uses a series of intricate, elegant maneuvers that fend off harm and allow the bladesinger to channel magic into devastating attacks and a cunning defense. Many who have observed a bladesinger at work remember the display as one of the more beautiful experiences in their life, a glorious dance accompanied by a singing blade.",
    source: src.sword,
    flavorText:
      "Bladesingers master a tradition of wizardry that incorporates swordplay and dance.",
  },
  {
    id: 30,
    classId: ids.wizard,
    name: "Chronurgy Magic",
    description:
      "Focusing on the manipulation of time, those who follow the Chronurgy tradition learn to alter the pace of reality to their liking. Using the ramping of anticipatory dunamis energy, these mages can bend the flow of time as adroitly as a skilled musician plays an instrument, lending themselves and their allies an advantage in the blink of an eye.",
    source: src.wildemount,
    flavorText:
      "Focusing on the manipulation of time, those who follow the Chronurgy tradition learn to alter the pace of reality to their liking.",
  },
  {
    id: 31,
    classId: ids.wizard,
    name: "School of Conjuration",
    description:
      "As a conjurer, you favor spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of transportation and can teleport yourself across vast distances, even to other planes of existence, in an instant.",
    source: src.phb,
    flavorText:
      "As a conjurer, you favor spells that produce objects and creatures out of thin air.",
  },
  {
    id: 32,
    classId: ids.wizard,
    name: "School of Divination",
    description:
      "The counsel of a diviner is sought by royalty and commoners alike, for all seek a clearer understanding of the past, present, and future. As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly. You work to master spells of discernment, remote viewing, supernatural knowledge, and foresight.",
    source: src.phb,
    flavorText:
      "As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly.",
  },
  {
    id: 33,
    classId: ids.wizard,
    name: "School of Enchantment",
    description:
      "As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service. Most enchanters fall somewhere in between.",
    source: src.phb,
    flavorText:
      "As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters.",
  },
  {
    id: 34,
    classId: ids.wizard,
    name: "School of Evocation",
    description:
      "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.",
    source: src.phb,
    flavorText:
      "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid.",
  },
  {
    id: 35,
    classId: ids.wizard,
    name: "Graviturgy Magic",
    description:
      "Understanding and mastering the forces that draw bodies of matter together or drive them apart, the students of the Graviturgy arcane tradition learn to further bend and manipulate the violent energy of gravity to their benefit, and the terrible detriment of their enemies.",
    source: src.wildemount,
    flavorText:
      "Students of the Graviturgy arcane tradition learn to bend and manipulate the violent energy of gravity to their benefit  and the detriment of their enemies.",
  },
  {
    id: 36,
    classId: ids.wizard,
    name: "School of Illusion",
    description:
      "You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk. Your magic is subtle, but the illusions crafted by your keen mind make the impossible seem real. Some illusionists – including many gnome wizards – are benign tricksters who use their spells to entertain. Others are more sinister masters of deception, using their illusions to frighten and fool others for their personal gain.",
    source: src.phb,
    flavorText:
      "You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk.",
  },
  {
    id: 37,
    classId: ids.wizard,
    name: "School of Necromancy",
    description:
      "The School of Necromancy explores the cosmic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate. Most people see necromancers as menacing, or even villainous, due to the close association with death. Not all necromancers are evil, but the forces they manipulate are considered taboo by many societies.",
    source: src.phb,
    flavorText:
      "The School of Necromancy explores the cosmic forces of life, death, and undeath.",
  },
  {
    id: 38,
    classId: ids.wizard,
    name: "Order of Scribes",
    description:
      "Magic of the book-that's what many folk call wizardry. The name is apt, given how much time wizards spend poring over tomes and penning theories about the nature of magic. It's rare to see wizards traveling without books and scrolls sprouting from their bags, and a wizard would go to great lengths to plumb an archive of ancient knowledge. Among wizards, the Order of Scribes is the most bookish. It takes many forms in different worlds, but its primary mission is the same everywhere: recording magical discoveries so that wizardry can flourish. And while all wizards value spellbooks, a wizard in the Order of Scribes magically awakens their book, turning it into a trusted companion. All wizards study books, but a wizardly scribe talks to theirs!",
    source: src.tasha,
    flavorText:
      "Among wizards, the Order of Scribes is the most bookish, recording magical discoveries so that wizardry can flourish.",
  },
  {
    id: 39,
    classId: ids.wizard,
    name: "School of Transmutation",
    description:
      "You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities. Your magic gives you the tools to become a smith on reality's forge. Some transmuters are tinkerers and pranksters, turning people into toads and transforming copper into silver for fun and occasional profit. Others pursue their magical studies with deadly seriousness, seeking the power of the gods to make and destroy worlds.",
    source: src.phb,
    flavorText:
      "You are a student of spells that modify energy and matter, delighting in being an agent of change.",
  },
  {
    id: 40,
    classId: ids.wizard,
    name: "War Magic",
    description: `A variety of arcane colleges specialize in training wizards for war. The tradition of War Magic blends principles of evocation and abjuration, rather than specializing in either of those schools. It teaches techniques that empower a caster’s spells, while also providing methods for wizards to bolster their own defenses. Followers of this tradition are known as war mages. They see their magic as both a weapon and armor, a resource superior to any piece of steel. War mages act fast in battle, using their spells to seize tactical control of a situation. Their spells strike hard, while their defensive skills foil their opponents’ attempts to counterattack. War mages are also adept at turning other spellcasters' magical energy against them. In great battles, a war mage often works with evokers, abjurers, and other types of wizards. Evokers, in particular, sometimes tease war mages for splitting their attention between offense and defense. A war mage's typical response: "What good is being able to throw a mighty Fireball if I die before I can cast it?"`,
    source: src.xanathar,
    flavorText:
      "The tradition of War Magic blends principles of evocation and abjuration, teaching techniques that empower a caster’s spells and bolster their own defenses.",
  },
  //cleric
  {
    id: 41,
    classId: ids.cleric,
    name: "Arcana Domain",

    description:
      "Magic is an energy that suffuses the multiverse and that fuels both destruction and creation. Gods of the Arcana domain know the secrets and potential of magic intimately. For some of these gods, magical knowledge is a great responsibility that comes with a special understanding of the nature of reality. Other gods of Arcana see magic as pure power, to be used as its wielder sees fit. The gods of this domain are often associated with knowledge, as learning and arcane power tend to go hand-in-hand. In the Realms, deities of this domain include Azuth and Mystra, as well as Corellon Larethian of the elven pantheon. In other worlds, this domain includes Hecate, Math Mathonwy, and Isis; the triple moon gods of Solinari, Lunitari, and Nuitari of Krynn; and Boccob, Vecna, and Wee Jas of Greyhawk.",
    source: src.sword,
    flavorText:
      "Gods of the Arcana domain know the secrets and potential of magic intimately.",
  },
  {
    id: 42,
    classId: ids.cleric,
    name: "Death Domain",

    source: src.dmg,
    description:
      "The Death domain is concerned with the forces that cause death, as well as the negative energy that gives rise to undead creatures. Deities such as Chemosh, Myrkul, and Wee Jas are patrons of necromancers, death knights, liches, mummy lords, and vampires. Gods of the Death domain also embody murder (Anubis, Bhaal, and Pyremius), pain (Iuz or Loviatar), disease or poison (Incabulos, Talona, or Morgion), and the underworld (Hades and Hel).",
    flavorText:
      "The Death domain is concerned with the forces that cause death, as well as the negative energy that gives rise to undead creatures.",
  },
  {
    id: 43,
    classId: ids.cleric,
    name: "Forge Domain",

    source: src.xanathar,
    description:
      "The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords. The gods of the forge teach that, with patience and hard work, even the most intractable metal can be transformed from a lump of ore to a beautifully wrought object. Clerics of these deities search for objects lost to the forces of darkness, liberate mines overrun by orcs, and uncover rare and wondrous materials necessary to create potent magic items. Followers of these gods take great pride in their work, and they are willing to craft and use heavy armor and powerful weapons to protect them. Deities of this domain include Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.",
    flavorText:
      "The gods of the forge are patrons of artisans who work with metal.",
  },
  {
    id: 44,
    classId: ids.cleric,
    name: "Grave Domain",

    source: src.xanathar,
    description:
      "Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse’s workings. To resist death, or to desecrate the dead’s rest, is an abomination. Deities of the grave include Kelemvor, Wee Jas, the ancestral spirits of the Undying Court, Hades, Anubis, and Osiris. These deities teach their followers to respect the dead and pay them due homage. Followers of these deities seek to put restless spirits to rest, destroy the undead wherever they find them, and ease the suffering of dying creatures. Their magic also allows them to stave off a creature’s death, though they refuse to use such magic to extend a creature’s lifespan beyond its mortal limits.",
    flavorText:
      "Clerics of the Grave Domain seek to put restless spirits to rest, destroy the undead wherever they find them, and ease the suffering of dying creatures.",
  },
  {
    id: 45,
    classId: ids.cleric,
    name: "Knowledge Domain",

    source: src.phb,
    description:
      "The gods of knowledge – including Oghma, Boccob, Gilean, Aureon, and Thoth – value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu. In Amonkhet, knowledge is the second virtue of society. Kefnet’s task is to pass on this teaching of the God-Pharaoh and elucidate its meaning. He teaches that the afterlife will be inhabited only by those who have proved by their wits that they are worthy of dwelling in the glorious presence of the God-Pharaoh. He trains acolytes and initiates to push their limits and challenge their mental capacity with spells of ever-greater power.",
    flavorText:
      "The gods of knowledge value learning and understanding above all.",
  },
  {
    id: 46,
    classId: ids.cleric,
    name: "Life Domain",

    source: src.phb,
    description:
      "The Life domain focuses on the vibrant positive energy – one of the fundamental forces of the universe – that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrci).",
    flavorText:
      "The Life domain focuses on the vibrant positive energy that sustains all life, sustaining their allies in battle.",
  },
  {
    id: 47,
    classId: ids.cleric,
    name: "Light Domain",

    source: src.phb,
    description:
      "Gods of light – including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Re-Horakhty – promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their gods' discerning vision, charged with chasing away lies and burning away darkness.",
    flavorText:
      "Gods of light promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun.",
  },
  {
    id: 48,
    classId: ids.cleric,
    name: "Nature Domain",

    source: src.phb,
    description:
      "Gods of nature are as varied as the natural world itself; from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.",
    flavorText:
      "Clerics of the Nature Domain might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods",
  },
  {
    id: 49,
    classId: ids.cleric,
    name: "Order Domain",

    source: src.tasha,
    description:
      "The Order Domain represents discipline, as well as devotion to the laws that govern a society, an institution, or a philosophy. Clerics of Order meditate on logic and justice as they serve their gods, examples of which appear in the Order Deities table. Clerics of Order believe that well-crafted laws establish legitimate hierarchies, and those selected by law to lead must be obeyed. Those who obey must do so to the best of their ability, and if those who lead fail to protect the law, they must be replaced. In this manner, law weaves a web of obligations that create order and security in a chaotic multiverse.",
    flavorText:
      "The Order Domain represents discipline and devotion to the laws that govern a society.",
  },
  {
    id: 50,
    classId: ids.cleric,
    name: "Peace Domain",

    source: src.tasha,
    description:
      "The balm of peace thrives at the heart of healthy communities, between friendly nations, and in the souls of the kindhearted. The gods of peace inspire people of all sorts to resolve conflict and to stand up against those forces that try to prevent peace from flourishing. See the Peace Deities table for a list of some of the gods associated with this domain. Clerics of the Peace Domain preside over the signing of treaties, and they are often asked to arbitrate in disputes. These clerics' blessings draw people together and help them shoulder one another's burdens, and the clerics' magic aids those who are driven to fight for the way of peace.",
    flavorText:
      "Clerics of the Peace Domain preside over the signing of treaties, and they are often asked to arbitrate in disputes.",
  },
  {
    id: 51,
    classId: ids.cleric,
    name: "Tempest Domain",

    source: src.phb,
    description:
      "Gods whose portfolios include the Tempest domain – including Talos, Umberlee, Kord, Zeboim, the Devourer, Zeus, and Thor – govern storms, sea, and, sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath.",
    flavorText:
      "Gods of the Tempest domain govern storms, sea, and sky, empowering their clerics to inspire fear in the common folk.",
  },
  {
    id: 52,
    classId: ids.cleric,
    name: "Trickery Domain",

    source: src.phb,
    description:
      "Gods of trickery – such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki – are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They're patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.",
    flavorText:
      "Gods of trickery are mischief-makers and instigators who stand as a constant challenge to the accepted order.",
  },
  {
    id: 53,
    classId: ids.cleric,
    name: "Twilight Domain",

    source: src.tasha,
    description:
      "The twilit transition from light into darkness often brings calm and even joy, as the day's labors end and the hours of rest begin. The darkness can also bring terrors, but the gods of twilight guard against the horrors of the night. Clerics who serve these deities-examples of which appear on the Twilight Deities table-bring comfort to those who seek rest and protect them by venturing into the encroaching darkness to ensure that the dark is a comfort, not a terror.",
    flavorText:
      "Clerics of the Twilight Domain bring comfort to those who seek rest and protect them by venturing into the encroaching darkness.",
  },
  {
    id: 54,
    classId: ids.cleric,
    name: "War Domain",

    source: src.phb,
    description:
      "War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as Torm, Heironeous, and Kiri-Jolith) as well as gods of destruction and pillage (such as Erythnul, the Fury, Gruumsh, and Ares) and gods of conquest and domination (such as Bane, Hextor, and Maglubiyet). Other war gods (such as Tempus, Nike, and Nuada) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.",
    flavorText:
      "The gods of war watch over warriors and reward them for their great deeds.",
  },
  // druid
  {
    id: 55,
    classId: ids.druid,
    name: "Circle of Dreams",
    description:
      "Druids who are members of the Circle of Dreams hail from regions that have strong ties to the Feywild and its dreamlike realms. The druids’ guardianship of the natural world makes for a natural alliance between them and good-aligned fey. These druids seek to fill the world with dreamy wonder. Their magic mends wounds and brings joy to downcast hearts, and the realms they protect are gleaming, fruitful places, where dream and reality blur together and where the weary can find rest.",
    source: src.xanathar,
    flavorText:
      "Druids of the Circle of Dreams hail from regions that have strong ties to the Feywild, seeking to fill the world with dreamy wonder",
  },
  {
    classId: ids.druid,
    id: 56,
    name: "Circle of the Land",
    source: src.phb,
    description:
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
    flavorText:
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites.",
  },
  {
    name: "Circle of the Moon",
    id: 57,
    classId: ids.druid,
    source: src.phb,
    description:
      "Druids of the Circle of the Moon are fierce guardians of the wilds. Their order gathers under the full moon to share news and trade warnings. They haunt the deepest parts of the wilderness, where they might go for weeks on end before crossing paths with another humanoid creature, let alone another druid. Changeable as the moon, a druid of this circle might prowl as a great cat one night, soar over the treetops as an eagle the next day, and crash through the undergrowth in bear form to drive off a trespassing monster. The wild is in the druid's blood.",
    flavorText:
      "Druids of the Circle of the Moon are fierce guardians of the wilds, shape-shifting into powerful beasts to protect their lands.",
  },
  {
    name: "Circle of the Shepherd",
    description:
      "Druids of the Circle of the Shepherd commune with the spirits of nature, especially the spirits of beasts and the fey, and call to those spirits for aid. These druids recognize that all living things play a role in the natural world, yet they focus on protecting animals and fey creatures that have difficulty defending themselves. Shepherds, as they are known, see such creatures as their charges. They ward off monsters that threaten them, rebuke hunters who kill more prey than necessary, and prevent civilization from encroaching on rare animal habitats and on sites sacred to the fey.Many of these druids are happiest far from cities and towns, content to spend their days in the company of animals and the fey creatures of the wilds. Members of this circle become adventurers to oppose forces that threaten their charges or to seek knowledge and power that will help them safeguard their charges better. Wherever these druids go, the spirits of the wilderness are with them.",
    id: 58,
    classId: ids.druid,
    source: src.xanathar,
    flavorText:
      "Druids of the Circle of the Shepherd commune with the spirits of nature, especially the spirits of beasts and the fey, and call to those spirits for aid.",
  },
  {
    name: "Circle of Spores",
    description:
      "Druids of the Circle of Spores find beauty in decay. They see within mold and other fungi the ability to transform lifeless material into abundant, albeit somewhat strange, life. These druids believe that life and death are parts of a grand cycle, with one leading to the other and then back again. Death isn't the end of life, but instead a change of state that sees life shift into a new form.Druids of this circle have a complex relationship with the undead. They see nothing inherently wrong with undeath, which they consider to be a companion to life and death. But these druids believe that the natural cycle is healthiest when each segment of it is vibrant and changing. Undead that seek to replace all life with undeath, or that try to avoid passing to a final rest, violate the cycle and must be thwarted.",
    source: src.tasha,
    id: 59,
    classId: ids.druid,
    flavorText:
      "Druids of the Circle of Spores find beauty in decay, using fungi to transform lifeless material into abundant, albeit somewhat strange, life.",
  },
  {
    name: "Circle of Stars",
    description:
      "The Circle of Stars allows druids to draw on the power of starlight. These druids have tracked heavenly patterns since time immemorial, discovering secrets hidden amid the constellations. By revealing and understanding these secrets, the Circle of the Stars seeks to harness the powers of the cosmos.Many druids of this circle keep records of the constellations and the stars' effects on the world. Some groups document these observations at megalithic sites, which serve as enigmatic libraries of lore. These repositories might take the form of stone circles, pyramids, petroglyphs, and underground temples; any construction durable enough to protect the circle's sacred knowledge even against a great cataclysm.",
    id: 60,
    classId: ids.druid,
    source: src.tasha,
    flavorText:
      "The Circle of Stars allows druids to draw on the power of starlight, using the constellations to guide their magic.",
  },
  {
    name: "Circle of Wildfire",
    description:
      "Druids within the Circle of Wildfire understand that destruction is sometimes the precursor of creation, such as when a forest fire promotes later growth. These druids bond with a primal spirit that harbors both destructive and creative power, allowing the druids to create controlled flames that burn away one thing but give life to another.",
    id: 61,
    classId: ids.druid,
    source: src.tasha,
    flavorText:
      "Druids of the Circle of Wildfire bond with a primal spirit that harbors both destructive and creative power, creating controlled flames that burn away one thing but give life to another.",
  },
  //monk
  {
    name: "Way of the Astral Self",
    description:
      "A monk who follows the Way of the Astral Self believes their body is an illusion. They see their ki as a representation of their true form, an astral self. This astral self has the capacity to be a force of order or disorder, with some monasteries training students to use their power to protect the weak and other instructing aspirants in how to manifest their true selves in service to the mighty.",
    id: 62,
    classId: ids.monk,
    source: src.tasha,
    flavorText:
      "Monks who follow the Way of the Astral Self believe their body is an illusion, manifesting their true selves as an astral self.",
  },
  {
    name: "Way of the Ascendant Dragon",
    description:
      "The fundamental teaching of this tradition holds that by emulating dragons, a monk becomes a more integrated part of the world and its magic. By altering their spirit to resonate with draconic might, monks who follow this tradition augment their prowess in battle, bolster their allies, and can even soar through the air on draconic wings. But all this power is in service of a greater goal: achieving a spiritual unity with the essence of the Material Plane.",
    id: 63,
    classId: ids.monk,
    source: src.fizban,
    flavorText:
      "Monks who follow the Way of the Ascendant Dragon emulate dragons, becoming a more integrated part of the world and its magic.",
  },
  {
    name: "Way of the Drunken Master",
    description: `The Way of the Drunken Master teaches its students to move with the jerky, unpredictable movements of a drunkard. A drunken master sways, tottering on unsteady feet, to present what seems like an incompetent combatant who proves frustrating to engage. The drunken master’s erratic stumbles conceal a carefully executed dance of blocks, parries, advances, attacks, and retreats.A drunken master often enjoys playing the fool to bring gladness to the despondent or to demonstrate humility to the arrogant, but when battle is joined, the drunken master can be a maddening, masterful foe.`,
    id: 64,
    classId: ids.monk,
    source: src.xanathar,
    flavorText:
      "Monks who follow the Way of the Drunken Master move with the jerky, unpredictable movements of a drunkard, swaying to present an incompetent combatant who proves frustrating to engage.",
  },
  {
    name: "Way of the Four Elements",
    description:
      "You follow a monastic tradition that teaches you to harness the elements. When you focus your ki, you can align yourself with the forces of creation and bend the four elements to your will, using them as an extension of your body. Some members of this tradition dedicate themselves to a single element, but others weave the elements together.Many monks of this tradition tattoo their bodies with representations of their ki powers, commonly imagined as coiling dragons, but also as phoenixes, fish, plants, mountains, and cresting waves.",
    id: 65,
    classId: ids.monk,
    source: src.phb,
    flavorText:
      "Monks who follow the Way of the Four Elements harness the elements, bending them to their will and using them as an extension of their body.",
  },
  {
    name: "Way of the Kensei",
    description:
      "Monks of the Way of the Kensei train relentlessly with their weapons, to the point that the weapon becomes like an extension of the body. Founded on a mastery of sword fighting, the tradition has expanded to include many different weapons. A kensei sees a weapon much in the same way a calligrapher or a painter regards a pen or brush. Whatever the weapon, the kensei views it as a tool used to express the beauty and precision of the martial arts. That such mastery makes a kensei a peerless warrior is but a side effect of intense devotion, practice, and study.",
    id: 66,
    classId: ids.monk,
    source: src.xanathar,
    flavorText:
      "Monks who follow the Way of the Kensei train relentlessly with their weapons, to the point that the weapon becomes like an extension of the body.",
  },
  {
    name: "Way of the Long Death",
    description:
      "Monks of the Way of the Long Death are obsessed with the meaning and mechanics of dying. They capture creatures and prepare elaborate experiments to capture, record, and understand the moments of their demise. They then use this knowledge to guide their understanding of martial arts, yielding a deadly fighting style.",
    id: 67,
    classId: ids.monk,
    source: src.sword,
    flavorText:
      "Monks who follow the Way of the Long Death are obsessed with the meaning and mechanics of dying.",
  },
  {
    name: "Way of Mercy",
    description: `Monks of the Way of Mercy learn to manipulate the life force of others to bring aid to those in need. They are wandering physicians to the poor and hurt. However, to those beyond their help, they bring a swift end as an act of mercy. Those who follow the Way of Mercy might be members of a religious order, administering to the needy and making grim choices rooted in reality rather than idealism. Some might be gentle-voiced healers, beloved by their communities, while others might be masked bringers of macabre mercies. The walkers of this way usually don robes with deep cowls, and they often conceal their faces with masks, presenting themselves as the faceless bringers of life and death.`,
    id: 68,
    classId: ids.monk,
    source: src.tasha,
    flavorText:
      "Monks who follow the Way of Mercy learn to manipulate the life force of others to bring aid to those in need.",
  },
  {
    name: "Way of the Open Hand",
    description:
      "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.",
    id: 69,
    classId: ids.monk,
    source: src.phb,
    flavorText:
      "Monks who follow the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed.",
  },
  {
    name: "Way of the Shadow",
    description:
      "Monks of the Way of Shadow follow a tradition that values stealth and subterfuge. These monks might be called ninjas or shadowdancers, and they serve as spies and assassins. Sometimes the members of a ninja monastery are family members, forming a clan sworn to secrecy about their arts and missions. Other monasteries are more like thieves' guilds, hiring out their services to nobles, rich merchants, or anyone else who can pay their fees. Regardless of their methods, the heads of these monasteries expect the unquestioning obedience of their students.",
    id: 70,
    classId: ids.monk,
    source: src.phb,
    flavorText:
      "Monks who follow the Way of Shadow follow a tradition that values stealth and subterfuge, serving as spies and assassins.",
  },
  {
    name: "Way of the Sun Soul",
    description:
      "Monks of the Way of the Sun Soul learn to channel their own life energy into searing bolts of light. They teach that meditation can unlock the ability to unleash the indomitable light shed by the soul of every living creature.",
    id: 71,
    classId: ids.monk,
    source: src.xanathar,
    flavorText:
      "Monks who follow the Way of the Sun Soul learn to channel their own life energy into searing bolts of light.",
  },
  // Paladin
  {
    name: "Oath of the Ancients",
    description:
      "The Oath of the Ancients is as old as the race of elves and the rituals of the druids. Sometimes called fey knights, green knights, or horned knights, paladins who swear this oath cast their lot with the side of the light in the cosmic struggle against darkness because they love the beautiful and life-giving things of the world, not necessarily because they believe in principles of honor, courage, and justice. They adorn their armor and clothing with images of growing things-leaves, antlers, or flowers-to reflect their commitment to preserving life and light in the world.",
    id: 72,
    classId: ids.paladin,
    source: src.phb,
    flavorText:
      "Paladins who swear the Oath of the Ancients cast their lot with the side of the light in the cosmic struggle against darkness.",
  },
  {
    name: "Oath of Conquest",
    description:
      "The Oath of Conquest calls to paladins who seek glory in battle and the subjugation of their enemies. It isn’t enough for these paladins to establish order. They must crush the forces of chaos. Sometimes called knight tyrants or iron mongers, those who swear this oath gather into grim orders that serve gods or philosophies of war and well-ordered might. Some of these paladins go so far as to consort with the powers of the Nine Hells, valuing the rule of law over the balm of mercy. The archdevil Bel, warlord of Avernus, counts many of these paladins – called hell knights – as his most ardent supporters. Hell knights cover their armor with trophies taken from fallen enemies, a grim warning to any who dare oppose them and the decrees of their lords. These knights are often most fiercely resisted by other paladins of this oath, who believe that the hell knights have wandered too far into darkness.",
    id: 73,
    classId: ids.paladin,
    source: src.xanathar,
    flavorText:
      "Paladins who swear the Oath of Conquest seek glory in battle and the subjugation of their enemies.",
  },
  {
    name: "Oath of the Crown",
    description:
      "The Oath of the Crown is sworn to the ideals of civilization, be it the spirit of a nation, fealty to a sovereign, or service to a deity of law and rulership. The paladins who swear this oath dedicate themselves to serving society and, in particular, the just laws that hold society together. These paladins are the watchful guardians on the walls, standing against the chaotic tides of barbarism that threaten to tear down all that civilization has built, and are commonly known as guardians, exemplars, or sentinels. Often, paladins who swear this oath are members of an order of knighthood in service to a nation or a sovereign, and undergo their oath as part of their admission to the order's ranks.",
    id: 74,
    classId: ids.paladin,
    source: src.sword,
    flavorText:
      "Paladins who swear the Oath of the Crown dedicate themselves to serving society and the just laws that hold it together.",
  },
  {
    name: "Oath of Devotion",
    description:
      "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels – the perfect servants of good – as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.",
    id: 75,
    classId: ids.paladin,
    source: src.phb,
    flavorText:
      "Paladins who swear the Oath of Devotion bind themselves to the loftiest ideals of justice, virtue, and order.",
  },
  {
    name: "Oath of Glory",
    description:
      "Paladins who take the Oath of Glory believe they and their companions are destined to achieve glory through deeds of heroism. They train diligently and encourage their companions so they're all ready when destiny calls.",
    id: 76,
    classId: ids.paladin,
    source: src.tasha,
    flavorText:
      "Paladins who swear the Oath of Glory believe they and their companions are destined to achieve glory through deeds of heroism.",
  },
  {
    name: "Oath of Redemption",
    description:
      "The Oath of Redemption sets a paladin on a difficult path, one that requires a holy warrior to use violence only as a last resort. Paladins who dedicate themselves to this oath believe that any person can be redeemed and that the path of benevolence and justice is one that anyone can walk. These paladins face evil creatures in the hope of turning them to the light, and the paladins slay them only when such a deed will clearly save other lives. Paladins who follow this path are known as redeemers.\n\nWhile redeemers are idealists, they are no fools. Redeemers know that undead, demons, devils, and other supernatural threats can be inherently evil. Against such foes, the paladins bring the full wrath of their weapons and spells to bear. Yet the redeemers still pray that, one day, even creatures of wickedness will invite their own redemption.",
    id: 77,
    classId: ids.paladin,
    source: src.xanathar,
    flavorText:
      "Paladins who swear the Oath of Redemption believe that any person can be redeemed and that the path of benevolence and justice is one that anyone can walk.",
  },
  {
    name: "Oath of Vengeance",
    description:
      "The Oath of Vengeance is a solemn commitment to punish those who have committed a grievous sin. When evil forces slaughter helpless villagers, when an entire people turns against the will of the gods, when a thieves' guild grows too violent and powerful, when a dragon rampages through the countryside – at times like these, paladins arise and swear an Oath of Vengeance to set right that which has gone wrong. To these paladins – sometimes called avengers or dark knights – their own purity is not as important as delivering justice.",
    id: 78,
    classId: ids.paladin,
    source: src.phb,
    flavorText:
      "Paladins who swear the Oath of Vengeance are committed to punishing those who have committed a grievous sin.",
  },
  {
    name: "Oath of the Watchers",
    description:
      "The Oath of the Watchers binds paladins to protect mortal realms from the predations of extraplanar creatures, many of which can lay waste to mortal soldiers. Thus, the Watchers hone their minds, spirits, and bodies to be the ultimate weapons against such threats.\n\nPaladins who follow the Watchers' oath are ever vigilant in spotting the influence of extraplanar forces, often establishing a network of spies and informants to gather information on suspected cults. To a Watcher, keeping a healthy suspicion and awareness about one's surroundings is as natural as wearing armor in battle.",
    id: 79,
    classId: ids.paladin,
    source: src.tasha,
    flavorText:
      "Paladins who swear the Oath of the Watchers protect mortal realms from the predations of extraplanar creatures.",
  },
  {
    name: "Oathbreaker",
    description:
      "An Oathbreaker is a paladin who breaks their sacred oaths to pursue some dark ambition or serve an evil power. Whatever light burned in the paladin's heart is extinguished. Only darkness remains.",
    id: 80,
    classId: ids.paladin,
    source: src.dmg,
    flavorText:
      "An Oathbreaker is a paladin who breaks their sacred oaths to pursue some dark ambition or serve an evil power.",
  },
  // ranger
  {
    name: "Beast Master Conclave",
    description:
      "The Beast Master archetype embodies a friendship between the civilized races and the beasts of the world. United in focus, beast and ranger work as one to fight the monstrous foes that threaten civilization and the wilderness alike. Emulating the Beast Master archetype means committing yourself to this ideal, working in partnership with an animal as its companion and friend.",
    id: 81,
    classId: ids.ranger,
    source: src.phb,
    flavorText:
      "The Beast Master archetype embodies a friendship between the civilized races and the beasts of the world.",
  },
  {
    name: "Fey Wanderer Conclave",
    description:
      "A fey mystique surrounds you, thanks to the boon of an archfey, the shining fruit you ate from a talking tree, the magic spring you swam in, or some other auspicious event. However you acquired your fey magic, you are now a Fey Wanderer, a ranger who represents both the mortal and the fey realms. As you wander the multiverse, your joyful laughter brightens the hearts of the downtrodden, and your martial prowess strikes terror in your foes, for great is the mirth of the fey and dreadful is their fury.",
    id: 82,
    classId: ids.ranger,
    source: src.tasha,
    flavorText:
      "Fey Wanderers are rangers who represent both the mortal and the fey realms, bringing joy to the downtrodden and striking terror in their foes.",
  },
  {
    name: "Gloom Stalker Conclave",
    description:
      "Gloom stalkers are at home in the darkest places: deep under the earth, in gloomy alleyways, in primeval forests, and wherever else the light dims. Most folk enter such places with trepidation, but a gloom stalker ventures boldly into the darkness, seeking to ambush threats before they can reach the broader world. Such rangers are often found in the Underdark, but they will go any place where evil lurks in the shadows.",
    id: 83,
    classId: ids.ranger,
    source: src.xanathar,
    flavorText:
      "Gloom stalkers are at home in the darkest places, seeking to ambush threats before they can reach the broader world.",
  },
  {
    name: "Horizon Walker Conclave",
    description:
      "Horizon walkers guard the world against threats that originate from other planes or that seek to ravage the mortal realm with otherworldly magic. They seek out planar portals and keep watch over them, venturing to the Inner Planes and the Outer Planes as needed to pursue their foes. These rangers are also friends to any forces in the multiverse – especially benevolent dragons, fey, and elementals – that work to preserve life and the order of the planes.",
    id: 84,
    classId: ids.ranger,
    source: src.xanathar,
    flavorText:
      "Horizon walkers guard the world against threats that originate from other planes or that seek to ravage the mortal realm with otherworldly magic.",
  },
  {
    name: "Hunter Conclave",
    description:
      "Some rangers seek to master weapons to better protect civilization from the terrors of the wilderness. Members of the Hunter Conclave learn specialized fighting techniques for use against the most dire threats, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.",
    id: 85,
    classId: ids.ranger,
    source: src.phb,
    flavorText:
      "Members of the Hunter Conclave learn specialized fighting techniques for use against the most dire threats.",
  },
  {
    name: "Monster Slayer Conclave",
    description:
      "You have dedicated yourself to hunting down creatures of the night and wielders of grim magic. A monster slayer seeks out vampires, dragons, evil fey, fiends, and other magical threats. Trained in supernatural techniques to overcome such monsters, slayers are experts at unearthing and defeating mighty, mystical foes.",
    id: 86,
    classId: ids.ranger,
    source: src.xanathar,
    flavorText:
      "Monster Slayers dedicate themselves to hunting down creatures of the night and wielders of grim magic.",
  },
  {
    name: "Swarmkeeper",
    description:
      "Feeling a deep connection to the environment around them, some rangers reach out through their magical connection to the world and bond with a swarm of nature spirits. The swarm becomes a potent force in battle, as well as helpful company for the ranger. Some Swarmkeepers are outcasts or hermits, keeping to themselves and their attendant swarms rather than dealing with the discomfort of others. Other Swarmkeepers enjoy building vibrant communities that work for the mutual benefit of all those they consider part of their swarm.",
    id: 87,
    classId: ids.ranger,
    source: src.tasha,
    flavorText:
      "Swarmkeepers bond with a swarm of nature spirits, using the swarm as a potent force in battle and helpful company for the ranger.",
  },
  {
    name: "Drakewarden",
    description:
      "Your connection to the natural world takes the form of a draconic spirit, which can manifest in physical form as a drake. As your powers grow, your drake grows as well, blossoming from a small four-legged companion to a majestic winged creature large and strong enough for you to ride. Along the way, you gain an increasing share of the awe-inspiring power of dragons.",
    id: 88,
    classId: ids.ranger,
    source: src.fizban,
    flavorText:
      "Drakewardens bond with a draconic spirit, which can manifest in physical form as a drake.",
  },
  //rogue
  {
    name: "Arcane Trickster",
    description:
      "Some rogues enhance their fine-honed skills of stealth and agility with magic, learning tricks of enchantment and illusion. These rogues include pickpockets and burglars, but also pranksters, mischief-makers, and a significant number of adventurers.",
    id: 89,
    classId: ids.rogue,
    source: src.phb,
    flavorText:
      "Arcane Tricksters enhance their fine-honed skills of stealth and agility with magic, learning tricks of enchantment and illusion.",
    spellCaster: true,
    spellCastingAbility: Ability.INT,
    spellCastingInfo:
      "You know three 1st-level wizard spells of your choice, two of which you must choose from the enchantment and illusion spells on the wizard spell list.\n\nThe Spells Known column of the Arcane Trickster Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an enchantment or illusion spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.\n\nThe spells you learn at 8th, 14th, and 20th level can come from any school of magic.\n\nWhenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an enchantment or illusion spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic.",
    prepareSpellInfo:
      "The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
    casterTypeId: 3, //3rd caster
    spellsKnown: 3,
    cantripsKnown: 3,
  },
  {
    name: "Assassin",
    description:
      "You focus your training on the grim art of death. Those who adhere to this archetype are diverse: hired killers, spies, bounty hunters, and even specially anointed priests trained to exterminate the enemies of their deity. Stealth, poison, and disguise help you eliminate your foes with deadly efficiency.",
    id: 90,
    classId: ids.rogue,
    source: src.phb,
    flavorText:
      "Assassins focus their training on the grim art of death, using stealth, poison, and disguise to eliminate their foes with deadly efficiency.",
  },
  {
    name: "Inquisitive",
    description:
      "As an archetypal Inquisitive, you excel at rooting out secrets and unraveling mysteries. You rely on your sharp eye for detail, but also on your finely honed ability to read the words and deeds of other creatures to determine their true intent. You excel at defeating creatures that hide among and prey upon ordinary folk, and your mastery of lore and your sharp eye make you well equipped to expose and end hidden evils.",
    id: 91,
    classId: ids.rogue,
    source: src.xanathar,
    flavorText:
      "Inquisitives excel at rooting out secrets and unraveling mysteries, relying on their sharp eye for detail and finely honed ability to read the words and deeds of other creatures.",
  },
  {
    name: "Mastermind",
    description: `Your focus is on people and on the influence and secrets they have. Many spies, courtiers, and schemers follow this archetype, leading lives of intrigue. Words are your weapons as often as knives or poison, and secrets and favors are some of your favorite treasures. If you're playing a campaign with heavy political intrigue, or one in which the party will be dealing with a lot of NPCs, the Mastermind can be a great choice.`,
    id: 92,
    classId: ids.rogue,
    source: src.xanathar,
    flavorText:
      "Masterminds focus on people and the influence and secrets they have, leading lives of intrigue and using words as weapons.",
  },
  {
    name: "Phantom",
    description:
      "Many rogues walk a fine line between life and death, risking their own lives and taking the lives of others. While adventuring on that line, some rogues discover a mystical connection to death itself. These rogues take knowledge from the dead and become immersed in negative energy, eventually becoming like ghosts. Thieves' guilds value them as highly effective information gatherers and spies.Many shadar-kai of the Shadowfell are masters of these macabre techniques, and some are willing to teach this path. In places like Thay in the Forgotten Realms and Karrnath in Eberron, where many necromancers practice their craft, a Phantom can become a wizard's confidant and right hand. In temples of gods of death, the Phantom might work as an agent to track down those who try to cheat death and to recover knowledge that might otherwise be lost to the grave.",
    id: 93,
    classId: ids.rogue,
    source: src.tasha,
    flavorText:
      "Phantoms take knowledge from the dead and become immersed in negative energy, eventually becoming like ghosts.",
  },
  {
    name: "Scout",
    description:
      "You are skilled in stealth and surviving far from the streets of a city, allowing you to scout ahead of your companions during expeditions. Rogues who embrace this archetype are at home in the wilderness and among barbarians and rangers, and many Scouts serve as the eyes and ears of war bands. Ambusher, spy, bounty hunter – these are just a few of the roles that Scouts assume as they range the world.",
    id: 94,
    classId: ids.rogue,
    source: src.xanathar,
    flavorText:
      "Scouts are skilled in stealth and surviving far from the streets of a city, allowing them to scout ahead of their companions during expeditions.",
  },
  {
    name: "Soulknife",
    description:
      "Most assassins strike with physical weapons, and many burglars and spies use thieves' tools to infiltrate secure locations. In contrast, a Soulknife strikes and infiltrates with the mind, cutting through barriers both physical and psychic. These rogues discover psionic power within themselves and channel it to do their roguish work. They find easy employment as members of thieves' guilds, though they are often mistrusted by rogues who are leery of anyone using strange mind powers to conduct their business. Most governments would also be happy to employ a Soulknife as a spy. Amid the trees of ancient forests on the Material Plane and in the Feywild, some wood elves walk the path of the Soulknife, serving as silent, lethal guardians of their woods. In the endless war among the gith, a githzerai is encouraged to become a Soulknife when stealth is required against the githyanki foe.As a Soulknife, your psionic abilities might have haunted you since you were a child, only revealing their full potential as you experienced the stress of adventure. Or you might have sought out a reclusive order of psychic adepts and spent years learning how to manifest your power.",
    id: 95,
    classId: ids.rogue,
    source: src.tasha,
    flavorText:
      "Soulknives channel psionic power to strike and infiltrate with the mind, cutting through barriers both physical and psychic.",
  },
  {
    name: "Swashbuckler",
    description:
      "You focus your training on the art of the blade, relying on speed, elegance, and charm in equal parts. While some warriors are brutes clad in heavy armor, your method of fighting looks almost like a performance. Duelists and pirates typically belong to this archetype. A Swashbuckler excels in single combat, and can fight with two weapons while safely darting away from an opponent.",
    id: 96,
    classId: ids.rogue,
    source: src.xanathar,
    flavorText:
      "Swashbucklers focus their training on the art of the blade, relying on speed, elegance, and charm in equal parts.",
  },
  {
    name: "Thief",
    description:
      "You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ.",
    id: 97,
    classId: ids.rogue,
    source: src.phb,
    flavorText:
      "Thieves hone their skills in the larcenous arts, improving their agility and stealth and learning skills useful for delving into ancient ruins.",
  },
  // sorcerer
  {
    name: "Aberrant Mind",
    description:
      "An alien influence has wrapped its tendrils around your mind, giving you psionic power. You can now touch other minds with that power and alter the world around you by using it to control the magical energy of the multiverse. Will this power shine from you as a hopeful beacon to others? Or will you be a source of terror to those who feel the stab of your mind and witness the strange manifestations of your might?",
    id: 98,
    classId: ids.sorcerer,
    source: src.tasha,
    flavorText:
      "Aberrant Minds have an alien influence wrapped around their minds, giving them psionic power.",
  },
  {
    name: "Clockwork Soul",
    description:
      "The cosmic force of order has suffused you with magic. That power arises from Mechanus or a realm like it-a plane of existence shaped entirely by clockwork efficiency. You, or someone from your lineage, might have become entangled in the machinations of the modrons, the orderly beings who inhabit Mechanus. Perhaps your ancestor even took part in the Great Modron March. Whatever its origin within you, the power of order can seem strange to others, but for you, it is part of a vast and glorious system.",
    id: 99,
    classId: ids.sorcerer,
    source: src.tasha,
    flavorText:
      "Clockwork Souls are suffused with the cosmic force of order, arising from Mechanus or a realm like it.",
  },
  {
    name: "Draconic Bloodline",
    description:
      "Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.",
    id: 100,
    classId: ids.sorcerer,
    source: src.phb,
    flavorText:
      "Sorcerers with the Draconic Bloodline have innate magic that comes from draconic magic mingled with their blood or that of their ancestors.",
  },
  {
    name: "Divine Soul",
    description:
      "Sometimes the spark of magic that fuels a sorcerer comes from a divine source that glimmers within the soul. Having such a blessed soul is a sign that your innate magic might come from a distant but powerful familial connection to a divine being. Perhaps your ancestor was an angel, transformed into a mortal and sent to fight in a god’s name. Or your birth might align with an ancient prophecy, marking you as a servant of the gods or a chosen vessel of divine magic.\n\nA Divine Soul, with natural magnetism, is seen as a threat by some religious hierarchies. As an outsider who commands celestial power, these sorcerers can undermine the existing order by claiming a direct tie to the divine.\n\nIn some cultures, only those who can claim the power of a Divine Soul may command religious power. In these lands, ecclesiastical positions are dominated by a few bloodlines and preserved over generations.",
    id: 101,
    classId: ids.sorcerer,
    source: src.xanathar,
    flavorText:
      "Divine Souls have a spark of magic that comes from a divine source that glimmers within their soul.",
  },
  {
    name: "Lunar Sorcery",
    description:
      "On many worlds, the moon is a revered celestial body with magical properties. On Krynn, the gods of magic are associated with the world's three moons. On the world of Toril, the god Selûne uses the light of the moon to battle darkness. On Eberron, scholars of the Draconic Prophecy decipher ancient secrets from the waxing and waning of that world's twelve moons.\n\nYou or someone from your lineage has been exposed to the concentrated magic of the moon (or moons) of your world, imbuing you with lunar magic. Perhaps your ancestor was involved in a druidic ritual involving an eclipse, or maybe a mystical fragment of a moon crashed near you. However you came to have your magic, your connection to the moon is obvious when you cast sorcerer spells-perhaps making your pupils glow with the color of a moon from your world, causing spectral manifestations of lunar phases to orbit you, or some other effect.",
    id: 102,
    classId: ids.sorcerer,
    source: src.dragonQueen,
    flavorText:
      "Lunar Sorcerers have been exposed to the concentrated magic of the moon, imbuing them with lunar magic.",
  },
  {
    name: "Shadow Magic",
    description:
      "You are a creature of shadow, for your innate magic comes from the Shadowfell itself. You might trace your lineage to an entity from that place, or perhaps you were exposed to its fell energy and transformed by it.\n\nThe power of shadow magic casts a strange pall over your physical presence. The spark of life that sustains you is muffled, as if it struggles to remain viable against the dark energy that imbues your soul.",
    id: 103,
    classId: ids.sorcerer,
    source: src.xanathar,
    flavorText:
      "Sorcerers with Shadow Magic are creatures of shadow, for their innate magic comes from the Shadowfell itself.",
  },
  {
    name: "Storm Sorcery",
    description:
      "Your innate magic comes from the power of elemental air. Many with this power can trace their magic back to a near-death experience caused by the Great Rain, but perhaps you were born during a howling gale so powerful that folk still tell stories of it, or your lineage might include the influence of potent air creatures such as vaati or djinn. Whatever the case, the magic of the storm permeates your being.\n\nStorm sorcerers are invaluable members of a ship's crew. Their magic allows them to exert control over wind and weather in their immediate area. Their abilities also prove useful in repelling attacks by sahuagin, pirates, and other waterborne threats.",
    id: 104,
    classId: ids.sorcerer,
    source: src.xanathar,
    flavorText:
      "Sorcerers with Storm Sorcery have innate magic that comes from the power of elemental air.",
  },
  {
    name: "Wild Magic",
    description:
      "Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason. However it came to be, this chaotic magic churns within you, waiting for any outlet.",
    id: 105,
    classId: ids.sorcerer,
    source: src.phb,
    flavorText:
      "Sorcerers with Wild Magic have innate magic that comes from the wild forces of chaos that underlie the order of creation.",
  },
];

export default SubClasses;
