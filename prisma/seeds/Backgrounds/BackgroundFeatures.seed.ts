import { Prisma } from "@prisma/client";
import { headers } from "next/headers";

const ids = {
  acolyte: 1,
  anthropologist: 2,
  archaeologist: 3,
  athlete: 4,
  charlatan: 5,
  cityWatch: 6,
  clanCrafter: 7,
  cloisteredScholar: 8,
  courtier: 9,
  criminal: 10,
  entertainer: 11,
  faceless: 12,
  factionAgent: 13,
  farTraveler: 14,
  feyLost: 15,
  fisher: 16,
  folkHero: 17,
  giantFoundling: 18,
  gladiator: 19,
  guildArtisan: 20,
  guildMerchant: 21,
  hauntedOne: 22,
  hermit: 23,
  houseAgent: 24,
  inheritor: 25,
  investigatorSCAG: 26,
  investigatorVRGR: 27,
  knight: 28,
  knightOfTheOrder: 29,
  marine: 30,
  mercenaryVeteran: 31,
  noble: 32,
  outlander: 33,
  pirate: 34,
  rewarded: 35,
  ruined: 36,
  runeCarver: 37,
  sage: 38,
  sailor: 39,
  shipwright: 40,
  smuggler: 41,
  soldier: 42,
  spy: 43,
  urbanBountyHunter: 44,
  urchin: 45,
  uthgardtTribeMember: 46,
  waterdhavianNoble: 47,
  witchlightHand: 48,
  //aquisitionsInc
  celebrityAdventurer: 49,
  failedMerchant: 50,
  gambler: 51,
  plaintiff: 52,
  rivalIntern: 53,
};
interface BackgroundFeature extends PrismaJson.Feature {
  backgroundId: number;
}

const BackgroundFeatures: BackgroundFeature[] = [
  //acolyte
  {
    backgroundId: ids.acolyte,
    name: "Shelter of the Faithful",
    description:
      "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.\n\nYou might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.",
  },

  //anthropologist
  {
    backgroundId: ids.anthropologist,
    name: "Cultural Chameleon",
    description:
      "Before becoming an adventurer, you spent much of your adult life away from your homeland, living among people different from your kin. You came to understand these foreign cultures and the ways of their people, who eventually treated you as one of their own. One culture had more of an influence on you than any other, shaping your beliefs and customs. Choose a species whose culture you've adopted.",
  },
  {
    backgroundId: ids.anthropologist,
    name: "Adept Linguist",
    description:
      "You can communicate with humanoids who don't speak any language you know. You must observe the humanoids interacting with one another for at least 1 day, after which you learn a handful of important words, expressions, and gestures – enough to communicate on a rudimentary level.",
  },

  //  archaeologist
  {
    name: "Dust Digger",
    description:
      "Prior to becoming an adventurer, you spent most of your young life crawling around in the dust, pilfering relics of questionable value from crypts and ruins. Though you managed to sell a few of your discoveries and earn enough coin to buy proper adventuring gear, you have held onto an item that has great emotional value to you. Roll on the Signature Item table to see what you have, or choose an item from the table.",
    backgroundId: ids.archaeologist,
    extendedTable: [
      {
        "": {
          headers: ["d8", "Item"],
          data: [
            {
              d8: "1",
              Item: "10-foot pole",
            },
            {
              d8: "2",
              Item: "Medallion",
            },
            {
              d8: "3",
              Item: "Crowbar",
            },
            {
              d8: "4",
              Item: "Shovel",
            },
            {
              d8: "5",
              Item: "Hat",
            },
            {
              d8: "6",
              Item: "Sledgehammer",
            },
            {
              d8: "7",
              Item: "Hooded lantern",
            },
            {
              d8: "8",
              Item: "Whip",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Historical Knowledge",
    backgroundId: ids.archaeologist,
    description:
      "When you enter a ruin or dungeon, you can correctly ascertain its original purpose and determine its builders, whether those were dwarves, elves, humans, yuan-ti, or some other known species. In addition, you can determine the monetary value of art objects more than a century old.",
  },

  // athlete
  {
    name: "Favored Event",
    description:
      "While many athletes practice various games and events, most excel at a single form of competition. Roll or choose from the options in the Favored Events table to determine the athletic event in which you excel.",
    backgroundId: ids.athlete,
    extendedTable: [
      {
        "": {
          headers: ["d8", "Event"],
          data: [
            {
              d8: "1",
              Event: "Marathon",
            },
            {
              d8: "2",
              Event: "Long-distance running",
            },
            {
              d8: "3",
              Event: "Westling",
            },
            {
              d8: "4",
              Event: "Boxing",
            },
            {
              d8: "5",
              Event: "Chariot or horse species",
            },
            {
              d8: "6",
              Event: "Pankration (mixed unarmed combat)",
            },
            {
              d8: "7",
              Event: "Hoplite species (racing in full armor with a unit)",
            },
            {
              d8: "8",
              Event:
                "Pengtathlon (running, long jump, discus, javelion, wrestling)",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Echoes of Victory",
    description: `You have attracted admiration among spectators, fellow athletes, and trainers in the region that hosted your past athletic victories. When visiting any settlement within 100 miles of where you grew up, there is a 50 percent chance you can find someone there who admires you and is willing to provide information and temporary shelter.\n\nBetween adventures, you might compete in athletic events sufficient enough to maintain a comfortable lifestyle, as per the "Practicing a Profession" downtime activity in chapter 8 of the Players Handbook.`,
    backgroundId: ids.athlete,
  },

  //charlatan
  {
    name: "Favorite Schemes",
    description:
      "Every charlatan has an angle they use in preference to other schemes. Choose a favorite scam or roll on the table below.",
    backgroundId: ids.charlatan,
    extendedTable: [
      {
        "": {
          headers: ["d6", "Scheme"],
          data: [
            {
              d6: "1",
              Scheme: "I cheat at games of chance.",
            },
            {
              d6: "2",
              Scheme: "I shave coins or forge documents.",
            },
            {
              d6: "3",
              Scheme:
                "I insinuate myself into people's lives to prey on their weakness and secure their fortunes.",
            },
            {
              d6: "4",
              Scheme: "I put on new identities like clothes.",
            },
            {
              d6: "5",
              Scheme: "I run sleight-of-hand cons on street corners.",
            },
            {
              d6: "6",
              Scheme:
                "I convince people that worthless junk is worth their hard-earned money.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "False Identity",
    description:
      "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.",
    backgroundId: ids.charlatan,
  },

  //cityWatch
  {
    name: "Watcher's Eye",
    description:
      "Your experience in enforcing the law, and dealing with lawbreakers, gives you a feel for local laws and criminals. You can easily find the local outpost of the watch or a similar organization, and just as easily pick out the dens of criminal activity in a community, although you're more likely to be welcome in the former locations rather than the latter.",
    backgroundId: ids.cityWatch,
  },

  // clanCrafter
  {
    name: "Respect of the Stout Folk",
    description:
      "As well respected as clan crafters are among outsiders, no one esteems them quite so highly as dwarves do. You always have free room and board in any place where shield dwarves or gold dwarves dwell, and the individuals in such a settlement might vie among themselves to determine who can offer you (and possibly your compatriots) the finest accommodations and assistance.",
    backgroundId: ids.clanCrafter,
  },

  // cloisteredScholar
  {
    name: "Library Access",
    description:
      "Though others must often endure extensive interviews and significant fees to gain access to even the most common archives in your library, you have free and easy access to the majority of the library, though it might also have repositories of lore that are too valuable, magical, or secret to permit anyone immediate access.\n\nYou have a working knowledge of your cloister's personnel and bureaucracy, and you know how to navigate those connections with some ease.\n\nAdditionally, you are likely to gain preferential treatment at other libraries across the Realms, as professional courtesy shown to a fellow scholar.",
    backgroundId: ids.cloisteredScholar,
  },

  // courtier
  {
    name: "Court Functionary",
    description:
      "Your knowledge of how bureaucracies function lets you gain access to the records and inner workings of any noble court or government you encounter. You know who the movers and shakers are, whom to go to for the favors you seek, and what the current intrigues of interest in the group are.",
    backgroundId: ids.courtier,
  },

  // criminal
  {
    name: "Criminal Specialty",
    description:
      "There are many kinds of criminals, and within a thieves' guild or similar criminal organization, individual members have particular specialties. Even criminals who operate outside of such organizations have strong preferences for certain kinds of crimes over others. Choose the role you played in your criminal life, or roll on the table below.",
    backgroundId: ids.criminal,
    extendedTable: [
      {
        "": {
          headers: ["d8", "Specialty"],
          data: [
            {
              d8: "1",
              Specialty: "Blackmailer",
            },
            {
              d8: "2",
              Specialty: "Burglar",
            },
            {
              d8: "3",
              Specialty: "Enforcer",
            },
            {
              d8: "4",
              Specialty: "Fence",
            },
            {
              d8: "5",
              Specialty: "Highway robber",
            },
            {
              d8: "6",
              Specialty: "Hired killer",
            },
            {
              d8: "7",
              Specialty: "Pickpocket",
            },
            {
              d8: "8",
              Specialty: "Smuggler",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Criminal Contact",
    description:
      "You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.",
    backgroundId: ids.criminal,
  },

  // entertainer
  {
    name: "Entertainer Routines",
    backgroundId: ids.entertainer,
    description:
      "A good entertainer is versatile, spicing up every performance with a variety of different routines. Choose one to three routines or roll on the table below to define your expertise as an entertainer.",
    extendedTable: [
      {
        "": {
          headers: ["d10", "Routine"],
          data: [
            {
              d10: "1",
              Routine: "Actor",
            },
            {
              d10: "2",
              Routine: "Dancer",
            },
            {
              d10: "3",
              Routine: "Fire-eater",
            },
            {
              d10: "4",
              Routine: "Jester",
            },
            {
              d10: "5",
              Routine: "Juggler",
            },
            {
              d10: "6",
              Routine: "Instrumentalist",
            },
            {
              d10: "7",
              Routine: "Poet",
            },
            {
              d10: "8",
              Routine: "Singer",
            },
            {
              d10: "9",
              Routine: "Storyteller",
            },
            {
              d10: "10",
              Routine: "Tumbler",
            },
          ],
        },
      },
    ],
  },
  {
    name: "By Popular Demand",
    description:
      "You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.",
    backgroundId: ids.entertainer,
  },

  // facelss
  {
    name: "Faceless Persona",
    description:
      "A faceless character adventures behind a mask of a public persona. This persona is as natural to them as their hidden, true face, but it disguises their identity. Roll on the Faceless Persona table to determine your persona, or work with the DM to create a persona that's unique to your character and suits the tone of your game.",
    backgroundId: ids.faceless,
    extendedTable: [
      {
        "": {
          headers: ["d10", "Persona"],
          data: [
            {
              d10: "1",
              Persona: "The incarnation of a nation or people",
            },
            {
              d10: "2",
              Persona: "A flamboyant spy or brigand",
            },
            {
              d10: "3",
              Persona: "A scoundrel with a masked guise",
            },
            {
              d10: "4",
              Persona: "A vengeful spirit",
            },
            {
              d10: "5",
              Persona: "The manifestation of a deity or your faith",
            },
            {
              d10: "6",
              Persona: "One whose beauty is greatly accented using makeup",
            },
            {
              d10: "7",
              Persona: "An impersonation of another hero",
            },
            {
              d10: "8",
              Persona: "The embodiment of a school of magic",
            },
            {
              d10: "9",
              Persona: "A warrior with distinctive armor",
            },
            {
              d10: "10",
              Persona:
                "A disguise with animalistic or monstrous characteristics, meant to inspire fear",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Dual Personalities",
    description:
      "Most of your fellow adventurers and the world know you as your persona. Those who seek to learn more about you—your weakness, your origins, your purpose—find themselves stymied by your disguise. Upon donning a disguise and behaving as your persona, you are unidentifiable as your true self. By removing your disguise and revealing your true face, you are no longer identifiable as your persona. This allows you to change appearances between your two personalities as often as you wish, using one to hide the other or serve as convenient camouflage. However, should someone realize the connection between your persona and your true self, your deception might lose its effectiveness.",
    backgroundId: ids.faceless,
  },

  // factionAgent
  {
    name: "Factions of the Sword Coast",
    description:
      "The lack of large, centralized governments in the North and along the Sword Coast is likely directly responsible for the proliferation of secret societies and conspiracies in those lands. If your background is as an agent for one of the main factions of the North and Sword Coast, here are some possibilities.",
    backgroundId: ids.factionAgent,
    extendedTable: [
      {
        Factions: {
          headers: ["Faction", "Description"],
          data: [
            {
              Faction: "The Harpers",
              Description:
                "Founded more than a millennium ago, disbanded and reorganized several times, the Harpers remain a powerful, behind-the-scenes agency, which acts to thwart evil and promote fairness through knowledge, rather than brute force. Harper agents are often proficient in Investigation, enabling them to be adept at snooping and spying. They often seek aid from other Harpers, sympathetic bards and innkeepers, rangers, and the clergy of gods that are aligned with the Harpers' ideals.",
            },
            {
              Faction: "The Order of the Gauntlet",
              Description:
                "One of the newest power groups in Faerûn, the Order of the Gauntlet has an agenda similar to that of the Harpers. Its methods are vastly different, however: bearers of the gauntlet are holy warriors on a righteous quest to crush evil and promote justice, and they never hide in the shadows. Order agents tend to be proficient in Religion, and frequently seek aid from law enforcement friendly to the order's ideals, and the clergy of the order's patron gods.",
            },
            {
              Faction: "The Emerald Enclave",
              Description:
                "Maintaining balance in the natural order and combating the forces that threaten that balance is the twofold goal of the Emerald Enclave. Those who serve the faction are masters of survival and living off the land. They are often proficient in Nature, and can seek assistance from woodsmen, hunters, rangers, barbarian tribes, druid circles, and priests who revere the gods of nature.",
            },
            {
              Faction: "The Lords' Alliance",
              Description:
                "On one level, the agents of the Lords' Alliance are representatives of the cities and other governments that constitute the alliance. But, as a faction with interests and concerns that transcend local politics and geography, the Alliance has its own cadre of individuals who work on behalf of the organizations, wider agenda. Alliance agents are required to be knowledgeable in History, and can always rely on the aid of the governments that are part of the Alliance, plus other leaders and groups who uphold the Alliance's ideals.",
            },
            {
              Faction: "The Zhentarim",
              Description:
                "In recent years, the Zhentarim have become more visible in the world at large, as the group works to improve its reputation among the common people. The faction draws employees and associates from many walks of life, setting them to tasks that serve the goals of the Black Network but aren't necessarily criminal in nature. Agents of the Black Network must often work in secret, and are frequently proficient in Deception. They seek aid from the wizards, mercenaries, merchants and priesthoods allied with the Zhentarim.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Safe Haven",
    description:
      "As a faction agent, you have access to a secret network of supporters and operatives who can provide assistance on your adventures. You know a set of secret signs and passwords you can use to identify such operatives, who can provide you with access to a hidden safe house, free room and board, or assistance in finding information. These agents never risk their lives for you or risk revealing their true identities.",
    backgroundId: ids.factionAgent,
  },

  //far traveler
  {
    name: "Why Are You Here?",
    description:
      "A far traveler might have set out on a journey for one of a number of reasons, and the departure from his or her homeland could have been voluntary or involuntary. To determine why you are so far from home, roll on the table below or choose from the options provided. The following section, discussing possible homelands, includes some suggested reasons that are appropriate for each location.",
    backgroundId: ids.farTraveler,
    extendedTable: [
      {
        "": {
          headers: ["d6", "Reason"],
          data: [
            {
              d6: "1",
              Reason: "Emmisary",
            },
            {
              d6: "2",
              Reason: "Exile",
            },
            {
              d6: "3",
              Reason: "Fugitive",
            },
            {
              d6: "4",
              Reason: "Pilgrim",
            },
            {
              d6: "5",
              Reason: "Sightseer",
            },
            {
              d6: "6",
              Reason: "Wanderer",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Where Are You From?",
    description:
      "The most important decision in creating a far traveler background is determining your homeland. The places discussed here are all sufficiently distant from the North and the Sword Coast to justify the use of this background.",
    backgroundId: ids.farTraveler,
    extendedTable: [
      {
        "": {
          headers: ["Homeland", "Description"],
          data: [
            {
              Homeland: "Evermeet",
              Description:
                "The fabled elven islands far to the west are home to elves who have never been to Faerun. They often find it a harsher place than they expected when they do make the trip. If you are an elf, Evermeet is a logical (though not mandatory) choice for your homeland.\n\nMost of those who emigrate from Evermeet are either exiles, forced out for committing some infraction of elven law, or emissaries who come to Faerun for a purpose that benefits elven culture or society.",
            },
            {
              Homeland: "Halruaa",
              Description:
                "Located on the southern edges of the Shining South, and hemmed in by mountains all around, the magocracy of Halruaa is a bizarre land to most in Faerun who know about it. Many folk have heard of the strange skyships the Halruaans sail, and a few know of the tales that even the least of their people can work magic.\n\nHalruaans usually make their journeys into Faerun for personal reasons, since their government has a strict stance against unauthorized involvement with other nations and organizations. You might have been exiled for breaking one of Halruaa's many byzantine laws, or you could be a pilgrim who seeks the shrines of the gods of magic.",
            },

            {
              Homeland: "Kara-Tur",
              Description:
                "The continent of Kara-Tur, far to the east of Faerûn, is home to people whose customs are unfamiliar to the folk of the Sword Coast. If you come from Kara-Tur, the people of Faerûn likely refer to you as Shou, even if that isn't your true ethnicity, because that's the blanket term they use for everyone who shares your origin.\n\nThe folk of Kara-Tur occasionally travel to Faerûn as diplomats or to forge trade relations with prosperous merchant cartels. You might have come here as part of some such delegation, then decided to stay when the mission was over.",
            },
            {
              Homeland: "Mulhorand",
              Description:
                "From the terrain to the architecture to the god-kings who rule over these lands, nearly everything about Mulhorand is a lien to someone from the Sword Coast. You likely experienced the same sort of culture shock when you left your desert home and traveled to the unfamiliar climes of northern Faerûn. Recent events in your homeland have led to the abolition of slavery, and a corresponding increase in the traffic between Mulhorand and the distant parts of Faerûn.\n\nThose who leave behind Mulhorand's sweltering deserts and ancient pyramids for a glimpse at a different life do so for many reasons. You might be in the North simply to see the strangeness this wet land has to offer, or because you have made too many enemies among the desert communities of your home.",
            },
            {
              Homeland: "Sossal",
              Description:
                "Few have heard of your homeland, but many have questions about it upon seeing you. Humans from Sossal seem crafted from snow, with alabaster skin and white hair, and typically dressed in white.\n\nSossal exists far to the northeast, hard up against the endless ice to the north and bounded on its other sides by hundreds of miles of the Great Glacier and the Great Ice Sea. No one from your nation makes the effort to cross such colossal barriers without a convincing reason. You must fear something truly terrible or seek something incredibly important.",
            },
            {
              Homeland: "Zakhara",
              Description: `As the saying goes among those in Faerûn who know of the place, "To get to Zakhara, go south. Then go south some more." Of course, you followed an equally long route when you came north from your place of birth. Though it isn't unusual for Zakharans to visit the southern extremes of Faerûn for trading purposes, few of them stray as far from home as you have.\n\nYou might be traveling to discover what wonders are to be found outside the deserts and sword-like mountains of your homeland, or perhaps you are on a pilgrimage to understand the gods that others worship, so that you might better appreciate your own deities.`,
            },
            {
              Homeland: "The Underdark",
              Description: `Though your home is physically closer to the Sword Coast than the other locations discussed here, it is far more unnatural. You hail from one of the settlements in the Underdark, each of which has its own strange customs and laws. If you are a native of one of the great subterranean cities or settlements, you are probably a member of the species that occupies the place but you might also have grown up there after being captured and brought below when you were a child.\n\nIf you are a true Underdark native, you might have come to the surface as an emissary of your people, or perhaps to escape accusations of criminal behavior (whether warranted or not). If you aren't a native, your reason for leaving "home" probably has something to do with getting away from a bad situation.`,
            },
          ],
        },
      },
    ],
  },
  {
    name: "All Eyes on You",
    description:
      "Your accent, mannerisms, figures of speech, and perhaps even your appearance all mark you as foreign. Curious glances are directed your way wherever you go, which can be a nuisance, but you also gain the friendly interest of scholars and others intrigued by far-off lands, to say nothing of everyday folk who are eager to hear stories of your homeland.\n\nYou can parley this attention into access to people and places you might not otherwise have, for you and your traveling companions. Noble lords, scholars, and merchant princes, to name a few, might be interested in hearing about your distant homeland and people.",
    backgroundId: ids.farTraveler,
  },

  // feylost
  {
    name: "Fey Mark",
    description:
      "You were transformed in some small way by your stay in the Feywild and gained a fey mark, determined by rolling on the Fey Mark table.",
    backgroundId: ids.feyLost,
    extendedTable: [
      {
        "": {
          headers: ["d8", "Fey Mark"],
          data: [
            {
              d8: "1",
              "Fey Mark": "Your eyes swirl with iridescent colors.",
            },
            {
              d8: "2",
              "Fey Mark":
                "You have a sweet scent, like that of nectar or honey",
            },
            {
              d8: "3",
              "Fey Mark": "You have long whiskers like those of a cat.",
            },
            {
              d8: "4",
              "Fey Mark": "Your ears are covered with soft tufts of fur.",
            },
            {
              d8: "5",
              "Fey Mark": "Your skin sparkles in moonlight.",
            },
            {
              d8: "6",
              "Fey Mark":
                "Flowers either bloom or wilt (your choice) in your presence.",
            },
            {
              d8: "7",
              "Fey Mark":
                "Your hair is made of vines or brambles and grows back to normal length within 1 hour of being cut",
            },
            {
              d8: "8",
              "Fey Mark":
                "You have a tail like that of a dog or another animal.",
            },
          ],
        },
      },
    ],
  },
  {
    name: "Feywild Visitor",
    description:
      "Whenever you're sound asleep or in a deep trance during a long rest, a spirit of the Feywild might pay you a visit, if the DM wishes it. Determine the spirit's form by rolling on the Feywild Visitor table. No harm ever comes to you as a result of such visits, which can last for minutes or hours, and you remember each visit when you wake up. Conversations that occur with a visitor can contain any number of things, from messages and insights to nonsense and red herrings, at the DM's discretion. Such conversations are always conducted in a language you can understand, even if the Feywild visitor can't speaking that language normally.",
    extendedTable: [
      {
        "": {
          headers: ["d8", "Feywild Visitor"],
          data: [
            {
              d8: "1",
              "Feywild Visitor":
                "Awakened creature (a Beast or an ordinary plant that has had the Awaken spell cast on it)",
            },
            {
              d8: "2",
              "Feywild Visitor": "A Centaur",
            },
            {
              d8: "3",
              "Feywild Visitor": "A Dryad",
            },
            {
              d8: "4",
              "Feywild Visitor": "A Faerie Dragon",
            },
            {
              d8: "5",
              "Feywild Visitor": "A Pixie",
            },
            {
              d8: "6",
              "Feywild Visitor": "A Satyr",
            },
            {
              d8: "7",
              "Feywild Visitor": "A Sprite",
            },
            {
              d8: "8",
              "Feywild Visitor": "A Unicorn",
            },
          ],
        },
      },
    ],
    backgroundId: ids.feyLost,
  },
  {
    name: "Feywild Connection",
    description:
      "Your mannerisms and knowledge of fey customs are recognized by natives of the Feywild, who see you as one of their own. Because of this, friendly Fey creatures are inclined to come to your aid if you are lost or need help in the Feywild.",
    backgroundId: ids.feyLost,
  },

  {
    backgroundId: ids.fisher,
    name: "Harvest the Water",
    description:
      "You gain advantage on ability checks made using fishing tackle. If you have access to a body of water that sustains marine life, you can maintain a moderate lifestyle while working as a fisher, and you can catch enough food to feed yourself and up to ten other people each day.",
  },
  {
    backgroundId: ids.fisher,
    name: "Fishing Tales",
    description:
      "You can tell a compelling tale, whether tall or true, to impress and entertain others. Once a day, you can tell your story to willing listeners. At the DM's discretion, a number of those listeners become friendly toward you; this is not a magical effect, and continued amicability on their part depends on your actions. You can roll on the following table to help determine the theme of your tale or choose one that best fits your character. Alternatively, work with your DM to create your own fishing tale.",
    extendedTable: [
      {
        "": {
          headers: ["d8", "Fishing Tale"],
          data: [
            {
              d8: "1",
              "Fishing Tale":
                "**Lobster Wrestling.** You fought in hand-to-hand combat with an immense lobster.",
            },
            {
              d8: "2",
              "Fishing Tale":
                "**It Dragged the Boat.** You nearly caught a fish of monstrous size that pulled your boat for miles.",
            },
            {
              d8: "3",
              "Fishing Tale":
                "**Fins of Pure Gold.** You caught a sea animal whose fins were made of pure gold, but another fisher stole it.",
            },
            {
              d8: "4",
              "Fishing Tale":
                "**Ghost Fish.** You are haunted by a ghostly fish that only you can see.",
            },
            {
              d8: "5",
              "Fishing Tale":
                "**Nemesis Clam.** A large clam containing a pearl the size of your head claimed one of your fingers before jetting away; one day, you'll find that clam.",
            },
            {
              d8: "6",
              "Fishing Tale":
                "**The Fish That Swallowed the Sun.** You once saw a fish leap from the water and turn day into night.",
            },
            {
              d8: "7",
              "Fishing Tale":
                "**Dive into the Abyss.** You found yourself in an underwater cave leading to the Abyss, and your luck has been sour ever since.",
            },
            {
              d8: "8",
              "Fishing Tale":
                "**Love Story.** You fell in love with a creature of pure water, but your brief romance ended tragically.",
            },
          ],
        },
      },
    ],
  },
  //folkHero
  {
    backgroundId: ids.folkHero,
    name: "Defining Event",
    description:
      "You previously pursued a simple profession among the peasantry, perhaps as a farmer, miner, servant, shepherd, woodcutter, or gravedigger. But something happened that set you on a different path and marked you for greater things. Choose or randomly determine a defining event that marked you as a hero of the people.",
    extendedTable: [
      {
        "": {
          headers: ["d10", "Event"],
          data: [
            {
              d10: "1",
              Event: "You stood up to a tyrant's agents.",
            },
            {
              d10: "2",
              Event: "You saved people during a natural disaster.",
            },
            {
              d10: "3",
              Event: "You stood alone against a terrible monster.",
            },
            {
              d10: "4",
              Event: "You stole from a corrupt merchant to help the poor.",
            },
            {
              d10: "5",
              Event: "You led a militia to fight off an invading army.",
            },
            {
              d10: "6",
              Event:
                "You broke into a tyrant's castle and stole weapons to arm the people.",
            },
            {
              d10: "7",
              Event:
                "You trained the peasantry to use farm implements as weapons against a tyrant's soldiers.",
            },
            {
              d10: "8",
              Event:
                "A lord rescinded an unpopular decree after you led a symbolic act of protect against it.",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.folkHero,
    name: "Rustic Hospitality",
    description:
      "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.",
  },
  // giantFoundling
  {
    backgroundId: ids.giantFoundling,
    name: "Strike of the Giants",
    description: "You gain the strike of the Giants feat.",
  },
  {
    name: "Origin Stories",
    description:
      "How you came to live among colossal creatures is up to you to determine, but the Foundling Origin table suggests a variety of possibilities.",
    backgroundId: ids.giantFoundling,
    extendedTable: [
      {
        "": {
          headers: ["d6", "Origin"],
          data: [
            {
              d6: "1",
              Origin:
                "You were found as a baby by a family of nomadic giants who raised you as one of their own.",
            },
            {
              d6: "2",
              Origin:
                "A family of stone giants rescued you when you fell into a mountain chasm, and you have lived with them underground ever since.",
            },
            {
              d6: "3",
              Origin:
                "You were lost or abandoned as a child in a jungle that teemed with ravenous dinosaurs. There, you found an equally lost frost giant; together, you survived.",
            },
            {
              d6: "4",
              Origin:
                "Your farm was crushed and your family killed in a battle between warring groups of giants. Racked with guilt over the destruction, a sympathetic giant soldier promised to care for you.",
            },
            {
              d6: "5",
              Origin:
                "After you had a series of strange dreams as a child, your superstitious parents sent you to study with a powerful but aloof storm giant oracle.",
            },
            {
              d6: "6",
              Origin:
                "While playing hide-and-seek with your friends, you stumbled into the castle of a cloud giant, who immediately adopted you.",
            },
          ],
        },
      },
    ],
  },
  // Gladiator
  {
    backgroundId: ids.gladiator,
    name: "By Popular Demand",
    description:
      "You can always find a place to perform in any place that features combat for entertainment-perhaps a gladiatorial arena or secret pit fighting club. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you. ",
  },
  {
    backgroundId: ids.gladiator,
    name: "Entertainer Routines",
    description:
      "A gladiator is as much an entertainer as any minstrel or circus performer trained to make the arts of combat into a spectacle the crowd can enjoy. This kind of flashy combat is your entertainer routine, though you might also have some skills as a tumbler or actor. Choose one to three routines to define your expertise as an entertainer.",
  },
  // guildArtisan
  {
    name: "Guild Business",
    description:
      "Guilds are generally found in cities large enough to support several artisans practicing the same trade. However, your guild might instead be a loose network of artisans who each work in a different village within a larger realm. Work with your DM to determine the nature of your guild. You can select your guild business from the Guild Business table or roll randomly.",
    backgroundId: ids.guildArtisan,
    extendedTable: [
      {
        "": {
          headers: ["d20", "Guild Business"],
          data: [
            { d20: "1", "Guild Business": "Alchemists and apothecaries" },
            {
              d20: "2",
              "Guild Business": "Armorers, locksmiths, and finesmiths",
            },
            { d20: "3", "Guild Business": "Brewers, distillers, and vintners" },
            {
              d20: "4",
              "Guild Business": "Calligraphers, scribes, and scriveners",
            },
            {
              d20: "5",
              "Guild Business": "Carpenters, roofers, and plasterers",
            },
            {
              d20: "6",
              "Guild Business": "Cartographers, surveyors, and chart-makers",
            },
            { d20: "7", "Guild Business": "Cobblers and shoemakers" },
            { d20: "8", "Guild Business": "Cooks and bakers" },
            { d20: "9", "Guild Business": "Glassblowers and glaziers" },
            { d20: "10", "Guild Business": "Jewelers and gemcutters" },
            {
              d20: "11",
              "Guild Business": "Leatherworkers, skinners, and tanners",
            },
            { d20: "12", "Guild Business": "Masons and stonecutters" },
            {
              d20: "13",
              "Guild Business": "Painters, limners, and sign-makers",
            },
            { d20: "14", "Guild Business": "Potters and tile-makers" },
            { d20: "15", "Guild Business": "Shipwrights and sailmakers" },
            { d20: "16", "Guild Business": "Smiths and metal-forgers" },
            { d20: "17", "Guild Business": "Tinkers, pewterers, and casters" },
            { d20: "18", "Guild Business": "Wagon-makers and wheelwrights" },
            { d20: "19", "Guild Business": "Weavers and dyers" },
            {
              d20: "20",
              "Guild Business": "Woodcarvers, coopers, and bowyers",
            },
          ],
        },
      },
    ],
    postTableData:
      "As a member of your guild, you know the skills needed to create finished items from raw materials (reflected in your proficiency with a certain kind of artisan's tools), as well as the principles of trade and good business practices. The question now is whether you abandon your trade for adventure, or take on the extra effort to weave adventuring and trade together.",
  },
  {
    name: "Guild Membership",
    description:
      "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.\n\nGuilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.\n\nYou must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces",
    backgroundId: ids.guildArtisan,
  },
  {
    name: "Guild Business",
    description:
      "Guilds are generally found in cities large enough to support several artisans practicing the same trade. However, your guild might instead be a loose network of artisans who each work in a different village within a larger realm. Work with your DM to determine the nature of your guild. You can select your guild business from the Guild Business table or roll randomly.",
    backgroundId: ids.guildMerchant,
    extendedTable: [
      {
        "": {
          headers: ["d20", "Guild Business"],
          data: [
            { d20: "1", "Guild Business": "Alchemists and apothecaries" },
            {
              d20: "2",
              "Guild Business": "Armorers, locksmiths, and finesmiths",
            },
            { d20: "3", "Guild Business": "Brewers, distillers, and vintners" },
            {
              d20: "4",
              "Guild Business": "Calligraphers, scribes, and scriveners",
            },
            {
              d20: "5",
              "Guild Business": "Carpenters, roofers, and plasterers",
            },
            {
              d20: "6",
              "Guild Business": "Cartographers, surveyors, and chart-makers",
            },
            { d20: "7", "Guild Business": "Cobblers and shoemakers" },
            { d20: "8", "Guild Business": "Cooks and bakers" },
            { d20: "9", "Guild Business": "Glassblowers and glaziers" },
            { d20: "10", "Guild Business": "Jewelers and gemcutters" },
            {
              d20: "11",
              "Guild Business": "Leatherworkers, skinners, and tanners",
            },
            { d20: "12", "Guild Business": "Masons and stonecutters" },
            {
              d20: "13",
              "Guild Business": "Painters, limners, and sign-makers",
            },
            { d20: "14", "Guild Business": "Potters and tile-makers" },
            { d20: "15", "Guild Business": "Shipwrights and sailmakers" },
            { d20: "16", "Guild Business": "Smiths and metal-forgers" },
            { d20: "17", "Guild Business": "Tinkers, pewterers, and casters" },
            { d20: "18", "Guild Business": "Wagon-makers and wheelwrights" },
            { d20: "19", "Guild Business": "Weavers and dyers" },
            {
              d20: "20",
              "Guild Business": "Woodcarvers, coopers, and bowyers",
            },
          ],
        },
      },
    ],
    postTableData:
      "As a member of your guild, you know the skills needed to create finished items from raw materials (reflected in your proficiency with a certain kind of artisan's tools), as well as the principles of trade and good business practices. The question now is whether you abandon your trade for adventure, or take on the extra effort to weave adventuring and trade together.",
  },
  {
    name: "Guild Membership",
    description:
      "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.\n\nGuilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.\n\nYou must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces.",
    backgroundId: ids.guildMerchant,
  },
  {
    backgroundId: ids.hauntedOne,
    name: "Harrowing Event",
    description:
      "Prior to becoming an adventurer, your path in life was defined by one dark moment, one fateful decision, or one tragedy. Now you feel a darkness threatening to consume you, and you fear there may be no hope of escape. Choose a harrowing event that haunts you, or roll one on the Harrowing Events table.",
    extendedTable: [
      {
        "": {
          headers: ["d10", "Harrowing Event"],
          data: [
            {
              d10: "1",
              "Harrowing Event":
                "A monster that slaughtered dozens of innocent people spared your life, and you don’t know why.",
            },
            {
              d10: "2",
              "Harrowing Event":
                "You were born under a dark star. You can feel it watching you, coldly and distantly. Sometimes it beckons you in the dead of night.",
            },
            {
              d10: "3",
              "Harrowing Event":
                "An apparition that has haunted your family for generations now haunts you. You don’t know what it wants, and it won’t leave you alone.",
            },
            {
              d10: "4",
              "Harrowing Event":
                "Your family has a history of practicing the dark arts. You dabbled once and felt something horrible clutch at your soul, whereupon you fled in terror.",
            },
            {
              d10: "5",
              "Harrowing Event":
                "An oni took your sibling one cold, dark night, and you were unable to stop it.",
            },
            {
              d10: "6",
              "Harrowing Event":
                "You were cursed with lycanthropy and later cured. You are now haunted by the innocents you slaughtered.",
            },
            {
              d10: "7",
              "Harrowing Event":
                "A hag kidnapped and raised you. You escaped, but the hag still has a magical hold over you and fills your mind with evil thoughts.",
            },
            {
              d10: "8",
              "Harrowing Event":
                "You opened an eldritch tome and saw things unfit for a sane mind. You burned the book, but its words and images are burned into your psyche.",
            },
            {
              d10: "9",
              "Harrowing Event":
                "A fiend possessed you as a child. You were locked away but escaped. The fiend is still inside you, but now you try to keep it locked away.",
            },
            {
              d10: "10",
              "Harrowing Event":
                "You did terrible things to avenge the murder of someone you loved. You became a monster, and it haunts your waking dreams.",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.hauntedOne,
    name: "Heart of Darkness",
    description:
      "Those who look into your eyes can see that you have faced unimaginable horror and that you are no stranger to darkness. Though they might fear you, commoners will extend you every courtesy and do their utmost to help you. Unless you have shown yourself to be a danger to them, they will even take up arms to fight alongside you, should you find yourself facing an enemy alone.",
  },
  {
    backgroundId: ids.hermit,
    name: "Life of Seclusion",
    description:
      "What was the reason for your isolation, and what changed to allow you to end your solitude? You can work with your DM to determine the exact nature of your seclusion, or you can choose to roll on the table below to determine the reason behind your seclusion.",
    extendedTable: [
      {
        "": {
          headers: ["d8", "Reason"],
          data: [
            {
              d8: "1",
              Reason: "I was searching for spiritual enlightenment.",
            },
            {
              d8: "2",
              Reason:
                "I was partaking of communal living in accordance with the dictates of a religious order.",
            },
            {
              d8: "3",
              Reason: "I was exiled for a crime I didn't commit.",
            },
            {
              d8: "4",
              Reason: "I retreated from society after a life-altering event.",
            },
            {
              d8: "5",
              Reason:
                "I needed a quiet place to work on my art, literature, music, or manifesto.",
            },
            {
              d8: "6",
              Reason: "I needed to commune with nature, far from civilization.",
            },
            {
              d8: "7",
              Reason: "I was the caretaker of an ancient ruin or relic.",
            },
            {
              d8: "8",
              Reason:
                "I was a pilgrim in search of a person, place, or relic of spiritual significance.",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.hermit,
    name: "Discovery",
    description:
      "The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society.\n\nWork with your DM to determine the details of your discovery and its impact on the campaign.",
  },
  {
    backgroundId: ids.inheritor,
    name: "Inheritance",
    description:
      "Choose or randomly determine your inheritance from among the possibilities in the table below. Work with your DM to come up with details: Why is your inheritance so important, and what is its full story? You might prefer for the DM to invent these details as part of the game, allowing you to learn more about your inheritance as your character does.\n\nThe DM is free to use your inheritance as a story hook, sending you on quests to learn more about its history or true nature, or confronting you with foes who want to claim it for themselves or prevent you from learning what you seek. The DM also determines the properties of your inheritance and how they figure into the item's history and importance. For instance, the object might be a minor magic item, or one that begins with a modest ability and increases in potency with the passage of time. Or, the true nature of your inheritance might not be apparent at first and is revealed only when certain conditions are met.\n\nWhen you begin your adventuring career, you can decide whether to tell your companions about your inheritance right away. Rather than attracting attention to yourself, you might want to keep your inheritance a secret until you learn more about what it means to you and what it can do for you.",
    extendedTable: [
      {
        "": {
          headers: ["d8", "Inheritance"],
          data: [
            {
              d8: "1",
              Inheritance: "A document such as a map, a letter, or a journal",
            },
            { d8: "2", Inheritance: "A trinket" },
            { d8: "3", Inheritance: "A trinket" },
            { d8: "4", Inheritance: "An article of clothing" },
            { d8: "5", Inheritance: "A piece of jewelry" },
            { d8: "6", Inheritance: "An arcane book or formulary" },
            { d8: "7", Inheritance: "A written story, song, poem, or secret" },
            { d8: "8", Inheritance: "A tattoo or other body marking" },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.investigatorSCAG,
    name: "Watcher's Eye",
    description:
      "Your experience in enforcing the law, and dealing with lawbreakers, gives you a feel for local laws and criminals. You can easily find the local outpost of the watch or a similar organization, and just as easily pick out the dens of criminal activity in a community, although you're more likely to be welcome in the former locations rather than the latter.",
  },
  {
    backgroundId: ids.investigatorVRGR,
    name: "Path to Mystery",
    description:
      "Your first case influenced the types of mysteries you're interested in. Why was this case so impactful, personal, or traumatic? Whom did it affect besides you? Why and how did you get involved? Was it solved? How did it set you on the path to investigating other mysteries? Roll on or choose details from the First Case table below to develop the mystery that started your career as an investigator.",
    extendedTable: [
      {
        "": {
          headers: ["d8", "First Case"],
          data: [
            {
              d8: "1",
              "First Case":
                "A friend was wrongfully accused of murder. You tracked down the actual killer, proving your friend's innocence and starting your career as a detective.",
            },
            {
              d8: "2",
              "First Case":
                "You're told you went missing for weeks. When you were found, you had no memory of being gone. Now you search to discover what happened to you.",
            },
            {
              d8: "3",
              "First Case":
                "You helped a spirit find peace by finding its missing corpse. Ever since, other spectral clients have sought you out to help them find rest.",
            },
            {
              d8: "4",
              "First Case":
                "You revealed that the monsters terrorizing your home were illusions created by a cruel mage. The magic-user escaped, but you've continued to uncover magical hoaxes.",
            },
            {
              d8: "5",
              "First Case":
                "You were wrongfully accused and convicted of a crime. You managed to escape and seek to help others avoid the experience you suffered, even while still being pursued by the law.",
            },
            {
              d8: "6",
              "First Case":
                "You survived the destructive use of a magic device that wiped out your home. Members of a secret organization found you. You now work with them, tracking down dangerous supernatural phenomena and preventing them from doing harm.",
            },
            {
              d8: "7",
              "First Case":
                "You found evidence of a conspiracy underpinning society. You tried to expose this mysterious cabal, but no one believed you. You're still trying to prove what you know is true.",
            },
            {
              d8: "8",
              "First Case":
                "You got a job with an agency that investigates crimes that local law enforcement can't solve. You often wonder which you value more, the truth or your pay.",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.investigatorVRGR,
    name: "Official Inquiry",
    description:
      "You're experienced at gaining access to people and places to get the information you need. Through a combination of fast-talking, determination, and official-looking documentation, you can gain access to a place or an individual related to a crime you're investigating. Those who aren't involved in your investigation avoid impeding you or pass along your requests. Additionally, local law enforcement has firm opinions about you, viewing you as either a nuisance or one of their own.",
  },
  {
    backgroundId: ids.knight,
    name: "Retainers",
    description:
      "You have the service of three retainers loyal to your family. These retainers can be attendants or messengers. One of your commoner retainers is replaced by a noble who serves as your squire, aiding you in exchange for training on his or her own path to knighthood. Your two remaining retainers might include a groom to care for your horse and a servant who polishes your armor (and even helps you put it on). \n\nYour retainers are commoners who can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.",
  },
  {
    backgroundId: ids.noble,
    name: "Position of Privilege or Retainers",
    description:
      "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.\n\nalternativly, you can choose to have retainers instead of the position of privilege as described below.\n\nYou have the service of three retainers loyal to your family. These retainers can be attendants or messengers, and one might be a majordomo. Your retainers are commoners who can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.",
  },
  {
    backgroundId: ids.knightOfTheOrder,
    name: "Knightly Orders of Faerûn",
    description: `Many who rightfully call themselves "knight" earn that title as part of an order in service to a deity, such as Kelemvor's Eternal Order or Mystra's Knights of the Mystic Fire. Other knightly orders serve a government, royal family, or are the elite military of a feudal state, such as the brutal Warlock Knights of Vaasa. Other knighthoods are secular and non-governmental organizations of warriors who follow a particular philosophy, or consider themselves a kind of extended family, similar to an order of monks. Although there are organizations, such as the Knights of the Shield, that use the trappings of knighthood without necessarily being warriors, most folk of Faerûn who hear the word "knight" think of a mounted warrior in armor beholden to a code. Below are a few knightly organizations.`,
    extendedTable: [
      {
        "": {
          headers: ["Knightly Order", "Description"],
          data: [
            {
              "Knightly Order": "The Knights of the Unicorn",
              Description:
                "The Knights of the Unicorn began as a fad of romantically minded sons and daughters of patriar families in Baldur's Gate. On a lark, they took the unicorn goddess Lurue as their mascot and went on various adventures for fun. The reality of the dangers they faced eventually sank in, as did Lurue's tenets. Over time the small group grew and spread, gaining a following in places as far as Cormyr. The Knights of the Unicorn are chivalric adventurers who follow romantic ideals: life is to be relished and lived with laughter, quests should be taken on a dare, impossible dreams should be pursued for the sheer wonder of their completion, and everyone should be praised for their strengths and comforted in their weaknesses.",
            },
            {
              "Knightly Order": "Knights of Myth Drannor",
              Description:
                "Long ago, the Knights of Myth Drannor were a famous adventuring band, and Dove Falconhand, one of the famous Seven Sisters, was one of them. The band took its name to honor the great but fallen city, just as the new Knights of Myth Drannor do today. With the city once again in ruins, Dove Falconhand decided to reform the group with the primary goal of building alliances and friendship between the civilized races of the world and goodly people in order to combat evil. The Knights of Myth Drannor once again ride the roads of the Dalelands, and they've begun to spread to the lands beyond. Their members, each accepted by Dove herself, are above all valiant and honest.",
            },
            {
              "Knightly Order": "Knights of the Silver Chalice",
              Description:
                "The Knights of the Silver Chalice was formed by edict of the demigod Siamorphe in Waterdeep a century ago. Siamorphe's ethos is the nobility's right and responsibility to rule, and the demigod is incarnated as a different noble mortal in each generation. By the decree of the Siamorphe at that time, the Knights of the Silver Chalice took it upon themselves to put a proper heir on the throne of Tethyr and reestablish order in that kingdom. Since then they have grown to be the most popular knighthood in Tethyr, a nation that has hosted many knighthoods in fealty to the crown.",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.knightOfTheOrder,
    name: "Knightly Regard",
    description:
      "You receive shelter and succor from members of your knightly order and those who are sympathetic to its aims. If your order is a religious one, you can gain aid from temples and other religious communities of your deity. Knights of civic orders can get help from the community – whether a lone settlement or a great nation that they serve, and knights of philosophical orders can find help from those they have aided in pursuit of their ideals, and those who share those ideals.\n\nThis help comes in the form of shelter and meals, and healing when appropriate, as well as occasionally risky assistance, such as a band of local citizens rallying to aid a sorely pressed knight in a fight, or those who support the order helping to smuggle a knight out of town when he or she is being hunted unjustly.",
  },
  {
    backgroundId: ids.marine,
    name: "Hardship Endured",
    description:
      "Hardship in your past has forged you into an unstoppable living weapon. This hardship is essential to you and is at the heart of a personal philosophy or ethos that often guides your actions. You can roll on the following table to determine this hardship or choose one that best fits your character.",
    extendedTable: [
      {
        "": {
          headers: ["d6", "Hardship Endured"],
          data: [
            {
              d6: "1",
              "Hardship Endured":
                "You hid underwater to avoid detection by enemies and held your breath for an extremely long time. Just before you would have died, you had a revelation about your existence.",
            },
            {
              d6: "2",
              "Hardship Endured":
                "You spent months enduring thirst, starvation, and torture at the hands of your enemy, but you never broke.",
            },
            {
              d6: "3",
              "Hardship Endured":
                "You enabled the escape of your fellow soldiers, but at great cost to yourself. Some of your past comrades may think you're dead.",
            },
            {
              d6: "4",
              "Hardship Endured":
                "No reasonable explanation can explain how you survived a particular battle. Every arrow and bolt missed you. You slew scores of enemies single-handedly and led your comrades to victory.",
            },
            {
              d6: "5",
              "Hardship Endured":
                "For days, you hid in the bilge of an enemy ship, surviving on brackish water and foolhardy rats. At the right moment, you crept up to the deck and took over the ship on your own.",
            },
            {
              d6: "6",
              "Hardship Endured":
                "You carried an injured marine for miles to avoid capture and death.",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.marine,
    name: "Steady",
    description: `You can move twice the normal amount of time (up to 16 hours) each day before being subject to the effect of a forced march (see "Travel Pace" in chapter 8 of the Player's Handbook). Additionally, you can automatically find a safe route to land a boat on shore, provided such a route exists.`,
  },
  {
    backgroundId: ids.mercenaryVeteran,
    name: "Mercernaries of the North",
    description:
      "Countless mercenary companies operate up and down the Sword Coast and throughout the North. Most are small-scale operations that employ a dozen to a hundred folk who offer security services, hunt monsters and brigands, or go to war in exchange for gold. Some organizations, such as the Zhentarim, Flaming Fist, and the nation of Mintarn have hundreds or thousands of members and can provide private armies to those with enough funds. A few organizations operating in the North are described below.",
    extendedTable: [
      {
        "": {
          headers: ["Mercenary Company", "Description"],
          data: [
            {
              "Mercenary Company": "The Chill",
              Description:
                "The cold and mysterious Lurkwood serves as the home of numerous groups of goblinoids that have banded together into one tribe called the Chill. Unlike most of their kind, the Chill refrains from raiding the people of the North and maintains relatively good relations so that they can hire them selves out as warriors. Few city-states in the North are willing to field an army alongside the Chill, but several are happy to quietly pay the Chill to battle the Uthgardt, ores, trolls of the Evermoors, and other threats to civilization.",
            },
            {
              "Mercenary Company": "Silent Rain",
              Description:
                "Consisting solely of elves, Silent Rain is a legendary mercenary company operating out of Evereska. Caring little for gold or fame, Silent Rain agrees only to jobs that either promote elven causes or involve destroying ores, gnolls, and the like. Prospective employers must leave written word (in Elvish) near Evereska, and the Silent Rain sends a representative if interested.",
            },
            {
              "Mercenary Company": "The Bloodaxes",
              Description:
                "Founded in Sundabar nearly two centuries ago, the Bloodaxes were originally a group of dwarves outcast from their clans for crimes against the teachings of Moradin Soulforger. They began hiring out as mercenaries to whoever in the North would pay them. Since then the mercenary company has broadened its membership to other races, but every member is an exile, criminal, or misfit of some sort looking for a fresh start and a new family among the bold Bloodaxes.",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.mercenaryVeteran,
    name: "Mercenary Life",
    description:
      "You know the mercenary life as only someone who has experienced it can. You are able to identify mercenary companies by their emblems, and you know a little about any such company, including the names and reputations of its commanders and leaders, and who has hired them recently. You can find the taverns and festhalls where mercenaries abide in any area, as long as you speak the language. You can find mercenary work between adventures sufficient to maintain a comfortable lifestyle.",
  },
  {
    backgroundId: ids.outlander,
    name: "Origin",
    description:
      "You've been to strange places and seen things that others cannot begin to fathom. Consider some of the distant lands you have visited, and how they impacted you. You can roll on the following table to determine your occupation during your time in the wild, or choose one that best fits your character.",
    extendedTable: [
      {
        "": {
          headers: ["d10", "Occupation"],
          data: [
            { d10: "1", Occupation: "Forester" },
            { d10: "2", Occupation: "Trapper" },
            { d10: "3", Occupation: "Homesteader" },
            { d10: "4", Occupation: "Guide" },
            { d10: "5", Occupation: "Exile or outcast" },
            { d10: "6", Occupation: "Bounty hunter" },
            { d10: "7", Occupation: "Pilgrim" },
            { d10: "8", Occupation: "Tribal nomad" },
            { d10: "9", Occupation: "Hunter-gatherer" },
            { d10: "10", Occupation: "Tribal marauder" },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.outlander,
    name: "Wanderer",
    description:
      "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.",
  },
  {
    backgroundId: ids.pirate,
    name: "Bad Reputation",
    description:
      "No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities.",
  },
  {
    backgroundId: ids.rewarded,
    name: "Rewarded Trinket",
    description:
      "When you make your character, you may roll once on the Rewarded Trinkets table, instead of on the Trinkets table in the Player's Handbook, for your starting trinket.",
    extendedTable: [
      {
        "Rewarded Trinkets Table": {
          headers: ["d6", "Trinket"],
          data: [
            { d6: "1", Trinket: "A perfumed silk scarf from an admirer" },
            {
              d6: "2",
              Trinket: "A crystal bead that glows like a candle in the dark",
            },
            {
              d6: "3",
              Trinket:
                "A letter of introduction and invitation from an influential person in a far-off city",
            },
            {
              d6: "4",
              Trinket:
                "A motto or symbol whose meaning eludes you, etched on a piece of your equipment",
            },
            {
              d6: "5",
              Trinket:
                "A crisp playing card that never seems to tear or soil, depicting the card that affected you",
            },
            {
              d6: "6",
              Trinket:
                "Half a medallion designed to be rejoined to its other half",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.ruined,
    name: "Still Standing",
    description:
      "You have weathered ruinous misfortune, and you possess hidden reserves others don’t expect. You gain the Alert, Skilled, or Tough feat (your choice). Your choice of feat reflects how you’ve dealt with the terrible loss that changed your life forever. If you’ve kept your senses sharp for every opportunity and climbed your way out of misery by seizing the tiniest scrap of hope, choose Alert. If you’ve redoubled your efforts to reclaim what was once yours, choose Skilled. If you’ve stoically persevered through your misfortune, select Tough.",
  },
  {
    backgroundId: ids.ruined,
    name: "Ruined Trinket",
    description:
      "When you make your character, you may roll once on the Ruined Trinkets table, instead of on the Trinkets table in the Player's Handbook, for your starting trinket.",
    extendedTable: [
      {
        "Ruined Trinkets Table": {
          headers: ["d6", "Trinket"],
          data: [
            {
              d6: "1",
              Trinket: "A rusted scrap of a once-beloved family heirloom",
            },
            {
              d6: "2",
              Trinket:
                "A land deed, but all the names and markings that once tied it to you have faded into obscurity",
            },
            { d6: "3", Trinket: "A bauble once imbued with powerful magic" },
            {
              d6: "4",
              Trinket:
                "A battered playing card with a hole pierced in it, its face depicting the card that affected you",
            },
            {
              d6: "5",
              Trinket:
                "A yellowed Humanoid tooth that whispers eerily when placed under a pillow",
            },
            {
              d6: "6",
              Trinket:
                "A keepsake from someone you were once close to but who is now your enemy",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.runeCarver,
    name: "Rune Styles",
    description:
      "Each rune carver has a unique style and preferred medium. To determine how you make your runes, you can roll on the Rune Style table.",
    extendedTable: [
      {
        "Rune Style Table": {
          headers: ["d6", "Rune Style"],
          data: [
            {
              d6: "1",
              "Rune Style":
                "You inscribe runes in wax or clay with a fine metal needle.",
            },
            {
              d6: "2",
              "Rune Style":
                "You whittle pieces of wood into small figurines you mark with runes.",
            },
            {
              d6: "3",
              "Rune Style":
                "You engrave runes onto glass beads and thread them onto necklaces and bspecieslets.",
            },
            {
              d6: "4",
              "Rune Style": "You stitch your runes into the hems of clothing.",
            },
            {
              d6: "5",
              "Rune Style":
                "You carve runes on a set of animal bones you can throw in different formations.",
            },
            {
              d6: "6",
              "Rune Style":
                "You draw your runes into candles, melting the wax to smooth over the engravings.",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.runeCarver,
    name: "Rune Shaper",
    description: "You gain the Rune Shaper feat.",
  },
  {
    backgroundId: ids.sage,
    name: "Specialty",
    description:
      "To determine the nature of your scholarly training, roll a d8 or choose from the options in the table below.",
    extendedTable: [
      {
        "": {
          headers: ["d8", "Specialty"],
          data: [
            { d8: "1", Specialty: "Alchemist" },
            { d8: "2", Specialty: "Astronomer" },
            { d8: "3", Specialty: "Discredited academic" },
            { d8: "4", Specialty: "Librarian" },
            { d8: "5", Specialty: "Professor" },
            { d8: "6", Specialty: "Researcher" },
            { d8: "7", Specialty: "Wizard's apprentice" },
            { d8: "8", Specialty: "Scribe" },
          ],
        },
      },
    ],
  },
  {
    name: "Researcher",
    description:
      "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.",
    backgroundId: ids.sage,
  },
  {
    name: "Ship's Passage",
    description:
      "When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need. Your DM will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage.",
    backgroundId: ids.sailor,
  },
  {
    name: "I'll patch it!",
    description:
      "Provided you have carpenter's tools and wood, you can perform repairs on a water vehicle. When you use this ability, you restore a number of hit points to the hull of a water vehicle equal to 5 × your proficiency modifier. A vehicle cannot be patched by you in this way again until after it has been pulled ashore and fully repaired.",
    backgroundId: ids.sailor,
  },
  {
    backgroundId: ids.sailor,
    name: "Life at Sea",
    description:
      "Your life at sea and in port has shaped you; you can roll on the following table to determine its impact or choose an element that best fits your character.",
    extendedTable: [
      {
        "": {
          headers: ["d6", "Seas Influence"],
          data: [
            {
              d6: "1",
              "Seas Influence":
                "Grand Designs. You are working on plans and schematics for a new, very fast ship. You must examine as many different kinds of vessels as possible to help ensure the success of your design.",
            },
            {
              d6: "2",
              "Seas Influence":
                "Solid and Sound. You patched up a war galley and prevented it from sinking. The local navy regards you as a friend.",
            },
            {
              d6: "3",
              "Seas Influence":
                "Favored. You insisted on thicker planking for a merchant vessel's hull, which saved it from sinking when it smashed against a reef. You have a standing invitation to visit the merchant's distant mansion.",
            },
            {
              d6: "4",
              "Seas Influence":
                "Master of Armaments. You specialized in designing and mounting defenses for the navy. You easily recognize and determine the quality of such items.",
            },
            {
              d6: "5",
              "Seas Influence":
                "Low Places. You have contacts in the smuggling outfits along the coast; you occasionally repair the criminals' ships in exchange for coin and favors.",
            },
            {
              d6: "6",
              "Seas Influence":
                "Mysteries of the Deep. You experienced an encounter with a possibly divine being while sailing alone. Work with your DM to determine the secret about the deep waters of the sea that this entity revealed to you.",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.smuggler,
    name: "Down Low",
    description:
      "You are acquainted with a network of smugglers who are willing to help you out of tight situations. While in a particular town, city, or other similarly sized community (DM's discretion), you and your companions can stay for free in safe houses. Safe houses provide a poor lifestyle. While staying at a safe house, you can choose to keep your presence (and that of your companions) a secret.",
  },
  {
    backgroundId: ids.smuggler,
    name: "Claim to Fame",
    description:
      "Every smuggler has that one tale that sets them apart from common criminals. By wits, sailing skill, or a silver tongue, you lived to tell the story—and you tell it often. You can roll on the following table to determine your claim or choose one that best fits your character.",
    extendedTable: [
      {
        "": {
          headers: ["d6", "Accomplishment"],
          data: [
            {
              d6: "1",
              Accomplishment:
                "**Spirit of the Whale.** You smuggled stolen dwarven spirits in the body of a dead whale being pulled behind a fishing boat. When you delivered the goods, the corpse suddenly exploded, sending whale meat and whiskey bottles for half a mile.",
            },
            {
              d6: "2",
              Accomplishment:
                "**Cart and Sword.** You drove a cart filled with stolen art through the middle of a battlefield while singing sea shanties to confuse the combatants.",
            },
            {
              d6: "3",
              Accomplishment:
                "**The Recruit.** You enlisted in another nation's navy for the purpose of smuggling stolen jewels to a distant port. You attained a minor rank before disappearing from the navy and making your way here.",
            },
            {
              d6: "4",
              Accomplishment:
                "**River of Shadows.** Your riverboat accidentally slipped through the veil into the Shadowfell for several hours. While you were there, you sold some stolen dragonborn artifacts before returning to this plane and paddling home.",
            },
            {
              d6: "5",
              Accomplishment:
                "**Gold-Hearted.** You agreed to transport a family escaping a war. The baby began to cry at a checkpoint, and you gave the guards all your gold to let you pass. The family never found out about this gesture.",
            },
            {
              d6: "6",
              Accomplishment:
                "**Playing Both Sides.** You once smuggled crates of crossbow bolts and bundles of arrows, each destined for an opposing side in a regional war, at the same time. The buyers arrived within moments of each other but did not discover your trickery.",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.soldier,
    name: "Specialty",
    description:
      "During your time as a soldier, you had a specific role to play in your unit or army. Roll a d8 or choose from the options in the table below to determine your role:",
    extendedTable: [
      {
        "": {
          headers: ["d8", "Specialty"],
          data: [
            { d8: "1", Specialty: "Officer" },
            { d8: "2", Specialty: "Scout" },
            { d8: "3", Specialty: "Infantry" },
            { d8: "4", Specialty: "Cavalry" },
            { d8: "5", Specialty: "Healer" },
            { d8: "6", Specialty: "Quartermaster" },
            { d8: "7", Specialty: "Standard bearer" },
            {
              d8: "8",
              Specialty: "Support staff (cook, blacksmith, or the like)",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.soldier,
    name: "Military Rank",
    description:
      "You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.",
  },
  {
    backgroundId: ids.spy,
    name: "Criminal Specialty (Spy)",
    description:
      "*This feature is from the Criminal Background, adjust it for the Spy background accordingly.*\n\nThere are many kinds of criminals, and within a thieves' guild or similar criminal organization, individual members have particular specialties. Even criminals who operate outside of such organizations have strong preferences for certain kinds of crimes over others. Choose the role you played in your criminal life, or roll on the table below.",
    extendedTable: [
      {
        "": {
          headers: ["d8", "Specialty"],
          data: [
            { d8: "1", Specialty: "Blackmailer" },
            { d8: "2", Specialty: "Burglar" },
            { d8: "3", Specialty: "Enforcer" },
            { d8: "4", Specialty: "Fence" },
            { d8: "5", Specialty: "Highway robber" },
            { d8: "6", Specialty: "Hired killer" },
            { d8: "7", Specialty: "Pickpocket" },
            { d8: "8", Specialty: "Smuggler" },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.spy,
    name: "Criminal Contact (Spy)",
    description:
      "*This feature is from the Criminal Background, adjust it for the Spy background accordingly.*\n\nYou have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.",
  },
  {
    backgroundId: ids.urbanBountyHunter,
    name: "Ear to the Ground",
    description:
      "You are in frequent contact with people in the segment of society that your chosen quarries move through. These people might be associated with the criminal underworld, the rough-and-tumble folk of the streets, or members of high society. This connection comes in the form of a contact in any city you visit, a person who provides information about the people and places of the local area.",
  },
  {
    backgroundId: ids.urchin,
    name: "City Secrets",
    description:
      "You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.",
  },
  {
    backgroundId: ids.uthgardtTribeMember,
    name: "Barbarian Tribes of Faerûn",
    description:
      "Though this section details the Uthgardt specifically, either it or the Outlander background can be used for a character whose origin lies with one of the other barbarian tribes in Faerûn.\n\nYou might be a fair-haired barbarian of the Reghed, dwelling in the shadow of the Reghed Glacier in the far North near Icewind Dale. You might also be of the nomadic Rashemi, noted for their savage berserkers and their masked witches. Perhaps you hail from one of the wood elf tribes in the Chondalwood, or the magic-hating human tribes of the sweltering jungles of Chult.\n\n**Uthgardt Tribes and Their Territories**: For most Uthgardt tribes, the only stability in their history is the site of their ancestral mound. Most of the Uthgardt holy sites have existed since antiquity, but the fortunes of the tribes that revere them have hardly been static. Following are brief descriptions of the Uthgardt tribes today.",
    extendedTable: [
      {
        "": {
          headers: ["Tribe", "Description"],
          data: [
            {
              Tribe: "Blue Bear",
              Description:
                "The easternmost of the Uthgardt are the Blue Bear – thought destroyed more than a century ago – who have recently emerged from inside the High Forest and reclaimed their ancestral mound at Stone Stand, just south of the Moon Pass and north of the forest. The Blue Bears have reoccupied much of their old territory in the time since they returned to prominence, though they don't venture near Hellgate Keep, considering it a taboo place.",
            },
            {
              Tribe: "Black Lion and Red Tiger",
              Description:
                "North of Blue Bear territory, in the Glimmering Wood, is Beorunna's Well, a settlement of some size that near the ancient ancestral mound of the Red Tiger tribe. The settlement was founded some time ago by members of the Black Lion tribe, who put down roots here rather than continuing to live as nomads. Though the Red Tigers are less than comfortable with the present situation, they consider Beorunna's Well their holy site, so they make the best of things. Bands of Red Tiger tribespeople often winter in Beorunna's Well, and many of its hunters and trappers use the settlement as a place to sell the leather and furs they acquire in nearby forests.",
            },

            {
              Tribe: "Sky Pony",
              Description:
                "In a part of the Glimmerwood called the Moonwood stands the One Stone, the ancestral mound of the Sky Pony tribe. These are a people divided; half of the tribe has settled and built a sizable steading around the One Stone, similar to what Black Lion has done at Beorunna's Well. The other half of the tribe considers this act an insult to their totem, so they launch raids on the settlement, burning as much of it as they can and then escaping, often on pegasus-back.",
            },
            {
              Tribe: "Tree Ghost",
              Description:
                "In the depths of the High Forest stands the Grandfather Tree, the ancestral mound of the Tree Ghost tribe. The Tree Ghosts split off from the Blue Bears long ago and all but disappeared into the forest, although occasional reports reach civilization that they are still alive and can sometimes be seen clustered around the Grandfather Tree. Some sages postulate that the newly reborn Blue Bear tribe might well be Tree Ghost Uthgardt who are following a call from a revived Blue Bear totem.",
            },
            {
              Tribe: "Great Worm",
              Description:
                "The Frost Hills, a small southern spike of the Spine of the World Mountains just north of the Evermoors, is the site of Great Worm Cavern, the ancestral mound of the Great Worm tribe. These Uthgardt are notoriously reclusive; it has been twenty years since the tribe has sent raiding parties out anywhere but against the orcs of the Spine Mountains.",
            },
            {
              Tribe: "Black Raven",
              Description:
                "As forbidding as the Spine of the World Mountains they roam, the Black Ravens are fanatical in their adherence to the old Uthgardt ways. Ranging out from Raven Rock, their ancestral mound deep inside the mountains, they have been known to send raiding parties as far south as Silverymoon, but their most frequent targets are the caravans that come in and out of Mithral Hall.",
            },
            {
              Tribe: "Elk",
              Description:
                "Flint Rock in the midst of the Evermoors is the ancestral mound of the Elk tribe. The Elk were once prolific raiders, extending their reach even into Nesme and Mithral Hall, but the tribe was shattered a handful of decades past by the forces of those cities. Though their numbers have replenished, the Elk remain mostly hunters and foragers. They are masters at avoiding or repulsing the threats of the Evermoors, and often hire themselves out as guides for outsiders.",
            },
            {
              Tribe: "Thunderbeast",
              Description:
                "The Thunderbeast tribe has not been heard from in several years. When the Thunderbeasts made their annual pilgrimage to Morgur's Mound in Neverwinter Wood, they found their holy site desecrated. Soon thereafter, their chieftain took them back into the depths of the High Forest, and they have not emerged since.",
            },
            {
              Tribe: "Gray Wolf",
              Description:
                "The Gray Wolf tribe, made up of lycanthropes, was destroyed by a Selunite crusade because of the tribe's curse. Some of the surviving Gray Wolves took shelter among other Uthgardt tribes.",
            },
            {
              Tribe: "Griffon",
              Description:
                "The Griffon tribe came to an untimely end when it rose against the forces of Luruar allied with giants and orcs.",
            },
            {
              Tribe: "Red Pony and Golden Eagle",
              Description:
                "The Red Pony and Golden Eagle tribes vanished centuries ago. They were last seen in the vicinity of the One Stone, the ancestral mound those tribes shared with Sky Pony.",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.uthgardtTribeMember,
    name: "Uthgardt Heritage",
    description:
      "You have an excellent knowledge of not only your tribe's territory, but also the terrain and natural resources of the rest of the North. You are familiar enough with any wilderness area that you find twice as much food and water as you normally would when you forage there.\n\nAdditionally, you can call upon the hospitality of your people, and those folk allied with your tribe, often including members of druid circles, tribes of nomadic elves, the Harpers, and the priesthoods devoted to the gods of the First Circle.",
  },
  {
    backgroundId: ids.waterdhavianNoble,
    name: "Kept in Style",
    description:
      "While you are in Waterdeep or elsewhere in the North your house sees to your everyday needs. Your name and signet are sufficient to cover most of your expenses; the inns, taverns, and festhalls you frequent are glad to record your debt and send an accounting to your family's estate in Waterdeep to settle what you owe.\n\nThis advantage enables you to live a comfortable lifestyle without having to pay 2 gp a day for it, or reduces the cost of a wealthy or aristocratic lifestyle by that amount. You may not maintain a less affluent lifestyle and use the difference as income – the benefit is a line of credit, not an actual monetary reward.",
  },
  {
    backgroundId: ids.witchlightHand,
    name: "Carnival Companion",
    description:
      "Over the years, you have earned the friendship of another carnival fixture. Roll a d8 and consult the Carnival Companion table to determine whom or what you've befriended, or you can choose an option that you like. Work with your DM to flesh out this friendship. This companion hangs around you while you're in the carnival, but it won't voluntarily leave the carnival.\n\nThe DM can use the Witchlight Hand stat block to represent hands, performers, and animal trainers who serve as carnival companions. Statistics for the other companions appear in the Monster Manual.",
    extendedTable: [
      {
        "Carnival Companion": {
          headers: ["d8", "Companion"],
          data: [
            { d8: "1", Companion: "Old, cantankerous Witchlight hand" },
            { d8: "2", Companion: "Young, impressionable Witchlight hand" },
            {
              d8: "3",
              Companion:
                "Performer (such as an acrobat, a clown, or a musician)",
            },
            { d8: "4", Companion: "Retired performer" },
            { d8: "5", Companion: "Seasoned animal trainer" },
            { d8: "6", Companion: "Old blink dog" },
            { d8: "7", Companion: "Cheery sprite" },
            {
              d8: "8",
              Companion:
                "Harmless, magical wisp of light (no stat block required) that has a flying speed of 30 feet, can hover, and sheds bright light in a 5-foot radius and dim light for an additional 5 feet",
            },
          ],
        },
      },
    ],
  },
  {
    backgroundId: ids.witchlightHand,
    name: "Carnival Fixture",
    description:
      "The Witchlight Carnival provides you with free, modest lodging and food. In addition, you may wander about the carnival and partake of its many wonders at no cost to you, provided you don't disrupt its shows or cause any other trouble.",
  },
  {
    backgroundId: ids.celebrityAdventurer,
    name: "Name Dropping",
    description:
      "You know and have met any number of powerful people across the land - and some of them might even remember you. You might be able to wrangle minor assistance from a major figure in the campaign, at the DM's discretion. Additionally, the common folk treat you with deference, and your heritage and the stories you tell might be good for a free meal or a place to sleep.",
  },
  {
    backgroundId: ids.failedMerchant,
    name: "Supply Chain",
    description:
      "From your time as a merchant, you retain connections with wholesalers, suppliers, and other merchants and entrepreneurs. You can call upon these connections when looking for items or information.",
  },
  {
    backgroundId: ids.gambler,
    name: "Never Tell Me the Odds",
    description:
      "Odds and probability are your bread and butter. During downtime activities that involve games of chance or figuring odds on the best plan, you can get a solid sense of which choice is likely the best one and which opportunities seem too good to be true, at the DM's determination.",
  },
  {
    backgroundId: ids.plaintiff,
    name: "Legalese",
    description:
      "Your experience with your local legal system has given you a firm knowledge of the ins and outs of that system. Even when the law is not on your side, you can use complex terms like ex injuria jus non oritur and cogitationis poenam nemo patitur to frighten people into thinking you know what you're talking about. With common folks who don't know any better, you might be able to intimidate or deceive to get favors or special treatment.",
  },
  {
    backgroundId: ids.rivalIntern,
    name: "Inside Informant",
    description:
      "You have connections to your previous employer or other groups you dealt with during your previous employment. You can communicate with your contacts, gaining information at the DM's discretion.",
  },
];

export default BackgroundFeatures;
