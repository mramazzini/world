import { Prisma } from "@prisma/client";

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
  },
  {
    id: 2,
    name: "Banneret",
    description:
      "A banneret is a knight who inspires greatness in others by committing brave deeds in battle. The mere presence of one in a hamlet is enough to cause some orcs and bandits to seek easier prey. A lone banneret is a skilled warrior, but a banneret leading a band of allies can transform even the most poorly equipped militia into a ferocious war band. A banneret prefers to lead through deeds, not words. As a banneret spearheads an attack, their actions can awaken reserves of courage and conviction in allies that they never suspected they had. Banneret serves as the generic name for the Purple Dragon Knight archetype if you use it in campaign settings other than the Forgotten Realms or to model warlords other than Purple Dragon Knights.",
    classId: ids.fighter,
  },
  {
    id: 3,
    name: "Battle Master",
    description:
      "Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. To a Battle Master, combat is an academic field, sometimes including subjects beyond battle such as weaponsmithing and calligraphy. Not every fighter absorbs the lessons of history, theory, and artistry that are reflected in the Battle Master archetype, but those who do are well-rounded fighters of great skill and knowledge.",
    classId: ids.fighter,
  },
  {
    id: 4,
    name: "Cavalier",
    description:
      "The archetypal cavalier excels at mounted combat. Usually born among the nobility and raised at court, a cavalier is equally at home leading a cavalry charge or exchanging repartee at a state dinner. Cavaliers also learn how to guard those in their charge from harm, often serving as the protectors of their superiors and of the weak. Compelled to right wrongs or earn prestige, many of these fighters leave their lives of comfort to embark on glorious adventure.",
    classId: ids.fighter,
  },
  {
    id: 5,
    name: "Champion",
    description:
      "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.",
    classId: ids.fighter,
  },
  {
    id: 6,
    name: "Echo Knight",
    description:
      "A mysterious and feared frontline warrior of the Kryn Dynasty, the Echo Knight has mastered the art of using dunamis to summon the fading shades of unrealized timelines to aid them in battle. Surrounded by echoes of their own might, they charge into the fray as a cycling swarm of shadows and strikes.",
    classId: ids.fighter,
  },
  {
    id: 7,
    name: "Eldritch Knight",
    description:
      "The archetypal Eldritch Knight combines the martial mastery common to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards. They focus their study on two of the eight schools of magic: abjuration and evocation. Abjuration spells grant an Eldritch Knight additional protection in battle, and evocation spells deal damage to many foes at once, extending the fighter's reach in combat. These knights learn a comparatively small number of spells, committing them to memory instead of keeping them in a spellbook.",
    classId: ids.fighter,
  },
  {
    id: 8,
    name: "Psi Warrior",
    description:
      "Awake to the psionic power within, a Psi Warrior is a fighter who augments their physical might with psi-infused weapon strikes, telekinetic lashes, and barriers of mental force. Many githyanki train to become such warriors, as do some of the most disciplined high elves. In the world of Eberron, many young kalashtar dream of becoming Psi Warriors. As a Psi Warrior, you might have honed your psionic abilities through solo discipline, unlocked it under the tutelage of a master, or refined it at an academy dedicated to wielding the mind's power as both weapon and shield.",
    classId: ids.fighter,
  },
  {
    id: 9,
    name: "Rune Knight",
    description:
      "Rune Knights enhance their martial prowess using the supernatural power of runes, an ancient practice that originated with giants. Rune cutters can be found among any family of giants, and you likely learned your methods first or second hand from such a mystical artisan. Whether you found the giant's work carved into a hill or cave, learned of the runes from a sage, or met the giant in person, you studied the giant's craft and learned how to apply magic runes to empower your equipment.",
    classId: ids.fighter,
  },
  {
    id: 10,
    name: "Samurai",
    description:
      "The Samurai is a fighter who draws on an implacable fighting spirit to overcome enemies. A samurai’s resolve is nearly unbreakable, and the enemies in a samurai’s path have two choices: yield or die fighting.",
    classId: ids.fighter,
  },
  // Barbarian
  {
    id: 11,
    name: "Path of the Ancestral Guardian",
    description:
      "Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger in the world as mighty spirits, who can guide and protect the living. When a barbarian who follows this path rages, the barbarian contacts the spirit world and calls on these guardian spirits for aid. Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors’ deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals.",
    classId: ids.barbarian,
  },
  {
    id: 12,
    name: "Battle Rager",
    description: `Known as Kuldjargh (literally "axe idiot") in Dwarvish, battleragers are dwarf followers of the gods of war and take the Path of the Battlerager. They specialize in wearing bulky, spiked armor and throwing themselves into combat, striking with their body itself and giving themselves over to the fury of battle.`,
    classId: ids.barbarian,
  },
  {
    id: 13,
    name: "Path Of The Beast",
    description:
      "Barbarians who walk the Path of the Beast draw their rage from a bestial spark burning within their souls. That beast bursts forth in the throes of rage, physically transforming the barbarian. Such a barbarian might be inhabited by a primal spirit or be descended from shape-shifters.",
    classId: ids.barbarian,
  },
  {
    id: 14,
    name: "Path of the Berserker",
    description:
      "For some barbarians, rage is a means to an end – that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
    classId: ids.barbarian,
  },
  {
    id: 15,
    name: "Path of the Giant",
    description:
      "Barbarians who walk the Path of the Giant draw strength from the same primal forces as giants. As they rage, these barbarians surge with elemental power and grow in size, taking on forms that evoke the glory of giants. Some barbarians look like oversized versions of themselves, perhaps with a hint of elemental energy flaring in their eyes and around their weapons. Others transform more dramatically, taking on the appearance of an actual giant or a form similar to an Elemental, wreathed in fire, frost, or lightning.",
    classId: ids.barbarian,
  },
  {
    id: 16,
    name: "Storm Herald",
    description:
      "Typical barbarians harbor a fury that dwells within. Their rage grants them superior strength, durability, and speed. Barbarians who follow the Path of the Storm Herald learn instead to transform their rage into a mantle of primal magic that swirls around them. When in a fury, a barbarian of this path taps into nature to create powerful, magical effects. Storm heralds are typically elite champions who train alongside druids, rangers, and others sworn to protect the natural realm. Other storm heralds hone their craft in elite lodges founded in regions wracked by storms, in the frozen reaches at the world’s end, or deep in the hottest deserts.",
    classId: ids.barbarian,
  },
  {
    id: 17,
    name: "Path of the Totem Warrior",
    description:
      "The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage. Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist.",
    classId: ids.barbarian,
  },
  {
    id: 18,
    name: "Path of Wild Magic",
    description:
      "Many places in the multiverse abound with beauty, intense emotion, and rampant magic; the Feywild, the Upper Planes, and other realms of supernatural power radiate with such forces and can profoundly influence people. As folk of deep feeling, barbarians are especially susceptible to these wild influences, with some barbarians being transformed by the magic. These magic-suffused barbarians walk the Path of Wild Magic. Elf, tiefling, aasimar, and genasi barbarians often seek this path, eager to manifest the otherworldly magic of their ancestors.",
    classId: ids.barbarian,
  },
  {
    id: 19,
    name: "Path of the Zealot",
    description:
      "Some deities inspire their followers to pitch themselves into a ferocious battle fury. These barbarians are zealots – warriors who channel their rage into powerful displays of divine power. A variety of gods across the worlds of D&D inspire their followers to embrace this path. Tempus from the Forgotten Realms and Hextor and Erythnul of Greyhawk are all prime examples. In general, the gods who inspire zealots are deities of combat, destruction, and violence. Not all are evil, but few are good.",
    classId: ids.barbarian,
  },
  //bard
  {
    id: 20,
    name: "College of Creation",
    description: `Bards believe the cosmos is a work of art - the creation of the first dragons and gods. That creative work included harmonies that continue to resound through existence today, a power known as the Song of Creation. The bards of the College of Creation draw on that primeval song through dance, music, and poetry, and their teachers share this lesson: "Before the sun and the moon, there was the Song, and its music awoke the first dawn. Its melodies so delighted the stones and trees that some of them gained a voice of their own. And now they sing too. Learn the Song, students, and you too can teach the mountains to sing and dance."`,
    classId: ids.bard,
  },
  {
    id: 21,
    name: "College of Eloquence",
    description:
      "Adherents of the College of Eloquence master the art of oratory. Persuasion is regarded as a high art, and a well-reasoned, well-spoken argument often proves more powerful than objective truth. These bards wield a blend of logic and theatrical wordplay, winning over skeptics and detractors with logical arguments, and plucking at heartstrings to appeal to the emotions of entire audiences.",
    classId: ids.bard,
  },
  {
    id: 22,
    name: "College of Glamour",
    description:
      "The College of Glamour is the home of bards who mastered their craft in the vibrant realm of the Feywild or under the tutelage of someone who dwelled there. Tutored by satyrs, eladrin, and other fey, these bards learn to use their magic to delight and captivate others. The bards of this college are regarded with a mixture of awe and fear. Their performances are the stuff of legend. These bards are so eloquent that a speech or song that one of them performs can cause captors to release the bard unharmed and can lull a furious dragon into complacency. The same magic that allows them to quell beasts can also bend minds. Villainous bards of this college can leech off a community for weeks, abusing their magic to turn their hosts into thralls. Heroic bards of this college instead use this power to gladden the downtrodden and undermine oppressors.",
    classId: ids.bard,
  },
  {
    id: 23,
    name: "College of Lore",
    description:
      "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king. The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.",
    classId: ids.bard,
  },
  {
    id: 24,
    name: "College of Spirits",
    description:
      "Bards of the College of Spirits seek tales with inherent power-be they legends, histories, or fictions-and bring their subjects to life. Using occult trappings, these bards conjure spiritual embodiments of powerful forces to change the world once more. Such spirits are capricious, though, and what a bard summons isn't always entirely under their control.",
    classId: ids.bard,
  },
  {
    id: 25,
    name: "College of Swords",
    description:
      "Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess. Blades perform stunts such as sword swallowing, knife throwing and juggling, and mock combats. Though they use their weapons to entertain, they are also highly trained and skilled warriors in their own right. Their talent with weapons inspires many blades to lead double lives. One blade might use a circus troupe as cover for nefarious deeds such as assassination, robbery, and blackmail. Other blades strike at the wicked, bringing justice to bear against the cruel and powerful. Most troupes are happy to accept a blade’s talent for the excitement it adds to a performance, but few entertainers fully trust a blade in their ranks. Blades who abandon their lives as entertainers have often run into trouble that makes maintaining their secret activities impossible. A blade caught stealing or engaging in vigilante justice is too great a liability for most troupes. With their weapon skills and magic, these blades either take up work as enforcers for thieves’ guilds or strike out on their own as adventurers. ",
    classId: ids.bard,
  },
  {
    id: 26,
    name: "College of Valor",
    description:
      "Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present. They travel the land to witness great events firsthand and to ensure that the memory of those events doesn't pass from the world. With their songs, they inspire others to reach the same heights of accomplishment as the heroes of old.",
    classId: ids.bard,
  },
  {
    id: 27,
    name: "College of Whispers",
    description:
      "Most folk are happy to welcome a bard into their midst. Bards of the College of Whispers use this to their advantage. They appear to be like any other bard, sharing news, singing songs, and telling tales to the audiences they gather. In truth, the College of Whispers teaches its students that they are wolves among sheep. These bards use their knowledge and magic to uncover secrets and turn them against others through extortion and threats. Many other bards hate the College of Whispers, viewing it as a parasite that uses the bards’ reputation to acquire wealth and power. For this reason, these bards rarely reveal their true nature unless they must. They typically claim to follow some other college, or keep their true nature secret in order to better infiltrate and exploit royal courts and other settings of power.",
    classId: ids.bard,
  },
  //wizard
  {
    id: 28,
    name: "School of Abjuration",
    description:
      "The School of Abjuration emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void. It is a proud and respected vocation. Called abjurers, members of this school are sought when baleful spirits require exorcism, when important locations must be guarded against magical spying, and when portals to other planes of existence must be closed.",
    classId: ids.wizard,
  },
  {
    id: 29,
    classId: ids.wizard,
    name: "Bladesinging",
    description:
      "Bladesingers master a tradition of wizardry that incorporates swordplay and dance. Originally created by elves, this tradition has been adopted by non-elf practitioners, who honor and expand on the elven ways. In combat, a bladesinger uses a series of intricate, elegant maneuvers that fend off harm and allow the bladesinger to channel magic into devastating attacks and a cunning defense. Many who have observed a bladesinger at work remember the display as one of the more beautiful experiences in their life, a glorious dance accompanied by a singing blade.",
  },
  {
    id: 30,
    classId: ids.wizard,
    name: "Chronurgy Magic",
    description:
      "Focusing on the manipulation of time, those who follow the Chronurgy tradition learn to alter the pace of reality to their liking. Using the ramping of anticipatory dunamis energy, these mages can bend the flow of time as adroitly as a skilled musician plays an instrument, lending themselves and their allies an advantage in the blink of an eye.",
  },
  {
    id: 31,
    classId: ids.wizard,
    name: "School of Conjuration",
    description:
      "As a conjurer, you favor spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of transportation and can teleport yourself across vast distances, even to other planes of existence, in an instant.",
  },
  {
    id: 32,
    classId: ids.wizard,
    name: "School of Divination",
    description:
      "The counsel of a diviner is sought by royalty and commoners alike, for all seek a clearer understanding of the past, present, and future. As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly. You work to master spells of discernment, remote viewing, supernatural knowledge, and foresight.",
  },
  {
    id: 33,
    classId: ids.wizard,
    name: "School of Enchantment",
    description:
      "As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service. Most enchanters fall somewhere in between.",
  },
  {
    id: 34,
    classId: ids.wizard,
    name: "School of Evocation",
    description:
      "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.",
  },
  {
    id: 35,
    classId: ids.wizard,
    name: "Graviturgy Magic",
    description:
      "Understanding and mastering the forces that draw bodies of matter together or drive them apart, the students of the Graviturgy arcane tradition learn to further bend and manipulate the violent energy of gravity to their benefit, and the terrible detriment of their enemies.",
  },
  {
    id: 36,
    classId: ids.wizard,
    name: "School of Illusion",
    description:
      "You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk. Your magic is subtle, but the illusions crafted by your keen mind make the impossible seem real. Some illusionists – including many gnome wizards – are benign tricksters who use their spells to entertain. Others are more sinister masters of deception, using their illusions to frighten and fool others for their personal gain.",
  },
  {
    id: 37,
    classId: ids.wizard,
    name: "School of Necromancy",
    description:
      "The School of Necromancy explores the cosmic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate. Most people see necromancers as menacing, or even villainous, due to the close association with death. Not all necromancers are evil, but the forces they manipulate are considered taboo by many societies.",
  },
  {
    id: 38,
    classId: ids.wizard,
    name: "Order of Scribes",
    description:
      "Magic of the book-that's what many folk call wizardry. The name is apt, given how much time wizards spend poring over tomes and penning theories about the nature of magic. It's rare to see wizards traveling without books and scrolls sprouting from their bags, and a wizard would go to great lengths to plumb an archive of ancient knowledge. Among wizards, the Order of Scribes is the most bookish. It takes many forms in different worlds, but its primary mission is the same everywhere: recording magical discoveries so that wizardry can flourish. And while all wizards value spellbooks, a wizard in the Order of Scribes magically awakens their book, turning it into a trusted companion. All wizards study books, but a wizardly scribe talks to theirs!",
  },
  {
    id: 39,
    classId: ids.wizard,
    name: "School of Transmutation",
    description:
      "You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities. Your magic gives you the tools to become a smith on reality's forge. Some transmuters are tinkerers and pranksters, turning people into toads and transforming copper into silver for fun and occasional profit. Others pursue their magical studies with deadly seriousness, seeking the power of the gods to make and destroy worlds.",
  },
  {
    id: 40,
    classId: ids.wizard,
    name: "War Magic",
    description: `A variety of arcane colleges specialize in training wizards for war. The tradition of War Magic blends principles of evocation and abjuration, rather than specializing in either of those schools. It teaches techniques that empower a caster’s spells, while also providing methods for wizards to bolster their own defenses. Followers of this tradition are known as war mages. They see their magic as both a weapon and armor, a resource superior to any piece of steel. War mages act fast in battle, using their spells to seize tactical control of a situation. Their spells strike hard, while their defensive skills foil their opponents’ attempts to counterattack. War mages are also adept at turning other spellcasters' magical energy against them. In great battles, a war mage often works with evokers, abjurers, and other types of wizards. Evokers, in particular, sometimes tease war mages for splitting their attention between offense and defense. A war mage's typical response: "What good is being able to throw a mighty Fireball if I die before I can cast it?"`,
  },
  //cleric
  {
    id: 41,
    classId: ids.cleric,
    name: "Arcana Domain",
    spells: [
      "1:Detect Magic, Magic Missile",
      "3:Magic Weapon, Nystul's Magic Aura",
      "5:Dispel Magic, Magic Circle",
      "7:Arcane Eye, Leomund's Secret Chest",
      "9:Planar Binding, Teleportation Circle",
    ],
    description:
      "Magic is an energy that suffuses the multiverse and that fuels both destruction and creation. Gods of the Arcana domain know the secrets and potential of magic intimately. For some of these gods, magical knowledge is a great responsibility that comes with a special understanding of the nature of reality. Other gods of Arcana see magic as pure power, to be used as its wielder sees fit. The gods of this domain are often associated with knowledge, as learning and arcane power tend to go hand-in-hand. In the Realms, deities of this domain include Azuth and Mystra, as well as Corellon Larethian of the elven pantheon. In other worlds, this domain includes Hecate, Math Mathonwy, and Isis; the triple moon gods of Solinari, Lunitari, and Nuitari of Krynn; and Boccob, Vecna, and Wee Jas of Greyhawk.",
  },
  {
    id: 42,
    classId: ids.cleric,
    name: "Death Domain",
    spells: [
      "1:False Life, Ray of Sickness",
      "3:Blindness/Deafness, Ray of Enfeeblement",
      "5:Animate Dead, Vampiric Touch",
      "7:Blight, Death Ward",
      "9:Antilife Shell, Cloudkill",
    ],
    description:
      "The Death domain is concerned with the forces that cause death, as well as the negative energy that gives rise to undead creatures. Deities such as Chemosh, Myrkul, and Wee Jas are patrons of necromancers, death knights, liches, mummy lords, and vampires. Gods of the Death domain also embody murder (Anubis, Bhaal, and Pyremius), pain (Iuz or Loviatar), disease or poison (Incabulos, Talona, or Morgion), and the underworld (Hades and Hel).",
  },
  {
    id: 43,
    classId: ids.cleric,
    name: "Forge Domain",
    spells: [
      "1:Identify, Searing Smite",
      "3:Heat Metal, Magic Weapon",
      "5:Elemental Weapon, Protection from Energy",
      "7:Fabricate, Wall of Fire",
      "9:Animate Objects, Creation",
    ],
    description: "",
  },
  {
    id: 44,
    classId: ids.cleric,
    name: "Grave Domain",
    spells: [
      "1:Bane, False Life",
      "3:Gentle Repose, Ray of Enfeeblement",
      "5:Revivify, Vampiric Touch",
      "7:Blight, Death Ward",
      "9:Antilife Shell, Raise Dead",
    ],
    description:
      "Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse’s workings. To resist death, or to desecrate the dead’s rest, is an abomination. Deities of the grave include Kelemvor, Wee Jas, the ancestral spirits of the Undying Court, Hades, Anubis, and Osiris. These deities teach their followers to respect the dead and pay them due homage. Followers of these deities seek to put restless spirits to rest, destroy the undead wherever they find them, and ease the suffering of dying creatures. Their magic also allows them to stave off a creature’s death, though they refuse to use such magic to extend a creature’s lifespan beyond its mortal limits.",
  },
  {
    id: 45,
    classId: ids.cleric,
    name: "Knowledge Domain",
    spells: [
      "1:Command, Identify",
      "3:Augury, Suggestion",
      "5:Nondetection, Speak with Dead",
      "7:Arcane Eye, Confusion",
      "9:Legender Lore, Scrying",
    ],
    description:
      "The gods of knowledge – including Oghma, Boccob, Gilean, Aureon, and Thoth – value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu. In Amonkhet, knowledge is the second virtue of society. Kefnet’s task is to pass on this teaching of the God-Pharaoh and elucidate its meaning. He teaches that the afterlife will be inhabited only by those who have proved by their wits that they are worthy of dwelling in the glorious presence of the God-Pharaoh. He trains acolytes and initiates to push their limits and challenge their mental capacity with spells of ever-greater power.",
  },
  {
    id: 46,
    classId: ids.cleric,
    name: "Life Domain",
    spells: [
      "1:Bless, Cure Wounds",
      "3:Lesser Restoration, Spiritual Weapon",
      "5:Beacon of Hope, Revivify",
      "7:Death Ward, Guardian of Faith",
      "9:Mass Cure Wounds, Raise Dead",
    ],
    description:
      "The Life domain focuses on the vibrant positive energy – one of the fundamental forces of the universe – that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrci).",
  },
  {
    id: 47,
    classId: ids.cleric,
    name: "Light Domain",
    spells: [
      "1:Burning Hands, Faerie Fire",
      "3:Flaming Sphere, Scorching Ray",
      "5:Daylight, Fireball",
      "7:Guardian of Faith, Wall of Fire",
      "9:Flame Strike, Scrying",
    ],
    description:
      "Gods of light – including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Re-Horakhty – promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their gods' discerning vision, charged with chasing away lies and burning away darkness.",
  },
  {
    id: 48,
    classId: ids.cleric,
    name: "Nature Domain",
    spells: [
      "1:Animal Friendship, Speak with Animals",
      "3:Barkskin, Spike Growth",
      "5:Plant Growth, Wind Wall",
      "7:Dominate Beast, Grasping Vine",
      "9:Insect Plague, Tree Stride",
    ],
    description:
      "Gods of nature are as varied as the natural world itself; from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.",
  },
  {
    id: 49,
    classId: ids.cleric,
    name: "Order Domain",
    spells: [
      "1:Command, Heroism",
      "3:Hold Person, Spiritual Weapon",
      "5:Mass Healing Word, Slow",
      "7:Compulsion, Guardian of Faith",
      "9:Dominate Person, Hold Monster",
    ],
    description:
      "The Order Domain represents discipline, as well as devotion to the laws that govern a society, an institution, or a philosophy. Clerics of Order meditate on logic and justice as they serve their gods, examples of which appear in the Order Deities table. Clerics of Order believe that well-crafted laws establish legitimate hierarchies, and those selected by law to lead must be obeyed. Those who obey must do so to the best of their ability, and if those who lead fail to protect the law, they must be replaced. In this manner, law weaves a web of obligations that create order and security in a chaotic multiverse.",
  },
  {
    id: 50,
    classId: ids.cleric,
    name: "Peace Domain",
    spells: [
      "1:Heroism, Sanctuary",
      "3:Aid, Warding Bond",
      "5:Beacon of Hope, Sending",
      "7:Aura of Purity, Otiluke's Resilient Sphere",
      "9:Greater Restoration, Rary's Telepathic Bond",
    ],
    description:
      "The balm of peace thrives at the heart of healthy communities, between friendly nations, and in the souls of the kindhearted. The gods of peace inspire people of all sorts to resolve conflict and to stand up against those forces that try to prevent peace from flourishing. See the Peace Deities table for a list of some of the gods associated with this domain. Clerics of the Peace Domain preside over the signing of treaties, and they are often asked to arbitrate in disputes. These clerics' blessings draw people together and help them shoulder one another's burdens, and the clerics' magic aids those who are driven to fight for the way of peace.",
  },
  {
    id: 51,
    classId: ids.cleric,
    name: "Tempest Domain",
    spells: [
      "1:Fog Cloud, Thunderwave",
      "3:Gust of Wind, Shatter",
      "5:Call Lightning, Sleet Storm",
      "7:Control Water, Ice Storm",
      "9:Destructive Wave, Insect Plague",
    ],
    description:
      "Gods whose portfolios include the Tempest domain – including Talos, Umberlee, Kord, Zeboim, the Devourer, Zeus, and Thor – govern storms, sea, and, sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath.",
  },
  {
    id: 52,
    classId: ids.cleric,
    name: "Trickery Domain",
    spells: [
      "1:Charm Person, Disguise Self",
      "3:Mirror Image, Pass without Trace",
      "5:Blink, Dispel Magic",
      "7:Dimension Door, Polymorph",
      "9:Dominate Person, Modify Memory",
    ],
    description:
      "Gods of trickery – such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki – are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They're patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.",
  },
  {
    id: 53,
    classId: ids.cleric,
    name: "Twilight Domain",
    spells: [
      "1:Faerie Fire, Sleep",
      "3:Darkness, Sleep",
      "5:Aura of Vitality, Leomund's Tiny Hut",
      "7:Aura of Life, Leomund's Tiny Hut",
      "9:Circle of Power, Mislead",
    ],
    description:
      "The twilit transition from light into darkness often brings calm and even joy, as the day's labors end and the hours of rest begin. The darkness can also bring terrors, but the gods of twilight guard against the horrors of the night. Clerics who serve these deities-examples of which appear on the Twilight Deities table-bring comfort to those who seek rest and protect them by venturing into the encroaching darkness to ensure that the dark is a comfort, not a terror.",
  },
  {
    id: 54,
    classId: ids.cleric,
    name: "War Domain",
    spells: [
      "1:Divine Favor, Shield of Faith",
      "3:Magic Weapon, Spiritual Weapon",
      "5:Crusader's Mantle, Spirit Guardians",
      "7:Freedom of Movement, Stoneskin",
      "9:Flame Strike, Hold Monster",
    ],
    description:
      "War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as Torm, Heironeous, and Kiri-Jolith) as well as gods of destruction and pillage (such as Erythnul, the Fury, Gruumsh, and Ares) and gods of conquest and domination (such as Bane, Hextor, and Maglubiyet). Other war gods (such as Tempus, Nike, and Nuada) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.",
  },
];

export default SubClasses;
