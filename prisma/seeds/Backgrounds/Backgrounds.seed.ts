import { src } from "@/lib/utils/types/types";
import { Language, Prisma, Skill } from "@prisma/client";
import { itemIds } from "../Items/ItemIds";
import {
  artisanIds,
  gamingKitIds,
  instrumentIds,
  toolIds,
} from "../Items/Tools/tools.seed";
import {
  artisanToolItemIds,
  gamingKitItemIds,
  getGemstoneIdsOfValue,
  instrumentItemIds,
} from "../Items/Items.seed";
import { backgroundIds } from "./BackgroundIds";

const i = (id: number, str: string) => `^${id}{${str}}^`;

const Backgrounds: Prisma.BackgroundCreateManyInput[] = [
  {
    id: 1,
    name: "Acolyte",
    flavorText:
      "You have spent your life in the service of a temple to a specific god or pantheon of gods.",
    description:
      "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric – performing sacred rites is not the same thing as channeling divine power.\n\nChoose a god, a pantheon of gods, or some other quasi-divine being, and work with your DM to detail the nature of your religious service. Were you a lesser functionary in a temple, raised from childhood to assist the priests in the sacred rites? Or were you a high priest who suddenly experienced a call to serve your god in a different way? Perhaps you were the leader of a small cult outside of any established temple structure, or even an occult group that served a fiendish master that you now deny.",
    source: src.phb,
    skillProficiencies: {
      default: [Skill.INSIGHT, Skill.RELIGION],
    },
    skillProficiencyDescription:
      "You are proficient in the Insight and Religion skills.",
    languageProficiencyDescription:
      "You are proficient in two languages of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 2,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      "A holy symbol (a gift to you when you entered the priesthood)",
      `A ${i(itemIds.prayerBook, "prayer book")} or a ${i(
        itemIds.prayerWheel,
        "prayer wheel"
      )}`,
      `5 sticks of ${i(itemIds.incenseStick, "incense")}`,
      `A set of ${i(itemIds.vestments, "vestments")}`,
      `A ${i(itemIds.commonClothes, "set of common clothes")}`,
      `A ${i(itemIds.pouch, "pouch")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.vestments, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
        { item: itemIds.incenseStick, quantity: 5 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.amulet, quantity: 1 }],
            [{ item: itemIds.emblem, quantity: 1 }],
            [{ item: itemIds.reliquary, quantity: 5 }],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.prayerBook, quantity: 1 }],
            [{ item: itemIds.prayerWheel, quantity: 1 }],
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Acolytes are shaped by their experience in temples or other religious communities. Their study of the history and tenets of their faith and their relationships to temples, shrines, or hierarchies affect their mannerisms and ideals. Their flaws might be some hidden hypocrisy or heretical idea, or an ideal or bond taken to an extreme.",
    traits: [
      "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
      "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
      "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
      "Nothing can shake my optimistic attitude.",
      "I quote (or misquote) sacred texts and proverbs in almost every situation.",
      "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
      "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
      "I've spent so long in the temple that I have little practical experience dealing with people in the outside world.",
    ],
    ideals: [
      "**Tradition.** The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
      "**Charity.** I always try to help those in need, no matter what the personal cost. (Good)",
      "**Change.** We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
      "**Power.** I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)",
      "**Faith.** I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)",
      "**Aspiration.** I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)",
    ],
    bonds: [
      "I would die to recover an ancient relic of my faith that was lost long ago.",
      "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
      "I owe my life to the priest who took me in when my parents died.",
      "Everything I do is for the common people.",
    ],
    flaws: [
      "I judge others harshly, and myself even more severely.",
      "I put too much trust in those who wield power within my temple's hierarchy.",
      "My piety sometimes leads me to blindly trust those that profess faith in my god.",
      "I am inflexible in my thinking.",
    ],
  },
  {
    id: 2,
    name: "Anthropologist",
    flavorText: "You have always been fascinated by other cultures.",
    description:
      "You have always been fascinated by other cultures, from the most ancient and primeval lost lands to the most modern civilizations. By studying other cultures' customs, philosophies, laws, rituals, religious beliefs, languages, and art, you have learned how tribes, empires, and all forms of society in between craft their own destinies and doom. This knowledge came to you not only through books and scrolls, but also through firsthand observation – by visiting far-flung settlements and exploring local histories and customs.",
    source: src.tomb,
    skillProficiencyDescription:
      "You are proficient in the Insight and Religion skills.",
    skillProficiencies: {
      default: [Skill.INSIGHT, Skill.RELIGION],
    },
    languageProficiencyDescription:
      "You are proficient in two languages of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 2,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      "A " + i(itemIds.book, "leather-bound diary."),
      "A bottle of " + i(itemIds.ink, "ink."),
      "An " + i(itemIds.inkPen, "ink pen."),
      "A set of " + i(itemIds.travelersClothes, "traveler's clothes."),
      `One ${i(itemIds.trinket, "trinket")} of special significance.`,
      `A ${i(itemIds.pouch, "pouch")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.trinket, quantity: 1 },
        { item: itemIds.book, quantity: 1 },
        { item: itemIds.ink, quantity: 1 },
        { item: itemIds.inkPen, quantity: 1 },
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
    },
    suggestedCharacteristics:
      "Anthropologists leave behind the societies into which they were born to discover what life ls like in other parts of the world. They seek to see how other races and civilizations survive – or why they did not. Some anthropologists are driven by intellectual curiosity, while others want the fame and recognition that comes with being the first to discover a new people, a lost tribe, or the truth about an ancient empire's downfall.",
    traits: [
      "I prefer the company of those who aren't like me, including people of other races.",
      "I'm a stickler when it comes to observing proper etiquette and local customs.",
      "I would rather observe than meddle.",
      "By living among violent people, I have become desensitized to violence.",
      "I would risk life and limb to discover a new culture or unravel the secrets of a dead one.",
      "When I arrive at a new settlement for the first time, I must learn all its customs.",
    ],
    ideals: [
      "**Discovery.** I want to be the first to discover a lost culture. (Any)",
      "**Distance.** One must not interfere in the affairs of another culture. (Neutral)",
      "**Knowledge.** By understanding other races and cultures, we learn to understand ourselves. (Any)",
      "**Power.** Common people crave strong leadership, and I do my utmost to provide it. (Lawful)",
      "**Protection.** I must do everything in my power to help the people in need. (Good)",
      "**Indifferent.** Life is cruel. What's the point in saving people if they're going to die anyway? (Chaotic)",
    ],
    bonds: [
      "My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me.",
      "Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring.",
      "Years ago, tragedy struck the members of an isolated society I befriended, and I will honor them.",
      "I want to learn more about a particular humanoid culture that fascinates me.",
      "I seek to avenge a clan, tribe, kingdom, or empire that was wiped out.",
      "I have a trinket that I believe is the key to finding a long-lost society.",
    ],
    flaws: [
      "Boats make me seasick.",
      "I talk to myself, and I don't make friends easily.",
      "I believe that I'm intellectually superior to people from other cultures and have much to teach them.",
      "I've picked up some unpleasant habits living among races such as goblins, lizardfolk, or orcs.",
      "I complain about everything.",
      "I wear a tribal mask and never take it off.",
    ],
  },
  {
    id: 3,
    name: "Archeologist",
    flavorText: "You love to dig in the dirt and uncover relics of the past.",
    description:
      "An archaeologist learns about the long-lost and fallen cultures of the past by studying their remains – their bones, their ruins, their surviving masterworks, and their tombs. Those who practice archaeology travel to the far corners of the world to root through crumbled cities and lost dungeons, digging in search of artifacts that might tell the stories of monarchs and high priests, wars and cataclysms.",
    source: src.tomb,

    equipmentDescription: [
      `A ${i(
        itemIds.caseMapOrScroll,
        "wooden case containing a map"
      )} to a ruin or dungeon`,
      "A " + i(itemIds.lanternBullseye, "bullseye lantern"),
      "A " + i(itemIds.minersPick, "miner's pick"),
      "A set of " + i(itemIds.travelersClothes, "traveler's clothes"),
      "A " + i(itemIds.tent, "two-person tent"),
      `A ${i(itemIds.trinket, "trinket")} recovered from a dig site`,
      `A ${i(itemIds.pouch, "pouch")} containing 25 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.caseMapOrScroll, quantity: 1 },
        { item: itemIds.lanternBullseye, quantity: 1 },
        { item: itemIds.paper, quantity: 1 },
        { item: itemIds.minersPick, quantity: 1 },
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.tent, quantity: 1 },
        { item: itemIds.trinket, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 25 },
      ],
    },
    suggestedCharacteristics:
      "Few archaeologists can resist the lure of an unexplored ruin or dungeon, particularly if such a site is the source of legends or is rumored to contain the treasures and relics of wizards, warlords, or royalty. Some archaeologists plunder for wealth or fame, while others consider it their calling to illuminate the past or keep the world's greatest treasures from falling into the wrong hands. Whatever their motivations, archaeologists combine the qualities of a scrappy historian with the self-made heroism of a treasure-hunting scoundrel.",
    traits: [
      "I love a good puzzle or mystery.",
      "I'm a pack rat who never throws anything away.",
      "Fame is more important to me than money.",
      "I have no qualms about stealing from the dead.",
      "I'm happier in a dusty old tomb than I am in the centers of civilization.",
      "Traps don't make me nervous. Idiots who trigger traps make me nervous.",
    ],
    ideals: [
      "**Preservation.** That artifact belongs in a museum. (Good)",
      "**Greed.** I won't risk my life for nothing. I expect some kind of payment. (Any)",
      "**Death Wish.** Nothing is more exhilarating than a narrow escape from the jaws of death. (Chaotic)",
      "**Dignity.** The dead and their belongings deserve to be treated with respect. (Lawful)",
      "**Immortality.** All my exploring is part of a plan to find the secret of everlasting life. (Any)",
      "**Danger.** With every great discovery comes grave danger. The two walk hand in hand. (Any)",
    ],
    bonds: [
      "Ever since I was a child, I've heard stories about a lost city. I aim to find it, learn its secrets, and earn my place in the history books.",
      "I want to find my mentor, who disappeared on an expedition some time ago.",
      "I have a friendly rival. Only one of us can be the best, and I aim to prove it's me.",
      "I won't sell an art object or other treasure that has historical significance or is one of a kind.",
      "I'm secretly in love with the wealthy patron who sponsors my archaeological exploits.",
      "I hope to bring prestige to a library, a museum, or a university.",
    ],
    flaws: [
      "I have a secret fear of some common wild animal – and in my work, I see them everywhere.",
      "I can't leave a room without searching it for secret doors.",
      "When I'm not exploring dungeons or ruins, I get jittery and impatient.",
      "I have no time for friends or family. I spend every waking moment thinking about and preparing for my next expedition.",
      "When given the choice of going left or right, I always go left.",
      "I can't sleep except in total darkness.",
    ],
  },
  {
    id: 4,
    name: "Athlete",
    flavorText:
      "You strive to perfect yourself physically and in execution of everything you do.",
    description:
      "You strive to perfect yourself physically and in execution of everything you do. The thrill of competition lights fire in your blood, and the roar of the crowd drives you forward. Tales of your exploits precede you and might open doors or loosen tongues.\n\nWhether in one of the poleis, between them, or among the nonhuman peoples of Theros, physical contests and those who pursue them command respect bordering on reverence. Athletes arise from all walks of life and all cultures and quite often cross paths with one another.",
    source: src.theros,
    skillProficiencyDescription:
      "You are proficient in the Acrobatics and Athletics skills.",
    skillProficiencies: {
      default: [Skill.ACROBATICS, Skill.ATHLETICS],
    },
    toolProficiencyDescription: "You are proficient with Land Vehicles.",
    toolProficiencies: {
      default: [toolIds.landVehicles],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },

    equipmentDescription: [
      `A ${i(itemIds.bronzeDiscus, "bronze discus")} or a ${i(
        itemIds.leatherBall,
        "leather ball"
      )}`,
      i(itemIds.trinket, "A lucky charm or past trophy"),
      i(itemIds.travelersClothes, "A set of traveler's clothes"),
      i(itemIds.pouch, "A pouch") +
        " containing 10 " +
        i(itemIds.goldPiece, "gp"),
    ],
    equipment: {
      default: [
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
        { item: itemIds.trinket, quantity: 1 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.bronzeDiscus, quantity: 1 }],
            [{ item: itemIds.leatherBall, quantity: 1 }],
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Competition can forge strong bonds between teammates and rivals or ignite bitter feuds that burn outside the arena. Athletes often apply lessons from their training to their lives in general.",
    traits: [
      "I feel most at peace during physical exertion, whether exercise or battle.",
      "I don't like to sit idle.",
      "I have a daily exercise routine I refuse to break.",
      "Obstacles exist to be overcome.",
      "When I see others struggling, I offer to help.",
      "I love to trade banter and gibes.",
      "Anything worth doing is worth doing best.",
      "I get irritated if people praise someone else and not me.",
    ],
    ideals: [
      "**Competition.** I strive to test myself in all things. (Chaotic)",
      "**Triumph.** The best part of winning is seeing my rivals brought low. (Evil)",
      "**Camaraderie.** The strongest bonds are forged through struggle. (Good)",
      "**People.** I strive to inspire my spectators. (Neutral)",
      "**Tradition.** Every game has rules, and the playing field must be level. (Lawful)",
      "**Growth.** Lessons hide in victory and defeat. (Any)",
    ],
    bonds: [
      "My teammates are my family.",
      "I will overcome a rival and prove myself their better.",
      "My mistake got someone hurt. Ill never make that mistake again.",
      "I will be the best for the honor and glory of my home.",
      "The person who trained me is the most important person in my world.",
      "I strive to live up to a specific hero's example.",
    ],
    flaws: [
      "I indulge in a habit that threatens my reputation or health.",
      "I'll do absolutely anything to win.",
      "I ignore anyone who doesn't compete and anyone who loses to me.",
      "I have lingering pain of old injuries.",
      "Any defeat or failure on my part is because my opponents cheated.",
      "I must be the captain of any group I join.",
    ],
  },
  {
    id: 5,
    name: "Charlatan",
    flavorText:
      "You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation.",
    description:
      "You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books. It's a useful talent, and one that you're perfectly willing to use for your advantage.\n\nYou know what people want and you deliver, or rather, you promise to deliver. Common sense should steer people away from things that sound too good to be true, but common sense seems to be in short supply when you're around. The bottle of pink colored liquid will surely cure that unseemly rash, this ointment – nothing more than a bit of fat with a sprinkle of silver dust can restore youth and vigor, and there's a bridge in the city that just happens to be for sale. These marvels sound implausible, but you make them sound like the real deal.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in the Deception and Sleight of Hand skills.",
    skillProficiencies: {
      default: [Skill.DECEPTION, Skill.SLEIGHT_OF_HAND],
    },
    toolProficiencyDescription:
      "You are proficient with the Disguise kit and Forgery kit.",
    toolProficiencies: {
      default: [toolIds.disguiseKit, toolIds.forgeryKit],
    },
    equipmentDescription: [
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `A ${i(itemIds.disguiseKit, "disguise kit")}`,
      `Tools of the con of your choice (ten stoppered ${i(
        itemIds.glassBottle,
        "bottles"
      )} filled with colored liquid, a set of ${i(
        itemIds.diceSet,
        "weighted dice"
      )}, a deck of marked ${i(itemIds.playingCardSet, "cards")}, or a ${i(
        itemIds.signetRing,
        "signet ring"
      )} of an imaginary duke),`,
      `A ${i(itemIds.pouch, "pouch")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.fineClothes, quantity: 1 },
        { item: itemIds.disguiseKit, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.glassBottle, quantity: 10 }],
            [{ item: itemIds.diceSet, quantity: 1 }],
            [{ item: itemIds.playingCardSet, quantity: 1 }],
            [{ item: itemIds.signetRing, quantity: 1 }],
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Charlatans are colorful characters who conceal their true selves behind the masks they construct. They reflect what people want to see, what they want to believe, and how they see the world. But their true selves are sometimes plagued by an uneasy conscience, an old enemy, or deep-seated trust issues.",
    traits: [
      "I fall in and out of love easily, and am always pursuing someone.",
      "I have a joke for every occasion, especially occasions where humor is inappropriate.",
      "Flattery is my preferred trick for getting what I want.",
      "I'm a born gambler who can't resist taking a risk for a potential payoff.",
      "I lie about almost everything, even when there's no good reason to.",
      "Sarcasm and insults are my weapons of choice.",
      "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
      "I pocket anything I see that might have some value.",
    ],
    ideals: [
      "**Independence.** I am a free spirit – no one tells me what to do. (Chaotic)",
      "**Fairness.** I never target people who can't afford to lose a few coins. (Lawful)",
      "**Charity.** I distribute the money I acquire to the people who really need it. (Good)",
      "**Creativity.** I never run the same con twice. (Chaotic)",
      "**Friendship.** Material goods come and go. Bonds of friendship last forever. (Good)",
      "**Aspiration.** I'm determined to make something of myself. (Any)",
    ],
    bonds: [
      "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
      "I owe everything to my mentor – a horrible person who's probably rotting in jail somewhere.",
      "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
      "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
      "A powerful person killed someone I love. Some day soon, I'll have my revenge.",
      "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.",
    ],
    flaws: [
      "I can't resist a pretty face.",
      "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
      "I'm convinced that no one could ever fool me the way I fool others.",
      "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
      "I can't resist swindling people who are more powerful than me.",
      "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.",
    ],
  },
  {
    id: 6,
    name: "City Watch",
    flavorText: "You have served the community where you grew up.",
    description:
      "You have served the community where you grew up, standing as its first line of defense against crime. You aren't a soldier, directing your gaze outward at possible enemies. Instead, your service to your hometown was to help police its populace, protecting the citizenry from lawbreakers and malefactors of every stripe.\n\nYou might have been part of the City Watch of Waterdeep, the baton-wielding police force of the City of Splendors, protecting the common folk from thieves and rowdy nobility alike. Or you might have been one of the valiant defenders of Silverymoon, a member of the Silverwatch or even one of the magic-wielding Spellguard.\n\nPerhaps you hail from Neverwinter and have served as one of its Wintershield watchmen, the newly founded branch of guards who vow to keep safe the City of Skilled Hands.\n\nEven if you're not city-born or city-bred, this background can describe your early years as a member of law enforcement. Most settlements of any size have their own constables and police forces, and even smaller communities have sheriffs and bailiffs who stand ready to protect their community.",
    source: src.sword,
    skillProficiencyDescription:
      "You are proficient in the Athletics and Insight skills.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.INSIGHT],
    },
    languageProficiencyDescription:
      "You are proficient in two languages of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 2,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A ${i(
        itemIds.uniform,
        "uniform"
      )} in the style of your unit and indicative of your rank`,
      `A ${i(itemIds.horn, "horn")} with which to summon help`,
      "A set of " + i(itemIds.manacles, "manacles"),
      `A ${i(itemIds.pouch, "pouch")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.uniform, quantity: 1 },
        { item: itemIds.horn, quantity: 1 },
        { item: itemIds.manacles, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
    },
    suggestedCharacteristics:
      "Use the tables for the soldier background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.\n\nYour bond is likely associated with your fellow watch members or the watch organization itself and almost certainly concerns your community. Your ideal probably involves the fostering of peace and safety. An investigator is likely to have an ideal connected to achieving justice by successfully solving crimes.\n\n*Editor's Note: I added the tables for the soldier background here for your convenience.*",
    traits: [
      "I'm always polite and respectful.",
      "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
      "I've lost too many friends, and I'm slow to make new ones.",
      "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
      "I can stare down a hell hound without flinching.",
      "I enjoy being strong and like breaking things.",
      "I have a crude sense of humor.",
      "I face problems head-on. A simple, direct solution is the best path to success.",
    ],
    ideals: [
      "**Greater Good.** Our lot is to lay down our lives in defense of others. (Good)",
      "**Responsibility.** I do what I must and obey just authority. (Lawful)",
      "**Independence.** When people follow orders blindly, they embspecies a kind of tyranny. (Chaotic)",
      "**Might.** In life as in war, the stronger force wins. (Evil)",
      "**Live and Let Live.** Ideals aren't worth killing over or going to war for. (Neutral)",
      "**Nation.** My city, nation, or people are all that matter. (Any)",
    ],
    bonds: [
      "I would still lay down my life for the people I served with.",
      "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
      "My honor is my life.",
      "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
      "Those who fight beside me are those worth dying for.",
      "I fight for those who cannot fight for themselves.",
    ],
    flaws: [
      "The monstrous enemy we faced in battle still leaves me quivering with fear.",
      "I have little respect for anyone who is not a proven warrior.",
      "I made a terrible mistake in battle that cost many lives – and I would do anything to keep that mistake secret.",
      "My hatred of my enemies is blind and unreasoning.",
      "I obey the law, even if the law causes misery.",
      "I'd rather eat my armor than admit when I'm wrong.",
    ],
  },
  {
    id: 7,
    name: "Clan Crafter",
    flavorText: "You are a member of a dwarven clan of crafters.",
    description:
      "The Stout Folk are well known for their artisanship and the worth of their handiworks, and you have been trained in that ancient tradition. For years you labored under a dwarf master of the craft, enduring long hours and dismissive, sour-tempered treatment in order to gain the fine skills you possess today.\n\nYou are most likely a dwarf, but not necessarily- particularly in the North, the shield dwarf clans learned long ago that only proud fools who are more concerned for their egos than their craft turn away promising apprentices, even those of other races. If you aren't a dwarf, however, you have taken a solemn oath never to take on an apprentice in the craft: it is not for non-dwarves to pass on the skills of Moradin's favored children. You would have no difficulty, however, finding a dwarf master who was willing to receive potential apprentices who came with your recommendation.",
    source: src.sword,

    equipmentDescription: [
      "A set of artisan's tools with which you are proficient",
      `A maker's mark ${i(
        itemIds.chisel,
        "chisel"
      )} used to mark your handiwork with the symbol of the clan of crafters you learned your skill from`,
      "A set of " + i(itemIds.travelersClothes, "traveler's clothes"),
      `A ${i(itemIds.pouch, "pouch")} containing 5 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
      "A gemstone worth 10 gp",
    ],
    equipment: {
      default: [
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 5 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...artisanToolItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            ...getGemstoneIdsOfValue(10).map((id) => [
              { item: id, quantity: 1 },
            ]),
          ],
        },
      ],
    },
    suggestedCharacteristics: `Use the tables for the guild artisan background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity. (For instance, consider the words "guild" and "clan" to be interchangeable.)\n\nYour bond is almost certainly related to the master or the clan that taught you, or else to the work that you produce. Your ideal might have to do with maintaining the high quality of your work or preserving the dwarven traditions of craftsmanship.\n\nEditor's Note: I added the tables for the guild artisan background here for your convenience.`,
    traits: [
      "I believe that anything worth doing is worth doing right. I can't help it – I'm a perfectionist.",
      "I'm a snob who looks down on those who can't appreciate fine art.",
      "I always want to know how things work and what makes people tick.",
      "I'm full of witty aphorisms and have a proverb for every occasion.",
      "I'm rude to people who lack my commitment to hard work and fair play.",
      "I like to talk at length about my profession.",
      "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
      "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
    ],
    ideals: [
      "**Community.** It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
      "**Generosity.** My talents were given to me so that I could use them to benefit the world. (Good)",
      "**Freedom.** Everyone should be free to pursue his or her livelihood. (Chaotic)",
      "**Greed.** I'm only in it for the money. (Evil)",
      "**People.** I'm committed to the people I care about, not to ideals. (Neutral)",
      "**Aspiration.** I work hard to be the best there is at my craft. (Any)",
    ],
    bonds: [
      "The workshop where I learned my trade is the most important place in the world to me.",
      "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
      "I owe my guild a great debt for forging me into the person I am today.",
      "I pursue wealth to secure someone's love.",
      "One day I will return to my guild and prove that I am the greatest artisan of them all.",
      "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
    ],
    flaws: [
      "I'll do anything to get my hands on something rare or priceless.",
      "I'm quick to assume that someone is trying to cheat me.",
      "No one must ever learn that I once ripped off a guild master.",
      "I'm never satisfied with what I have – I always want more.",
      "I would kill to acquire a noble title.",
      "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
    ],
  },
  {
    id: 8,
    name: "Cloistered Scholar",
    flavorText: "You have worked in a library or scriptorium.",
    description:
      "As a child, you were inquisitive when your playmates were possessive or raucous. In your formative years, you found your way to one of Faerûn's great institutes of learning, where you were apprenticed and taught that knowledge is a more valuable treasure than gold or gems. Now you are ready to leave your home – not to abandon it, but to quest for new lore to add to its storehouse of knowledge.\n\nThe most well-known of Faerûn's fonts of knowledge is Candlekeep. The great library is always in need of workers and attendants, some of whom rise through the ranks to assume roles of greater responsibility and prominence. You might be one of Candlekeep's own, dedicated to the curatorship of what is likely the most complete body of lore and history in all the world.\n\nPerhaps instead you were taken in by the scholars of the Vault of the Sages or the Map House in Silverymoon, and now you have struck out to increase your knowledge and to make yourself available to help those in other places who seek your expertise. You might be one of the few who aid Herald's Holdfast, helping to catalogue and maintain records of the information that arrives daily from across Faerûn.",
    source: src.sword,
    skillProficiencyDescription:
      "History, plus your choice of one from among Arcana, Nature, and Religion.",
    skillProficiencies: {
      default: [Skill.HISTORY],
      choices: [
        {
          numberOfChoices: 1,
          options: [Skill.ARCANA, Skill.NATURE, Skill.RELIGION],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in two languages of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 2,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `The ${i(itemIds.robes, "scholar's robes")} of your cloister`,
      `A writing kit (small ${i(itemIds.pouch, "pouch")} with a ${i(
        itemIds.quill,
        "quill"
      )}, ${i(itemIds.ink, "ink")}, folded ${i(
        itemIds.parchment,
        "parchment"
      )}, and a small ${i(itemIds.penKnife, "penknife")})`,
      `A borrowed ${i(
        itemIds.book,
        "book"
      )} on the subject of your current study`,
      `A ${i(itemIds.pouch, "pouch")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.robes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.quill, quantity: 1 },
        { item: itemIds.ink, quantity: 1 },
        { item: itemIds.parchment, quantity: 1 },
        { item: itemIds.penKnife, quantity: 1 },
        { item: itemIds.book, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
    },
    suggestedCharacteristics:
      "Use the tables for the sage background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.\n\nYour bond is almost certainly associated either with the place where you grew up or with the knowledge you hope to acquire through adventuring. Your ideal is no doubt related to how you view the quest for knowledge and truth – perhaps as a worthy goal in itself, or maybe as a means to a desirable end.\n\n*Editor's Note: I added the tables for the sage background here for your convenience.*",
    traits: [
      "I use polysyllabic words that convey the impression of great erudition.",
      "I've read every book in the world's greatest libraries – or I like to boast that I have.",
      "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
      "There's nothing I like more than a good mystery.",

      "I'm willing to listen to every side of an argument before I make my own judgment.",
      "I... speak... slowly... when talking... to idiots, which... almost... everyone... is... compared... to me.",
      "I am horribly, horribly awkward in social situations.",
      "I'm convinced that people are always trying to steal my secrets.",
    ],
    ideals: [
      "**Knowledge.** The path to power and self-improvement is through knowledge. (Neutral)",
      "**Beauty.** What is beautiful points us beyond itself toward what is true. (Good)",
      "**Logic.** Emotions must not cloud our logical thinking. (Lawful)",
      "**No Limits.** Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
      "**Power.** Knowledge is the path to power and domination. (Evil)",
      "**Self-Improvement.** The goal of a life of study is the betterment of oneself. (Any)",
    ],
    bonds: [
      "It is my duty to protect my students.",
      "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
      "I work to preserve a library, university, scriptorium, or monastery.",
      "My life's work is a series of tomes related to a specific field of lore.",
      "I've been searching my whole life for the answer to a certain question.",
      "I sold my soul for knowledge. I hope to do great deeds and win it back.",
    ],
    flaws: [
      "I am easily distracted by the promise of information.",
      "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
      "Unlocking an ancient mystery is worth the price of a civilization.",
      "I overlook obvious solutions in favor of complicated ones.",
      "I speak without really thinking through my words, invariably insulting others.",
      "I can't keep a secret to save my life, or anyone else's.",
    ],
  },
  {
    id: 9,
    name: "Courtier",
    flavorText: "You are a personage of some significance in a noble court.",
    description:
      "In your earlier days, you were a personage of some significance in a noble court or a bureaucratic organization. You might or might not come from an upper-class family; your talents, rather than the circumstances of your birth, could have secured you this position.\n\nYou might have been one of the many functionaries, attendants, and other hangers-on in the Court of Silverymoon, or perhaps you traveled in Waterdeep's baroque and sometimes cutthroat conglomeration of guilds, nobles, adventurers, and secret societies. You might have been one of the behind-the-scenes law-keepers or functionaries in Baldur's Gate or Neverwinter, or you might have grown up in and around the castle of Daggerford.\n\nEven if you are no longer a full-fledged member of the group that gave you your start in life, your relationships with your former fellows can be an advantage for you and your adventuring comrades. You might undertake missions with your new companions that further the interest of the organization that gave you your start in life. In any event, the abilities that you honed while serving as a courtier will stand you in good stead as an adventurer.",
    source: src.sword,
    skillProficiencyDescription:
      "You are proficient in the Insight and Persuasion skills.",
    skillProficiencies: {
      default: [Skill.INSIGHT, Skill.PERSUASION],
    },
    languageProficiencyDescription:
      "You are proficient in two languages of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 2,
          options: Object.values(Language),
        },
      ],
    },

    equipmentDescription: [
      "A set of " + i(itemIds.fineClothes, "fine clothes"),
      `A ${i(itemIds.pouch, "pouch")} containing 5 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.fineClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 5 },
      ],
    },
    suggestedCharacteristics:
      "Use the tables for the guild artisan background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.\n\nThe noble court or bureaucratic organization where you got your start is directly or indirectly associated with your bond (which could pertain to certain individuals in the group, such as your sponsor or mentor). Your ideal might be concerned with the prevailing philosophy of your court or organization.\n\n*Editor's Note: I added the tables for the guild artisan background here for your convenience.*",
    traits: [
      "I believe that anything worth doing is worth doing right. I can't help it – I'm a perfectionist.",
      "I'm a snob who looks down on those who can't appreciate fine art.",
      "I always want to know how things work and what makes people tick.",
      "I'm full of witty aphorisms and have a proverb for every occasion.",
      "I'm rude to people who lack my commitment to hard work and fair play.",
      "I like to talk at length about my profession.",
      "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
      "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
    ],
    ideals: [
      "**Community.** It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
      "**Generosity.** My talents were given to me so that I could use them to benefit the world. (Good)",
      "**Freedom.** Everyone should be free to pursue his or her livelihood. (Chaotic)",
      "**Greed.** I'm only in it for the money. (Evil)",
      "**People.** I'm committed to the people I care about, not to ideals. (Neutral)",
      "**Aspiration.** I work hard to be the best there is at my craft. (Any)",
    ],
    bonds: [
      "The workshop where I learned my trade is the most important place in the world to me.",
      "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
      "I owe my guild a great debt for forging me into the person I am today.",
      "One day I will return to my guild and prove that I am the greatest artisan of them all.",
      "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
    ],
    flaws: [
      "I'll do anything to get my hands on something rare or priceless.",
      "I'm quick to assume that someone is trying to cheat me.",
      "No one must ever learn that I once stole money from guild coffers.",
      "I'm never satisfied with what I have – I always want more.",
      "I would kill to acquire a noble title.",
      "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
    ],
  },
  {
    id: 10,
    name: "Criminal",
    flavorText: "You have a history of breaking the law.",
    description:
      "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You're far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",
    source: src.phb,
    skillProficiencyDescription: "You are proficient in Deception and Stealth.",
    skillProficiencies: {
      default: [Skill.DECEPTION, Skill.STEALTH],
    },
    toolProficiencyDescription:
      "You are proficient in one type of gaming set, thieves' tools",
    toolProficiencies: {
      default: [toolIds.thievesTools],
      choices: [
        {
          numberOfChoices: 1,
          options: gamingKitIds,
        },
      ],
    },
    equipmentDescription: [
      "A " + i(itemIds.crowbar, "crowbar"),
      `A set of dark ${i(
        itemIds.commonClothes,
        "common clothes"
      )} including a hood`,
      `A ${i(itemIds.pouch, "pouch")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.crowbar, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
      ],
    },
    suggestedCharacteristics:
      "Criminals might seem like villains on the surface, and many of them are villainous to the core. But some have an abundance of endearing, if not redeeming, characteristics. There might be honor among thieves, but criminals rarely show any respect for law or authority.",
    traits: [
      "I always have a plan for what to do when things go wrong.",
      "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
      "The first thing I do in a new place is note the locations of everything valuable – or where such things could be hidden.",
      "I would rather make a new friend than a new enemy.",
      "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
      "I don't pay attention to the risks in a situation. Never tell me the odds.",
      "The best way to get me to do something is to tell me I can't do it.",
      "I blow up at the slightest insult.",
    ],
    ideals: [
      "**Honor.** I don't steal from others in the trade. (Lawful)",
      "**Freedom.** Chains are meant to be broken, as are those who would forge them. (Chaotic)",
      "**Charity.** I steal from the wealthy so that I can help people in need. (Good)",
      "**Greed.** I will do whatever it takes to become wealthy. (Evil)",
      "**People.** I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
      "**Redemption.** There's a spark of good in everyone. (Good)",
    ],
    flaws: [
      "When I see something valuable, I can't think about anything but how to steal it.",
      "When faced with a choice between money and my friends, I usually choose the money.",
      "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
      "I have a 'tell' that reveals when I'm lying.",
      "I turn tail and run when things look bad.",
      "An innocent person is in prison for a crime that I committed. I'm okay with that.",
    ],
  },
  {
    id: 11,
    name: "Entertainer",
    flavorText:
      "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them.",
    description:
      "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in the Acrobatics and Performance skills.",
    skillProficiencies: {
      default: [Skill.ACROBATICS, Skill.PERFORMANCE],
    },
    toolProficiencyDescription:
      "You are proficient with Disguise kit's and one type of musical instrument.",
    toolProficiencies: {
      default: [toolIds.disguiseKit],
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(instrumentIds),
        },
      ],
    },
    equipmentDescription: [
      "A musical instrument (one of your choice)",
      `The favor of an admirer (love letter, lock of hair, or ${i(
        itemIds.trinket,
        "trinket"
      )})`,
      i(itemIds.costumeClothes, "A costume"),
      `A ${i(itemIds.pouch, "pouch")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.costumeClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...instrumentItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 1,
          options: [[{ item: itemIds.trinket, quantity: 1 }]],
        },
      ],
    },
    suggestedCharacteristics:
      "Successful entertainers have to be able to capture and hold an audience's attention, so they tend to have flamboyant or forceful personalities. They're inclined toward the romantic and often cling to high-minded ideals about the practice of art and the appreciation of beauty.",
    traits: [
      "I know a story relevant to almost every situation.",
      "Whenever I come to a new place, I collect local rumors and spread gossip.",
      "I'm a hopeless romantic, always searching for that 'special someone.'",
      "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
      "I love a good insult, even one directed at me.",
      "I get bitter if I'm not the center of attention.",
      "I'll settle for nothing less than perfection.",
      "I change my mood or my mind as quickly as I change key in a song.",
    ],
    ideals: [
      "**Beauty.** When I perform, I make the world better than it was. (Good)",
      "**Tradition.** The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
      "**Creativity.** The world is in need of new ideas and bold action. (Chaotic)",
      "**Greed.** I'm only in it for the money and fame. (Evil)",
      "**People.** I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
      "**Honesty.** Art should reflect the soul; it should come from within and reveal who we really are. (Any)",
    ],
    bonds: [
      "My instrument is my most treasured possession, and it reminds me of someone I love.",
      "Someone stole my precious instrument, and someday I will get it back.",
      "I want to be famous, whatever it takes.",
      "I idolize a hero of the old tales and measure my deeds against that person's.",
      "I will do anything to prove myself superior to my hated rival.",
      "I would do anything for the other members of my old troupe.",
    ],
    flaws: [
      "I'll do anything to win fame and renown.",
      "I'm a sucker for a pretty face.",
      "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
      "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
      "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
      "Despite my best efforts, I am unreliable to my friends.",
    ],
  },
  {
    id: 12,
    name: "Faceless",
    flavorText: "You are a hero behind a mask.",
    description:
      "Being who you are, you could never be a hero. Whether due to your class, your people, your family, or your sins, something about you prevents you from effectively pursuing the path you've chosen. Even so, that doesn't stop you. You've left your old face behind, taking on a new persona, becoming something more.\n\nCharacters with the faceless background don a disguise—literally or otherwise—as they adventure. This persona might be dramatic or subtle. In a way, though, many characters have such larger than life personalities. Therefore, this background largely focuses on detailing the hero behind the mask.",
    source: src.descent,
    skillProficiencyDescription:
      "You are proficient in the Deception and Intimidation skills.",
    skillProficiencies: {
      default: [Skill.DECEPTION, Skill.INTIMIDATION],
    },
    toolProficiencyDescription: "You are proficient with a disguise kit.",
    toolProficiencies: {
      default: [toolIds.disguiseKit],
    },

    equipmentDescription: [
      i(itemIds.disguiseKit, "A disguise kit"),
      "A set of " + i(itemIds.commonClothes, "common clothes"),
      `A ${i(itemIds.pouch, "pouch")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.disguiseKit, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
    },
    suggestedCharacteristics:
      "A faceless character usually plays their persona—the hero or extraordinary person they are every day. That's all a facade, though, or a part of them expressed to an extreme. To define a persona, feel free to choose characteristics from other backgrounds, particularly folk hero, hermit, or noble. For the person behind the persona, the one who truly strives to be faceless, consider a distinct set of faceless characteristics. As a result, those with this background have two sets of characteristics, one for their persona, and one for their faceless selves.",
    traits: [
      "I'm earnest and uncommonly direct.",
      "I strive to have no personality—it's easier to forget what's hardly there.",
      "I sleep just as much as I need to and on an unusual schedule.",
      "I treasure a memento of a person or instance that set me upon my path.",
      "I cultivate a single obscure hobby or study and eagerly discuss it at length.",
      "I am ever learning how to be among others—when to stay quiet, when to laugh.",
      "I behave like an extreme opposite of my persona.",
      "I think far ahead, a detachedness often mistaken for daydreaming.",
    ],
    ideals: [
      "**Security.** Doing what must be done can't bring the innocent to harm. (Lawful)",
      "**Confusion.** Deception is a weapon. Strike from where your foes won't expect. (Chaotic)",
      "**Infamy.** My name will be a malediction, a curse that fulfills my will. (Evil)",
      "**Incorruptability.** Be a symbol, and leave your flawed being behind. (Any)",
      "**Justice.** Place in society shouldn't determine one's access to what is right. (Good)",
    ],
    bonds: [
      "I do everything for my family. My first thought is keeping them safe.",
      "What I do, I do for the world. The people don't realize how much they need me.",
      "I've seen too many in need. I must not fail them as everyone else has.",
      "I stand in opposition, lest the wicked go unopposed.",
      "I am exceptional. I do this because no one else can, and no one can stop me.",
      "I do everything for those who were taken from me.",
    ],
    flaws: [
      "I an callous about death. It comes to us all eventually.",
      "I never make eye contact or hold it unflinchingly.",
      "I have no sense of humor. Laughing is uncomfortable and embarrassing.",
      "I overexert myself, sometimes needing to recuperate for a day or more.",
      "I think far ahead, a detachedness often mistaken for daydreaming.",
      "I see morality entirely in black and white.",
    ],
  },
  {
    id: 13,
    name: "Faction Agent",
    flavorText: "You are a member of a faction.",
    description:
      "Many organizations active in the North and across the face of Faerûn aren't bound by strictures of geography. These factions pursue their agendas without regard for political boundaries, and their members operate anywhere the organization deems necessary. These groups employ listeners, rumormongers, smugglers, sellswords, cache-holders (people who guard caches of wealth or magic for use by the faction's operatives), haven keepers, and message drop minders, to name a few. At the core of every faction are those who don't merely fulfill a small function for that organization, but who serve as its hands, head, and heart.\n\nAs a prelude to your adventuring career (and in preparation for it), you served as an agent of a particular faction in Faerûn. You might have operated openly or secretly, depending on the faction and its goals, as well as how those goals mesh with your own. Becoming an adventurer doesn't necessarily require you to relinquish membership in your faction (though you can choose to do so), and it might enhance your status in the faction.",
    source: src.sword,
    skillProficiencyDescription:
      "You are proficient in Insight and one Intelligence, Wisdom, or Charisma skill of your choice, as appropriate to your faction",
    skillProficiencies: {
      default: [Skill.INSIGHT],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            Skill.ANIMAL_HANDLING,
            Skill.ARCANA,
            Skill.DECEPTION,
            Skill.HISTORY,
            Skill.INSIGHT,
            Skill.INTIMIDATION,
            Skill.INVESTIGATION,
            Skill.MEDICINE,
            Skill.NATURE,
            Skill.PERCEPTION,
            Skill.PERFORMANCE,
            Skill.PERSUASION,
            Skill.RELIGION,
            Skill.SURVIVAL,
          ],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in two languages of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 2,
          options: Object.values(Language),
        },
      ],
    },

    equipmentDescription: [
      `A ${i(itemIds.badge, "badge")} of your faction`,
      `A ${i(itemIds.book, "A copy of a seminal faction text")}`,
      "A set of " + i(itemIds.commonClothes, "common clothes"),
      `A ${i(itemIds.pouch, "pouch")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.badge, quantity: 1 },
        { item: itemIds.book, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
      ],
    },
    suggestedCharacteristics: `Use the tables for the Acolyte background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity. (For instance, consider the words "faith" and "faction" to be interchangeable.)\n\n*Editor's Note: I added the tables for the acolyte background here for your convenience.*\n\nYour bond might be associated with other members of your faction, or a location or an object that is important to your faction. The ideal you strive for is probably in keeping with the tenets and principles of your faction, but might be more personal in nature.`,
    traits: [
      "I idolize a particular hero of my faction, and constantly refer to that person's deeds and example.",
      "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
      "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
      "Nothing can shake my optimistic attitude.",
      "I quote (or misquote) sacred texts and proverbs in almost every situation.",
      "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
      "I've enjoyed fine food, drink, and high society among my faction. Rough living grates on me.",
      "I've spent so long in the temple that I have little practical experience dealing with people in the outside world.",
    ],
    ideals: [
      "**Tradition.** The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
      "**Charity.** I always try to help those in need, no matter what the personal cost. (Good)",
      "**Change.** We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
      "**Power.** I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)",
      "**Faith.** I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Any)",
      "**Aspiration.** I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)",
    ],
    bonds: [
      "I would die to recover an ancient relic of my faith that was lost long ago.",
      "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
      "I owe my life to the priest who took me in when my parents died.",
      "Everything I do is for the common people.",
      "I will do anything to protect the temple where I served.",
      "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.",
    ],
    flaws: [
      "I judge others harshly, and myself even more severely.",
      "I put too much trust in those who wield power within my temple's hierarchy.",
      "My piety sometimes leads me to blindly trust those that profess faith in my god.",
      "I am inflexible in my thinking.",
      "I am suspicious of strangers and expect the worst of them.",
      "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.",
    ],
  },
  {
    id: 14,
    name: "Far Traveler",
    flavorText: "You are from a distant place.",
    description:
      "Almost all of the common people and other folk that one might encounter along the Sword Coast or in the North have one thing in common: they live out their lives without ever traveling more than a few miles from where they were born.\n\nYou aren't one of those folk.\n\nYou are from a distant place, one so remote that few of the common folk in the North realize that it exists, and chances are good that even if some people you meet have heard of your homeland, they know merely the name and perhaps a few outrageous stories. You have come to this part of Faerûn for your own reasons, which you might or might not choose to share.\n\nAlthough you will undoubtedly find some of this land's ways to be strange and discomfiting, you can also be sure that some things its people take for granted will be to you new wonders that you've never laid eyes on before. By the same token, you're a person of interest, for good or ill, to those around you almost anywhere you go.",
    source: src.sword,
    skillProficiencyDescription:
      "You are proficient in Insight and Perception.",
    skillProficiencies: {
      default: [Skill.INSIGHT, Skill.PERCEPTION],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    toolProficiencyDescription:
      "You are proficient with any one musical instrument or gaming set of your choice, likely something native to your homeland",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...instrumentIds, ...gamingKitIds],
        },
      ],
    },

    equipmentDescription: [
      "A set of " + i(itemIds.travelersClothes, "traveler's clothes"),
      "Any one musical instrument or gaming set you are proficient with",
      "Poorly wrought maps from your homeland that depict where you are in Faerûn",
      `A small piece of ${i(
        itemIds.jewelery,
        "jewelry"
      )} in the style of your homeland's craftsmanship`,
      `A ${i(itemIds.pouch, "pouch")} containing 5 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.paper, quantity: 3 },
        { item: itemIds.goldPiece, quantity: 5 },
        { item: itemIds.jewelery, quantity: 1 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...instrumentItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...gamingKitItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Here are some suggested characteristics for far travelers.",
    traits: [
      "I have my own ideas about what is and is not food, and I find the eating habits of those around me fascinating, confusing, or revolting.",
      "I have a strong code of honor or sense of propriety that others don't comprehend.",
      "I express affection or contempt in ways that are unfamiliar to others.",
      "I honor my deities through practices that are foreign to this land.",
      "I begin or end my day with small traditional rituals that are unfamiliar to those around me.",
      "I have different assumptions from those around me concerning personal space, blithely invading others' space in innocence, or reacting to ignorant invasion of my own.",
    ],
    ideals: [
      "**Greater Good.** As someone new to these strange lands, I am cautious and respectful in my dealings. (Lawful)",
      "**Honor.** I'm far from home, and everything is strange and wonderful! (Chaotic)",
      "**Might.** Though I may not know their ways, neither do they know mine, which can be to my advantage. (Evil)",
      "**Nature.** Everything is new, but I have a thirst to learn. (Neutral)",
      "**Knowledge.** I must be careful, for I have no way of telling friend from foe here. (Any)",
      "**Change.** I have much to learn from the kindly folk I meet along my way. (Good)",
    ],
    bonds: [
      "So long as I have this token from my homeland, I can face any adversity in this strange land.",
      "The gods of my people are a comfort to me so far from home.",
      "I hold no greater cause than my service to my people.",
      "My freedom is my most precious possession. I'll never let anyone take it from me again.",
      "I'm fascinated by the beauty and wonder of this new land.",
      "Though I had no choice, I lament having to leave my loved one(s) behind. I hope to see them again one day.",
    ],
    flaws: [
      "I am secretly (or not so secretly) convinced of the superiority of my own culture over that of this foreign land.",
      "I pretend not to understand the local language in order to avoid interactions I would rather not have.",
      "I have a weakness for the exotic beauty of the people of these lands.",
      "I don't take kindly to some of the actions and motivations of the people of this land, because these folk are different from me.",
      "I consider the adherents of other gods to be deluded innocents at best, or ignorant fools at worst.",
      "I have a weakness for the new intoxicants and other pleasures of this land.",
    ],
  },
  {
    id: 15,
    name: "Feylost",
    flavorText:
      "You grew up in the Feywild after disappearing from your home plane as a child.",
    description:
      "You grew up in the Feywild after disappearing from your home plane as a child. Perhaps you were spirited away by kindly Fey who thought you were destined for great things. Perhaps you stumbled through a Fey crossing by chance during a twilight stroll in the woods. Perhaps you were kidnapped by evil Fey but escaped from their clutches. Whatever the manner of your disappearance, you gradually fell under the Feywild's spell and learned a little about the nature of the mercurial tricksters that dwell there.\n\nWhen you finally returned to your home plane, you did not come back unchanged. You are haunted by the fact the Feywild-a mirror world hidden behind a mere twist of perception-is only a hair's breadth away. Although your memories of the Feywild grow fainter with each passing day, your heart swells with a mixture of fear and joy at the prospect of one day venturing back to the Plane of Faerie-your home away from home.",
    source: src.witchlight,
    skillProficiencyDescription:
      "You are proficient in Deception and Survival.",
    skillProficiencies: {
      default: [Skill.DECEPTION, Skill.SURVIVAL],
    },
    toolProficiencyDescription:
      "You are proficient with any one musical instrument of your choice.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(instrumentIds),
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one of your choice of Elvish, Gnomish, Goblin, or Sylvan.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [
            Language.ELVISH,
            Language.GNOMISH,
            Language.GOBLIN,
            Language.SYLVAN,
          ],
        },
      ],
    },

    equipmentDescription: [
      "A musical instrument (one of your choice)",
      "A set of " + i(itemIds.travelersClothes, "traveler's clothes"),
      `Three ${i(
        itemIds.trinket,
        "trinkets"
      )} (each determind by rolling on the Feywild Trinkets table)`,
      `A ${i(itemIds.pouch, "pouch")} containing 8 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 8 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...instrumentItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
        {
          numberOfChoices: 3,
          options: [
            [{ item: itemIds.trinket, quantity: 1 }],
            [{ item: itemIds.trinket, quantity: 1 }],
            [{ item: itemIds.trinket, quantity: 1 }],
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "These tables, while optional, are well suited to Feywild-themed adventurers and are ideal for any character who has the Feylost background.",
    traits: [
      "Like a nomad, I can't settle down in one place for very long.",
      "I'm haunted by fey laughter that only I can hear, though I know it's just my mind playing tricks on me.",
      "Wherever I go, I try to bring a little of the warmth and tranquility of home with me.",
      "I have never lost my childlike sense of wonder.",
      "When I have a new idea, I get wildly excited about it until I come up with another, better idea.",
      "I live by my own set of weird and wonderful rules.",
      "Good music makes me weep like a baby.",
      "I can't bring myself to trust most adults.",
    ],

    ideals: [
      "**Friendship.** I never leave a friend behind. (Good)",
      "**Empathy.** No creature should be made to suffer. (Good)",
      "**Changeability.** Change is good, which is why I live by an ever-changing set of rules. (Chaotic)",
      "**Honor.** A deal is a deal, and I would never break one. (Lawful)",
      "**Wanderlust.** I prefer to take the less traveled path. (Chaotic)",
      `**Rule of Three.** Everything in the multiverse happens in threes. I see the "rule of three" everywhere. (Lawful)`,
      "**Obsession.** I won't let go of a grudge. (Evil)",
      "**Greed.** I will do whatever it takes to get what I want, regardless of the harm it might cause. (Evil)",
    ],
    bonds: [
      "I would never break my word.",
      "I find magic in all its forms to be compelling. The more magical a place, the more I am drawn to it.",
      "A trusted friend is the most important thing in the multiverse to me.",
      "I have a deep connection to a particular plant, and I visit it often.",
      "I can't bring myself to harm a Fey creature, either because I consider myself one or because I fear the repercussions.",
      "The Witchlight Carnival feels like home to me.",
      "I'm drawn to the Feywild and long to return there, if only for a short while.",
      "I feel indebted to Mister Witch and Mister Light for giving me a home and a purpose.",
    ],
    flaws: [
      "I easily lose track of time. My poor sense of time means I'm always late.",
      "I think the whole multiverse is out to get me.",
      "I'm always operating under a tight timeline, and I'm obsessed with keeping everything on schedule.",
      "I'm a kleptomaniac who covets shiny, sparkling treasure.",
      "I'm forgetful. Sometimes I can't remember even the simplest things.",
      "I never give away anything for free and always expect something in return.",
      "I have many vices and tend to indulge them.",
      "I'm always changing my mind-well, almost always.",
    ],
  },
  {
    id: 16,
    name: "Fisher",
    description:
      "You have spent your life aboard fishing vessels or combing the shallows for the bounty of the ocean. Perhaps you were born into a family of fisher folk, working with your kin to feed your village. Maybe the job was a means to an end - a way out of an undesirable circumstance that forced you to take up life aboard a ship. Regardless of how you began, you soon fell in love with the sea, the art of fishing, and the promise of the eternal horizon.",
    flavorText:
      "You have spent your life aboard fishing vessels or combing the shallows for the bounty of the ocean.",
    source: src.saltmarsh,
    skillProficiencies: {
      default: [Skill.HISTORY, Skill.SURVIVAL],
    },
    skillProficiencyDescription:
      "You are proficient in the History and Survival skills.",
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      i(itemIds.fishingTackle, "Fishing tackle"),
      i(itemIds.net, "A net"),
      "A set of " + i(itemIds.travelersClothes, "traveler's clothes"),
      `A favorite ${i(itemIds.fishingLure, "fishing lure")} or oiled ${i(
        itemIds.leatherBoots,
        "leather wading boots"
      )}`,
      `A ${i(itemIds.pouch, "pouch")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.fishingTackle, quantity: 1 },
        { item: itemIds.net, quantity: 1 },
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.fishingLure, quantity: 1 }],
            [{ item: itemIds.leatherBoots, quantity: 1 }],
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Fishers succeed only if they spend time at their jobs. As such, most fishers have a strong work ethic, and they admire others who earn their living honestly. Fishers tend to be superstitious, forming attachments to particular fishing lures or special fishing spots. They have a connection to the bodies of water in which they fish, and they think poorly of those whose actions adversely affect their livelihood.",
    traits: [
      "I am unmoved by the wrath of nature.",
      "My friends are my crew; we sink or float together.",
      "I need long stretches of quiet to clear my head.",
      "Rich folk don't know the satisfaction of hard work.",
      "I laugh heartily, feel deeply, and fear nothing.",
      "I work hard; nature offers no handouts.",
      "I dislike bargaining; state your price and mean it.",
      "Luck favors me, and I take risks others might not.",
    ],
    ideals: [
      "**Camaraderie.** Good people make even the longest voyage bearable. (Good)",
      "**Luck.** Our luck depends on respecting its rules—now throw this salt over your shoulder. (Lawful)",
      "**Daring.** The richest bounty goes to those who risk everything. (Chaotic)",
      "**Plunder.** Take all that you can and leave nothing for the scavengers. (Evil)",
      "**Balance.** Do not fish the same spot twice in a row; suppress your greed, and nature will reward you. (Neutral)",
      "**Hard Work.** No wave can move a soul hard at work. (Any)",
    ],
    bonds: [
      "I lost something important in the deep sea, and I intend to find it.",
      "Someone else's greed destroyed my livelihood, and I will be compensated.",
      "I will fish the many famous waters of this land.",
      "The gods saved me during a terrible storm, and I will honor their gift.",
      "My destiny awaits me at the bottom of a particular pond in the Feywild.",
      "I must repay my village's debt.",
    ],
    flaws: [
      "I am judgmental, especially of those I deem homebodies or otherwise lazy.",
      "I become depressed and anxious if I'm away from the sea too long.",
      "I have lived a hard life and find it difficult to empathize with others.",
      "I am inclined to tell long-winded stories at inopportune times.",
      "I work hard, but I play harder.",
      "I am obsessed with catching an elusive aquatic beast, often to the detriment of other pursuits.",
    ],
  },
  {
    id: 17,
    name: "Folk Hero",
    description:
      "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.",
    flavorText:
      "You come from a humble social rank, but you are destined for so much more.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in Animal Handling and Survival.",
    skillProficiencies: {
      default: [Skill.ANIMAL_HANDLING, Skill.SURVIVAL],
    },
    toolProficiencyDescription:
      "You are proficient with one type of artisan's tools and vehicles (land).",
    toolProficiencies: {
      default: [toolIds.landVehicles],
      choices: [
        {
          numberOfChoices: 1,
          options: [...artisanIds],
        },
      ],
    },
    equipmentDescription: [
      "A set of artisan's tools (one of your choice)",
      i(itemIds.shovel, "A shovel"),
      i(itemIds.potIron, "An iron pot"),
      "A set of " + i(itemIds.commonClothes, "common clothes"),
      `A ${i(itemIds.pouch, "pouch")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.shovel, quantity: 1 },
        { item: itemIds.potIron, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...artisanToolItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Folk heroes are natural leaders, and they inspire others to greatness through their deeds. They are not afraid to stand up to tyrants, and they are willing to sacrifice everything for the greater good.",
    traits: [
      "I judge people by their actions, not their words.",
      "If someone is in trouble, I'm always ready to lend help.",
      "When I set my mind to something, I follow through no matter what gets in my way.",
      "I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
      "I'm confident in my own abilities and do what I can to instill confidence in others.",
      "Thinking is for other people. I prefer action.",
      "I misuse long words in an attempt to sound smarter.",
      "I get bored easily. When am I going to get on with my destiny?",
    ],
    ideals: [
      "**Respect.** People deserve to be treated with dignity and respect. (Good)",
      "**Fairness.** No one should get preferential treatment before the law, and no one is above the law. (Lawful)",
      "**Freedom.** Tyrants must not be allowed to oppress the people. (Chaotic)",
      "**Might.** If I become strong, I can take what I want—what I deserve. (Evil)",
      "**Sincerity.** There's no good in pretending to be something I'm not. (Neutral)",
      "**Destiny.** Nothing and no one can steer me away from my higher calling. (Any)",
    ],
    bonds: [
      "I have a family, but I have no idea where they are. One day, I hope to see them again.",
      "I worked the land, I love the land, and I will protect the land.",
      "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
      "My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
      "I protect those who cannot protect themselves.",
      "I wish my childhood sweetheart had come with me to pursue my destiny.",
    ],
    flaws: [
      "The tyrant who rules my land will stop at nothing to see me killed.",
      "I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
      "The people who knew me when I was young know my shameful secret, so I can never go home again.",
      "I have a weakness for the vices of the city, especially hard drink.",
      "Secretly, I believe that things would be better if I were a tyrant lording over the land.",
      "I have trouble trusting in my allies.",
    ],
  },
  {
    id: 18,
    name: "Giant Foundling",
    description:
      "Though you aren’t a Giant, you grew up among giants. Maybe you were an orphan taken in by a sympathetic family of stone giants who raised you as one of their own. Or perhaps you lived in a lost prehistoric pocket of the world, surrounded by giants and fearsome behemoths or hulking dinosaurs.\n\nSomething about your environment—perhaps the food or water that sustained you, elemental magic inherent in the site of your home, or some verdant blessing of growth placed on you—caused you to grow to a remarkable size for your kind. With the aid of this magic, you have learned how to embody the might of giants. You are used to moving through a world much bigger than you, and that is reflected in your skills, attitude, and perspective on life.",
    flavorText: "You grew up among giants.",

    source: src.Bigby,
    skillProficiencyDescription:
      "You are proficient in Intimidation and Survival.",
    skillProficiencies: {
      default: [Skill.INTIMIDATION, Skill.SURVIVAL],
    },
    languageProficiencyDescription:
      "You can speak Giant and one other language of your choice.",
    languageProficiencies: {
      default: [Language.GIANT],
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language).filter(
            (lang) => lang !== Language.GIANT
          ),
        },
      ],
    },
    equipmentDescription: [
      i(itemIds.backpack, "A backpack"),
      "A set of " + i(itemIds.travelersClothes, "traveler's clothes"),
      `A ${(itemIds.stone, "small stone")} or ${i(
        itemIds.twig,
        "twig"
      )} that reminds you of home`,
      `A ${i(itemIds.pouch, "pouch")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.backpack, quantity: 1 },
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.stone, quantity: 1 }],
            [{ item: itemIds.twig, quantity: 1 }],
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Your life among giants has given you a unique perspective. Though you are unusually large for your kind, you’re no larger than a giant child, so you might be very mindful of your size.\n\nThe Giant Foundling Personality Traits table suggests a variety of traits you might adopt for your character.",
    traits: [
      "What I lack in stature, I make up for with sheer spite.",
      "I insist on being taken seriously as a full-grown adult. Nobody talks down to me!",
      "Crowded spaces make me uncomfortable. I’d much rather be in a wide-open field than a bustling tavern.",
      "I embspecies my shorter stature. It helps me stay unnoticed—and underestimated.",
      "Every avalanche begins as a single pebble.",
      "The world always feels too big, and I’m afraid I’ll never find my place in it.",
    ],
  },
  {
    id: 19,
    name: "Gladiator",
    description:
      "A gladiator is as much an entertainer as any minstrel or circus performer trained to make the arts of combat into a spectacle the crowd can enjoy. ",
    flavorText:
      "A gladiator is as much an entertainer as any minstrel or circus performer.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in the Acrobatics and Performance skills.",
    skillProficiencies: {
      default: [Skill.ACROBATICS, Skill.PERFORMANCE],
    },
    toolProficiencyDescription:
      "You are proficient with Dsiguise kits and a musical instrument.",
    toolProficiencies: {
      default: [itemIds.disguiseKit],
      choices: [
        {
          numberOfChoices: 1,
          options: [...instrumentIds],
        },
      ],
    },
    equipmentDescription: [
      i(itemIds.trinket, "A trinket that you got from a fan or admirer"),
      "A set of " + i(itemIds.travelersClothes, "traveler's clothes"),
      `A ${i(itemIds.pouch, "pouch")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
      "A " + i(itemIds.costumeClothes, "costume"),
      `An inexpensive but unusual weapon, such as a ${i(
        itemIds.trident,
        "trident"
      )} or a ${i(itemIds.net, "net")}.`,
    ],
    equipment: {
      default: [
        { item: itemIds.trinket, quantity: 1 },
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
        { item: itemIds.costumeClothes, quantity: 1 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.trident, quantity: 1 }],
            [{ item: itemIds.net, quantity: 1 }],
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Successful entertainers have to be able to capture and hold an audience's attention, so they tend to have flamboyant or forceful personalities. ",
  },
  {
    id: 20,
    name: "Guild Artisan",
    description:
      "You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.",
    flavorText: "You are a member of an artisan's guild.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in Insight and Persuasion.",
    skillProficiencies: {
      default: [Skill.INSIGHT, Skill.PERSUASION],
    },
    toolProficiencyDescription:
      "You are proficient with one type of artisan's tools.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...artisanIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A set of artisan's tools (one of your choice)`,
      `A ${i(itemIds.paper, "letter")} of introduction from your guild`,
      `A set of ${i(itemIds.travelersClothes, "traveler's clothes")}`,
      `A ${i(itemIds.pouch, "pouch")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Guild artisans are among the most ordinary people in the world until they set down their tools and take up an adventuring career. They understand the value of hard work and the importance of community, but they're vulnerable to sins of greed and covetousness.",
    traits: [
      "I believe that anything worth doing is worth doing right. I can't help it – I'm a perfectionist.",
      "I'm a snob who looks down on those who can't appreciate fine art.",
      "I always want to know how things work and what makes people tick.",
      "I'm full of witty aphorisms and have a proverb for every occasion.",
      "I'm rude to people who lack my commitment to hard work and fair play.",
      "I like to talk at length about my profession.",
      "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
      "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
    ],
    ideals: [
      "**Community.** It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
      "**Generosity.** My talents were given to me so that I could use them to benefit the world. (Good)",
      "**Freedom.** Everyone should be free to pursue his or her own livelihood. (Chaotic)",
      "**Greed.** I'm only in it for the money. (Evil)",
      "**People.** I'm committed to the people I care about, not to ideals. (Neutral)",
      "**Aspiration.** I work hard to be the best there is at my craft. (Any)",
    ],
    bonds: [
      "The workshop where I learned my trade is the most important place in the world to me.",
      "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
      "I owe my guild a great debt for forging me into the person I am today.",
      "I pursue wealth to secure someone's love.",
      "One day I will return to my guild and prove that I am the greatest artisan of them all.",
      "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
    ],
    flaws: [
      "I'll do anything to get my hands on something rare or priceless.",
      "I'm quick to assume that someone is trying to cheat me.",
      "No one must ever learn that I once stole money from guild coffers.",
      "I'm never satisfied with what I have – I always want more.",
      "I would kill to acquire a noble title.",
      "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
    ],
  },
  {
    id: 21,
    name: "Guild Merchant",
    description:
      "Instead of an artisans' guild, you might belong to a guild of traders, caravan masters, or shopkeepers. You don't craft items yourself but earn a living by buying and selling the works of others (or the raw materials artisans need to practice their craft). Your guild might be a large merchant consortium (or family) with interests across the region. Perhaps you transported goods from one place to another, by ship, wagon, or caravan, or bought them from traveling traders and sold them in your own little shop. In some ways, the traveling merchant's life lends itself to adventure far more than the life of an artisan.",
    flavorText:
      "You belong to a guild of traders, caravan masters, or shopkeepers.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in Insight and Persuasion.",
    toolProficiencyDescription: "You are proficient with Navigator's tools.",
    skillProficiencies: {
      default: [Skill.INSIGHT, Skill.PERSUASION],
    },
    toolProficiencies: {
      default: [toolIds.navigatorsTools],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A ${i(itemIds.paper, "letter")} of introduction from your guild`,
      `A set of ${i(itemIds.travelersClothes, "traveler's clothes")}`,
      "A mule and a cart",
      `A ${i(itemIds.pouch, "pouch")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Guild Merchants understand the value of hard work and the importance of community, but they're vulnerable to sins of greed and covetousness.",
    traits: [
      "I believe that anything worth doing is worth doing right. I can't help it – I'm a perfectionist.",
      "I'm a snob who looks down on those who can't appreciate fine art.",
      "I always want to know how things work and what makes people tick.",
      "I'm full of witty aphorisms and have a proverb for every occasion.",
      "I'm rude to people who lack my commitment to hard work and fair play.",
      "I like to talk at length about my profession.",
      "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
      "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
    ],
    ideals: [
      "**Community.** It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
      "**Generosity.** My talents were given to me so that I could use them to benefit the world. (Good)",
      "**Freedom.** Everyone should be free to pursue his or her own livelihood. (Chaotic)",
      "**Greed.** I'm only in it for the money. (Evil)",
      "**People.** I'm committed to the people I care about, not to ideals. (Neutral)",
      "**Aspiration.** I work hard to be the best there is at my craft. (Any)",
    ],
    bonds: [
      "The workshop where I learned my trade is the most important place in the world to me.",
      "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
      "I owe my guild a great debt for forging me into the person I am today.",
      "I pursue wealth to secure someone's love.",
      "One day I will return to my guild and prove that I am the greatest artisan of them all.",
      "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
    ],
    flaws: [
      "I'll do anything to get my hands on something rare or priceless.",
      "I'm quick to assume that someone is trying to cheat me.",
      "No one must ever learn that I once stole money from guild coffers.",
      "I'm never satisfied with what I have – I always want more.",
      "I would kill to acquire a noble title.",
      "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
    ],
  },
  {
    id: 22,
    name: "Haunted One",
    description:
      "You are haunted by something so terrible that you dare not speak of it. You’ve tried to bury it and run away from it, to no avail. Whatever this thing is that haunts you can’t be slain with a sword or banished with a spell. It might come to you as a shadow on the wall, a bloodcurdling nightmare, a memory that refuses to die, or a demonic whisper in the dark. The burden has taken its toll, isolating you from most people and making you question your sanity. You must find a way to overcome it before it destroys you.",
    flavorText:
      "You are haunted by something so terrible that you dare not speak of it.",
    source: src.strahd,
    skillProficiencyDescription:
      "Choose two from Arcana, Investigation, Religion, or Survival.",
    skillProficiencies: {
      choices: [
        {
          numberOfChoices: 2,
          options: [
            Skill.ARCANA,
            Skill.INVESTIGATION,
            Skill.RELIGION,
            Skill.SURVIVAL,
          ],
        },
      ],
    },
    languageProficiencyDescription:
      "Choose two languages, one of which being an exotic language (Abyssal, Celestial, Deep Speech, Draconic, Infernal, Primordial, Sylvan, or Undercommon)",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [
            Language.ABYSSAL,
            Language.CELESTIAL,
            Language.DEEP_SPEECH,
            Language.DRACONIC,
            Language.INFERNAL,
            Language.PRIMORDIAL,
            Language.SYLVAN,
            Language.UNDERCOMMON,
          ],
        },
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A ${i(itemIds.monsterHunterPack, "monster hunter's pack")}`,
      "A set of " + i(itemIds.commonClothes, "common clothes"),
      `One ${i(itemIds.trinket, "trinket")} of special significance.`,
      `A ${i(itemIds.pouch, "pouch")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "You have learned to live with the terror that haunts you. You are a survivor, who can be very protective of those who bring light into your darkened life.",
    traits: [
      "I don't run from evil. Evil runs from me.",
      "I like to read and memorize poetry. It keeps me calm and brings me fleeting moments of happiness.",
      "I spend money freely and live life to the fullest, knowing that tomorrow I might die.",
      "I live for the thrill of the hunt.",
      "I don’t talk about the thing that torments me. I’d rather not burden others with my curse.",
      "I expect danger around every corner.",
      "I refuse to become a victim, and I will not allow others to be victimized.",
      "I put no trust in divine beings.",
    ],
    ideals: [
      "**Selflessness.** I try to help those in need, no matter what the personal cost. (Good)",
      "**Determination.** I’ll stop the spirits that haunt me or die trying. (Any)",
      "**Greater Good.** I kill monsters to make the world a safer place, and to exorcise my own demons. (Good)",
      "**Freedom.** I have a dark calling that puts me above the law. (Chaotic)",
      "**Logic.** I like to know my enemy’s capabilities and weaknesses before rushing into battle. (Lawful)",
      "**Destruction.** I’m a monster that destroys other monsters, and anything else that gets in my way. (Evil)",
    ],
    bonds: [
      "I have certain rituals that I must follow every day. I can never break them.",
      "I assume the worst in people.",
      "I feel no compassion for the dead. They’re the lucky ones.",
      "I have an addiction.",
      "I am a purveyor of doom and gloom who lives in a world without hope.",
      "I talk to spirits that no one else can see.",
    ],
    flaws: [
      "I keep my thoughts and discoveries in a journal. My journal is my legacy.",
      "I would sacrifice my life and my soul to protect the innocent.",
      "My torment drove away the person I love. I strive to win back the love I’ve lost.",
      "A terrible guilt consumes me. I hope that I can find redemption through my actions.",
      "There’s evil in me, I can feel it. It must never be set free.",
      "I have a child to protect. I must make the world a safer place for them.",
    ],
  },
  {
    id: 23,
    name: "Hermit",
    description:
      "You lived in seclusion – either in a sheltered community such as a monastery, or entirely alone – for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.",
    flavorText:
      "You lived in seclusion – either in a sheltered community such as a monastery, or entirely alone.",
    source: src.phb,
    skillProficiencyDescription: "You are proficient in Medicine and Religion.",
    skillProficiencies: {
      default: [Skill.MEDICINE, Skill.RELIGION],
    },
    toolProficiencyDescription: "You are proficient with an herbalism kit.",
    toolProficiencies: {
      default: [itemIds.herbalismKit],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A ${i(
        itemIds.caseMapOrScroll,
        "scroll case"
      )} stuffed full of notes from your studies or prayers`,
      `A ${i(itemIds.blanket, "winter blanket")}`,
      `A ${i(itemIds.commonClothes, "set of common clothes")}`,
      `An herbalism kit`,
      `5 ${i(itemIds.goldPiece, "gp")}`,
    ],
    equipment: {
      default: [
        { item: itemIds.caseMapOrScroll, quantity: 1 },
        { item: itemIds.blanket, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.herbalismKit, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 5 },
      ],
    },
    suggestedCharacteristics:
      "Some hermits are well suited to a life of seclusion, whereas others chafe against it and long for company. Whether they embspecies solitude or long to escape it, the solitary life shapes their attitudes and ideals. A few are driven slightly mad by their years apart from society.",
    traits: [
      "I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
      "I am utterly serene, even in the face of disaster.",
      "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
      "I feel tremendous empathy for all who suffer.",
      "I'm oblivious to etiquette and social expectations.",
      "I connect everything that happens to me to a grand, cosmic plan.",
      "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
      "I am working on a grand philosophical theory and love sharing my ideas.",
    ],
    ideals: [
      "**Greater Good.** My gifts are meant to be shared with all, not used for my own benefit. (Good)",
      "**Logic.** Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)",
      "**Free Thinking.** Inquiry and curiosity are the pillars of progress. (Chaotic)",
      "**Power.** Solitude and contemplation are paths toward mystical or magical power. (Evil)",
      "**Live and Let Live.** Meddling in the affairs of others only causes trouble. (Neutral)",
      "**Self-Knowledge.** If you know yourself, there's nothing left to know. (Any)",
    ],
    bonds: [
      "Nothing is more important than the other members of my hermitage, order, or association.",
      "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
      "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
      "I entered seclusion because I loved someone I could not have.",
      "Should my discovery come to light, it could bring ruin to the world.",
      "My isolation gave me great insight into a great evil that only I can destroy.",
    ],
    flaws: [
      "Now that I've returned to the world, I enjoy its delights a little too much.",
      "I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
      "I am dogmatic in my thoughts and philosophy.",
      "I let my need to win arguments overshadow friendships and harmony.",
      "I'd risk too much to uncover a lost bit of knowledge.",
      "I like keeping secrets and won't share them with anyone.",
    ],
  }, //skip because too many tool proficiencies
  // {
  //   id: 24,
  //   name: "House Agent",
  //   description:
  //     "You have sworn fealty to a dragonmarked house. If you have a dragonmark, you're likely a member of one of the house's influential families; otherwise you're an outsider who hopes to make your fortune through the house. Your main task is to serve as the eyes of your house, but you could be called on at any time to act as its hand. Such missions can be perilous but lucrative.",
  //     source: src.eberon,
  //   skillProficiencyDescription: "You are proficient in Investigation and Persuasion.",
  //   skillProficiencies: {
  //     default: [Skill.INVESTIGATION, Skill.PERSUASION],
  //   },

  // },
  {
    id: 25,
    name: "Inheritor",
    description:
      "You are the heir to something of great value – not mere coin or wealth, but an object that has been entrusted to you and you alone. Your inheritance might have come directly to you from a member of your family, by right of birth, or it could have been left to you by a friend, a mentor, a teacher, or someone else important in your life. The revelation of your inheritance changed your life, and might have set you on the path to adventure, but it could also come with many dangers, including those who covet your gift and want to take it from you – by force, if need be.",
    flavorText: "You are the heir to something of great value.",
    source: src.sword,
    skillProficiencyDescription:
      "You are proficient in Survival, plus one from among Arcana, History, and Religion.",
    skillProficiencies: {
      default: [Skill.SURVIVAL],
      choices: [
        {
          numberOfChoices: 1,
          options: [Skill.ARCANA, Skill.HISTORY, Skill.RELIGION],
        },
      ],
    },
    toolProficiencyDescription:
      "You are proficient with one type of gaming set or a musical instrument.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...instrumentIds, ...gamingKitIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You can speak, read, and write one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `Your inheritance`,
      `A ${i(itemIds.travelersClothes, "set of traveler's clothes")}`,
      `The tool you choose for this background’s tool proficiency`,
      `A ${i(itemIds.pouch, "pouch")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...instrumentItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...gamingKitItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Use the tables for the Folk Hero background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.\n\nYour bond might be directly related to your inheritance, or to the person from whom you received it. Your ideal might be influenced by what you know about your inheritance, or by what you intend to do with your gift once you realize what it is capable of.\n\n*Editor's Note: I added the Folk Hero tables below for your convenience.*",
    traits: [
      "I'm earnest and uncommonly direct.",
      "I strive to have no personality—it's easier to forget what's hardly there.",
      "I sleep just as much as I need to and on an unusual schedule.",
      "I treasure a memento of a person or instance that set me upon my path.",
      "I cultivate a single obscure hobby or study and eagerly discuss it at length.",
      "I am ever learning how to be among others—when to stay quiet, when to laugh.",
      "I behave like an extreme opposite of my persona.",
      "I think far ahead, a detachedness often mistaken for daydreaming.",
    ],
    ideals: [
      "**Security.** Doing what must be done can't bring the innocent to harm. (Lawful)",
      "**Confusion.** Deception is a weapon. Strike from where your foes won't expect. (Chaotic)",
      "**Infamy.** My name will be a malediction, a curse that fulfills my will. (Evil)",
      "**Incorruptability.** Be a symbol, and leave your flawed being behind. (Any)",
      "**Justice.** Place in society shouldn't determine one's access to what is right. (Good)",
    ],
    bonds: [
      "I do everything for my family. My first thought is keeping them safe.",
      "What I do, I do for the world. The people don't realize how much they need me.",
      "I've seen too many in need. I must not fail them as everyone else has.",
      "I stand in opposition, lest the wicked go unopposed.",
      "I am exceptional. I do this because no one else can, and no one can stop me.",
      "I do everything for those who were taken from me.",
    ],
    flaws: [
      "I an callous about death. It comes to us all eventually.",
      "I never make eye contact or hold it unflinchingly.",
      "I have no sense of humor. Laughing is uncomfortable and embarrassing.",
      "I overexert myself, sometimes needing to recuperate for a day or more.",
      "I think far ahead, a detachedness often mistaken for daydreaming.",
      "I see morality entirely in black and white.",
    ],
  },
  {
    id: 26,
    name: "Investigator",
    description:
      "Rarer than watch or patrol members are a community's investigators, who are responsible for solving crimes after the fact. Though such folk are seldom found in rural areas, nearly every settlement of decent size has at least one or two watch members who have the skill to investigate crime scenes and track down criminals.",
    flavorText: "You are responsible for solving crimes after the fact.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in Investigation and Insight",
    skillProficiencies: {
      default: [Skill.INVESTIGATION, Skill.INSIGHT],
    },
    languageProficiencyDescription:
      "You are proficient in two languages of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 2,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A ${i(
        itemIds.uniform,
        "uniform"
      )} in the style of your unit and indicative of your rank`,
      `A ${i(itemIds.horn, "horn")} with which to summon help`,
      "A set of " + i(itemIds.manacles, "manacles"),
      `A ${i(itemIds.pouch, "pouch")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Use the tables for the soldier background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.\n\nYour bond is likely associated with your fellow watch members or the watch organization itself and almost certainly concerns your community. Your ideal probably involves the fostering of peace and safety. An investigator is likely to have an ideal connected to achieving justice by successfully solving crimes.n\n*Editor's Note: I added the tables for the soldier background here for your convenience.*",
    traits: [
      "I'm always polite and respectful.",
      "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
      "I've lost too many friends, and I'm slow to make new ones.",
      "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
      "I can stare down a hell hound without flinching.",
      "I enjoy being strong and like breaking things.",
      "I have a crude sense of humor.",
      "I face problems head-on. A simple, direct solution is the best path to success.",
    ],
    ideals: [
      "**Greater Good.** Our lot is to lay down our lives in defense of others. (Good)",
      "**Responsibility.** I do what I must and obey just authority. (Lawful)",
      "**Independence.** When people follow orders blindly, they embspecies a kind of tyranny. (Chaotic)",
      "**Might.** In life as in war, the stronger force wins. (Evil)",
      "**Live and Let Live.** Ideals aren't worth killing over or going to war for. (Neutral)",
      "**Nation.** My city, nation, or people are all that matter. (Any)",
    ],
    bonds: [
      "I would still lay down my life for the people I served with.",
      "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
      "My honor is my life.",
      "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
      "Those who fight beside me are those worth dying for.",
      "I fight for those who cannot fight for themselves.",
    ],
    flaws: [
      "The monstrous enemy we faced in battle still leaves me quivering with fear.",
      "I have little respect for anyone who is not a proven warrior.",
      "I made a terrible mistake in battle that cost many lives – and I would do anything to keep that mistake secret.",
      "My hatred of my enemies is blind and unreasoning.",
      "I obey the law, even if the law causes misery.",
      "I'd rather eat my armor than admit when I'm wrong.",
    ],
  },
  {
    id: 27,
    name: "Investigator (VRGR)",
    description:
      "You relentlessly seek the truth. Perhaps you're motivated by belief in the law and a sense of universal justice, or maybe that very law has failed you and you seek to make things right. You could have witnessed something remarkable or terrible, and now you must know more about this hidden truth. Or maybe you're a detective for hire, uncovering secrets for well-paying clients. Whether the mysteries you're embroiled in are local crimes or realm-spanning conspiracies, you're driven by a personal need to hunt down even the most elusive clues and reveal what others would keep hidden in the shadows.",
    flavorText: "You relentlessly seek the truth.",
    source: src.ravenloft,
    skillProficiencyDescription:
      "Choose two from among Insight, Investigation, or Perception",
    skillProficiencies: {
      choices: [
        {
          numberOfChoices: 2,
          options: [Skill.INSIGHT, Skill.INVESTIGATION, Skill.PERCEPTION],
        },
      ],
    },
    toolProficiencyDescription:
      "You are proficient with Disguise kits and thieves' tools.",
    toolProficiencies: {
      default: [itemIds.disguiseKit, itemIds.thievesTools],
    },
    equipmentDescription: [
      `A ${i(itemIds.disguiseKit, "magnifying glass")}`,
      `${i(itemIds.trinket, "Evidence from a past case")}`,
      `10 ${i(itemIds.goldPiece, "gp")}`,
      `A ${i(itemIds.commonClothes, "set of common clothes")}`,
    ],
    equipment: {
      default: [
        { item: itemIds.magnifyingGlass, quantity: 1 },
        { item: itemIds.trinket, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
        { item: itemIds.commonClothes, quantity: 1 },
      ],
    },
  },
  {
    id: 28,
    name: "Knight",
    description:
      "A knighthood is among the lowest noble titles in most societies, but it can be a path to higher status. ",
    flavorText:
      "A knighthood is among the lowest noble titles in most societies.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in History and Persuasion.",
    skillProficiencies: {
      default: [Skill.HISTORY, Skill.PERSUASION],
    },
    toolProficiencyDescription: "You are proficient in one type of gaming set.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `A ${i(itemIds.signetRing, "signet ring")}`,
      `A scroll of pedigree`,
      `A ${i(itemIds.pouch, "purse")} containing 25 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Knights use the suggested characteristics for the Noble background.",
    traits: [
      "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
      "The common folk love me for my kindness and generosity.",
      "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
      "I take great pains to always look my best and follow the latest fashions.",
      "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
      "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
      "My favor, once lost, is lost forever.",
      "If you do me an injury, I will crush you, ruin your name, and salt your fields.",
    ],

    ideals: [
      "**Respect.** Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
      "**Responsibility.** It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
      "**Independence.** I must prove that I can handle myself without the coddling of my family. (Chaotic)",
      "**Power.** If I can attain more power, no one will tell me what to do. (Evil)",
      "**Family.** Blood runs thicker than water. (Any)",
      "**Noble Obligation.** It is my duty to protect and care for the people beneath me. (Good)",
    ],

    bonds: [
      "I will face any challenge to win the approval of my family.",
      "My house's alliance with another noble family must be sustained at all costs.",
      "Nothing is more important than the other members of my family.",
      "I am in love with the heir of a family that my family despises.",
      "My loyalty to my sovereign is unwavering.",
      "The common folk must see me as a hero of the people.",
    ],

    flaws: [
      "I secretly believe that everyone is beneath me.",
      "I hide a truly scandalous secret that could ruin my family forever.",
      "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
      "I have an insatiable desire for carnal pleasures.",
      "In fact, the world does revolve around me.",
      "By my words and actions, I often bring shame to my family.",
    ],
  },
  {
    id: 29,
    name: "Knight of the Order",
    description: `You belong to an order of knights who have sworn oaths to achieve a certain goal. The nature of this goal depends on the order you serve, but in your eyes it is without question a vital and honorable endeavor. Faerûn has a wide variety of knightly orders, all of which have a similar outlook concerning their actions and responsibilities.\n\nThough the term "knight" conjures ideas of mounted, heavily armored warriors of noble blood, most knightly orders in Faerûn don't restrict their membership to such individuals. The goals and philosophies of the order are more important than the gear and fighting style of its members, and so most of these orders aren't limited to fighting types, but are open to all sorts of folk who are willing to battle and die for the order's cause.\n\nThe "Knightly Orders of Faerûn" section below details several of the orders that are active at present and is designed to help inform your decision about which group you owe allegiance to.`,
    flavorText:
      "You belong to an order of knights who have sworn oaths to achieve a certain goal.",
    source: src.sword,
    skillProficiencyDescription:
      "You are proficient in Persuasion, plus one from among Arcana, History, Nature, and Religion, as appropriate for your order.",
    skillProficiencies: {
      default: [Skill.PERSUASION],
      choices: [
        {
          numberOfChoices: 1,
          options: [Skill.ARCANA, Skill.HISTORY, Skill.NATURE, Skill.RELIGION],
        },
      ],
    },
    toolProficiencyDescription:
      "You are proficient in one type of gaming set or musical instrument.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds, ...instrumentIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A set of ${i(itemIds.travelersClothes, "travelers clothes")}`,
      `A ${i(
        itemIds.signetRing,
        "signet"
      )}, banner, or seal representing your rank in the order`,
      `A ${i(itemIds.pouch, "purse")} containing 25 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 25 },
        { item: itemIds.signetRing, quantity: 1 },
      ],
    },
    suggestedCharacteristics:
      "Use the tables for the Soldier background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.\n\nYour bond almost always involves the order to which you belong (or at least key members of it), and it is highly unusual for a knight's ideal not to reflect the agenda, sentiment, or philosophy of one's order.\n\n*Editor's Note: I added the tables for the soldier background here for your convenience.*",
    traits: [
      "I'm always polite and respectful.",
      "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
      "I've lost too many friends, and I'm slow to make new ones.",
      "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
      "I can stare down a hell hound without flinching.",
      "I enjoy being strong and like breaking things.",
      "I have a crude sense of humor.",
      "I face problems head-on. A simple, direct solution is the best path to success.",
    ],
    ideals: [
      "**Greater Good.** Our lot is to lay down our lives in defense of others. (Good)",
      "**Responsibility.** I do what I must and obey just authority. (Lawful)",
      "**Independence.** When people follow orders blindly, they embspecies a kind of tyranny. (Chaotic)",
      "**Might.** In life as in war, the stronger force wins. (Evil)",
      "**Live and Let Live.** Ideals aren't worth killing over or going to war for. (Neutral)",
      "**Nation.** My city, nation, or people are all that matter. (Any)",
    ],
    bonds: [
      "I would still lay down my life for the people I served with.",
      "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
      "My honor is my life.",
      "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
      "Those who fight beside me are those worth dying for.",
      "I fight for those who cannot fight for themselves.",
    ],
    flaws: [
      "The monstrous enemy we faced in battle still leaves me quivering with fear.",
      "I have little respect for anyone who is not a proven warrior.",
      "I made a terrible mistake in battle that cost many lives – and I would do anything to keep that mistake secret.",
      "My hatred of my enemies is blind and unreasoning.",
      "I obey the law, even if the law causes misery.",
      "I'd rather eat my armor than admit when I'm wrong.",
    ],
  },
  {
    id: 30,
    name: "Marine",
    description:
      "You were trained for battle on sandy beaches and rocky shores. You have launched midnight raids from swift ships whose names evoke terror in the hearts of your adversaries. The water is your second home, the rain your shelter, and the crashing waves your battle cry.",
    flavorText:
      "You were trained for battle on sandy beaches and rocky shores.",
    source: src.saltmarsh,
    skillProficiencyDescription:
      "You are proficient in Athletics and Perception.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.PERCEPTION],
    },
    toolProficiencyDescription:
      "You are proficient with land and water vehicles.",
    toolProficiencies: {
      default: [toolIds.waterVehicle, toolIds.landVehicles],
    },
    equipmentDescription: [
      `A ${i(itemIds.dagger, "dagger")} that belonged to a fallen comrade`,
      `A folded rag emblazoned with the symbol of your ship or company`,
      `A set of ${i(itemIds.travelersClothes, "traveler's clothes")}`,
      `A ${i(itemIds.pouch, "purse")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Marines are looked up to by other soldiers and respected by their superiors. They are veteran warriors who rarely lose composure on the battlefield. Marines who leave the service tend to work as mercenaries, but their combat experience also makes them excellent adventurers. Though they are self-reliant, marines tend to operate best in groups, valuing camaraderie and the companionship of like-minded individuals.",
    traits: [
      "I speak rarely but mean every word I say.",
      "I laugh loudly and see the humor in stressful situations.",
      "I prefer to solve problems without violence, but I finish fights decisively.",
      "I enjoy being out in nature; poor weather never sours my mood.",
      "I am dependable.",
      "I am always working on some project or other.",
      "I become cantankerous and quiet in the rain.",
      "When the sea is within my sight, my mood is jovial and optimistic.",
    ],

    ideals: [
      "**Teamwork.** Success depends on cooperation and communication. (Good)",
      "**Code.** The marines' code provides a solution for every problem, and following it is imperative. (Lawful)",
      "**Embracing.** Life is messy. Throwing yourself into the worst of it is necessary to get the job done. (Chaotic)",
      "**Might.** The strong train so that they might rule those who are weak. (Evil)",
      "**Bravery.** To act when others quake in fear- this is the essence of the warrior. (Any)",
      "**Perseverance.** No injury or obstacle can turn me from my goal. (Any)",
    ],

    bonds: [
      "I face danger and evil to offset an unredeemable act in my past.",
      "I. Will. Finish. The. Job.",
      "I must set an example of hope for those who have given up.",
      "I'm searching for a fellow marine captured by an elusive enemy.",
      "Fear leads to tyranny, and both must be eradicated.",
      "My commander betrayed my unit, and I will have revenge.",
    ],

    flaws: [
      "I grow combative and unpredictable when I drink.",
      "I find civilian life difficult and struggle to say the right thing in social situations.",
      "My intensity can drive others away.",
      "I hold grudges and have difficulty forgiving others.",
      "I become irrational when innocent people are hurt.",
      "I sometimes stay up all night listening to the ghosts of my fallen enemies.",
    ],
  },
  {
    id: 31,
    name: "Mercenary Veteran",
    description: `As a sell-sword who fought battles for coin, you're well acquainted with risking life and limb for a chance at a share of treasure. Now, you look forward to fighting foes and reaping even greater rewards as an adventurer. Your experience makes you familiar with the ins and outs of mercenary life, and you likely have harrowing stories of events on the battlefield. You might have served with a large outfit such as the Zhentarim or the soldiers of Mintarn, or a smaller band of sell-swords, maybe even more than one. See the "Mercenaries of the North" section below for a collection of possibilities.\n\nNow you're looking for something else, perhaps greater reward for the risks you take, or the freedom to choose your own activities. For whatever reason, you're leaving behind the life of a soldier for hire, but your skills are undeniably suited for battle, so now you fight on in a different way.`,
    flavorText:
      "As a sell-sword who fought battles for coin, you're well acquainted with risking life and limb for a chance at a share of treasure.",
    source: src.sword,
    skillProficiencyDescription:
      "You are proficient in Athletics and Persuasion.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.PERSUASION],
    },
    toolProficiencyDescription:
      "You are proficient with one type of gaming set and land vehicles.",
    toolProficiencies: {
      default: [toolIds.landVehicles],
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds],
        },
      ],
    },
    equipmentDescription: [
      `An insignia of your rank`,
      `A uniform of your company (${i(
        itemIds.travelersClothes,
        "traveler's clothes"
      )} in quality)`,
      "A gaming set of your choice",
      `A ${i(
        itemIds.pouch,
        "pouch"
      )} containing the remainder of your last wages (10${i(
        itemIds.goldPiece,
        "gp"
      )})`,
    ],
    equipment: {
      default: [
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...gamingKitItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Use the tables for the Soldier background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.\n\nYour bond could be associated with the company you traveled with previously, or with some of the comrades you served with. The ideal you embspecies largely depends on your worldview and your motivation for fighting.\n\n*Editor's Note: I added the tables for the soldier background here for your convenience.*",
    traits: [
      "I'm always polite and respectful.",
      "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
      "I've lost too many friends, and I'm slow to make new ones.",
      "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
      "I can stare down a hell hound without flinching.",
      "I enjoy being strong and like breaking things.",
      "I have a crude sense of humor.",
      "I face problems head-on. A simple, direct solution is the best path to success.",
    ],
    ideals: [
      "**Greater Good.** Our lot is to lay down our lives in defense of others. (Good)",
      "**Responsibility.** I do what I must and obey just authority. (Lawful)",
      "**Independence.** When people follow orders blindly, they embspecies a kind of tyranny. (Chaotic)",
      "**Might.** In life as in war, the stronger force wins. (Evil)",
      "**Live and Let Live.** Ideals aren't worth killing over or going to war for. (Neutral)",
      "**Nation.** My city, nation, or people are all that matter. (Any)",
    ],
    bonds: [
      "I would still lay down my life for the people I served with.",
      "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
      "My honor is my life.",
      "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
      "Those who fight beside me are those worth dying for.",
      "I fight for those who cannot fight for themselves.",
    ],
    flaws: [
      "The monstrous enemy we faced in battle still leaves me quivering with fear.",
      "I have little respect for anyone who is not a proven warrior.",
      "I made a terrible mistake in battle that cost many lives – and I would do anything to keep that mistake secret.",
      "My hatred of my enemies is blind and unreasoning.",
      "I obey the law, even if the law causes misery.",
      "I'd rather eat my armor than admit when I'm wrong.",
    ],
  },
  {
    id: 32,
    name: "Noble",
    description:
      "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them.\n\nWork with your DM to come up with an appropriate title and determine how much authority that title carries. A noble title doesn't stand on its own-it's connected to an entire family, and whatever title you hold, you will pass it down to your own children. Not only do you need to determine your noble title, but you should also work with the DM to describe your family and their influence on you.\n\nIs your family old and established, or was your title only recently bestowed? How much influence do they wield, and over what area? What kind of reputation does your family have among the other aristocrats of the region? How do the common people regard them?\n\nWhat's your position in the family? Are you the heir to the head of the family? Have you already inherited the title? How do you feel about that responsibility? Or are you so far down the line of inheritance that no one cares what you do, as long as you don't embarrass the family? How does the head of your family feel about your adventuring career? Are you in your family's good graces, or shunned by the rest of your family?\n\nDoes your family have a coat of arms? An insignia you might wear on a signet ring? Particular colors you wear all the time? An animal you regard as a symbol of your line or even a spiritual member of the family?",
    flavorText:
      "You carry a noble title, and your family owns land, collects taxes, and wields significant political influence.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in History and Persuasion.",
    skillProficiencies: {
      default: [Skill.HISTORY, Skill.PERSUASION],
    },
    toolProficiencyDescription:
      "You are proficient with one type of gaming set.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `A ${i(itemIds.signetRing, "signet ring")}.`,
      `A ${i(itemIds.paper, "scroll")} of pedigree`,
      `A ${i(itemIds.pouch, "purse")} containing 25 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Nobles are born and raised to a very different lifestyle than most people ever experience, and their personalities reflect that upbringing. A noble title comes with a plethora of bonds –responsibilities to family, to other nobles (including the sovereign), to the people entrusted to the family's care, or even to the title itself. But this responsibility is often a good way to undermine a noble.",
    traits: [
      "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
      "The common folk love me for my kindness and generosity.",
      "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
      "I take great pains to always look my best and follow the latest fashions.",
      "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
      "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
      "My favor, once lost, is lost forever.",
      "If you do me an injury, I will crush you, ruin your name, and salt your fields.",
    ],

    ideals: [
      "**Respect.** Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
      "**Responsibility.** It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
      "**Independence.** I must prove that I can handle myself without the coddling of my family. (Chaotic)",
      "**Power.** If I can attain more power, no one will tell me what to do. (Evil)",
      "**Family.** Blood runs thicker than water. (Any)",
      "**Noble Obligation.** It is my duty to protect and care for the people beneath me. (Good)",
    ],

    bonds: [
      "I will face any challenge to win the approval of my family.",
      "My house's alliance with another noble family must be sustained at all costs.",
      "Nothing is more important than the other members of my family.",
      "I am in love with the heir of a family that my family despises.",
      "My loyalty to my sovereign is unwavering.",
      "The common folk must see me as a hero of the people.",
    ],

    flaws: [
      "I secretly believe that everyone is beneath me.",
      "I hide a truly scandalous secret that could ruin my family forever.",
      "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
      "I have an insatiable desire for carnal pleasures.",
      "In fact, the world does revolve around me.",
      "By my words and actions, I often bring shame to my family.",
    ],
  },
  {
    id: 33,
    name: "Outlander",
    description:
      "You grew up in the wilds, far from civilization and the comforts of town and technology. You've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don't know the specific features of the terrain, you know the ways of the wild.",
    flavorText:
      "You grew up in the wilds, far from civilization and the comforts of town and technology.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in Athletics and Survival.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.SURVIVAL],
    },
    toolProficiencyDescription:
      "You are proficient with one type of musical instrument.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...instrumentIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You can speak, read, and write one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A ${i(itemIds.staff, "staff")}`,
      `A ${i(itemIds.huntingTrap, "hunting trap")}`,
      `A trophy from an animal you killed`,
      `A set of ${i(itemIds.travelersClothes, "traveler's clothes")}`,
      `A ${i(itemIds.pouch, "purse")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Often considered rude and uncouth among civilized folk, outlanders have little respect for the niceties of life in the cities. The ties of tribe, clan, family, and the natural world of which they are a part are the most important bonds to most outlanders.",
    traits: [
      "I'm driven by a wanderlust that led me away from home.",
      "I watch over my friends as if they were a litter of newborn pups.",
      "I once ran twenty-five miles without stopping to warn my clan of an approaching orc horde. I'd do it again if I had to.",
      "I have a lesson for every situation, drawn from observing nature.",
      "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
      "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
      "I feel far more comfortable around animals than people.",
      "I was, in fact, raised by wolves.",
    ],

    ideals: [
      "**Change.** Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
      "**Greater Good.** It is each person's responsibility to make the most happiness for the whole tribe. (Good)",
      "**Honor.** If I dishonor myself, I dishonor my whole clan. (Lawful)",
      "**Might.** The strongest are meant to rule. (Evil)",
      "**Nature.** The natural world is more important than all the constructs of civilization. (Neutral)",
      "**Glory.** I must earn glory in battle, for myself and my clan. (Any)",
    ],

    bonds: [
      "My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
      "An injury to the unspoiled wilderness of my home is an injury to me.",
      "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
      "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
      "I suffer awful visions of a coming disaster and will do anything to prevent it.",
      "It is my duty to provide children to sustain my tribe.",
    ],

    flaws: [
      "I am too enamored of ale, wine, and other intoxicants.",
      "There's no room for caution in a life lived to the fullest.",
      "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
      "I am slow to trust members of other races, tribes, and societies.",
      "Violence is my answer to almost any challenge.",
      "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish.",
    ],
  },
  {
    id: 34,
    name: "Pirate",
    description:
      "You spent your youth under the sway of a dread pirate, a ruthless cutthroat who taught you how to survive in a world of sharks and savages. You've indulged in larceny on the high seas and sent more than one deserving soul to a briny grave. Fear and bloodshed are no strangers to you, and you've garnered a somewhat unsavory reputation in many a port town.",
    flavorText:
      "You spent your youth under the sway of a dread pirate, a ruthless cutthroat who taught you how to survive in a world of sharks and savages.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in Athletics and Perception.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.PERCEPTION],
    },
    toolProficiencyDescription:
      "You are proficient with navigator's tools and water vehicles.",
    toolProficiencies: {
      default: [toolIds.navigatorsTools, toolIds.waterVehicle],
    },
    equipmentDescription: [
      `A ${i(itemIds.club, "belaying pin")} (club)`,
      `A ${i(itemIds.silkRope, "50 feet of silk rope")}`,
      `A ${i(itemIds.trinket, "lucky charm")} (trinket)`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "purse")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Sailors can be a rough lot, but the responsibilities of life on a ship make them generally reliable as well. Life aboard a ship shapes their outlook and forms their most important attachments.",
    traits: [
      "My friends know they can rely on me, no matter what.",
      "I work hard so that I can play hard when the work is done.",
      "I enjoy sailing into new ports and making new friends over a flagon of ale.",
      "I stretch the truth for the sake of a good story.",
      "To me, a tavern brawl is a nice way to get to know a new city.",
      "I never pass up a friendly wager.",
      "My language is as foul as an otyugh nest.",
      "I like a job well done, especially if I can convince someone else to do it.",
    ],

    ideals: [
      "**Respect.** The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
      "**Fairness.** We all do the work, so we all share in the rewards. (Lawful)",
      "**Freedom.** The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)",
      "**Mastery.** I'm a predator, and the other ships on the sea are my prey. (Evil)",
      "**People.** I'm committed to my crewmates, not to ideals. (Neutral)",
      "**Aspiration.** Someday I'll own my own ship and chart my own destiny. (Any)",
    ],

    bonds: [
      "I'm loyal to my captain first, everything else second.",
      "The ship is most important – crewmates and captains come and go.",
      "I'll always remember my first ship.",
      "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
      "I was cheated out of my fair share of the profits, and I want to get my due.",
      "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.",
    ],

    flaws: [
      "I follow orders, even if I think they're wrong.",
      "I'll say anything to avoid having to do extra work.",
      "Once someone questions my courage, I never back down no matter how dangerous the situation.",
      "Once I start drinking, it's hard for me to stop.",
      "I can't help but pocket loose coins and other trinkets I come across.",
      "My pride will probably lead to my destruction.",
    ],
  },
  {
    id: 35,
    name: "Rewarded",
    description:
      "You were living a difficult life before your destiny suddenly changed through a miraculous turn of good fortune. Perhaps a benevolent deity gave you precisely what you most desired. You might have stumbled across a Deck of Many Things and drawn a card with a potent, positive effect. Or maybe you inherited a modest fortune from a distant relative you didn’t know you had.\n\nRegardless, you left the daily miseries of your old life behind in favor of a life of adventure and excitement. Your old debts have been paid, responsibilities you thought inescapable are behind you, or you suddenly possess rare and unusual skills unknown to ordinary folk.",
    flavorText:
      "You were living a difficult life before your destiny suddenly changed through a miraculous turn of good fortune.",
    source: src.manyThings,
    skillProficiencyDescription:
      "You are proficient in Inisght and Persuasion.",
    skillProficiencies: {
      default: [Skill.INSIGHT, Skill.PERSUASION],
    },
    toolProficiencyDescription:
      "You are proficient with one gaming set of your choice",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A ${i(itemIds.fineClothes, "set of fine clothes")}`,
      `A ${i(itemIds.signetRing, "signet ring")}`,
      `A ${i(itemIds.ink, "bottle of black ink")}`,
      `An ${i(itemIds.inkPen, "ink pen")}`,
      `Five sheets of ${i(itemIds.paper, "paper")}`,
      `A ${i(itemIds.gamingKit, "gaming set")} matching your proficiency`,
      `A ${i(itemIds.pouch, "purse")} containing 18 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Rewarded characters have varied histories, but they have one thing in common: they were down on their luck before their lives abruptly turned around. They might have given up all hope of a happier life, only to suddenly get a second chance. A rewarded character has often spent many years struggling to escape painful circumstances. Now, extricated from the (sometimes literal) prison that was their former life, they throw their cares to the wind and become adventurers.\n\nIf your character’s life was changed by a Deck of Many Things, consider which card was responsible. Perhaps the Fates card undid a tragic mistake your character made in their youth. The Gem card could have wiped out debts incurred over a lifetime. Maybe the Sage card provided the advice needed to escape a hopeless situation, the Star card increased an ability score to its current value, or a Wish spell cast after drawing the Moon card transformed your character from a peddler to a fledgling sorcerer infused with magic and new knowledge and skills. If you’re making a character at higher than 1st level, magic items they have could have been granted by the Key or Sun card.\n\nYour character’s perspective on life has changed thanks to their new destiny. The Rewarded Personality Traits table suggests traits you might adopt for your character and cards from the Deck of Many Things that might have prompted this trait.",
    traits: [
      "A safe home is a foundation on which anything else can be built. (Key, Throne)",
      "I was elevated to heights I could never otherwise attain, and I won’t waste my fortune. (Star, Sun)",
      "I try to be a source of inspiration and joy to others. Life is never as bad as you think! (Euryale, Jester)",
      "Courage and boldness can carry the day when all else fails. (Comet, Knight)",
      "My good fortune means I can lift others up as well. (Gem, Moon)",
      "Having the right answers is the first step to solving any problem, no matter how dire. (Fates, Sage)",
    ],
  },
  {
    id: 36,
    name: "Ruined",
    description:
      "Everything was going so well! You had a life of luxury, love, and comfort when you suddenly lost it all. Perhaps you were framed for crimes you didn’t commit and lost your reputation, fortune, and career. Maybe a rampaging dragon or another monster wiped out everything you had in a single calamitous afternoon. Or you might have sought out a Deck of Many Things, hoping to make your successful life even more glorious—only to draw a destructive card that changed your destiny forever.\n\nYour desperation has driven you to the career of adventurer. You don’t seek out dark dungeons and their monstrous inhabitants for excitement and glory; you do it because every other path is closed to you. But you have risen high on fortune’s wheel once before, and with luck and fortitude, you could do so again.",
    source: src.manyThings,
    flavorText:
      "You had a life of luxury, love, and comfort when you suddenly lost it all.",
    skillProficiencyDescription: "You are proficient in Survival and Stealth.",
    skillProficiencies: {
      default: [Skill.SURVIVAL, Skill.STEALTH],
    },
    toolProficiencyDescription:
      "You are proficient with one type of gaming set.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    //A cracked hourglass, a set of rusty manacles, a half-empty bottle, a hunting trap, a gaming set (matching your chosen proficiency), a set of traveler’s clothes, and a pouch containing 13 gp
    equipmentDescription: [
      `A ${i(itemIds.hourglass, "cracked hourglass")}`,
      `A set of ${i(itemIds.manacles, "rusty manacles")}`,
      `A ${i(itemIds.glassBottle, "half-empty bottle")}`,
      `A ${i(itemIds.huntingTrap, "hunting trap")}`,
      `A ${i(itemIds.gamingKit, "gaming set")} matching your proficiency`,
      `A set of ${i(itemIds.travelersClothes, "traveler's clothes")}`,
      `A ${i(itemIds.pouch, "purse")} containing 13 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.hourglass, quantity: 1 },
        { item: itemIds.manacles, quantity: 1 },
        { item: itemIds.glassBottle, quantity: 1 },
        { item: itemIds.huntingTrap, quantity: 1 },
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 13 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...gamingKitItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Ruined characters were on top of the world before misfortune struck. Many were wealthy. Others come from modest backgrounds, but they were surrounded by friends, family, and loved ones. They might have been famous, or simply never encountered serious hardship before. Some were born to privilege or rose to prominence through trickery or a false reputation. Now a Deck of Many Things—or another calamity—has knocked them down like a house of cards.\n\nIf your character’s life was ruined by a Deck of Many Things, consider which card was responsible. Perhaps your character was imprisoned for years by the Donjon or Void card, and now everyone they knew has died. Maybe your character drew the Rogue card, and the person closest to them—a spouse, child, or parent—turned against them. A devil unleashed by the Flames card might have destroyed their life. The Ruin or Talons card might have stolen the character’s material goods or saddled them with vast debt.\n\n Rising above misfortune shapes one’s perspective. The Ruined Personality Traits table suggests traits you might adopt for your character (and ruinous cards that might have prompted this trait).",
    traits: [
      "I’ve changed from my past, and I work to live up to my new path. (Balance, Throne)",
      "Every moment is a gift I refuse to squander. (Euryale, Skull)",
      "Now that I’ve overcome having nothing, I can survive anything. (Fool, Ruin, Talons)",
      "I know enemies are set against me, and I always prepare for the worst. (Flames, Rogue)",
      "I interpret every event as part of a larger pattern I just haven’t worked out yet. (Puzzle, Star)",
      "I must make up for so much time I’ve already lost. (Donjon, Void)",
    ],
  },
  {
    id: 37,
    name: "Rune Carver",
    description:
      "You’ve dedicated your life to studying runecraft. Whether you were taught by a master rune carver or learned by poring over ancient engravings, you can tap into the supernatural power held within runes.\n\nThe art of runecraft was initially created by giants, but over time, the practice has been adopted by many peoples. As such, though Giant runes are the most commonly used, many rune carvers incorporate symbols from their native languages into the craft.",
    flavorText: "You’ve dedicated your life to studying runecraft.",
    source: src.Bigby,
    skillProficiencyDescription:
      "You are proficient in History and Perception.",
    skillProficiencies: {
      default: [Skill.HISTORY, Skill.PERCEPTION],
    },
    toolProficiencyDescription:
      "You are proficient with one set of artisan's tools.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...artisanIds],
        },
      ],
    },
    languageProficiencyDescription: "You are proficient in Giant.",
    languageProficiencies: {
      default: [Language.GIANT],
    },

    equipmentDescription: [
      `A set of artisan's tools of your choice`,
      `A ${i(itemIds.dagger, "small knife")}`,
      `A ${i(itemIds.whetStone, "whetstone")}`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "purse")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.dagger, quantity: 1 },
        { item: itemIds.whetStone, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...artisanToolItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Scholarly pursuits, ancient mysteries, or a fateful encounter might inspire a character to pursue the secrets of a rune carver.\n\nThe Rune Carver Personality Traits table suggests a variety of traits you might adopt for your character.",

    traits: [
      "Is it practical to learn an ancient language that is rarely spoken? No. But is it fun? Very.",
      "I learned one of my ancestors was a lauded rune carver whose story was lost to time. I seek to rekindle that legacy.",
      "The old, traditional markings of runecraft look so boring. Why not give my runes some flair?",
      "In my studies of runes, I strive to understand how great civilizations of the past fell, so that I may prevent it from happening to societies of the present.",
      "Life may be a whirlwind of chaos around me, but whenever I create my runes, I feel at peace.",
      "My brain struggles to process ink words written on paper, but the tactile feeling of carved runes makes my mind sing.",
    ],
  },
  {
    id: 38,
    name: "Sage",
    description:
      "You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.",
    source: src.phb,
    flavorText: "You spent years learning the lore of the multiverse.",
    skillProficiencyDescription: "You are proficient in Arcana and History.",
    skillProficiencies: {
      default: [Skill.ARCANA, Skill.HISTORY],
    },
    languageProficiencyDescription:
      "You are proficient in two languages of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 2,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A bottle of ${i(itemIds.ink, "black ink")}`,
      `A ${i(itemIds.quill, "quill")}`,
      `A ${i(itemIds.smallKnife, "small knife")}`,
      `A ${i(
        itemIds.paper,
        "letter"
      )} from a dead colleague posing a question you have not yet been able to answer`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "purse")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Sages arc defined by their extensive studies, and their characteristics reflect this life of study. Devoted to scholarly pursuits, a sage values knowledge highly – sometimes in its own right, sometimes as a means toward other ideals.",
    traits: [
      "I use polysyllabic words that convey the impression of great erudition.",
      "I've read every book in the world's greatest libraries – or I like to boast that I have.",
      "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
      "There's nothing I like more than a good mystery.",
      "I'm willing to listen to every side of an argument before I make my own judgment.",
      "I… speak… slowly… when talking… to idiots,… which… almost… everyone… is… compared… to me.",
      "I am horribly, horribly awkward in social situations.",
      "I'm convinced that people are always trying to steal my secrets.",
    ],
    ideals: [
      "Knowledge. The path to power and self-improvement is through knowledge. (Neutral)",
      "Beauty. What is beautiful points us beyond itself toward what is true. (Good)",
      "Logic. Emotions must not cloud our logical thinking. (Lawful)",
      "No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
      "Power. Knowledge is the path to power and domination. (Evil)",
      "Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)",
    ],
    bonds: [
      "It is my duty to protect my students.",
      "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
      "I work to preserve a library, university, scriptorium, or monastery.",
      "My life's work is a series of tomes related to a specific field of lore.",
      "I've been searching my whole life for the answer to a certain question.",
      "I sold my soul for knowledge. I hope to do great deeds and win it back.",
    ],
    flaws: [
      "I am easily distracted by the promise of information.",
      "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
      "Unlocking an ancient mystery is worth the price of a civilization.",
      "I overlook obvious solutions in favor of complicated ones.",
      "I speak without really thinking through my words, invariably insulting others.",
      "I can't keep a secret to save my life, or anyone else's.",
    ],
  },
  {
    id: 39,
    name: "Sailor",
    description:
      "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new.\n\nDiscuss the nature of the ship you previously sailed with your DM. Was it a merchant ship, a naval vessel, a ship of discovery, or a pirate ship? How famous (or infamous) is it? Is it widely traveled? Is it still sailing, or is it missing and presumed lost with all hands?\n\nWhat were your duties on board – boatswain, captain, navigator, cook, or some other position? Who were the captain and first mate? Did you leave your ship on good terms with your fellows, or on the run?",
    flavorText: "You sailed on a seagoing vessel for years.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in Athletics and Perception.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.PERCEPTION],
    },
    toolProficiencyDescription:
      "You are proficient with navigator's tools and water vehicles.",
    toolProficiencies: {
      default: [toolIds.navigatorsTools, toolIds.waterVehicle],
    },
    // A belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5), a set of common clothes, and a pouch containing 10gp
    equipmentDescription: [
      `A ${i(itemIds.club, "belaying pin")} (club)`,
      `A ${i(itemIds.silkRope, "50 feet of silk rope")}`,
      `A ${i(itemIds.trinket, "lucky charm")} (trinket)`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "purse")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.club, quantity: 1 },
        { item: itemIds.silkRope, quantity: 1 },
        { item: itemIds.trinket, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
    },
    suggestedCharacteristics:
      "Sailors can be a rough lot, but the responsibilities of life on a ship make them generally reliable as well. Life aboard a ship shapes their outlook and forms their most important attachments.",
    traits: [
      "My friends know they can rely on me, no matter what.",
      "I work hard so that I can play hard when the work is done.",
      "I enjoy sailing into new ports and making new friends over a flagon of ale.",
      "I stretch the truth for the sake of a good story.",
      "To me, a tavern brawl is a nice way to get to know a new city.",
      "I never pass up a friendly wager.",
      "My language is as foul as an otyugh nest.",
      "I like a job well done, especially if I can convince someone else to do it.",
    ],
    ideals: [
      "Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
      "Fairness. We all do the work, so we all share in the rewards. (Lawful)",
      "Freedom. The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)",
      "Mastery. I'm a predator, and the other ships on the sea are my prey. (Evil)",
      "People. I'm committed to my crewmates, not to ideals. (Neutral)",
      "Aspiration. Someday I'll own my own ship and chart my own destiny. (Any)",
    ],
    bonds: [
      "I'm loyal to my captain first, everything else second.",
      "The ship is most important – crewmates and captains come and go.",
      "I'll always remember my first ship.",
      "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
      "I was cheated out of my fair share of the profits, and I want to get my due.",
      "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.",
    ],
    flaws: [
      "I follow orders, even if I think they're wrong.",
      "I'll say anything to avoid having to do extra work.",
      "Once someone questions my courage, I never back down no matter how dangerous the situation.",
      "Once I start drinking, it's hard for me to stop.",
      "I can't help but pocket loose coins and other trinkets I come across.",
      "My pride will probably lead to my destruction.",
    ],
  },
  {
    id: 40,
    name: "Shipwright",
    description:
      "You have sailed into war on the decks of great ships, patching their hulls with soup bowls and prayers. You once helped build a fishing vessel that single-handedly saved a town from starvation. You have seen a majestic prow in your dreams that you have not been able to replicate in wood. Since childhood, you have loved the water and have been captivated by the many vessels that travel on it.",
    source: src.saltmarsh,
    flavorText:
      "You have sailed into war on the decks of great ships, patching their hulls with soup bowls and prayers.",
    skillProficiencyDescription:
      "You are proficient in History and Perception.",
    skillProficiencies: {
      default: [Skill.HISTORY, Skill.PERCEPTION],
    },
    toolProficiencyDescription:
      "You are proficient with carpenter's tools and water vehicles.",
    toolProficiencies: {
      default: [toolIds.carpenterTools, toolIds.waterVehicle],
    },
    //A set of well-loved carpenter's tools, a blank book, 1 ounce of ink, an ink pen, a set of traveler's clothes, and a leather pouch with 10 gp
    equipmentDescription: [
      `A set of ${i(itemIds.carpentersTools, "carpenter's tools")}`,
      `A ${i(itemIds.book, "blank book")}`,
      `1 ounce of ${i(itemIds.ink, "ink")}`,
      `An ${i(itemIds.inkPen, "ink pen")}`,
      `A set of ${i(itemIds.travelersClothes, "traveler's clothes")}`,
      `A ${i(itemIds.pouch, "purse")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Shipwrights are resourceful carpenters and designers. They often have a dedicated spot at the local tavern, since shipwrights are invaluable to coastal communities. Some travel with naval fleets and might serve as officers if their temperament suits it. Shipwrights have an affinity for working with their hands and often perform feats of carpentry that others might deem miraculous.",
    traits: [
      "I love talking and being heard more than I like to listen.",
      "I'm extremely fond of puzzles.",
      "I thrive under pressure.",
      "I love sketching and designing objects, especially boats.",
      "I'm not afraid of hard work—in fact, I prefer it.",
      "A pipe, an ale, and the smell of the sea: paradise.",
      "I have an endless supply of cautionary tales related to the sea.",
      "I don't mind getting my hands dirty.",
    ],
    ideals: [
      "Crew. If everyone on deck pitches in, we'll never sink. (Good)",
      "Careful Lines. A ship must be balanced according to the laws of the universe. (Lawful)",
      "Invention. Make what you need out of whatever is at hand. (Chaotic)",
      "Perfection. To measure a being and find it lacking is the greatest disappointment. (Evil)",
      "Reflection. Muddied water always clears in time. (Any)",
      "Hope. The horizon at sea holds the greatest promise. (Any)",
    ],
    bonds: [
      "I must visit all the oceans of the world and behold the ships that sail there.",
      "Much of the treasure I claim will be used to enrich my community.",
      "I must find a kind of wood rumored to possess magical qualities.",
      "I repair broken things to redeem what's broken in myself.",
      "I will craft a boat capable of sailing through the most dangerous of storms.",
      "A kraken destroyed my masterpiece; its teeth shall adorn my hearth.",
    ],
    flaws: [
      "I don't know when to throw something away. You never know when it might be useful again.",
      "I get frustrated to the point of distraction by shoddy craftsmanship.",
      "Though I am an excellent crafter, my work tends to look as though it belongs on a ship.",
      "I am so obsessed with sketching my ideas for elaborate inventions that I sometimes forget little things like eating and sleeping.",
      "I'm judgmental of those who are not skilled with tools of some kind.",
      "I sometimes take things that don't belong to me, especially if they are very well made.",
    ],
  },
  {
    id: 41,
    name: "Smuggler",
    description:
      "On a rickety barge, you carried a hundred longswords in fish barrels right past the dock master's oblivious lackeys. You have paddled a riverboat filled with stolen elven wine under the gaze of the moon and sold it for twice its value in the morning. In your more charitable times, you have transported innocents out of war zones or helped guide herd animals to safety on the banks of a burning river.",
    flavorText:
      "On a rickety barge, you carried a hundred longswords in fish barrels right past the dock master's oblivious lackeys.",
    source: src.saltmarsh,
    skillProficiencyDescription:
      "You are proficient in Deception and Athletics.",
    skillProficiencies: {
      default: [Skill.DECEPTION, Skill.ATHLETICS],
    },
    toolProficiencyDescription: "You are proficient with Water Vehicles.",
    toolProficiencies: {
      default: [toolIds.waterVehicle],
    },
    //A fancy leather vest or a pair of leather boots, a set of common clothes, and a leather pouch with 15 gp
    equipmentDescription: [
      `A ${i(itemIds.leatherVest, "fancy leather vest")} or a pair of ${i(
        itemIds.leatherBoots,
        "leather boots"
      )}`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "purse")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.leatherVest, quantity: 1 }],
            [{ item: itemIds.leatherBoots, quantity: 1 }],
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "In general, smugglers value survival, and then profit, above other things. One could be a part of a larger organization, or might run a small smuggling vessel of their own. Smugglers live the lies they have told, and they have a natural ability to recall all the falsehoods and half-truths they have ever spouted.",
    traits: [
      "I love being on the water but hate fishing.",
      "I think of everything in terms of monetary value.",
      "I never stop smiling.",
      "Nothing rattles me; I have a lie for every occasion.",
      "I love gold but won't cheat a friend.",
      "I enjoy doing things others believe to be impossible.",
      "I become wistful when I see the sun rise over the ocean.",
      "I am no common criminal; I am a mastermind.",
    ],
    ideals: [
      "Wealth. Heaps of coins in a secure vault is all I dream of. (Any)",
      "Smuggler's Code. I uphold the unwritten rules of the smugglers, who do not cheat one another or directly harm innocents. (Lawful)",
      "All for a Coin. I'll do nearly anything if it means I turn a profit. (Evil)",
      "Peace and Prosperity. I smuggle only to achieve a greater goal that benefits my community. (Good)",
      "People. For all my many lies, I place a high value on friendship. (Any)",
      "Daring. I am most happy when risking everything. (Any)",
    ],
    bonds: [
      "My vessel was stolen from me, and I burn with the desire to recover it.",
      "I intend to become the leader of the network of smugglers that I belong to.",
      "I owe a debt that cannot be repaid in gold.",
      "After one last job, I will retire from the business.",
      "I was tricked by a fellow smuggler who stole something precious from me. I will find that thief.",
      "I give most of my profits to a charitable cause, and I don't like to brag about it.",
    ],
    flaws: [
      "Lying is reflexive, and I sometimes engage in it without realizing.",
      "I tend to assess my relationships in terms of profit and loss.",
      "I believe everyone has a price and am cynical toward those who present themselves as virtuous.",
      "I struggle to trust the words of others.",
      "Few people know the real me.",
      "Though I act charming, I feel nothing for others and don't know what friendship is.",
    ],
  },
  {
    id: 42,
    name: "Soldier",
    description:
      "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.\n\nWhen you choose this background, work with your DM to determine which military organization you were a part of, how far through its ranks you progressed, and what kind of experiences you had during your military career. Was it a standing army, a town guard, or a village militia? Or it might have been a noble's or merchant's private army, or a mercenary company.",
    flavorText: "War has been your life for as long as you care to remember.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in Athletics and Intimidation.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.INTIMIDATION],
    },
    toolProficiencyDescription:
      "You are proficient with one type of gaming set and land vehicles.",
    toolProficiencies: {
      default: [toolIds.landVehicles],
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds],
        },
      ],
    },
    //An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner), a set of bone dice or a deck of cards, a set of common clothes, and a pouch containing 10gp
    equipmentDescription: [
      `An insignia of rank`,
      `A trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner)`,
      `A set of ${i(itemIds.diceSet, "bone dice")} or a ${i(
        itemIds.playingCardSet,
        "deck of cards"
      )}`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "purse")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.diceSet, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.playingCardSet, quantity: 1 }],
            [{ item: itemIds.diceSet, quantity: 1 }],
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "The horrors of war combined with the rigid discipline of military service leave their mark on all soldiers, shaping their ideals, creating strong bonds, and often leaving them scarred and vulnerable to fear, shame, and hatred.",
    traits: [
      "I'm always polite and respectful.",
      "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
      "I've lost too many friends, and I'm slow to make new ones.",
      "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
      "I can stare down a hell hound without flinching.",
      "I enjoy being strong and like breaking things.",
      "I have a crude sense of humor.",
      "I face problems head-on. A simple, direct solution is the best path to success.",
    ],
    ideals: [
      "Greater Good. Our lot is to lay down our lives in defense of others. (Good)",
      "Responsibility. I do what I must and obey just authority. (Lawful)",
      "Independence. When people follow orders blindly, they embspecies a kind of tyranny. (Chaotic)",
      "Might. In life as in war, the stronger force wins. (Evil)",
      "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)",
      "Nation. My city, nation, or people are all that matter. (Any)",
    ],
    bonds: [
      "I would still lay down my life for the people I served with.",
      "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
      "My honor is my life.",
      "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
      "Those who fight beside me are those worth dying for.",
      "I fight for those who cannot fight for themselves.",
    ],
    flaws: [
      "The monstrous enemy we faced in battle still leaves me quivering with fear.",
      "I have little respect for anyone who is not a proven warrior.",
      "I made a terrible mistake in battle that cost many lives – and I would do anything to keep that mistake secret.",
      "My hatred of my enemies is blind and unreasoning.",
      "I obey the law, even if the law causes misery.",
      "I'd rather eat my armor than admit when I'm wrong.",
    ],
  },
  {
    id: 43,
    name: "Spy",
    description:
      "Although your capabilities are not much different from those of a burglar or smuggler, you learned and practiced them in a very different context: as an espionage agent. You might have been an officially sanctioned agent of the crown, or perhaps you sold the secrets you uncovered to the highest bidder.",
    flavorText: "You learned and practiced your skills as an espionage agent.",
    source: src.phb,
    skillProficiencyDescription: "You are proficient in Deception and Stealth.",
    skillProficiencies: {
      default: [Skill.DECEPTION, Skill.STEALTH],
    },
    toolProficiencyDescription:
      "You are proficient with one type of gaming set and thieve's tools.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds],
        },
        {
          numberOfChoices: 1,
          options: [toolIds.thievesTools],
        },
      ],
    },
    // A crowbar, a set of dark common clothes including a hood, and a pouch containing 15gp

    equipmentDescription: [
      `A ${i(itemIds.crowbar, "crowbar")}`,
      `A set of dark ${i(
        itemIds.commonClothes,
        "common clothes"
      )} including a hood`,
      `A ${i(itemIds.pouch, "purse")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Spies use the suggested characteristics of the Criminal Background.",
    traits: [
      "I always have a plan for what to do when things go wrong.",
      "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
      "The first thing I do in a new place is note the locations of everything valuable – or where such things could be hidden.",
      "I would rather make a new friend than a new enemy.",
      "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
      "I don't pay attention to the risks in a situation. Never tell me the odds.",
      "The best way to get me to do something is to tell me I can't do it.",
      "I blow up at the slightest insult.",
    ],
    ideals: [
      "Honor. I don't steal from others in the trade. (Lawful)",
      "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)",
      "Charity. I steal from the wealthy so that I can help people in need. (Good)",
      "Greed. I will do whatever it takes to become wealthy. (Evil)",
      "People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
      "Redemption. There's a spark of good in everyone. (Good)",
    ],
    bonds: [
      "I'm trying to pay off an old debt I owe to a generous benefactor.",
      "My ill-gotten gains go to support my family.",
      "Something important was taken from me, and I aim to steal it back.",
      "I will become the greatest thief that ever lived.",
      "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
      "Someone I loved died because of a mistake I made. That will never happen again.",
    ],
    flaws: [
      "When I see something valuable, I can't think about anything but how to steal it.",
      "When faced with a choice between money and my friends, I usually choose the money.",
      "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
      "I have a 'tell' that reveals when I'm lying.",
      "I turn tail and run when things look bad.",
      "An innocent person is in prison for a crime that I committed. I'm okay with that.",
    ],
  },
  {
    id: 44,
    name: "Urban Bounty Hunter",
    description: `Before you became an adventurer, your life was already full of conflict and excitement, because you made a living tracking down people for pay. Unlike some people who collect bounties, though, you aren't a savage who follows quarry into or through the wilderness. You're involved in a lucrative trade, in the place where you live, that routinely tests your skills and survival instincts. What's more, you aren't alone, as a bounty hunter in the wild would be: you routinely interact with both the criminal subculture and other bounty hunters, maintaining contacts in both areas to help you succeed.\n\nYou might be a cunning thief-catcher, prowling the rooftops to catch one of the myriad burglars of the city. Perhaps you are someone who has your ear to the street, aware of the doings of thieves' guilds and street gangs. You might be a "velvet mask" bounty hunter, one who blends in with high society and noble circles in order to catch the criminals that prey on the rich, whether pickpockets or con artists. The community where you plied your trade might have been one of Faenûn's great metropolises, such as Waterdeep or Baldur's Gate, or a less populous location, perhaps Luskan or Yartar – any place that's large enough to have a steady supply of potential quarries.\n\nAs a member of an adventuring party, you might find it more difficult to pursue a personal agenda that doesn't fit with the group's objectives – but on the other hand, you can take down much more formidable targets with the help of your companions.`,
    flavorText: "You made a living tracking down people for pay.",
    source: src.sword,
    skillProficiencyDescription:
      "Choose two from among Deception, Insight, Persuasion, and Stealth",
    skillProficiencies: {
      choices: [
        {
          numberOfChoices: 2,
          options: [
            Skill.DECEPTION,
            Skill.INSIGHT,
            Skill.PERSUASION,
            Skill.STEALTH,
          ],
        },
      ],
    },
    toolProficiencyDescription:
      "Choose two from among one type of gaming set, one musical instrument, and thieves' tools",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 2,
          options: [...gamingKitIds, ...instrumentIds, toolIds.thievesTools],
        },
      ],
    },
    //A set of clothes appropriate to your duties and a pouch containing 20gp
    equipmentDescription: [
      `A set of clothes appropriate to your duties`,
      `A ${i(itemIds.pouch, "purse")} containing 20 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 20 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.commonClothes, quantity: 1 }],
            [{ item: itemIds.fineClothes, quantity: 1 }],
            [{ item: itemIds.travelersClothes, quantity: 1 }],
            [{ item: itemIds.uniform, quantity: 1 }],
            [{ item: itemIds.costumeClothes, quantity: 1 }],
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Use the tables for the Criminal background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.For instance, your bond might involve other bounty hunters or the organizations or individuals that employ you. Your ideal could be associated with your determination always to catch your quarry or your desire to maintain your reputation for being dependable.\n\n*Editor's Note: I added the Crimnal background tables here for ease of reference.*",
    traits: [
      "I always have a plan for what to do when things go wrong.",
      "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
      "The first thing I do in a new place is note the locations of everything valuable – or where such things could be hidden.",
      "I would rather make a new friend than a new enemy.",
      "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
      "I don't pay attention to the risks in a situation. Never tell me the odds.",
      "The best way to get me to do something is to tell me I can't do it.",
      "I blow up at the slightest insult.",
    ],
    ideals: [
      "Honor. I don't steal from others in the trade. (Lawful)",
      "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)",
      "Charity. I steal from the wealthy so that I can help people in need. (Good)",
      "Greed. I will do whatever it takes to become wealthy. (Evil)",
      "People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
      "Redemption. There's a spark of good in everyone. (Good)",
    ],
    bonds: [
      "I'm trying to pay off an old debt I owe to a generous benefactor.",
      "My ill-gotten gains go to support my family.",
      "Something important was taken from me, and I aim to steal it back.",
      "I will become the greatest thief that ever lived.",
      "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
      "Someone I loved died because of a mistake I made. That will never happen again.",
    ],
    flaws: [
      "When I see something valuable, I can't think about anything but how to steal it.",
      "When faced with a choice between money and my friends, I usually choose the money.",
      "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
      "I have a 'tell' that reveals when I'm lying.",
      "I turn tail and run when things look bad.",
      "An innocent person is in prison for a crime that I committed. I'm okay with that.",
    ],
  },
  {
    id: 45,
    name: "Urchin",
    description:
      "You grew up on the streets alone, orphaned, and poor, You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recuperate. You've survived despite all odds, and did so through cunning, strength, speed, or some combination of each.\n\nYou begin your adventuring career with enough money to live modestly but securely for at least ten days. How did you come by that money? What allowed you to break free of your desperate circumstances and embark on a better life?",
    flavorText: "You grew up on the streets alone, orphaned, and poor.",
    source: src.phb,
    skillProficiencyDescription:
      "You are proficient in Sleight of Hand and Stealth.",
    skillProficiencies: {
      default: [Skill.SLEIGHT_OF_HAND, Skill.STEALTH],
    },
    toolProficiencyDescription:
      "You are proficient with disguise kits and thieves' tools.",
    toolProficiencies: {
      default: [toolIds.disguiseKit, toolIds.thievesTools],
    },
    // A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, and a pouch containing 10gp
    equipmentDescription: [
      `A ${i(itemIds.smallKnife, "small knife")}`,
      `A ${i(itemIds.paper, "map")} of the city you grew up in`,
      `A pet mouse`,
      `A ${i(itemIds.trinket, "token")} to remember your parents by`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "purse")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Urchins are shaped by lives of desperate poverty, for good and for ill. They tend to be driven either by a commitment to the people with whom they shared life on the street or by a burning desire to find a better life and maybe get some payback on all the rich people who treated them badly.",
    traits: [
      "I hide scraps of food and trinkets away in my pockets.",
      "I ask a lot of questions.",
      "I like to squeeze into small places where no one else can get to me.",
      "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.",
      "I eat like a pig and have bad manners.",
      "I think anyone who's nice to me is hiding evil intent.",
      "I don't like to bathe.",
      "I bluntly say what other people are hinting at or hiding.",
    ],
    ideals: [
      "Respect. All people, rich or poor, deserve respect. (Good)",
      "Community. We have to take care of each other, because no one else is going to do it. (Lawful)",
      "Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)",
      "Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)",
      "People. I help the people who help me—that's what keeps us alive. (Neutral)",
      "Aspiration. I'm going to prove that I'm worthy of a better life. (Any)",
    ],
    bonds: [
      "My town or city is my home, and I'll fight to defend it.",
      "I sponsor an orphanage to keep others from enduring what I was forced to endure.",
      "I owe my survival to another urchin who taught me to live on the streets.",
      "I owe a debt I can never repay to the person who took pity on me.",
      "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
      "No one else should have to endure the hardships I've been through.",
    ],
    flaws: [
      "If I'm outnumbered, I will run away from a fight.",
      "Gold seems like a lot of money to me, and I'll do just about anything for more of it.",
      "I will never fully trust anyone other than myself.",
      "I'd rather kill someone in their sleep than fight fair.",
      "It's not stealing if I need it more than someone else.",
      "People who can't take care of themselves get what they deserve.",
    ],
  },
  {
    id: 46,
    name: "Uthgardt Tribe Member",
    description:
      "Though you might have only recently arrived in civilized lands, you are no stranger to the values of cooperation and group effort when striving for supremacy. You learned these principles, and much more, as a member of an Uthgardt tribe.\n\nYour people have always tried to hold to the old ways. Tradition and taboo have kept the Uthgardt strong while the kingdoms of others have collapsed into chaos and ruin. But for the last few generations, some bands among the tribes were tempted to settle, make peace, trade, and even to build towns. Perhaps this is why Uthgar chose to raise up the totems among the people as living embodiments of his power. Perhaps they needed a reminder of who they were and from whence they came. The Chosen of Uthgar led bands back to the old ways, and most of your people abandoned the soft ways of civilization.\n\nYou might have grown up in one of the tribes that had decided to settle down, and now that they have abandoned that path, you find yourself adrift. Or you might come from a segment of the Uthgardt that adheres to tradition, but you seek to bring glory to your tribe by achieving great things as a formidable adventurer.",
    flavorText:
      "You are no stranger to the values of cooperation and group effort when striving for supremacy.",
    source: src.sword,
    skillProficiencyDescription:
      "You are proficient in Athletics and Survival.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.SURVIVAL],
    },
    toolProficiencyDescription:
      "You are proficient with one type of musical instrument or 1 set of artisan's tools.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...instrumentIds, ...artisanIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      "A " + i(itemIds.huntingTrap, "hunting trap"),
      "A " +
        i(itemIds.totem, "totemic token") +
        " or set of tatoos marking your loyalty to Uthgar and your tribal totem",
      "A set of " + i(itemIds.travelersClothes, "traveler's clothes"),
      `A ${i(itemIds.pouch, "pouch")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.huntingTrap, quantity: 1 },
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
        { item: itemIds.totem, quantity: 1 },
      ],
    },
    suggestedCharacteristics:
      "Use the tables for the Outlander background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.\n\nEven if you have left your tribe behind (at least for now), you hold to the traditions of your people. You will never cut down a still-living tree, and you may not countenance such an act being done in your presence. The Uthgardt ancestral mounds – great hills where the totem spirits were defeated by Uthgar and where the heroes of the tribes are interred – are sacred to you.\n\nYour bond is undoubtedly associated with your tribe or some aspect of Uthgardt philosophy or culture (perhaps even Uthgar himself). Your ideal is a personal choice that probably hews closely to the ethos of your people and certainly doesn't contradict or compromise what being an Uthgardt stands for.",
    traits: [
      "I'm driven by a wanderlust that led me away from home.",
      "I watch over my friends as if they were a litter of newborn pups.",
      "I once ran twenty-five miles without stopping to warn my clan of an approaching orc horde. I'd do it again if I had to.",
      "I have a lesson for every situation, drawn from observing nature.",
      "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
      "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
      "I feel far more comfortable around animals than people.",
      "I was, in fact, raised by wolves.",
    ],
    ideals: [
      "**Change.** Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
      "**Greater Good.** It is each person's responsibility to make the most happiness for the whole tribe. (Good)",
      "**Honor.** If I dishonor myself, I dishonor my whole clan. (Lawful)",
      "**Might.** The strongest are meant to rule. (Evil)",
      "**Nature.** The natural world is more important than all the constructs of civilization. (Neutral)",
      "**Glory.** I must earn glory in battle, for myself and my clan. (Any)",
    ],
    bonds: [
      "My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
      "An injury to the unspoiled wilderness of my home is an injury to me.",
      "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
      "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
      "I suffer awful visions of a coming disaster and will do anything to prevent it.",
      "It is my duty to provide children to sustain my tribe.",
    ],
    flaws: [
      "I am too enamored of ale, wine, and other intoxicants.",
      "There's no room for caution in a life lived to the fullest.",
      "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
      "I am slow to trust members of other races, tribes, and societies.",
      "Violence is my answer to almost any challenge.",
      "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish.",
    ],
  },
  {
    id: 47,
    name: "Waterdhavian Noble",
    description:
      "You are a scion of one of the great noble families of Waterdeep. Human families who jealously guard their privilege and place in the City of Splendors, Waterdhavian nobles have a reputation across Faerûn for being eccentric, spoiled, venal, and, above all else, rich.\n\nWhether you are a shining example of the reason for this reputation or one who proves the rule by being an exception, people expect things of you when they know your surname and what it means. Your reasons for taking up adventuring likely involve your family in some way: Are you the family rebel, who prefers delving in filthy dungeons to sipping zzar at a ball? Or have you taken up sword or spell on your family's behalf, ensuring that they have someone of renown to see to their legacy?\n\nWork with your DM to come up with the family you are part of – there are around seventy-five lineages in Waterdeep, each with its own financial interests, specialties, and schemes. You might be part of the main line of your family, possibly in line to become its leader one day. Or you might be one of any number of cousins, with less prestige but also less responsibility.",
    source: src.sword,
    flavorText:
      "You are a scion of one of the great noble families of Waterdeep.",
    skillProficiencyDescription:
      "You are proficient in History and Persuasion.",
    skillProficiencies: {
      default: [Skill.HISTORY, Skill.PERSUASION],
    },
    toolProficiencyDescription:
      "You are proficient with one type of gaming set or musical instrument.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds, ...instrumentIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      "A set of " + i(itemIds.fineClothes, "fine clothes"),
      `A ${i(itemIds.signetRing, "signet ring")} or brooch`,
      `${i(itemIds.paper, "A scroll")} of pedigree`,
      `A ${(itemIds.waterskin, "skin")} of fine zzar or wine`,
      `A ${i(itemIds.pouch, "purse")} containing 20 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.fineClothes, quantity: 1 },
        { item: itemIds.signetRing, quantity: 1 },
        { item: itemIds.paper, quantity: 1 },
        { item: itemIds.waterskin, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 20 },
      ],
    },
    suggestedCharacteristics:
      "Use the tables for the Noble background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.\n\nLike other nobles, you were born and raised in a different world from the one that most folk know – one that grants you privilege but also calls you to fulfill a duty befitting your station. Your bond might be associated with your family a lone, or it could be concerned with another noble house that sides with or opposes your own. Your ideal depends to some extent on how you view your role in the family, and how you intend to conduct yourself in the world at large as a representative of your house.",
    traits: [
      "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
      "The common folk love me for my kindness and generosity.",
      "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
      "I take great pains to always look my best and follow the latest fashions.",
      "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
      "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
      "My favor, once lost, is lost forever.",
      "If you do me an injury, I will crush you, ruin your name, and salt your fields.",
    ],

    ideals: [
      "**Respect.** Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
      "**Responsibility.** It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
      "**Independence.** I must prove that I can handle myself without the coddling of my family. (Chaotic)",
      "**Power.** If I can attain more power, no one will tell me what to do. (Evil)",
      "**Family.** Blood runs thicker than water. (Any)",
      "**Noble Obligation.** It is my duty to protect and care for the people beneath me. (Good)",
    ],

    bonds: [
      "I will face any challenge to win the approval of my family.",
      "My house's alliance with another noble family must be sustained at all costs.",
      "Nothing is more important than the other members of my family.",
      "I am in love with the heir of a family that my family despises.",
      "My loyalty to my sovereign is unwavering.",
      "The common folk must see me as a hero of the people.",
    ],

    flaws: [
      "I secretly believe that everyone is beneath me.",
      "I hide a truly scandalous secret that could ruin my family forever.",
      "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
      "I have an insatiable desire for carnal pleasures.",
      "In fact, the world does revolve around me.",
      "By my words and actions, I often bring shame to my family.",
    ],
  },
  {
    id: 48,
    name: "Witchlight Hand",
    description:
      "You crept into the Witchlight Carnival as a child or youth and never looked back, earning a place among those who work behind the scenes to keep the carnival in business. As a hand, you work hard and party hard. The carnival has borne you to many fantastic worlds, circling back around to your home world once every eight years, but you know almost nothing about these worlds because you spend all your time in the carnival. You know the other hands well, but the carnival's owners-Mister Witch and Mister Light-remain mysterious to you even after all these years.\n\nMaybe you joined the carnival to escape a dismal life at home, or maybe you were enchanted by the idea of visiting new places or the dream of becoming one of the carnival's star attractions. Now that you're older, carnival life has lost some of its appeal. The daily routine has grown tedious, the cyclical nature of the carnival's journey monotonous. The carnival no longer fills your heart with a sense of wonder. Perhaps greater adventures await you beyond the carnival's gates.",
    flavorText:
      "You crept into the Witchlight Carnival as a child or youth and never looked back.",
    source: src.witchlight,
    skillProficiencyDescription:
      "You are proficient in Sleight of Hand and Performance.",
    skillProficiencies: {
      default: [Skill.SLEIGHT_OF_HAND, Skill.PERFORMANCE],
    },
    toolProficiencyDescription:
      "You are proficient with disguise kits and one type of musical instrument.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...instrumentIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A ${i(itemIds.disguiseKit, "disguise kit")} or one type of ${i(
        itemIds.musicalInstrument,
        "musical instrument"
      )}.`,
      `A deck of ${i(itemIds.playingCardSet, "playing cards")}`,
      `A carnival ${i(itemIds.uniform, "uniform")} or ${i(
        itemIds.costumeClothes,
        "costume"
      )}`,
      `One ${i(
        itemIds.trinket,
        "trinket"
      )} determined by rolled on the Feywild trinkets table.`,
      `A ${i(itemIds.pouch, "purse")} containing 8 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.playingCardSet, quantity: 1 },
        { item: itemIds.trinket, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 8 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.disguiseKit, quantity: 1 }],
            [...instrumentItemIds.map((id) => ({ item: id, quantity: 1 }))],
          ],
        },
        {
          numberOfChoices: 1,
          options: [
            [{ item: itemIds.uniform, quantity: 1 }],
            [{ item: itemIds.costumeClothes, quantity: 1 }],
          ],
        },
      ],
    },

    suggestedCharacteristics:
      "These tables, while optional, are well suited to Feywild-themed adventurers and are ideal for any character who has the Witchlight Hand background.",
    traits: [
      "I'm haunted by fey laughter that only I can hear, though I know it's just my mind playing tricks on me.",
      "Like a nomad, I can't settle down in one place for very long.",
      "Good music makes me weep like a baby.",
      "Wherever I go, I try to bring a little of the warmth and tranquility of home with me.",
      "I have never lost my childlike sense of wonder.",
      "When I have a new idea, I get wildly excited about it until I come up with another, better idea.",
      "I live by my own set of weird and wonderful rules.",
      "I can't bring myself to trust most adults.",
    ],
    ideals: [
      "**Friendship.** I never leave a friend behind. (Good)",
      "**Empathy.** No creature should be made to suffer. (Good)",
      "**Wanderlust.** I prefer to take the less traveled path. (Chaotic)",
      "**Changeability.** Change is good, which is why I live by an ever-changing set of rules. (Chaotic)",
      "**Honor.** A deal is a deal, and I would never break one. (Lawful)",
      "**Rule of Three.** Everything in the multiverse happens in threes. I see the 'rule of three' everywhere. (Lawful)",
      "**Obsession.** I won't let go of a grudge. (Evil)",
      "**Greed.** I will do whatever it takes to get what I want, regardless of the harm it might cause. (Evil)",
    ],
    bonds: [
      "I would never break my word.",
      "I find magic in all its forms to be compelling. The more magical a place, the more I am drawn to it.",
      "I do what I can to protect the natural world.",
      "A trusted friend is the most important thing in the multiverse to me.",
      "I can't bring myself to harm a Fey creature, either because I consider myself one or because I fear the repercussions.",
      "The Witchlight Carnival feels like home to me.",
      "I'm drawn to the Feywild and long to return there, if only for a short while.",
      "I feel indebted to Mister Witch and Mister Light for giving me a home and a purpose.",
    ],
    flaws: [
      "I easily lose track of time. My poor sense of time means I'm always late.",
      "I think the whole multiverse is out to get me.",
      "I'm always operating under a tight timeline, and I'm obsessed with keeping everything on schedule.",
      "I'm a kleptomaniac who covets shiny, sparkling treasure.",
      "I'm forgetful. Sometimes I can't remember even the simplest things.",
      "I never give away anything for free and always expect something in return.",
      "I have many vices and tend to indulge them.",
      "I'm always changing my mind—well, almost always.",
    ],
  },
  {
    id: 49,
    name: "Celebrity Adventurer's Scion",
    description:
      "Your family name strikes fear and admiration in the hearts of the common folk - but that's got nothing to do with you. Songs and stories celebrating the adventuring exploits of your famous parent are widely known. Kids across the land grew up wishing they were you. But being the child of a famous adventurer wasn't all hugs and kisses.\n\nYou seldom saw your celebrity-adventurer parent, and when they were around, it was all about them and tales of slaying this demon or vanquishing that dragon. All too often, you'd be woken out of a sound sleep by someone standing outside your home screaming about the latest threat to the town, the region, or the world.\n\nIn the end, all you have to show for your lineage is your name. Most of the family's money went for consumables, from potions of healing and spell scrolls to copious amounts of dwarven ale. And everyone expects you to swing a sword or sling spells like your famous forebear, making it doubly hard for you to prove yourself.",
    flavorText:
      "Your family name strikes fear and admiration in the hearts of the common folk - but that's got nothing to do with you.",
    skillProficiencyDescription:
      "You are proficient in Perception and Performance.",
    skillProficiencies: {
      default: [Skill.PERCEPTION, Skill.PERFORMANCE],
    },
    toolProficiencyDescription: "You are proficient with Disguise kits.",
    toolProficiencies: {
      default: [toolIds.disguiseKit],
    },
    source: src.aquisitions,
    equipmentDescription: [
      `A ${i(itemIds.disguiseKit, "disguise kit")}`,
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing 30 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.disguiseKit, quantity: 1 },
        { item: itemIds.fineClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 30 },
      ],
    },

    suggestedCharacteristics:
      "Scions of celebrity adventurers must deal with fame that's not theirs, wealth they didn't earn. and expectations they can never hope to meet. These hardships can have adverse effects, but those who cope with them can arrive at a decent attitude and a grounded worldview. Those who fail become bitter - or worse.",
    traits: [
      "I will never get out of my famous parent's shadow, and no one else will ever understand this burden.",
      "I've seen enough of the adventuring life to have realistic expectations and empathy for my peers.",
      "Living up to my legacy will be difficult, but I'm going to do it.",
      "I'm used to the very best in life, and that's a hard habit to break.",
      "My parent taught me a sense of duty. I strive to uphold it, even when the odds are against me.",
      "No one can fake a smile, a handshake, or an interested nod like I can.",
      "I've been part of the adventuring life since I was old enough to walk. Let me explain a few things to you.",
      "No risk is too great for the rewards of defeating my enemies … and taking their stuff.",
    ],
    ideals: [
      "**Power.** The only way to get ahead in this world is to attain power and hold onto it with all your might. (Evil)",
      "**Peace.** Those who can find or make peace in the chaotic world around them have everything. (Lawful)",
      "**Fame.** I've seen what fame can bring. And I'll do anything to get all that for myself. (Neutral)",
      "**Training.** Hard work, sacrifice, and training lead to success - and eventually to perfection. (Any)",
      "**Anonymity.** I want to be successful. And alone. With lots of guards and wards between me and everyone else in the world. (Any)",
      "**Wisdom.** Material wealth is an illusion. Wisdom is the real treasure. (Good)",
    ],
    bonds: [
      "While my parent was out adventuring, a servant raised me, and I care about that person more than anyone.",
      "I consider every member of my parent's former adventuring party to be family.",
      "Despite their absences, my famous parent was kind and generous. I love them and want to make them proud.",
      "My parent once brought a cursed magic item home. It is my obsession.",
      "My childhood home holds all my best memories, and its upkeep is my primary concern.",
      "Growing up, I had an imaginary friend I could always count on. That friend is still with me.",
    ],
    flaws: [
      "You don't know what I'm going through. You never can.",
      "You. Fetch my cloak. And maybe rub my feet for a while.",
      "My comrades are brave, but I must defeat this threat alone to prove my worth.",
      "Oh, yeah, that spell? Named after my parent's best friend. Let me tell you about them.",
      "My best days are behind me. Ahead lies only toil, pain, and death.",
      "You have to look out for yourself. No one else will.",
    ],
  },
  {
    id: 50,
    name: "Failed Merchant",
    source: src.aquisitions,
    description:
      "Maybe you come from a long line of merchants. Perhaps you were an entrepreneur. Regardless. your ventures ended poorly. Whether it was because of outside influences, bad luck, or simply because your business acumen was weak, you lost everything.\n\nWith failure, however. comes experience. You're free of that old life, having made some connections and learned your lessons. Prepared to pursue the life of an adventurer, your insight into the world of commerce brought you into the sphere of Acquisitions Incorporated - and a franchise just might be in your future.",
    flavorText: "You come from a long line of merchants.",
    skillProficiencyDescription:
      "You are proficient in Investigation and Persuasion.",
    skillProficiencies: {
      default: [Skill.INVESTIGATION, Skill.PERSUASION],
    },
    toolProficiencyDescription:
      "You are proficient with one type of artisan's tools.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...artisanIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `One set of artisan's tools`,
      `A ${i(itemIds.merchantScale, "merchant's scale")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.fineClothes, quantity: 1 },
        { item: itemIds.merchantScale, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...artisanToolItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Being a merchant involved having a head for numbers, a strong personality. the ability to make deals with hostile adversaries, a strong sword arm to fight off bandits, and the intuition for knowing what people want and need. The art of business is the art of finding the best path to profit, and that path might be different with each transaction. It takes a strong mind and a stronger stomach to succeed. So why did you fail?",
    traits: [
      "I didn't have the cutthroat attitude necessary to succeed. I won't make that mistake again.",
      "Even my competitors said I was affable and talented. Those traits should serve me well.",
      "To prosper, you have to be in control.",
      "The customer is always right.",
      "I was cutting corners and breaking deals to maximize profit. That's why I failed.",
      "When I get an idea, I am single-minded in its execution - even if it's a terrible idea.",
      "If I can be everyone's friend, I'll always have support.",
      "My heart wasn't in being a merchant, so I failed. I'm not all that keen on adventuring either, but I need the money.",
    ],
    ideals: [
      "**Survival.** Where there's life, there's hope. If I remain alive and flexible, I can succeed. (Any)",
      "**Generosity.** People helped me when I was down. Now that I'm back on my feet, I'll pay it forward. (Good)",
      "**Excitement.** Caution got me nowhere in my previous business. I'm not going to let it hold me back now. (Chaotic)",
      "**Wealth.** With enough coin, I can buy comfort, power, knowledge, and even eternal life. Nothing will stand between me and money. (Evil)",
      "**Stability.** The mercantile trade was too chaotic for me. I need a nice stable profession, like adventuring. (Lawful)",
      "**Redemption.** Too many people consider me a failure. So I need to prove them wrong. (Any)",
    ],
    bonds: [
      "My family means everything to me. I failed them before, and I must not do so again.",
      "My church provides a connection to my god, so I must ensure that it is protected and funded.",
      "My former business partner fell ill, and then our business failed. Part of my new venture involves earning enough to take care of their family.",
      "If I take care of my possessions, they'll take care of me. People come and go, but a weapon or a wand is something you can always rely on.",
      "Although my business failed, the people of my community were kind to me. I'll do everything in my power to protect them.",
      "I owe a dangerous person a lot of money. As long as they're happy, they let my debt rest unpaid.",
    ],
    flaws: [
      "Why spend gold here when you can buy the same thing for copper in the next town?",
      "I must have the best of everything. Like, right now.",
      "You haven't heard of me? I'm sure that's because of your ignorance and low breeding.",
      "I failed, but I'm awesome. So when anyone else is successful, it must be because of nepotism, dishonesty, or dumb luck.",
      "I find that most people are trustworthy. Hey, where's my belt pouch?",
      "Nothing gets between me and danger except my fellow adventurers. So I'll be sure to put them there.",
    ],
  },
  {
    id: 51,
    name: "Gambler",
    description:
      "All you need to make a lot of gold is a little gold. Except at those times when all you need to have no gold at all is a little gold. Whether you're a good gambler or a bad one rarely matters, because no one can divine the whims of Lady Luck. Sometimes you're up, sometimes you're down. But the thing about gambling is that someone is always willing to take a bet.",
    source: src.aquisitions,
    flavorText: "All you need to make a lot of gold is a little gold.",
    skillProficiencyDescription: "You are proficient in Deception and Insight.",
    skillProficiencies: {
      default: [Skill.DECEPTION, Skill.INSIGHT],
    },
    toolProficiencyDescription:
      "You are proficient with one type of gaming set.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `A ${i(itemIds.gamingKit, "gaming set")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.fineClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...gamingKitItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Some gamble out of necessity. Others do so out of boredom. Still others become addicted to the thrill of winning or losing everything on a turn of fortune. For some, gambling is less a matter of chance and more a matter of seeking every advantage to ensure the outcome. The best gamblers can lose everything, and the worst gamblers sometimes win. Regardless, you can always tell gamblers by the look in their eyes. Lady Luck haunts them.",
    traits: [
      "I plan for every contingency. Leave nothing to chance!",
      "Every copper wants to be a silver. Each bet is an opportunity.",
      "I'm one of Lady Luck's favored. Anything I try is destined to succeed.",
      "I've lost so much to gambling that I refuse to spend money on anything anymore.",
      "Nothing is certain. Planning is a coward's act.",
      "I can't be sure who I've swindled, cheated, or defeated, so I keep a low profile in public.",
      "The perfect bet is out there somewhere. I just have to keep my eyes open.",
      "I have beaten my addiction, but all it takes is one weak moment and I'll be back at the card table.",
    ],
    ideals: [
      "**Knowledge.** Knowledge is power, and knowing which horse to back is the key to success. (Any)",
      "**Fate.** Whatever happens is fated, regardless of any planning or striving. (Lawful)",
      "**Bravery.** If you want to succeed, you have to take risks. (Chaotic)",
      "**Survival.** You can't win if you're dead. Live to fight another day - when the odds might be more in your favor. (Any)",
      "**Reliability.** When I was in need, I was able to rely on others. Now I want to be the one others rely on. (Good)",
      "**Victory.** Winning is the real measure of a person. In the end, the only thing that matters is the scoreboard. (Evil)",
    ],
    bonds: [
      "One person in particular owes me a lot of money, and I need to keep them alive if I want to be repaid.",
      "I'm loyal to the friend or family member who taught me how to gamble.",
      "The person who saved me from my gambling addiction is the only reason I'm alive today.",
      "A patron once fronted me money in exchange for a percentage of my winnings. I owe them a debt of gratitude. And a lot of cash.",
      "A criminal syndicate I once played for isn't happy I left the game, and its enforcers are looking for me.",
      "Urchins once helped me find marks for my games. Now I'm driven to help them escape the streets.",
    ],
    flaws: [
      "I don't know when to quit. Especially when everyone else is telling me to.",
      "I save my sympathy for my friends, and I have no friends.",
      "You think we're in trouble now? Let me tell you how bad things are likely to get!",
      "You can loan me a little, right? I've got a sure thing. I'll double your money, guaranteed.",
      "I was once a terribly flawed person, like you. Let me tell you how you can save yourself.",
      "I'm a great gambler. I'm just bad at math and logic.",
    ],
  },
  {
    id: 52,
    name: "Plaintiff",
    description:
      "Sure, accidents happen. But they seem to happen an awful lot when Acquisitions Incorporated operatives are on the scene. Naturally, nothing ever happens when there are no witnesses left behind. But sometimes one casualty is left a little less than dead, just waiting to discover what a lucky break that accident actually was.\n\nYou were a victim of a legal incident that was ostensibly the fault of Acquisitions Incorporated. At least that's what the local magistrate said. But before a final ruling could be handed down. Acquisitions Incorporated offered you a job! Don't know how to swing a sword? They promised to teach you! Think you have what it takes to sling spells? They've got masters who'll have you throwing fire in no time!\n\nWith the promise of untold treasures and realms of magic and mystery just a dungeon away, you left your old life behind. Now a world of adventure is yours. Just initial here and sign here and here. Absolve Acq Inc of all former claims, and acknowledge you understand past outcomes don't guarantee future results.",
    flavorText:
      "You were a victim of a legal incident that was ostensibly the fault of Acquisitions Incorporated.",
    source: src.aquisitions,
    skillProficiencyDescription:
      "You are proficient in Medicine and Persuasion.",
    skillProficiencies: {
      default: [Skill.MEDICINE, Skill.PERSUASION],
    },
    toolProficiencyDescription:
      "You are proficient with one type of artisan's tools.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...artisanIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `One set of artisan's tools`,
      `A ${i(itemIds.pouch, "belt pouch")} containing 20 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.fineClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 20 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...artisanToolItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "Plaintiffs come in many varieties. Some are innocent bystanders who want only fair compensation for their injuries. Others are professional courtroom operatives, going to extreme lengths to appear wronged in pursuit of a large payout.",
    traits: [
      "I can't believe I have a chance to join Acquisitions Incorporated! The fun I'm going to have!",
      "I've been wronged my entire life, and the world owes me.",
      "I have always tried to make the best of a bad situation.",
      "The law doesn't protect the honest and the hardworking. I'm going to do whatever needs to be done to make things right.",
      "I'm always in the wrong place at the wrong time.",
      "My superiors are smarter and wiser than I am. I do what I'm told.",
      "Never pass up the opportunity to make an easy bit of coin. That's my motto.",
      "I'm beginning to feel like the gods are not on my side.",
    ],
    ideals: [
      "**Justice.** Those who break the law need to answer for their crimes. (Lawful)",
      "**Freedom.** People must have the freedom to do what they want and pursue their dreams. (Chaotic)",
      "**Greed.** Everyone I see is getting theirs, so I'm surely going to get mine. (Evil)",
      "**Chaos.** You're out of order! And you're out of order! This whole realm is out of order! (Chaotic)",
      "**Humility.** I'm just a small part of a larger whole. So is everyone else. (Neutral)",
      "**Responsibility.** We all have our roles to play. I'll hold up my end of the bargain. (Any)",
    ],
    bonds: [
      "Others hurt in the same accident that hurt me are my new family. I'll make sure they're taken care of.",
      "The rulers of this place were kind to me, and they have my lifelong devotion.",
      "My parents worry about me, but I'll make them proud.",
      "The only bond that matters is the one holding my money pouch to my belt.",
      "The other new hires at Acquisitions Incorporated are my allies. We have each other's backs.",
      "My legal counsel is my best friend. I owe all my forthcoming opportunities to their hard work.",
    ],
    flaws: [
      "The person who gains the most reward for the least effort wins.",
      "Three magic beans for just one cow? What a deal!",
      "I have only one vice, but it controls my life.",
      "Sleep is for the weak. We need to keep training more if we're going to be ready for the challenges ahead.",
      "Until my songs are sung in every tavern in this realm, I won't be satisfied.",
      "If people find me unpleasant, that's their problem.",
    ],
  },
  {
    id: 53,
    name: "Rival Intern",
    description:
      "You were an intern at a rival of Acquisitions Incorporated, and you gained a healthy respect for not just the job and the franchising opportunities. but for the ruthless and efficient way Acquisitions Incorporated goes about its business. Why deal with the rest, when you can work for the best?\n\nPerhaps the rival did not treat you as well as you were hoping, or you washed out of that organization. Maybe you hope to leverage the knowledge you gained there for an advantage at Acquisitions Incorporated. Either way, you're now bringing your talents to the company, ready to put your skills to use.",
    flavorText: "You were an intern at a rival of Acquisitions Incorporated.",
    source: src.aquisitions,
    skillProficiencyDescription:
      "You are proficient in History and Investigation.",
    skillProficiencies: {
      default: [Skill.HISTORY, Skill.INVESTIGATION],
    },
    toolProficiencyDescription:
      "You are proficient with one type of artisan's tools.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...artisanIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You are proficient in one language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    equipmentDescription: [
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `One set of artisan's tools`,
      `A ${i(
        itemIds.book,
        "ledger"
      )} from your previous employer containing a small piece of useful information`,
      `A ${i(itemIds.pouch, "belt pouch")} containing 10 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.fineClothes, quantity: 1 },
        { item: itemIds.book, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...artisanToolItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "If you were happy with your previous internship. the parting of ways might have been amicable. If not, it might have involved armed guards removing you from the premises. If you were passed over at your previous position, it might have left you a blend of seething rage, practiced nonchalance, and keen knowledge of where the bodies are buried (perhaps literally).",
    traits: [
      "My previous employer didn't respect me, and now I'll do whatever I can to gain respect.",
      "The job is important, but the relationships I forge with my coworkers are even more so.",
      "The job is everything to me. Who needs relaxation, hobbies, and a social life?",
      "I know I'm not the best and brightest, but if I put my best self forward, I can overcome anything.",
      "My former boss was an idiot. So was my boss before that. And before that. I'm sure those were all coincidences.",
      "This company is so much better than my previous one. It will always be the best until they stop paying me.",
      "I know this dagger belongs to the company, but I'm sure they won't miss it. Or this flask. Or this armor.",
      "It's only a matter of time before I'll be upper management. I just have to kiss up to my superiors and kick down those beneath me.",
    ],
    ideals: [
      "**Advancement.** Money and power can be gained more easily within an organization. I plan to gain as much as possible. (Evil)",
      "**Structure.** Life goes much more smoothly when you follow the rules and work within a system. (Lawful)",
      "**Uncertainty.** The more chaos that swirls around me, the more opportunities I can find to profit. (Chaotic)",
      "**Justice.** I can't stand people being treated unjustly. I do whatever it takes to stop injustice and those who flout the law. (Lawful)",
      "**Pleasure.** What's the use of working hard and making money if you can't enjoy the finer things in life? (Any)",
      "**Power.** Money is fine, but real power means never having to say you're sorry. (Evil)",
    ],
    bonds: [
      "I have a family member in need. I consider them in everything I do.",
      "My peers keep me grounded.",
      "My past mistakes cost someone else dearly. I have to rectify that.",
      "A childhood mentor put me on my current path. If I succeed, I want to repay that mentor in some way.",
      "I value an oath of loyalty I took to a group of friends over everything else in my life.",
      "Although I don't get along well with people, my pet means the world to me.",
    ],
    flaws: [
      "I know what's best. Trust me.",
      "Flaw? I have no flaws. I'm perfect.",
      "My loyalties are … fluid.",
      "If anything goes wrong, it must be someone else's fault. Let me explain that in detail.",
      "There's right and there's wrong, and there's no gray area in between.",
      "Our superiors might not like what you're doing. I'm going to have to put that in my report.",
    ],
  },
  {
    id: backgroundIds.blackFistDoubleAgent,
    name: "Black Fist Double Agent",
    description:
      "You are an informant for the Tears of Virulence who now lord over Phlan, but are also a double agent for the original town guard of Phlan, the Black Fist. For the Tears you’ve been tasked with ferreting out the secrets of Phlan's criminal underworld, insurgency, and the common peoples of Phlan. In exchange for reporting on the activities of dissenters, criminals, and other rebel elements, the Tears of Virulence leave you alone to conduct your affairs in peace.\n\nIn reality you work for the deposed Black Fists, sharing misinformation with the Tears of Virulence that often helps the Black Fists and other Phlan insurgents.\n\nSince the evacuation of Phlan, you are even busier today than you ever were previously, as the number of dissenters among the refugees grows daily, while you are afforded many opportunities to spy on the peoples of Mulmaster and Elventree, to the pleasure of your contact(s) within the Tears of Virulence.",
    skillProficiencyDescription: "You are proficient in Deception and Insight.",
    skillProficiencies: {
      default: [Skill.DECEPTION, Skill.INSIGHT],
    },
    toolProficiencyDescription:
      "You are proficient with Disguise Kits, and one type of artisan’s tools or gaming set",
    toolProficiencies: {
      default: [toolIds.disguiseKit],
      choices: [
        {
          numberOfChoices: 1,
          options: [...artisanIds, ...gamingKitIds],
        },
      ],
    },
    flavorText: "You are an informant for the Tears of Virulence.",
    source: src.strahd,
    // Disguise Kit, common clothes, a Tears of Virulence emblem, a writ of free agency signed by the Lord Regent, a set of artisan’s tools or gaming set you are proficient with, and a pouch with 15gp (payment for services rendered).
    equipmentDescription: [
      `A ${i(itemIds.disguiseKit, "disguise kit")}`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A Tears of Virulence ${i(itemIds.emblem, "emblem")}`,
      `A writ of free agency signed by the Lord Regent`,
      `One set of artisan's tools or gaming set you are proficient with`,
      `A ${i(itemIds.pouch, "belt pouch")} containing 15 ${i(
        itemIds.goldPiece,
        "gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.disguiseKit, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.emblem, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...artisanToolItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...gamingKitItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },

    traits: [
      "People are only as trustworthy as you are valuable to them. Always strive to be the most valuable person around.",
      "My eloquence and sophistication are tools I use to avoid arousing suspicion myself.",
      "I am a thrill-seeker, excited by covert and dangerous missions.",
      "I live by my wits and always check every lock twice, just to be certain.",
      "I never admit to my mistakes lest they be used against me.",
      "I take every effort to be unnoticeable and blend into the crowd. Passersby rarely give me a second look.",
      "I am prepared for any eventuality; including the day my usefulness as a spy comes to an end.",
      "I always make certain to know my enemy before acting, lest I bite off more than I can chew.",
    ],
    ideals: [
      "**Suspicious.** In my experience, everybody has something to hide, and what they hide can usually hurt me. (Any)",
      "**Secretive.** I trade in secrets, and am not about to let any of mine slip. (Any)",
      "**Hedonist.** Life is short. I live my life to the fullest, as I know any day could be my last. (Chaotic)",
      "**Selfless.** I use my position to help the downtrodden avoid persecution from the authorities. (Good)",
      "**Patriotic.** I am a loyal supporter of Phlan and its leaders, and see my role as a solemn duty and necessary evil to prevent anarchy. (Lawful)",
      "**Manipulative.** I use my knowledge to blackmail and manipulate others to my own benefit. (Evil)",
    ],
    bonds: [
      "I was framed for a crime I did not commit, and seek to bring the true culprit to justice.",
      "I am a part of an underground network that smuggles innocent civilians out of the city prior to being raided by the authorities.",
      "I miss the glory days of Phlan, before the coming of the dragon.",
      "I seek to prove myself worthy of joining the Black Fist as a member of their order.",
      "My sibling was killed by a Tear of Virulence, and now I feed them false information whenever possible.",
      "My family was wrongly imprisoned, and I act as an informant in order to secure their release.",
    ],
    flaws: [
      "I think too highly of myself, and have an exaggerated sense of self-importance.",
      "I have difficulty trusting strangers. I see spies and informants everywhere.",
      "Years of getting away with minor crimes has left me believing that I am above the law, and have diplomatic immunity above my station.",
      "Years of seeing innocent people suffer have left me despondent and pessimistic for the future.",
      "My desire for vengeance often gets me into trouble.",
      "I am a spendthrift, and share my wealth with the patrons of my favorite tavern.",
    ],
  },
  {
    id: backgroundIds.dragonCasualty,
    name: "Dragon Casualty",
    description: `When the Maimed Virulence descended upon Phlan, you were one of the unfortunate casualties of war. Captured during the initial assault, you have spent the last year of your life as a plaything of a capricious and malevolent overlord.\n\nWhile many of your fellow prisoners fell to the dragon's insatiable fury over the coming months, you and your fellow "survivors" were spared only for a worse fate as one of the dragon's magical experiments, leaving you and those who survived the torture scarred and disfigured.\n\nWhat reasons the dragon had for releasing you few survivors, nobody knows. You only fear that those who died under his terrible claw were the lucky ones, and you and your fellow Dragon scarred are doomed for a fate worse than death.`,
    skillProficiencyDescription:
      "You are proficient in Intimidation and Survival",
    skillProficiencies: {
      default: [Skill.INTIMIDATION, Skill.SURVIVAL],
    },
    toolProficiencyDescription: "Special (see origin below)",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [
            toolIds.waterVehicle,
            ...artisanIds,
            ...gamingKitIds,
            toolIds.landVehicles,
            ...instrumentIds,
            toolIds.alchemistSupplies,
            toolIds.herbalismKit,
            toolIds.thievesTools,
            toolIds.forgeryKit,
            toolIds.disguiseKit,
          ],
        },
      ],
    },
    languageProficiencyDescription: "You can speak Draconic.",
    languageProficiencies: {
      default: [Language.DRACONIC],
    },
    source: src.strahd,
    //  A dagger, tattered rags, a loaf of moldy bread, a small cast-off scale belonging to Vorgansharax – the Maimed Virulence, and a pouch with 5gp of various coins (salvaged during your escape from Phlan).
    flavorText: "You were one of the unfortunate casualties of war.",
    equipmentDescription: [
      `A ${i(itemIds.dagger, "dagger")}`,
      `A set of tattered rags`,
      `A loaf of moldy bread`,
      `A small cast-off scale belonging to Vorgansharax – the Maimed Virulence`,
      `A ${i(itemIds.pouch, "belt pouch")} containing 5gp of various coins`,
    ],
    equipment: {
      default: [
        { item: itemIds.dagger, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 5 },
      ],
    },
    traits: [
      "I am driven to escape my past, and rarely stay in one place long.",
      "I know secrets of the Maimed Virulence, but fear the harm that may befall me should others learn them.",
      "Speaking of my ordeal helps soothe the still open wounds in my soul.",
      "My former life is meaningless, and was ripped to shreds by the claws of Vorgansharax. All that matters now is what I do with the future.",
      "I have faced the worst a dragon can deliver and survived. I am fearless, and my resolve unshakable.",
      "I am haunted by my tortured past, and wake at night screaming at half-remembered horrors.",
      "I sleep with my back to a wall or tree, and a weapon within arm’s reach.",
      "I am slow to trust, but incredibly loyal to those who have earned it.",
    ],
    ideals: [
      "**Survivor.** No matter the cost, I will take any action necessary to survive. (Any)",
      "**Independence.** When in trouble, the only person I can rely on is myself. (Chaotic)",
      "**Compassionate.** I have suffered long at the hands of a Dragon, and take pity and compassion on the suffering of others. (Good)",
      "**Secretive.** I am withdrawn, and hide my monstrous appearance for fear of drawing unwanted attention. (Chaotic)",
      "**Justice.** I have been wronged, and will not allow the same fate to befall others. (Lawful)",
      "**Sycophant.** During my ordeal, I became a willing servant of the Maimed Virulence, and spy on his behalf. (Evil)",
    ],
    bonds: [
      "I have sworn vengeance on the Maimed Virulence and those that follow him.",
      "I long to reunite with friends and family who may dwell among the Phlan Refugees, and protect them.",
      "While a prisoner of the Maimed Virulence, I overheard rumors of an item or treasure the Dragon seeks. I will have that treasure for myself!",
      "I seek to reclaim and rebuild my former life to the best of my ability.",
      "I have been reborn as a child of Vorgansharax. I will claim my birthright as his chosen heir and successor.",
      "I attribute my survival to the work of the divine, and seek to prove myself worthy of the honor.",
    ],
    flaws: [
      "I have been touched with dragon-greed, and have a lust for wealth which can never be satisfied.",
      "I secretly believe others are plotting to harm me.",
      "I no longer enjoy the simple pleasures in life. Food is but ashes and bile in my throat.",
      "Anyone who refuses to celebrate my celebrity does not deserve my company.",
      "I am paranoid and overly suspicious of others. Anyone may be an agent of the Maimed Virulence.",
      "Once I make up my mind, I follow my chosen course of action regardless of the consequences.",
    ],
  },
  {
    id: backgroundIds.ironRogueBandit,
    name: "Iron Route Bandit",
    description:
      "The Iron Route, once the primary trade route between Phlan and Zhentil Keep, used to be a site of extensive banditry until the Phlan’s recent occupation. Your time as an erstwhile bandit has given you plenty of experience in the saddle and a knack for acquiring and appraising other people’s mounts, pets, and vehicles among other things. This particular set of skills has become very lucrative for you by working for the underground as a horse thief for a local guild of thieves and other shadowy organizations.",
    flavorText: "You are a horse thief for a local guild of thieves.",
    skillProficiencyDescription:
      "You are proficient in Animal Handling and Stealth.",
    skillProficiencies: {
      default: [Skill.ANIMAL_HANDLING, Skill.STEALTH],
    },
    toolProficiencyDescription:
      "You are proficient with One type of gaming set, vehicles (land)",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds, toolIds.landVehicles],
        },
      ],
    },
    //A set of dark common clothes, pack saddle, burglar’s pack and a pouch containing 5gp.
    equipmentDescription: [
      `A set of dark ${i(itemIds.commonClothes, "common clothes")}`,
      `A pack saddle`,
      `A ${i(itemIds.burglarsPack, "burglar's pack")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing 5gp`,
    ],
    equipment: {
      default: [
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.packSaddle, quantity: 1 },
        { item: itemIds.burglarsPack, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 5 },
      ],
    },
    traits: [
      "If people leave their gear unsecured, they must not want it very much.",
      "I feel more comfortable sleeping under the open sky.",
      "I always pre-plan my escape should things go bad; I always like to have an exit strategy.",
      "I tend to give animal owners breeding and care advice whether or not they want it.",
      "I lost a pet as a child and sadly reflect on it to this day.",
      "I always form a powerful, emotional bond with my mount.",
      "I recoil at the thought of killing someone else’s pet or mount.",
      "I prefer to hang to the back of a scuffle or discussion. Better to have my enemies in front of me.",
    ],
    ideals: [
      "**Loyalty.** Never bite the hand that feeds. (Good)",
      "**Unpredictability.** Keep your enemy guessing and off-balance like a confused deer. (Chaotic)",
      "**Power.** I strive to become leader of the pack at all costs. (Lawful)",
      "**Freedom.** I bow to no one I don’t respect. (Chaotic)",
      "**Resourcefulness.** Our wits are our most valuable resource in troubled times. (Any)",
      "**Unity.** Lone wolves fail where the pack succeeds. (Any)",
    ],
    bonds: [
      "I cannot leave a harmed animal behind; I must save it or put it out of its misery.",
      "I leave behind my own personal calling cards when I do a job.",
      "I do not trust people who do not have a pet, mount, or furry companion.",
      "The pelt I wear on my back was from an animal that died saving my life. I will always cherish it.",
      "If my pet does not like you, I do not like you!",
      "Once you’ve ridden with me and fought by my side, I’ll be there for you odds be damned.",
    ],
    flaws: [
      "I talk to animals; I believe they understand me, even if they do not.",
      "I growl at and bite anyone who gets too close to my food while I am eating.",
      "I strongly dislike enclosed spaces and require intoxication or firm encouragement to enter them.",
      "I robbed the wrong caravan once. The owner is a powerful merchant who holds a grudge.",
      "I’m an inveterate gambler.",
      "I judge people based on how well they stand their ground in a fight. I got no time for cowards…",
    ],
  },
  {
    id: backgroundIds.phlanInsurgent,
    name: "Phlan Insurgent",
    description:
      "The taking of Phlan by Vorgansharax is a clear memory in your mind. You were going about your everyday business when the green dragon's forces spilled out of the sewers and assailed your home. Many of Phlan's citizens, young and old alike, were captured, killed, or offered as tribute to the Maimed Virulence. You, yourself, were one of those captured. But, either with the help of adventurers or through your own wits and sheer determination, you escaped.\n\nRather than flee the region, you've chosen to stay and fight. Finding refuge outside the town and the deadly thicket surrounding it, you strike out against the Tears of the Virulence and their monstrous allies. You've learned to survive in dire and desperate circumstances, with supplies running low and the arrival of reinforcements uncertain. You've grown accustomed to acting under the cover of night, dealing what blows you can to avenge the friends and family you lost within the currently occupied Phlan. You will drive Vorgansharax out, or you die trying.",
    flavorText:
      "You were going about your everyday business when the green dragon's forces spilled out of the sewers and assailed your home.",
    source: src.strahd,
    skillProficiencyDescription: "You are proficient in Stealth and Survival.",
    skillProficiencies: {
      default: [Skill.STEALTH, Skill.SURVIVAL],
    },
    toolProficiencyDescription:
      "You are proficient with one type of artisan’s tools and Land vehicles",
    toolProficiencies: {
      default: [toolIds.landVehicles],
      choices: [
        {
          numberOfChoices: 1,
          options: [...artisanIds],
        },
      ],
    },
    //A bag of 20 caltrops, a small trinket that connects you to the life you once had before the occupation of Phlan, a healer's kit, a set of dark common clothes that includes a cloak and hood, and a pouch containing 5gp
    equipmentDescription: [
      `A bag of 20 ${i(itemIds.caltropsBag, "caltrops")}`,
      `A small ${i(
        itemIds.trinket,
        "trinket"
      )} that connects you to the life you once had before the occupation of Phlan`,
      `A ${i(itemIds.healerKit, "healer's kit")}`,
      `A set of dark ${i(
        itemIds.commonClothes,
        "common clothes"
      )} that includes a cloak and hood`,
      `A ${i(itemIds.pouch, "belt pouch")} containing 5gp`,
    ],
    equipment: {
      default: [
        { item: itemIds.caltropsBag, quantity: 1 },
        { item: itemIds.trinket, quantity: 1 },
        { item: itemIds.healerKit, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 5 },
      ],
    },
    suggestedCharacteristics:
      "You have given up the life you knew as a citizen of Phlan. However, the Maimed Virulence’s invasion resonates deep inside you. Perhaps you have a few friends or family members who were able to escape with you. Or, perhaps, everyone you held dear either perished or went missing during the fall. You may know of someone who is, against all odds, surviving within the thicket and you long to liberate them from a life of peril within the town.",
    traits: [
      "My patience knows no bounds, so long as my goal is in sight.",
      "In life and in struggle, the ends justify my actions.",
      "If you aren’t helping me, you’d best at least stay out of my way.",
      "I long for the life that was taken away from me.",
      "Friends and family perished, tragically, before my eyes. I hope never to undergo that again.",
      "Making the right choices in life is important to me. The choices I make might save not just my life, but the lives of others as well.",
      "I can never allow my foes to get the drop on me.",
      "Time is a precious resource that I must spend wisely.",
    ],
    ideals: [
      "**Leadership.** The oppressed need someone to inspire them to courageous acts. (Good)",
      "**Unpredictability.** Keeping the enemy guessing and off-balance is my tactical strength. (Chaos)",
      "**Determination.** Threats to my home must be eliminated at all costs. (Any)",
      "**Freedom.** Those who are enslaved and unjustly imprisoned deserve my aid. (Good)",
      "**Resourcefulness.** Our wits are our most valuable resource in troubled times. (Any)",
      "**Unity.** Working together, we can overcome all obstacles, even the most seemingly insurmountable ones. (Any)",
    ],
    bonds: [
      "I’ll never let my fellow insurgents down. They are my only remaining friends.",
      "I was separated from a loved one during my escape from town. I will find them.",
      "One of the Tears of the Virulence was a trusted friend, until the day they betrayed the city. They will pay harshly for their transgressions.",
      "An item I hold close is my last remaining connection to the family I lost during the fall.",
      "The dragon who took my past life away from me will feel the full extent of my vengeance.",
      "The knowledge in Mantor’s Library is an irreplaceable treasure that must be protected.",
    ],
    flaws: [
      "I have no respect for those who flee. I harbor a deep grudge against the citizens who abandoned Phlan.",
      "Ale is the only way I can escape the desperation of my circumstances.",
      "It doesn’t take much to get me into a fight.",
      "Being an insurgent means doing things that aren’t always ethical. I’m still learning to live with that.",
      "My desire to liberate Phlan oftentimes clouds my judgment, despite my best efforts.",
      "I relentlessly despise the Maimed Virulence and his allies. I’d abandon other goals in order to strike out at them.",
    ],
  },
  {
    id: backgroundIds.stojanowPrisoner,
    name: "Stojanow Prisoner",
    description: `"We need to leave, now!”\n\nThose words still haunt your dreams at night. When everyone was fleeing Phlan, you chose to stay. Whether out of an emotional attachment, or pursuit of riches, you made the decision that would affect the rest of your life.\n\nFood became scarcer for those without connections. You became a beggar and to stay alive you bartered information to any interested party with food or gold to spare. You were good at what you did, and thought you were invincible. That changed when you were captured by the Tears of Virulence, the soldiers of Vorgansharax, the Maimed Virulence, for selling secrets to those bent on overthrowing the dragon. They locked you in the cells of Stojanow Gate. The first weeks you hoped to stay alive. As the weeks turned into months, and the interrogations continued, you began to pray for death.`,
    flavorText: "You were captured by the Tears of Virulence.",
    source: src.strahd,
    skillProficiencyDescription:
      "You are proficient in Deception and Persuasion.",
    skillProficiencies: {
      default: [Skill.DECEPTION, Skill.PERSUASION],
    },
    toolProficiencyDescription:
      "You are proficient with one type of gaming set and Thieves’ tools",
    toolProficiencies: {
      default: [toolIds.thievesTools],
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds],
        },
      ],
    },
    //A small knife, a set of common clothes, a trinket from the life you stayed behind to defend, and a pouch with 10gp
    equipmentDescription: [
      `A small ${i(itemIds.dagger, "knife")}`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(
        itemIds.trinket,
        "trinket"
      )} from the life you stayed behind to defend`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "10gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.dagger, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.trinket, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
    },
    traits: [
      "I am a bully; others will suffer as I have.",
      "I always say yes even when I mean no; it’s just easier.",
      "I aim to misbehave.",
      "I go out of my way to frustrate or anger those in power.",
      "I strive to obey the law. I will never again make the mistake of going against authority.",
      "I always plan everything out. The one time I let others plan things it did not end well for me.",
      "I take blame to protect others from pain.",
      "I horde information, you never know what may come in handy.",
    ],
    ideals: [
      "**Loss.** I freely give those who offend me what was so brutally denied me, death. (Chaos)",
      "**Dedication.** I never betray those who trust me. (Law)",
      "**Vengeance.** I use any means to get information I need; I have been well taught. (Evil)",
      "**Redemption.** Everyone deserves a second chance. (Good)",
      "**Resilience.** I can survive any challenge. (Any)",
      "**Leadership.** The best teams are made up of those that society has discarded.",
    ],
    bonds: [
      "I take up arms to help establish a free Phlan.",
      "The horrors of my time in Stojanow haunt my dreams, only after a day of hard work can I find sleep.",
      "I am indebted to those who freed me from prison, I will repay this debt.",
      "My torturer survived the attack that set me free, I will find them.",
      "I will not rest while others suffer fates similar to mine.",
      "I am searching for a way to heal the scars of Stojanow, both physical and emotional.",
    ],
    flaws: [
      "During stressful times, I find myself crying for no reason.",
      "My nerve endings are shot from the interrogations; I am numb to all but the harshest touch.",
      "I am incapable of standing up for myself.",
      "I folded under the torture, and gave information that I promised would be kept secret. My life would be in jeopardy if others found out.",
      "Survival is worth more than friendship.",
      "The ghosts from my past hinder my actions.",
    ],
  },
  {
    id: backgroundIds.ticklebellyNomad,
    name: "Ticklebelly Nomad",
    description:
      "You were born into a nomadic tribe that called the Ticklebelly Hills home. You migrated from location to location, living off the land with your tribe. The tribe would seasonally travel south into the Grass Sea and the Giant’s Cairn, north into the Dragonspine Mountains, and even occasionally east across the Stojanow River to the borders of the Quivering Forest. In your migrations, your people have come to know the stone giant tribes that populate the Giant’s Cairn.\n\nThe dragon cultists came to the hills one day — magic-users wearing purple and riding horrid beasts, black-clad warriors wearing wicked masks, and even soldiers from the nearby town of Phlan. Then the dragon called Vorgansharax arrived and laired in the hills, causing horrid thickets to grow and animals to act unusually. The cultists began raiding nomad camps for victims to offer to the wyrm. Eventually, the dragon moved on to attack Phlan, but life was never again the same for the nomads of the Ticklebelly Hills.",
    flavorText:
      "You were born into a nomadic tribe that called the Ticklebelly Hills home.",
    skillProficiencyDescription:
      "You are proficient in Animal Handling and Nature.",
    skillProficiencies: {
      default: [Skill.ANIMAL_HANDLING, Skill.NATURE],
    },
    toolProficiencyDescription: "You are proficient with Herbalism Kits.",
    toolProficiencies: {
      default: [toolIds.herbalismKit],
    },
    languageProficiencyDescription: "You can speak Giant.",
    languageProficiencies: {
      default: [Language.GIANT],
    },
    source: src.strahd,

    //Herbalism kit, a small article of jewelry that is distinct to your tribe, a hunting trap, a set of common clothes, and a pouch containing 5gp
    equipmentDescription: [
      `A ${i(itemIds.herbalismKit, "herbalism kit")}`,
      `A small article of ${i(
        itemIds.jewelery,
        "jewelery"
      )} that is distinct to your tribe`,
      `A ${i(itemIds.huntingTrap, "hunting trap")}`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "5gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.herbalismKit, quantity: 1 },
        { item: itemIds.huntingTrap, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 5 },
      ],
    },
    suggestedCharacteristics:
      "Ticklebelly nomads only venture into civilization when necessary. You are social within your tribe, with tribes of other nomads, and even with the stone giant tribes that populate the Giant’s Cairn. However, other communities tend to either put you on your guard or put you in a state of wonder. Was it this wonder that enticed you into a life of adventuring? On the other hand, you are fiercely protective of and dedicated to your tribe. Perhaps it was this dedication that led you to venture out; either of your own will or at the behest of your tribe’s leaders.",
    traits: [
      "I eagerly inject myself into the unknown.",
      "Villages, towns, and cities do not suit me. I’d rather be out in the wilderness any day.",
      "I accomplish my tasks efficiently, using as few resources as possible.",
      "It’s difficult for me to remain in one place for long.",
      "I loudly brag about my tribe every chance I get.",
      "Having walked among giants, I am fearless in the face of bigger creatures.",
      "I am quiet and reserved, but observant. Nothing escapes my attention.",
      "My word is my bond. I see a promise to completion, even if it conflicts with my beliefs.",
    ],
    ideals: [
      "**Kinship.** Family is most important in life. Though I may be far from my own, the bonds of family must be protected in others’ lives as well. (Good)",
      "**Preservation.** Nature must not be despoiled by encroaching civilization. (Any)",
      "**Wanderlust.** One must expand their horizons by seeing the world and exploring. (Chaos)",
      "**Isolation.** My tribe and its ways must be protected and shielded from outside influence. (Neutral)",
      "**Protection.** Threats to the land and to the people must be dealt with at any and all costs. (Law)",
      "**Belonging.** All creatures have a place in the world, so I strive to help others find theirs. (Good)",
    ],
    bonds: [
      "I ache to return to my tribe and the family I left, but cannot until my obligations are fulfilled.",
      "The dragon cultists that invaded my homeland stole away one of my tribe’s people. I will not know rest until I’ve found them.",
      "The dragon’s presence in the hills destroyed valuable territory and resulted in deaths within my tribe. The creature must pay for what it has done.",
      "I carry a trinket that spiritually and emotionally ties me to my people and my home.",
      "I discovered a strange relic in the hills during my tribe’s wanderings. I must discover what it is.",
      "One of the stone giant clans from the Giant’s Cairn has graced me with a mark of kinship.",
    ],
    flaws: [
      "I throw myself and my friends into situations, rarely ever thinking about consequences.",
      "Unfamiliar people and surroundings put me on edge.",
      "I have absolutely no patience for slowpokes and those who prove indecisive.",
      "My desire to experience new things causes me to make unsafe choices.",
      "I am overly protective of nature, sometimes to the detriment of my companions and myself.",
      "My lack of worldliness often proves my undoing in social, commercial, and hostile situations.",
    ],
  },
  {
    id: backgroundIds.caravanSpecialist,
    name: "Caravan Specialist",
    description:
      "You are used to life on the road. You pride yourself at having traveled every major tradeway in the Moonsea region, including the best back roads and shortcuts. When traveling these roads, you know where the best inns, campsites, and water sources are located, as well as potential locations of danger such as ambush. Having worked the roads as long as you have, you have made many acquaintances and find it easy to pick up information and rumors floating from town to town. You are skilled with beasts of burden and handling and repairing wagons of all kinds.",
    flavorText:
      "You pride yourself at having traveled every major tradeway in the Moonsea region.",
    source: src.mulmaster,
    skillProficiencyDescription:
      "You are proficient in Animal Handling and Survival.",
    skillProficiencies: {
      default: [Skill.ANIMAL_HANDLING, Skill.SURVIVAL],
    },
    toolProficiencyDescription: "You are proficient with Land vehicles.",
    toolProficiencies: {
      default: [toolIds.landVehicles],
    },
    languageProficiencyDescription:
      "You can speak one additional language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    //Equipment: A whip, a tent, a regional map, a set of traveler's clothes, and a pouch containing 10gp
    equipmentDescription: [
      `A ${i(itemIds.whip, "whip")}`,
      `A ${i(itemIds.tent, "tent")}`,
      `A regional map`,
      `A set of ${i(itemIds.travelersClothes, "traveler's clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "10gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.whip, quantity: 1 },
        { item: itemIds.tent, quantity: 1 },
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
    },
    traits: [
      "Any group is only as strong as its weakest link. Everyone has to pull their own weight.",
      "There's always someone out there trying to take what I've got. Always be vigilant.",
      "Anything can be learned if you have the right teacher. Most folks just need a chance.",
      "Early to bed and early to rise; this much at least is under my control.",
      "You can listen to me or don't and wish you had. Everyone ends up on one side of that fence.",
      "Eventually my hard work will be rewarded. Maybe that time has finally come.",
      "A strong ox or horse is more reliable than most people I've met.",
      "I never had time for books, but wish I had. I admire folks who have taken the time to learn.",
    ],
    ideals: [
      "**Service.** Using my talents to help others is the best way of helping myself. (Good)",
      "**Selfish.** What people don't know WILL hurt them, but why is that my problem? (Evil)",
      "**Wanderer.** I go where the road takes me. Sometimes that's a good thing… (Chaotic)",
      "**Fittest.** On the open road, the law of nature wins. Victims are the unprepared. (Lawful)",
      "**Focused.** I simply have a job to do, and I'm going to do it. (Neutral)",
      "**Motivated.** There's a reason I'm good at what I do, I pay attention to the details. (Any)",
    ],
    bonds: [
      "My brother has a farm in Elmwood and I've helped him and his neighbors move their goods to Mulmaster and other surrounding towns. Those are good people.",
      "A caravan I led was attacked by bandits and many innocents died. I swear that I will avenge them by killing any bandits I encounter.",
      "The Soldiery are mostly good guys who understand the importance of protecting the roads. The City Watch is who you have to look out for. If they are inspecting your goods, get ready to pay a fine.",
      "The new commander of Southroad Tower, Capt. Holke, understands the importance of safe roads. He's hired me for several jobs and I'm grateful.",
      "There's always a road I haven't traveled before. I'm always looking for new places to explore.",
      "Wealth and power mean little without the freedom to go where and when you want.",
    ],
    flaws: [
      "I have trouble trusting people I've just met.",
      "I enjoy the open road. Underground and tight spaces make me very nervous.",
      "I expect others to heed my orders and have little respect or sympathy if they don't.",
      "I am very prideful and have trouble admitting when I'm wrong.",
      "Once I decide on a course of action, I do not waiver.",
      "I like to explore, and my curiosity will sometimes get me into trouble.",
    ],
  },
  {
    id: backgroundIds.earthspurMiner,
    name: "Earthspur Miner",
    description:
      "You are a down-on-your-luck miner from the Earthspur Mountains who is no stranger to hardship. You have spent a great deal of time living among the dwarves, goliaths, and denizens of the Underdark who also work mines in the area. At this point, you're just as comfortable working underground as above. You know how to read a seam, dicker for supplies with the deep gnomes, party with dwarves, and find your way back to the surface afterward. Unfortunately, you haven't struck it rich… yet. Although you've come to Mulmaster looking for work, the tall peaks and deep mines of the Earthspurs still call to you.",
    flavorText:
      "You are a down-on-your-luck miner from the Earthspur Mountains.",
    source: src.mulmaster,
    skillProficiencyDescription:
      "You are proficient in Athletics and Survival.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.SURVIVAL],
    },
    languageProficiencyDescription: "You can speak Dwarven and Undercommon.",
    languageProficiencies: {
      default: [Language.DWARVISH, Language.UNDERCOMMON],
    },
    //A shovel or a miner's pick, a block and tackle, a climber's kit , a set of common clothes, and a pouch containing 5gp
    equipmentDescription: [
      `A ${i(itemIds.shovel, "shovel")} or a ${i(
        itemIds.minersPick,
        "miner's pick"
      )}`,
      `A ${i(itemIds.blockAndTackle, "block and tackle")}`,
      `A ${i(itemIds.climbingKit, "climber's kit")}`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "5gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.shovel, quantity: 1 },
        { item: itemIds.blockAndTackle, quantity: 1 },
        { item: itemIds.climbingKit, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 5 },
      ],
    },
    traits: [
      "Nothing bothers me for long.",
      "I hate the horrors of the Underdark with a passion. They took my friends and family and almost got me.",
      "Anything worth doing takes time and patience. I have learned to plan and wait for the things I want and to be patient to achieve my goals.",
      "I can party with everyone. Whether with dwarves, or goliaths, or deep gnomes, I can find a way to have a good time.",
      "I'd rather be mining. This is okay; mining is better.",
      "I think that I will stumble upon great riches if I just keep looking.",
      "People who don't work with their hands and who live in houses are soft and weak.",
      "I wish I were more educated. I look up to people who are.",
    ],
    ideals: [
      "**Generosity.** The riches of the earth are to be shared by all. (Good)",
      "**Greed.** Gems and precious metals, I want them all for myself. (Evil)",
      "**Mooch.** Property, schmoperty. If I need it, I take and use it. If I don't, I leave it for someone else. (Chaotic)",
      "**Boundaries.** Everything and everyone has its prescribed place; I respect that and expect others to do the same. (Lawful)",
      "**Let it Be.** I don't meddle in the affairs of others if I can avoid it. They're none of my business. (Neutral)",
      "**Materialist.** I want riches to improve my life. (Any)",
    ],
    bonds: [
      "The people of the Earthspur mines are my family. I will do anything to protect them.",
      "A deep gnome saved my life when I was injured and alone. I owe his people a great debt.",
      "I must behold and preserve the natural beauty of places below the earth.",
      "Gems hold a special fascination for me, more than gold, land, magic, or power.",
      "I want to explore new depths and scale new heights.",
      "Someday I'm going to find the motherlode, then I'll spend the rest of my life in luxury.",
    ],
    flaws: [
      "I'm uncomfortable spending time under the open sky. I'd rather be indoors or underground.",
      "I'm not used to being around other people much and sometimes get grouchy about it.",
      "Good tools are more reliable than people. In a cave-in, I would save a sturdy pick before a stranger.",
      "I jealously guard my secrets, because I think others will take advantage of me if they learn what I know.",
      "I am obsessed with getting rich. I always have a scheme brewing for making it big.",
      "I'm afraid of the dark.",
    ],
  },
  {
    id: backgroundIds.harborfolk,
    name: "Harborfolk",
    description:
      "You are one of the hundreds of small-time fishermen and -women who haul the bounty of Mulmaster's freshwater harbor to the city's markets each morning. You have spent countless days rowing in the waters in and around Mulmaster and know them and the other fisher folk, dockworkers, and port inhabitants better than anyone. Though you have left that life behind, you still visit once in a while.",
    flavorText:
      "You are one of the hundreds of small-time fishermen and -women who haul the bounty of Mulmaster's freshwater harbor to the city's markets each morning.",
    source: src.mulmaster,
    skillProficiencyDescription:
      "You are proficient in Athletics and Sleight of Hand.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.SLEIGHT_OF_HAND],
    },
    toolProficiencyDescription:
      "You are proficient with Water vehicles, One type of gaming set.",
    toolProficiencies: {
      default: [toolIds.waterVehicle],
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds],
        },
      ],
    },
    //Fishing tackle, a dice set, playing card set, or Three Dragon Ante set, a set of common clothes, a rowboat, and a pouch containing 5gp
    equipmentDescription: [
      `${i(itemIds.fishingTackle, "Fishing tackle")},`,
      `A ${i(itemIds.diceSet, "dice set")}, ${i(
        itemIds.playingCardSet,
        "playing card set"
      )}, or ${i(itemIds.threeDragonAnteSet, "Three Dragon Ante set")}`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.rowboat, "rowboat")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "5gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.fishingTackle, quantity: 1 },
        { item: itemIds.diceSet, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.rowboat, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 5 },
      ],
    },
    traits: [
      "I am curious. I want to know why things are the way they are and why people do the things that they do.",
      "I can't sing, but that never stops me from doing it, loudly. Everyone loves a good sea shanty!",
      "I think the High Blade is doing a terrific job, don't you?",
      "I'm very excited that the House Built on Gold is being restored. I am a zealous worshipper of Waukeen.",
      "I am quite superstitious. I see portents in everyday occurrences.",
      "I resent the rich and enjoy thwarting their plans and spoiling their fun in small ways.",
      "I have a sea story to fit every occasion.",
      "I'm a fisher, but I secretly detest eating fish. I will do anything to avoid it.",
    ],
    ideals: [
      "**Calm.** For all things, there is a tide. I set sail when it is right, and mend my nets when it is not. (Lawful)",
      "**Windblown.** I go where the winds blow. No man or woman tells me where or when to sail. (Chaotic)",
      "**Aspiring.** I will gain the favor of a Zor or Zora patron, maybe even one of the Blades! (Any)",
      "**Salty.** I want people to look to me as an expert on plying Mulmaster Harbor. (Any)",
      "**Selfless.** We are all children of the sea. I help everyone in peril afloat and ashore. (Good)",
      "**Let them Drown.** I refuse to risk my hide to help others. They wouldn't help me if roles were reversed. (Evil)",
    ],
    bonds: [
      "I once lost everything but my rowboat. I'll do anything to protect it.",
      "My brother was in the Soldiery, but he was killed. I really look up to the men and women who serve.",
      "The Cloaks killed my friend for spellcasting. I'll get them back somehow, someday.",
      "The High House of Hurting helped me when I was hurt and asked nothing in return. I owe them my life.",
      "I was robbed in the Zhent ghetto once. It will not happen again.",
      "I would do anything to protect the other harborfolk. They are my family.",
    ],
    flaws: [
      "I drink too much, which causes me to miss the tide.",
      "I killed a drunk member of the City Watch in a brawl. I am terrified that they might find out.",
      "I oversell myself and make promises I can't keep when I want to impress someone.",
      "Book learning is a waste of time. I have no patience for people who don't speak from experience.",
      "I almost always cheat. I can't help myself.",
      "I am a secret informant for the Hawks. I send them reports about everything I see and hear, even what my friends and allies are up to.",
    ],
  },
  {
    id: backgroundIds.mulmasterAristocrat,
    name: "Mulmaster Aristocrat",
    description:
      "From your hilltop home, you have looked down (literally and perhaps figuratively) on the unwashed masses of Mulmaster for your entire life. Your fur-trimmed robes and training in the visual and performing arts mark you as wealthy and perhaps well-born; you are a member of the City of Danger's aristocracy.\n\nNone of your immediate family members sits on the Council of Blades or is even a Zor or Zora… yet. Nevertheless, you are one of Mulmaster's elite, and whether you personally covet a higher standing or not, you are at home in the dance halls where the aristocracy gathers to plot, to scheme, to do business, to discuss the arts, and, above all, to see, and to be seen.",
    source: src.mulmaster,
    flavorText: "You are a member of the City of Danger's aristocracy.",
    skillProficiencyDescription:
      "You are proficient in Deception and Persuasion.",
    skillProficiencies: {
      default: [Skill.DECEPTION, Skill.PERSUASION],
    },
    toolProficiencyDescription:
      "One type of artistic artisan's tools and one musical instrument.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...artisanIds],
        },
        {
          numberOfChoices: 1,
          options: [...instrumentIds],
        },
      ],
    },
    //One set of artisan's tools or musical instrument, a set of fine clothes, and a purse containing 10gp
    equipmentDescription: [
      `One set of ${i(artisanIds[0], "artisan's tools")} or musical instrument`,
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `A purse containing ${i(itemIds.goldPiece, "10gp")}`,
    ],
    equipment: {
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...artisanToolItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...instrumentItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    traits: [
      "My ambitions are boundless. I will be a Zor or Zora one day!",
      "I must always look my best.",
      "Beauty is everywhere. I can find it in even the homeliest person and the most horrible tragedy.",
      "Décorum must be preserved at all costs.",
      "I will not admit I am wrong if I can avoid it.",
      "I am extremely well-educated and frequently remind others of that fact.",
      "I take what I can today, because I do not know what tomorrow holds.",
      "My life is full of dance, song, drink, and love.",
    ],
    ideals: [
      "**Generous.** I have a responsibility to help and protect the less fortunate. (Good)",
      "**Loyal.** My word, once given, is my bond. (Lawful)",
      "**Callous.** I am unconcerned with any negative effects my actions may have on the lives and fortunes of others. (Evil)",
      "**Impulsive.** I follow my heart. (Chaotic)",
      "**Ignorant.** Explanations bore me. (Neutral)",
      "**Isolationist.** I am concerned with the fortunes of my friends and family. Others must see to themselves. (Any)",
    ],
    bonds: [
      "I have dedicated my wealth and my talents to the service of one of the city's many temples.",
      "My family and I are loyal supporters of High Blade Jaseen Drakehorn. Our fortunes are inexorably tied to hers. I would do anything to support her.",
      "Like many families who were close to High Blade Selfaril Uoumdolphin, mine has suffered greatly since his fall. We honor his memory in secret.",
      "My family plotted with Rassendyll Uoumdolphin's brother. Betrayal is the quickest route to power.",
      "Wealth and power are nothing. Fulfillment can only be found in artistic expression.",
      "It's not how you feel, who you know, or what you can do - it's how you look, and I look fabulous.",
    ],
    flaws: [
      "I have difficulty caring about anyone or anything other than myself.",
      "Having grown up with wealth, I am careless with my finances. I overspend and am overly generous.",
      "The ends (my advancement) justify any means.",
      "I must have what I want and will brook no delay.",
      "My family has lost everything. I must keep up appearances, lest we become a laughingstock.",
      "I have no artistic sense. I hide that fact behind extreme opinions and have become a trendsetter.",
    ],
  },
  {
    id: backgroundIds.phlanRefugee,
    name: "Phlan Refugee",
    description:
      "Gone are the happier days of walking into the Laughing Goblin Inn after a hard day’s labor. Everything has changed, and you are lucky to be alive. Back in Phlan you could count yourself among those street-wise folks who knew when to pay a bribe and who to work with to make a living. Your ability to listen to the winds of change have saved you before, and this time they allowed you to be one of the lucky few who escaped Phlan with something more than just the shirt on your back.",
    flavorText:
      "You are a one of the lucky few who escaped Phlan with something more than just the shirt on your back",
    source: src.strahd,
    skillProficiencyDescription: "You are proficient in Insight and Athletics.",
    skillProficiencies: {
      default: [Skill.INSIGHT, Skill.ATHLETICS],
    },
    toolProficiencyDescription:
      "You are proficient with One type of Artisan's tools.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...artisanIds],
        },
      ],
    },
    languageProficiencyDescription:
      "You can speak one additional language of your choice.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: Object.values(Language),
        },
      ],
    },
    //A set of artisan’s tools (one of your choice), a token of the life you once knew, a set of traveler’s clothes, and a pouch containing 15gp
    equipmentDescription: [
      `A set of artisan tools of your choice`,
      `A token of the life you once knew`,
      `A set of ${i(itemIds.travelersClothes, "traveler's clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "15gp"
      )}`,
    ],
    equipment: {
      choices: [
        {
          numberOfChoices: 1,
          options: artisanToolItemIds.map((id) => [{ item: id, quantity: 1 }]),
        },
      ],
      default: [
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
      ],
    },
    traits: [
      "I may have lost everything I worked for most of my life, but there's work to be done. No time to linger on the past.",
      "I worked hard to get where I am and I refuse to let a little hardship stop me from succeeding.",
      "I protect those around me: You never know when one of them will be useful.",
      "I have always gotten ahead by giving, why change now?",
      "I prepare for everything. It paid off in Phlan and it will pay off again.",
      "I will reclaim my home. Though the path may be long, I will never give up hope.",
      "I never cared for personal hygiene, and am amazed that it bothers others.",
      "I am always willing to volunteer my services, just as long as I don’t have to do anything.",
    ],
    ideals: [
      "**Justice.** Corruption brought Phlan down. I will not tolerate that any longer. (Lawful)",
      "**Acceptance.** Stability is a myth. To think you can control your future is futile. (Chaotic)",
      "**Hope.** I am guided by a higher power and I trust that everything will be right in the end. (Good)",
      "**Restraint.** I hate those who caused my loss. It is all I can do not to lash out at them. (Any)",
      "**Strength.** As shown in Phlan, the strong survive. If you are weak you deserve what you get. (Evil)",
      "**Openness.** I am always willing to share my life story with anyone who will listen. (Any)",
    ],
    bonds: [
      "I have the chance at a new life and this time I am going to do things right.",
      "The Lord Regent brought this suffering upon his people. I will see him brought to justice.",
      "I await the day I will be able to return to my home in Phlan.",
      "I will never forget the debt owed to Glevith of the Welcomers. I will be ready to repay that debt when called upon.",
      "There was someone I cared about in Phlan. I will find out what happened to them.",
      "Some say my life wasn't worth saving. I will prove them wrong.",
    ],
    flaws: [
      "I used the lives of children to facilitate my escape from Phlan.",
      "I am a sucker for the underdog, and always bet on the losing team.",
      "I am incapable of standing up for myself.",
      "I will borrow money from friends with no intention to repay it.",
      "I am unable to keep secrets. A secret is just an untold story.",
      "When something goes wrong, it's never my fault.",
    ],
  },
  {
    id: backgroundIds.cormanthorRefugee,
    name: "Cormanthor Refugee",
    description:
      "You are one of hundreds of refugees who were driven from Hillsfar or who fled the destruction of Myth Drannor and who now shelter in hidden camps under the northern eaves of the Cormanthor Forest. If you grew up in the camps, you have never been to a settlement other than the village of Elventree. As a guest of the elves, you have learned their ways and the ways of the forest. You are also traumatized, as residual wild magic, energies released by the fall of Thultanar upon Myth Drannor, and the constant fear of raids hunting for non-humans to fight in Hillsfar's Arena, have taken their toll on you, as they have on everyone in the camps.",
    flavorText:
      "You are one of hundreds of refugees who were driven from Hillsfar or who fled the destruction of Myth Drannor",
    source: src.hillsfar,
    skillProficiencyDescription: "You are proficient in Nature and Survival.",
    skillProficiencies: {
      default: [Skill.NATURE, Skill.SURVIVAL],
    },
    toolProficiencyDescription:
      "You are proficient with one type of artisan's tools.",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...artisanIds],
        },
      ],
    },
    languageProficiencyDescription: "You can speak Elvish.",
    languageProficiencies: {
      default: [Language.ELVISH],
    },
    //A two-person tent, artisan's tools, a holy symbol, a set of traveler's clothes, and a pouch containing 5gp
    equipmentDescription: [
      `A ${i(itemIds.tent, "two-person tent")}`,
      `Artisan's tools of your choice`,
      `A holy symbol`,
      `A set of ${i(itemIds.travelersClothes, "traveler's clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "5gp"
      )}`,
    ],
    equipment: {
      choices: [
        {
          numberOfChoices: 1,
          options: artisanToolItemIds.map((id) => [{ item: id, quantity: 1 }]),
        },
        {
          numberOfChoices: 1,
          options: [
            [
              { item: itemIds.amulet, quantity: 1 },
              { item: itemIds.emblem, quantity: 1 },
              { item: itemIds.reliquary, quantity: 1 },
            ],
          ],
        },
      ],
      default: [
        { item: itemIds.tent, quantity: 1 },
        { item: itemIds.travelersClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 5 },
      ],
    },
    traits: [
      "I long for a home that never really existed, whether in the camps, Hillsfar, or Myth Drannor.",
      "Though I am not an elf, I am a fervent, radical worshipper of the elven gods.",
      "I live in the moment, knowing my life could be turned upside down any day.",
      "I appreciate beauty in all of its forms.",
      "I hate the dark elves and the Netherese for each driving the elves out of Cormanthyr in the past.",
      "I am a forest bumpkin who grew up in a tent in the woods and am wholly ignorant of city life.",
      "I was raised alongside children of many other races. I harbor no racial prejudices at all.",
      "The elves have just the right word for so many things that cannot be expressed as well in other languages. I pepper my speech with elven words, phrases, and sayings.",
    ],
    ideals: [
      "**Patient.** The elves have taught me to think and plan for the long-term. (Lawful)",
      "**Rebellious.** Governments and politicians drove my family to the camps. I subtly defy authority whenever I think I can get away with it. (Chaotic)",
      "**Self-Absorbed.** I've had to look out for number one so long that it has become second nature. (Any)",
      "**Wanderlust.** I want to see as much of the world beyond the camps as I can. (Any)",
      "**Generous.** I give everything I can to help those in need, regardless of who they are. (Good)",
      "**To the Abyss with Them.** The people of Hillsfar cast me out. I won't risk my hide to help them. (Evil)",
    ],
    bonds: [
      "The elves took me in when I had nowhere else to go. In return, I do what I can to help elves in need.",
      "I seek revenge against the people of Hillsfar for driving my family into the forest.",
      "My family lost everything when they were driven from Hillsfar. I strive to rebuild that fortune.",
      "The forest has provided me with food and shelter. In return, I protect forests and those who dwell within.",
      "I am deeply, tragically in love with someone whose racial lifespan is far longer or shorter than mine.",
      "Members of my extended family did not make it to the camps or have been kidnapped to fight in the Arena. I search for them tirelessly.",
    ],
    flaws: [
      "I am very uncomfortable indoors and underground.",
      "I am haughty. I grew up among the elves and emulate them. Other races are crude in comparison.",
      "Elf this, elf that. I am sick and tired of the elves.",
      "I am a miser. Having lost everything once before, I clutch my possessions and wealth very tightly.",
      "I am a moocher. I am so used to others providing for me that I have come to expect everyone to do it.",
      "I believe the gods have cursed me, my family, and all of the Cormanthor refugees. We are all doomed, doomed I tell you!",
    ],
  },
  {
    id: backgroundIds.gateUrchin,
    name: "Gate Urchin",
    description:
      "All traffic into and out of the City of Trade passes through the Hillsfar Gate, making it the ideal place for the destitute to gather to panhandle, busk, gossip, and pick pockets. You grew up on the streets in the shadow of that great steel edifice, which houses both Red Plumes and Guild Mages. Though you may have moved on, you still have friends among them, and that life has had a lasting impact on you.",
    flavorText:
      "You grew up on the streets in the shadow of the great steel Hillsfar Gate.",
    source: src.hillsfar,
    skillProficiencyDescription:
      "You are proficient in Sleight of Hand and Deception.",
    skillProficiencies: {
      default: [Skill.SLEIGHT_OF_HAND, Skill.DECEPTION],
    },
    toolProficiencyDescription:
      "You are proficient with Thieves' Tools and one type of musical Instrument.",
    toolProficiencies: {
      default: [toolIds.thievesTools],
      choices: [
        {
          numberOfChoices: 1,
          options: [...instrumentIds],
        },
      ],
    },
    //A battered alms box, a musical instrument, a cast-off military jacket, cap, or scarf, a set of common clothes, and a pouch containing 10gp
    equipmentDescription: [
      `A battered ${i(itemIds.almsBox, "alms box")}`,
      `A musical instrument`,
      `A cast-off military jacket, cap, or scarf`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "10gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.almsBox, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...instrumentItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    traits: [
      "I appreciate the simple things in life: a song, a warm meal, a sunny day. I don't need any more.",
      "My problems are always caused by others. I'm never to blame.",
      "I am afraid I could wind up back on the streets any day.",
      "I get along with everyone.",
      "I see people as marks for a con and have difficulty feeling true empathy for them.",
      "I have a real flair for matchmaking. I can find anyone a spouse!",
      "I think money is the true measure of appreciation and affection. Everything else is talk or an act.",
      "I don't like having a lot of stuff, just a few simple things I need. I don't like being tied down and tend to leave things behind when I don't need them anymore.",
    ],
    ideals: [
      "**Loyal.** I never rat out any of my friends, even when the Red Plumes or the Rogues' Guild ask. (Lawful)",
      "**Adventurous.** I don't like doing the same thing every day. I crave variety. (Chaotic)",
      "**Strong.** Only the strong survive. I respect those who are strong and powerful. (Any)",
      "**Witty.** Brains are better than brawn. I rely on my wits and respect others who do the same. (Any)",
      "**Honest.** Others can do what they want, but I won't lie or steal, even to feed my family. (Good)",
      "**Ungrateful.** Those who give only do it to make themselves feel better. I steal from them. (Evil)",
    ],
    bonds: [
      "The Joydancers of Lliira gave me my instrument when I really needed food. I hate them for that.",
      "Busking has taught me to love music above all else.",
      "The Rogues' Guild spared me when I did a job without cutting them in. I owe them a great debt.",
      "I know people hate the Red Plumes, but some of them were really good to me. I help Red Plumes whenever I can, and I respect them. They're just doing what they have to do to get by in this world.",
      "I will be wealthy someday. My descendants will live in comfort and style.",
      "I know how hard life on the streets is. I do everything I can for those who have less than me.",
    ],
    flaws: [
      "Though I no longer live at the Gate, I am still always concerned about where I will get my next meal.",
      "Years of thieving have become habit. I sometimes steal from strangers without thinking about it.",
      "I am ashamed of my origins. I pretend I am higher-born and fear others will find out the truth.",
      "I think people who grew up in houses are soft, spoiled, and ungrateful. I frequently tell them so.",
      "I am still very uncomfortable wearing nice clothes, sleeping in a warm bed, and eating fine food.",
      "I do not trust anyone who has not had a hard life.",
    ],
  },
  {
    id: backgroundIds.hillsfarMerchant,
    name: "Hillsfar Merchant",
    description:
      "Before becoming an adventurer, you were a successful merchant operating out of Hillsfar, the City of Trade. Your family operated warehouses, organized caravans, managed stores, or owned a ship, and has trade contacts throughout the Moonsea region, as well as up and down the length of the Sword Coast. Perhaps they import ore, uncut gems, untreated furs, or grain into the City of Trade, or they export fine cloth, faceted gems, fine furs, or Dragon's Breath, a brandy-like liquor. Regardless, you've largely given that life up for some reason and have chosen to seek adventure instead. Nevertheless, the training you received then, and perhaps the contacts you made, serve you well as an adventurer.",
    flavorText: "You were a successful merchant operating out of Hillsfar.",
    source: src.hillsfar,
    skillProficiencyDescription:
      "You are proficient in Insight and Persuasion.",
    skillProficiencies: {
      default: [Skill.INSIGHT, Skill.PERSUASION],
    },
    toolProficiencyDescription:
      "You are proficient with land and water vehicles.",
    toolProficiencies: {
      default: [toolIds.landVehicles, toolIds.waterVehicle],
    },
    //A set of fine clothes, a signet ring, a letter of introduction from your family's trading house, and a purse containing 25gp
    equipmentDescription: [
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `A ${i(itemIds.signetRing, "signet ring")}`,
      `A letter of introduction from your family's trading house`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "25gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.fineClothes, quantity: 1 },
        { item: itemIds.signetRing, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 25 },
      ],
    },
    traits: [
      "I fill my evenings with wine or mead and song.",
      "I greatly admire gladiators and enjoy the Arena.",
      "I take my wealth for granted. It seldom occurs to me that others aren't rich themselves.",
      "I leave broken hearts all around the Moonsea region and up and down the Sword Coast.",
      "I work hard and seldom make time for fun.",
      "I am particularly devout and pray often.",
      "The Red Plumes caught me once. I hate them.",
      "I ask a lot of questions to get information about those with whom I am working and dealing.",
    ],
    ideals: [
      "**Frugal.** I spend my money very carefully. (Lawful)",
      "**Profligate.** I tend to spend extravagantly. (Chaotic)",
      "**Honest.** I deal with others above board. (Any)",
      "**Sharp.** I seek to make the best deal possible. (Any)",
      "**Charitable.** I give generously to others. (Good)",
      "**Greedy.** I do not share my wealth with others. (Evil)",
    ],
    bonds: [
      "I am fiercely loyal to those with whom I work.",
      "I must uphold the good name of my family.",
      "I will prove myself to my family as an adventurer.",
      "Deals are sacrosanct. I never go back on my word.",
      "I love making deals and negotiating agreements.",
      "I guard my wealth jealously.",
    ],
    flaws: [
      "I am a braggart. I promote myself shamelessly.",
      "I am vain. I always wear the latest fashions.",
      "I am a glutton. I eat and drink to excess.",
      "I am a snob. I want only the finest things in life.",
      "I am lazy. I want others to take care of everything.",
      "I am overconfident. I overestimate my abilities.",
    ],
  },
  {
    id: backgroundIds.hillsfarSmuggler,
    name: "Hillsfar Smuggler",
    description: `Hillsfar is the City of Trade. However, the Great Law of Trade only protects "legitimate" trade, trade that passes through the city's sole gate, which the Red Plumes monitor and tax. And the Great Law of Humanity banishes non-humans from the city altogether. The two Great Laws create great demand and great risk for smugglers, who shepherd illicit goods and non-humans into and out of the city by secret routes. The Rogues' Guild tightly controls all of this activity, taking its cut from sanctioned jobs and exacting punishment for independent jobs.\n\nPerhaps you trafficked Dragon's Breath (a brandy-like liquor) to avoid tariffs, or contraband to avoid seizure, or maybe you are a human who sympathizes with the non-humans and worked as part of the network of secret routes and safe houses that helps them pass through Hillsfar. Either way, you have contacts in the smuggling community who can help you slip into and out of the city unnoticed, for a price.`,
    flavorText:
      "You have contacts in the smuggling community who can help you slip into and out of the city unnoticed.",
    source: src.hillsfar,
    skillProficiencyDescription:
      "You are proficient in Perception and Stealth.",
    skillProficiencies: {
      default: [Skill.PERCEPTION, Skill.STEALTH],
    },
    toolProficiencyDescription: "You are proficient with Forgery Kits.",
    toolProficiencies: {
      default: [toolIds.forgeryKit],
    },
    languageProficiencyDescription: "You can speak one racial language.",
    languageProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [
            Language.DWARVISH,
            Language.ELVISH,
            Language.GNOMISH,
            Language.GIANT,
            Language.GOBLIN,
            Language.HALFLING,
            Language.ORC,
            Language.DRACONIC,
            Language.MINOTAUR,
            Language.GITH,
          ],
        },
      ],
    },
    //A forgery kit, a set of common clothes, and a pouch containing 5gp
    equipmentDescription: [
      `A ${i(itemIds.forgeryKit, "forgery kit")}`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "5gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.forgeryKit, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 5 },
      ],
    },
    traits: [
      "When I'm not smuggling, I gamble.",
      "I just love halfling cooking and baking!",
      "I party with dwarves whenever I can.",
      "I'm a terrible singer, but I love to do it.",
      "I was raised to honor Chauntea and still do.",
      "The blood sports of the Arena sicken me.",
      "I think non-humans are really interesting.",
      "I exaggerate the tales of my exploits.",
    ],
    ideals: [
      "**Fair.** I think everyone deserves to be treated fairly. I don't play favorites. (Lawful)",
      "**Impulsive.** Planning is often a waste of time. No plan survives contact with reality. It's easier to dive in and deal with the consequences. (Chaotic)",
      "**Curious.** I want to learn as much as I can about the people and places I encounter. (Any)",
      "**Prepared.** I think success depends on preparing as much as possible in advance. (Any)",
      "**Respectful.** I think everyone deserves to be treated with respect and dignity, regardless of their race, creed, color, or origin. (Good)",
      "**Corrupt.** I will break the law or act dishonestly if the money is right. (Evil)",
    ],
    bonds: [
      "I am loyal to the Rogues' Guild and would do anything for them.",
      "I love the city of Hillsfar and my fellow Hillsfarians, despite the recent problems.",
      "I admire the elves. I help them whenever I can.",
      "A gnome helped me once. I pay the favor forward.",
      "I enjoy tricking the Red Plumes at every opportunity.",
      "I smuggled agricultural goods for non-human farmers. I try to help them when I can.",
    ],
    flaws: [
      "My hatred for the Red Plumes burns so brightly that I have difficulty suppressing it around them.",
      "The Red Plumes caught me once before, and I was branded for my crime. If they catch me again, for any offense, the punishment will be dire.",
      "I treat all Hillsfarians poorly. I am disgusted with their failure to revolt against the Great Law of Humanity.",
      "I have difficulty trusting strangers. Anyone could be a spy for the authorities.",
      "I am greedy. There isn't much I won't do for money.",
      "I'm an informant for the Red Plumes. They let me continue my activities, so long as I pass them information about illegal activity in Hillsfar.",
    ],
  },
  {
    id: backgroundIds.secretIdentity,
    name: "Secret Identity",
    description:
      "Even though you are a non-human, despite Hillsfar's Great Law of Humanity, you continue to live in the City of Trade. You do so by maintaining a secret identity, forging documents, and even wearing a disguise. Few, if any, know you aren't human.\n\nIf you're a halfling or a gnome, you pass as a little person or a child. If you're a half-elf, half-orc, or genasi, you disguise your non-human features. Other races use a combination of disguise and concealing clothing to hide.\n\nYour reasons for doing so are your own. Perhaps you're a great dissident or the agent of a foreign power. Maybe you have a relationship with someone you cannot bear to leave. Regardless, this way of life has taken a heavy toll on you.",
    flavorText: "You maintain a secret identity to live in the City of Trade.",
    source: src.hillsfar,
    skillProficiencyDescription: "You are proficient in Deception and Stealth.",
    skillProficiencies: {
      default: [Skill.DECEPTION, Skill.STEALTH],
    },
    toolProficiencyDescription:
      "You are proficient with Disguise Kits and forgery kits.",
    toolProficiencies: {
      default: [toolIds.disguiseKit, toolIds.forgeryKit],
    },
    //A disguise kit, a forgery kit, a set of common clothes, a belt pouch, 5gp.
    equipmentDescription: [
      `A ${i(itemIds.disguiseKit, "disguise kit")}`,
      `A ${i(itemIds.forgeryKit, "forgery kit")}`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "5gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.disguiseKit, quantity: 1 },
        { item: itemIds.forgeryKit, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 5 },
      ],
    },
    traits: [
      "Despite its problems, I love Hillsfar; it's the greatest city in the world. The only one for me.",
      "I move from place to place, never staying anywhere long and leaving nothing behind.",
      "I think flattery is the best way to direct attention away from me.",
      "I don't make friends easily. They're a liability I cannot afford.",
      "Risk and danger exhilarate me. Pulling off schemes and deceptions is a rush.",
      "The First Lord is right, humans are superior. I really admire them, despite the atrocities.",
      "I avoid people of my own race, as well as things associated with my race, lest they give me away.",
      "I live for the Arena. I admire gladiators and enjoy the thrill of blood on the sands!",
    ],
    ideals: [
      "**Quisling.** Supporting the rulers of the land and following the laws is the road to salvation.",
      "**Scoflaw.** The laws and lawmakers are corrupt. I follow laws only when it suits me. (Chaotic)",
      "**Optimist.** Everyone is basically good. Though the government is misguided, it will all be okay. (Any)",
      "**Secretive.** I am in the habit of not talking about myself. My business is none of yours. (Any)",
      "**Heroic.** I do everything I can to help non-humans, regardless of the personal cost to me. (Good)",
      "**Depraved.** I have lost my moral compass. The ends justify most any means. (Evil)",
    ],
    bonds: [
      "The humans of Hillsfar have inflicted terrible harm on me, my family, and my race. I will have revenge.",
      "I am part of an underground network that smuggles non-humans into and out of the city.",
      "I am a partisan. I commit minor acts of defiance against the First Lord and Red Plumes when I can.",
      "I am a spy. I report on events in and around Hillsfar.",
      "My secret identity is the only thing protecting me from the Arena. I will stop at nothing to maintain it.",
      "I am madly in love with a human who does not know my true identity, and I fear rejection if I reveal it.",
    ],
    flaws: [
      "After years of denying who I am, I now despise myself and other members of my pathetic race.",
      "Years of hiding have made me somewhat paranoid. I trust no one.",
      "I've been lying so often and for so long that I can't help it anymore. I frequently lie for no reason at all.",
      "I am ashamed. I failed to protect a member of my family who was seized and thrown into the Arena.",
      "I am struggling with maintaining my secret identity. I subconsciously want to get caught and therefore sometimes let my secret identity slip.",
      "Years of successfully deceiving others have made me cocky. I think no one can see through my lies.",
    ],
  },
  {
    id: backgroundIds.shadeFanatic,
    name: "Shade Fanatic",
    description:
      "You grew up at a time when the wizards of Netheril were at war with the elves of Cormanthor. You recall sitting crosslegged hearing the stories of the glorious Thultanthar, also called the Shade Enclave and the City of Shade, and aspired to study there and maybe even did, for a time. Your dreams came crashing down a few years ago when Thultanthar fell from the sky upon Myth Drannor.\n\nYou know that there was a Netherese Garrison stationed near Hillsfar and have heard rumors that its downfall came from traitors within the ranks. You remain loyal to Netheril and seek other Shade loyalists and fanatics in the Cormanthor forest and the areas surrounding Hillsfar.",
    flavorText:
      "You remain loyal to Netheril and seek other Shade loyalists and fanatics.",
    source: src.hillsfar,
    skillProficiencyDescription:
      "You are proficient in Deception and Intimidation skills.",
    skillProficiencies: {
      default: [Skill.DECEPTION, Skill.INTIMIDATION],
    },
    toolProficiencyDescription: "You are proficient with forgery kits.",
    toolProficiencies: {
      default: [toolIds.forgeryKit],
    },
    languageProficiencyDescription: "You can speak Netherese.",
    languageProficiencies: {
      default: [Language.NETHERESE],
    },
    //A forgery kit, a transparent cylinder of shadow that has no opening, a signet ring, a set of fine clothes, and 15gp.
    equipmentDescription: [
      `A ${i(itemIds.forgeryKit, "forgery kit")}`,
      `A transparent cylinder of shadow that has no opening`,
      `A ${i(itemIds.signetRing, "signet ring")}`,
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "15gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.forgeryKit, quantity: 1 },
        { item: itemIds.signetRing, quantity: 1 },
        { item: itemIds.fineClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
      ],
    },
    traits: [
      "I am a bully; I try to hide it though.",
      "I let my actions speak for themselves.",
      "I am important; I will not let anyone forget that.",
      "You are either with me or against me.",
      "I know it is only a matter of time before I am betrayed by those I care for.",
      "I never understand why people get so emotional.",
      "They are out to get me. It is only my cunning that keeps me ahead of them.",
      "Everyone has a choice; the one I make is always right though.",
    ],
    ideals: [
      "**Hope.** I know even if I need to do evil acts, history will be my redemption. (Chaotic)",
      "**Dedicated.** I can do anything I put my mind to. (Lawful)",
      "**Exciting.** I have found the truth of the Shadovar and want to share it with everyone. (Any)",
      "**Frugal.** I hoard my possessions knowing that someday I will be called upon to give everything I have to the cause. (Any)",
      "**Eloquent.** I use my words to sway others to my beliefs. (Any)",
      "**Compassionate.** It is through love that others will join our cause. (Good)",
    ],
    bonds: [
      "They say the Shade broke the bonds of mortality; I want to find out how.",
      "The whispers in my head remind me that there is power to be found in the shadows.",
      "For the glory of Netheril, I will grow in power.",
      "I once lived in Hillsfar; I was chased out before I was able to say farewell.",
      "My true love was killed by the Red Plumes; I plot to make them suffer.",
      "I had a loved one die in the arena of Hillsfar; I am out to prove that I am stronger than them!",
    ],
    flaws: [
      "I always over-exaggerate my abilities.",
      "I cannot bear to let those I care for out of my sight.",
      "I am incapable of standing up for myself.",
      "The group I am with has committed atrocities; I am always worried their actions will become public.",
      "I always enjoy a good mug of ale … or five.",
      "I know what I do is wrong, but am afraid to speak up about it.",
    ],
  },
  {
    id: backgroundIds.tradeSheriff,
    name: "Trade Sheriff",
    description:
      "You are one of the many people that make sure the trade routes are clear at ALL times. You assure that the Great Law of Trade is followed at all costs. You work by yourself or in groups to quell bandits and brigands who might stop trade routes from going through. You investigate potential ambushes and possible rumors as to someone wanting to rob or stop caravans. You are as much an investigator as you are law enforcement.\n\nYou are able to go into a town/village around the Hillsfar area and find a contact that is willing to give you information from rumor to fact. This sometimes comes at a cost of a minor bribe of 1-9 silver pieces.",
    flavorText:
      "You are one of the many people that make sure the trade routes are clear at ALL times.",
    source: src.hillsfar,
    skillProficiencyDescription:
      "You are proficient in Investigation and Persuasion.",
    skillProficiencies: {
      default: [Skill.INVESTIGATION, Skill.PERSUASION],
    },
    toolProficiencyDescription: "You are proficient with Thieves' Tools.",
    toolProficiencies: {
      default: [toolIds.thievesTools],
    },
    languageProficiencyDescription: "You are proficient in Elven.",
    languageProficiencies: {
      default: [Language.ELVISH],
    },
    //Thieves' tools, a gray cloak, Sheriff's insignia (badge), a set of fine clothes, and 17gp.
    equipmentDescription: [
      `A ${i(toolIds.thievesTools, "set of thieves' tools")}`,
      `A ${i(itemIds.cloak, "gray cloak")}`,
      `A Sheriff's ${i(itemIds.badge, "insignia")} (badge)`,
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "17gp"
      )}`,
    ],
    traits: [
      "I am always polite and respectful.",
      "I let my actions speak for themselves.",
      "I am haunted by my past having seen the murder of a close friend or family member, and it is the one case I always needed to solve but have not been able to.",
      "I am quick to judge and slow to vindicate.",
      "I can be very persuasive and am able to ask questions where others might not be able to.",
      "I have a quirky personality that seems to take others off their guard.",
      "My sense of humor is considered by most to be awkward.",
      "Everyone has a choice, and they can always make the right choice, mine!",
    ],
    ideals: [
      "**Hope.** My job is to speak for the victim. (Good)",
      "**Dedicated.** Once I start an investigation, until told to do so, I do not quit, no matter where it leads. (Lawful)",
      "**Nation.** My city, nation, or people are all that matter. (Any)",
      "**Mercenary.** When I do investigations, I expect answers immediately. (Any)",
      "**Eloquent.** I use my words to sway others to give me answers. (Good)",
      "**Might.** It is through threats and force that I get my answers. (Lawful)",
    ],
    bonds: [
      "To this day, an unsolved case will always leave me haunted and bother me.",
      "Through the might of my personality, I will solve an investigation or puzzle.",
      "It is my right to believe what I will; just try and stop me.",
      "I need to prove my worth to my fellow Sheriffs.",
      "Someone I cared for died under suspicious circumstances. I will find out what happened to them and bring their killer to justice.",
      "I speak for those that cannot speak for themselves.",
    ],
    flaws: [
      "I always over-exaggerate my abilities.",
      "I cannot bear to let those I care for out of my sight.",
      "I took a bribe to tank an investigation, and I would do anything to keep it secret.",
      "I have little respect for those that are of 'low' intelligence/race.",
      "I always enjoy a good mug of ale … or five to cover up my past.",
      "I speak for the First Lord of Hillsfar and make sure everyone knows it.",
    ],
  },
  {
    id: backgroundIds.dissenter,
    name: "Dissenter",
    description:
      "Even in the carefully constructed and curated city-state of Naktamun, and in the presence of the five gods, some people rebel against the doctrines of the God-Pharaoh. They don’t challenge the existence of the gods, of course, for those gods are visible nearly every day in the streets of the city. Nor do they question the fact of life after death, which is plain to see in the anointed mummies that surround them, as well as the marauding mummies outside the Hekma. Rather, these dissenters simply refuse to follow the ordained course of life that leads to the glorious afterlife.\n\nSome dissenters are spurred by fear, not wanting to subject themselves to a violent death in the trials (or in training for the trials). Some are moved by conscience, unwilling to kill their crop-mates in the trials. For while they cannot deny that the gods exist, they can deny that the gods are just—and can fight to prove that the dictates of an unjust god need not be obeyed. Some believe that one god (probably Bontu) has corrupted the process of the trials and the path to the afterlife. Others correctly intuit that the God-Pharaoh did not actually have the people’s best interests in mind when he ordered their society.\n\nA character who is identified as a dissenter loses the benefit of the initiate’s or vizier’s background feature. In its place, the character gains the following feature:",
    flavorText: "You refuse to follow the ordained course of life.",
    source: src.amonkhet,
  },
  {
    id: backgroundIds.initiate,
    name: "Initiate",
    description:
      "You are an initiate, on the path to completing the trials of the five gods in the hope of earning a glorified death in the final Trial of Zeal. Some combination of your natural aptitude, your crop’s needs, and your teachers’ assessment while you were an acolyte led you to focus your training in one particular area of specialization—hand-to-hand combat, long-range combat, or spellcasting. But only a well-rounded initiate can be called truly worthy of the afterlife.\n\nIf you are a hand-to-hand specialist, consider the barbarian, fighter, monk, paladin, or rogue classes. As a long-range combat specialist, you might be a fighter, a ranger, or a rogue. If you are a spellcasting specialist, you might be a bard, sorcerer, or wizard. And beyond this initial choice, you might consider multiclassing or using feats to round out your skills in all three areas.",
    source: src.amonkhet,
    flavorText:
      "You are on the path to completing the trials of the five gods.",
    skillProficiencyDescription:
      "You are proficient in Athletics and Intimidation.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.INTIMIDATION],
    },
    toolProficiencyDescription:
      "You are proficient with one gaming set and land vehicles.",
    toolProficiencies: {
      default: [toolIds.landVehicles],
      choices: [
        {
          numberOfChoices: 1,
          options: [...gamingKitIds],
        },
      ],
    },
    // A simple puzzle box, a scroll containing the basic teachings of the five gods, a gaming set, a set of common clothes, and a pouch containing 15gp. If you have completed any trials before the start of the campaign, you also have any cartouches you have earned.
    equipmentDescription: [
      `A simple puzzle box`,
      `A ${i(
        itemIds.parchment,
        "scroll"
      )} containing the basic teachings of the five gods`,
      `A gaming set`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "15gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.parchment, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 15 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...gamingKitItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "An initiate’s life is focused on the trials, but it doesn’t need to be all about the trials. Though some initiates are highly focused on their training, most undergo that training while also experiencing joy, sorrow, love, loss, anger, jealousy, hope, faith, delight—the whole range of mortal emotions and experience. The afterlife might be a constant presence in every initiate’s mind, but it is the culmination of a life well-lived—not a replacement for it.",
    traits: [
      "I always have a joke on hand when the mood gets too serious.",
      "I use sarcasm and insults to keep a distance between myself and my crop-mates, because I don’t want to get attached to them.",
      "I’ll settle for nothing less than perfection—in myself, in my cropmates, in everything.",
      "I’m so focused on the glorious afterlife that nothing in this life can shake my calm resolve.",
      "I enjoy using my skills to help those who lack those same skills.",
      "I train hard so that I can play hard at the end of the day. I fully expect to play even harder in the glorious afterlife, but I’m not in a hurry to get there.",
      "I’m perfectly happy letting others pick up the slack for me while I take it easy.",
      "I’m constantly sizing up everyone around me, thinking about what kind of opponent they’ll be in the final trial.",
    ],
    ideals: [
      "**Solidarity.** The thing that matters most of all is that we’re there for each other. (Lawful)",
      "**Knowledge.** The world is a puzzle — a mystery waiting to be solved. (Neutral)",
      "**Strength.** All that matters to me is my own perfection. Let everyone else seek that perfection in their own way. (Any)",
      "**Ambition.** I’m going to prove that I deserve only the best — of everything. (Evil)",
      "**Zeal.** Anything worth doing is worth throwing my whole self into. (Any)",
      "**Redemption.** I will train all the harder to make up for the doubt I entertained when I was younger. (Any)",
    ],
    bonds: [
      "One of my crop-mates is my dearest friend, and I hope we will face each other in the final trial.",
      "I am in love with a vizier.",
      "I am particularly drawn to one of the five gods, and I want nothing more than to win that god’s particular favor.",
      "I am more devoted to Naktamun and its people than I am to any of the ideals of the gods.",
      "My weapon was a gift from a beloved trainer who died in an accident.",
      "I carry a memento of my time as an acolyte, and I treasure it above all other things.",
    ],
    flaws: [
      "I’m easily distracted by an attractive person, which could be the death of me in the trials.",
      "I really wanted to be a vizier, and I’m angry at the god who didn’t choose me.",
      "Training for a lifetime to die in the end seems like a big waste of energy.",
      "I’m not at all sure I’ll be able to grant a glorified death to any of my crop-mates.",
      "I have a lasting grudge against one of my crop-mates, and each of us wants to see the other fail.",
      "I think I’ve figured out that this world is not what it seems. Something dark is going on here.",
    ],
  },
  {
    id: backgroundIds.vizier,
    name: "Vizier",
    description:
      "You are a vizier, a servant of your god. You perform tasks that are essential to facilitating the initiates’ journey, so the gods reward you with entry into the afterlife with the God-Pharaoh’s blessing. You hope to achieve the most honored status in the afterlife by being the best possible servant to your god.\n\nAs a vizier, you can have any class, but you are especially likely to be a cleric, a druid (particularly if you serve Rhonas), or a paladin.",
    source: src.amonkhet,
    flavorText: "You are a vizier, a servant of your god.",
    skillProficiencyDescription: "You are proficient in History and Religion.",
    skillProficiencies: {
      default: [Skill.HISTORY, Skill.RELIGION],
    },
    toolProficiencyDescription:
      "One type of artisan's tools, one type of musical instrument",
    toolProficiencies: {
      choices: [
        {
          numberOfChoices: 1,
          options: [...artisanIds, ...instrumentIds],
        },
      ],
    },
    //A set of artisan’s tools or a musical instrument (one of your choice), a scroll of your god’s teachings, a vizier’s cartouche, a set of fine clothes, and a pouch containing 25gp
    equipmentDescription: [
      `A set of artisan's tools or a musical instrument (one of your choice)`,
      `A ${i(itemIds.parchment, "scroll")} of your god’s teachings`,
      `A vizier’s cartouche`,
      `A set of ${i(itemIds.fineClothes, "fine clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "25gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.parchment, quantity: 1 },
        { item: itemIds.fineClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 25 },
      ],
      choices: [
        {
          numberOfChoices: 1,
          options: [
            ...artisanToolItemIds.map((id) => [{ item: id, quantity: 1 }]),
            ...instrumentItemIds.map((id) => [{ item: id, quantity: 1 }]),
          ],
        },
      ],
    },
    suggestedCharacteristics:
      "A vizier’s characteristics strongly reflect the ideals and personality of the god they serve.",
    traits: [
      "Everything I do, I do gracefully and deliberately, and with complete confidence. (Oketra)",
      "Nothing can shake my rock-hard focus. (Oketra)",
      "When I am at peace, I am an oasis of perfect calm in the world. When I am roused to anger, I am an embodiment of terror. (Kefnet)",
      "I enjoy teasing acolytes and initiates with juicy tidbits of knowledge wrapped up in fiendishly difficult puzzles. (Kefnet)",
      "I have the utmost faith in myself and my abilities. (Rhonas)",
      "I get restless when life in the city feels too tame, too safe. (Rhonas)",
      "I enjoy solitude as an opportunity to plan my victory. (Bontu)",
      "I use satire as a way to undermine the teachings of the other gods. (Bontu)",
      "I love, fight, and feast with equal zeal. (Hazoret)",
      "I think of those in my care as my family, in a way that most people have trouble understanding. (Hazoret)",
    ],
    ideals: [
      "**Solidarity.** The worthy must respect the worthy. In the afterlife, all will be united in goal and action. (Oketra)",
      "**Knowledge.** The worthy shall cultivate a nimble mind, so as to perceive the wonders beyond imagination that wait in the afterlife. (Kefnet)",
      "**Strength.** The worthy shall hone a strong body that can withstand the boundless energies of the afterlife. (Rhonas)",
      "**Ambition.** The worthy shall strive for greatness, for supremacy in life leads to supremacy in the afterlife. (Bontu)",
      "**Zeal.** The worthy shall rush to the God-Pharaoh's side with relentless passion, rising to overcome every obstacle in their way. (Hazoret)",
      "**Naktamun.** The life of the city is ordered according to the plan of the God-Pharaoh, and that order must be preserved at all costs.",
    ],
    bonds: [
      "My loyalty to my companions embodies the ideal of loyalty to my god. (Oketra)",
      "The teachings of my god are more precious to me than any possession. (Kefnet)",
      "I would do anything to defend the temple of my god from any harm or desecration. (Rhonas)",
      "I am committed to the service of my god—because it’s my sure ticket into the afterlife. (Bontu)",
      "I love my god and never want my service to end. (Hazoret)",
      "I have a close friend or lover who is also a vizier.",
    ],
    flaws: [
      "I am in love with an initiate, and I want to shield this person from death in the trials.",
      "I secretly wish I had not been chosen as a vizier, so I could participate in the trials as an initiate.",
      "I secretly question whether the gods care at all about us or what we do.",
      "A vizier of another god seeks my death in retribution for a past insult.",
      "I am terrified of what lies beyond the Gate to the Afterlife.",
      "I secretly believe the God-Pharaoh’s return will not bring blessing to this world.",
    ],
  },
  {
    id: backgroundIds.knightOfSolamnia,
    name: "Knight of Solamnia",
    description:
      "You have trained to be a valorous warrior known as a Knight of Solamnia. Strict rules guide your every action, and you work to uphold them as you strive to defend the weak and oppose evil. Your honor is as important to you as your life.",
    flavorText:
      "You have trained to be a valorous warrior known as a Knight of Solamnia.",
    source: src.dragonQueen,
    skillProficiencyDescription:
      "You are proficient in Athletics and Survival.",
    skillProficiencies: {
      default: [Skill.ATHLETICS, Skill.SURVIVAL],
    },
    languageProficiencyDescription:
      "You are proficient in two languages of your choice.",
    languageProficiencies: {
      default: [Language.COMMON],
      choices: [
        {
          numberOfChoices: 2,
          options: Object.values(Language),
        },
      ],
    },
    //An insignia of rank, a deck of cards, a set of common clothes, and a pouch containing 10 gp.
    equipmentDescription: [
      `An ${i(itemIds.badge, "insignia")} of rank`,
      `A ${i(itemIds.playingCardSet, "deck of cards")}`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "10gp"
      )}`,
    ],
    equipment: {
      default: [
        { item: itemIds.badge, quantity: 1 },
        { item: itemIds.playingCardSet, quantity: 1 },
        { item: itemIds.commonClothes, quantity: 1 },
        { item: itemIds.pouch, quantity: 1 },
        { item: itemIds.goldPiece, quantity: 10 },
      ],
    },
    suggestedCharacteristics:
      "Any class that has martial prowess can be a good fit in the Knights of Solamnia. Fighters and Paladins make up the bulk of the knighthood’s forces. Clerics (often with the War Domain) can also be found among the knights' ranks.\n\nFor a more unusual take on a Knight of Solamnia character, consider playing a Bard of the College of Valor (or the College of Swords) or a Barbarian devoted to the ideals of the nature god Habbakuk (perhaps adopting the Path of the Zealot).",
  },
  {
    id: backgroundIds.mageOfHighSorcery,
    name: "Mage of High Sorcery",
    description:
      "Your talent for magic came to the attention of the Mages of High Sorcery, an organization of spellcasters that studies magic and prevent its misuse. You've trained among the Mages, but whether you'll face the dangerous tests required to become a full member of the group remains to be determined. Your passion for studying magic has likely already predisposed you toward one of the organization's three orders: the benevolent Order of the White Robes, the balance-pursuing Order of the Red Robes, or the ruthless Order of the Black Robes.\n\nIn the world of Krynn, many refer to the Mages of High Sorcery as the Wizards of High Sorcery. The organization accepts more than wizards, though, with sorcerers, warlocks, and other spellcasters included among their ranks.",
    source: src.dragonQueen,
    flavorText:
      "Your talent for magic came to the attention of the Mages of High Sorcery.",
    skillProficiencyDescription: "You are proficient in Arcana and History.",
    skillProficiencies: {
      default: [Skill.ARCANA, Skill.HISTORY],
    },
    languageProficiencyDescription:
      "You are proficient in two languages of your choice.",
    languageProficiencies: {
      default: [Language.COMMON],
      choices: [
        {
          numberOfChoices: 2,
          options: Object.values(Language),
        },
      ],
    },
    //A bottle of colored ink, an ink pen, a set of common clothes, and a pouch containing 10 gp.
    equipmentDescription: [
      `A ${i(itemIds.ink, "bottle of colored ink")}`,
      `An ${i(itemIds.inkPen, "ink pen")}`,
      `A set of ${i(itemIds.commonClothes, "common clothes")}`,
      `A ${i(itemIds.pouch, "belt pouch")} containing ${i(
        itemIds.goldPiece,
        "10gp"
      )}`,
    ],
    suggestedCharacteristics:
      "Mages of High Sorcery are typically Sorcerers, Warlocks, or Wizards and might have any subclass. Spellcasters who gain their magic through devotion are less likely to be welcomed among the traditionalist mages. Nevertheless, the Mages of High Sorcery are shrewd, and they rarely let unique opportunities or individuals pass them by. Even members of martial classes who train in magic might find a rare place among the group's three orders.",
  },
];

export default Backgrounds;
