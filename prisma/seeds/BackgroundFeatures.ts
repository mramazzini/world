import { Prisma } from "@prisma/client";

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
};

const BackgroundFeatures: Prisma.BackgroundFeatureCreateManyInput[] = [
  //acolyte
  {
    backgroundId: ids.acolyte,
    name: "Shelter of the Faithful",
    description:
      "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.\n\nYou might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.",
  },
  {
    backgroundId: ids.acolyte,
    name: "Suggested Characteristics",
    description:
      "Acolytes are shaped by their experience in temples or other religious communities. Their study of the history and tenets of their faith and their relationships to temples, shrines, or hierarchies affect their mannerisms and ideals. Their flaws might be some hidden hypocrisy or heretical idea, or an ideal or bond taken to an extreme.",
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d8", "Personality Trait"],
          data: [
            {
              d8: "1",
              "Personality Trait":
                "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
            },
            {
              d8: "2",
              "Personality Trait":
                "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
            },
            {
              d8: "3",
              "Personality Trait":
                "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
            },
            {
              d8: "4",
              "Personality Trait": "Nothing can shake my optimistic attitude.",
            },
            {
              d8: "5",
              "Personality Trait":
                "I quote (or misquote) sacred texts and proverbs in almost every situation.",
            },
            {
              d8: "6",
              "Personality Trait":
                "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
            },
            {
              d8: "7",
              "Personality Trait":
                "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
            },
            {
              d8: "8",
              "Personality Trait":
                "I've spent so long in the temple that I have little practical experience dealing with people in the outside world.",
            },
          ],
        },
      },
      {
        Ideals: {
          headers: ["d6", "Ideal"],
          data: [
            {
              d6: "1",
              Ideal:
                "**Tradition.** The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
            },
            {
              d6: "2",
              Ideal:
                "**Charity.** I always try to help those in need, no matter what the personal cost. (Good)",
            },
            {
              d6: "3",
              Ideal:
                "**Change.** We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
            },
            {
              d6: "4",
              Ideal:
                "**Power.** I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)",
            },
            {
              d6: "5",
              Ideal:
                "**Faith.** I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)",
            },
            {
              d6: "6",
              Ideal:
                "**Aspiration.** I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)",
            },
          ],
        },
      },
      {
        Bonds: {
          headers: ["d6", "Bond"],
          data: [
            {
              d6: "1",
              Bond: "I would die to recover an ancient relic of my faith that was lost long ago.",
            },
            {
              d6: "2",
              Bond: "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
            },
            {
              d6: "3",
              Bond: "I owe my life to the priest who took me in when my parents died.",
            },
            {
              d6: "4",
              Bond: "Everything I do is for the common people.",
            },
            {
              d6: "5",
              Bond: "I will do anything to protect the temple where I served.",
            },
            {
              d6: "6",
              Bond: "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.",
            },
          ],
        },
      },
      {
        Flaws: {
          headers: ["d6", "Flaw"],
          data: [
            {
              d6: "1",
              Flaw: "I judge others harshly, and myself even more severely.",
            },
            {
              d6: "2",
              Flaw: "I put too much trust in those who wield power within my temple's hierarchy.",
            },
            {
              d6: "3",
              Flaw: "My piety sometimes leads me to blindly trust those that profess faith in my god.",
            },
            {
              d6: "4",
              Flaw: "I am inflexible in my thinking.",
            },
            {
              d6: "5",
              Flaw: "I am suspicious of strangers and expect the worst of them.",
            },
            {
              d6: "6",
              Flaw: "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.",
            },
          ],
        },
      },
    ],
  },
  //anthropologist
  {
    backgroundId: ids.anthropologist,
    name: "Cultural Chameleon",
    description:
      "Before becoming an adventurer, you spent much of your adult life away from your homeland, living among people different from your kin. You came to understand these foreign cultures and the ways of their people, who eventually treated you as one of their own. One culture had more of an influence on you than any other, shaping your beliefs and customs. Choose a race whose culture you've adopted.",
  },
  {
    backgroundId: ids.anthropologist,
    name: "Adept Linguist",
    description:
      "You can communicate with humanoids who don't speak any language you know. You must observe the humanoids interacting with one another for at least 1 day, after which you learn a handful of important words, expressions, and gestures – enough to communicate on a rudimentary level.",
  },
  {
    backgroundId: ids.anthropologist,
    name: "Suggested Characteristics",
    description:
      "Anthropologists leave behind the societies into which they were born to discover what life ls like in other parts of the world. They seek to see how other races and civilizations survive – or why they did not. Some anthropologists are driven by intellectual curiosity, while others want the fame and recognition that comes with being the first to discover a new people, a lost tribe, or the truth about an ancient empire's downfall.",
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d6", "Personality Trait"],
          data: [
            {
              d6: "1",
              "Personality Trait":
                "I prefer the company of those who aren't like me, including people of other races",
            },
            {
              d6: "2",
              "Personality Trait":
                "I'm a stickler when it comes to observing proper etiquette and local customs.",
            },
            {
              d6: "3",
              "Personality Trait": "I would rather observe than meddle.",
            },
            {
              d6: "4",
              "Personality Trait":
                "By living among violent people, I have become desensitized to violence.",
            },
            {
              d6: "5",
              "Personality Trait":
                "I would risk life and limb to discover a new culture or unravel the secrets of a dead one.",
            },
            {
              d6: "6",
              "Personality Trait":
                "When I arrive at a new settlement for the first time, I must learn all its customs.",
            },
          ],
        },
      },
      {
        Ideals: {
          headers: ["d6", "Ideal"],
          data: [
            {
              d6: "1",
              Ideal:
                "**Discovery.** I want to be the first person to discover a lost culture. (Any)",
            },
            {
              d6: "2",
              Ideal:
                "**Distance.** One must not interfere with the affairs of another culture – even one in need of aid. (Lawful)",
            },
            {
              d6: "3",
              Ideal:
                "**Knowledge.** By understanding other races and cultures, we learn to understand ourselves. (Any)",
            },
            {
              d6: "4",
              Ideal:
                "**Power.** Common people crave strong leadership, and I do my utmost to provide it. (Lawful)",
            },
            {
              d6: "5",
              Ideal:
                "**Protection.** I must do everything possible to save a society facing extinction. (Good)",
            },
            {
              d6: "6",
              Ideal:
                "**Indifferent.** Life is cruel. What's the point in saving people if they're going to die anyway? (Chaotic)",
            },
          ],
        },
      },
      {
        Bonds: {
          headers: ["d6", "Bond"],
          data: [
            {
              d6: "1",
              Bond: "My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me.",
            },
            {
              d6: "2",
              Bond: "Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring.",
            },
            {
              d6: "3",
              Bond: "Years ago, tragedy struck the members of an isolated society I befriended, and I will honor them.",
            },
            {
              d6: "4",
              Bond: "I want to learn more about a particular humanoid culture that fascinates me.",
            },
            {
              d6: "5",
              Bond: "I seek to avenge a clan, tribe, kingdom, or empire that was wiped out.",
            },
            {
              d6: "6",
              Bond: "I have a trinket that I believe is the key to finding a long-lost society.",
            },
          ],
        },
      },
      {
        Flaws: {
          headers: ["d6", "Flaw"],
          data: [
            {
              d6: "1",
              Flaw: "Boats make me seasick.",
            },
            {
              d6: "2",
              Flaw: "I talk to myself, and I don't make friends easily.",
            },
            {
              d6: "3",
              Flaw: "I believe that I'm intellectually superior to people from other cultures and have much to teach them.",
            },
            {
              d6: "4",
              Flaw: "I've picked up some unpleasant habits living among races such as goblins, lizardfolk, or orcs.",
            },
            {
              d6: "5",
              Flaw: "I complain about everything.",
            },
            {
              d6: "6",
              Flaw: "I wear a tribal mask and never take it off.",
            },
          ],
        },
      },
    ],
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
      "When you enter a ruin or dungeon, you can correctly ascertain its original purpose and determine its builders, whether those were dwarves, elves, humans, yuan-ti, or some other known race. In addition, you can determine the monetary value of art objects more than a century old.",
  },
  {
    name: "Suggested Characteristics",
    backgroundId: ids.archaeologist,
    description:
      "Few archaeologists can resist the lure of an unexplored ruin or dungeon, particularly if such a site is the source of legends or is rumored to contain the treasures and relics of wizards, warlords, or royalty. Some archaeologists plunder for wealth or fame, while others consider it their calling to illuminate the past or keep the world's greatest treasures from falling into the wrong hands. Whatever their motivations, archaeologists combine the qualities of a scrappy historian with the self-made heroism of a treasure-hunting scoundrel.",
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d8", "Personality Trait"],
          data: [
            {
              d8: "1",
              "Personality Trait": "I love a good puzzle or mystery.",
            },
            {
              d8: "2",
              "Personality Trait":
                "I'm a pack rat who never throws anything away.",
            },
            {
              d8: "3",
              "Personality Trait": "Fame is more important to me than money.",
            },
            {
              d8: "4",
              "Personality Trait":
                "I have no qualms about stealing from the dead.",
            },
            {
              d8: "5",
              "Personality Trait":
                "I'm happier in a dusty old tomb than I am in the centers of civilization.",
            },
            {
              d8: "6",
              "Personality Trait":
                "Traps don't make me nervous. Idiots who trigger traps make me nervous.",
            },
            {
              d8: "7",
              "Personality Trait": "I might fail, but I will never give up.",
            },
            {
              d8: "8",
              "Personality Trait":
                "You might think I'm a scholar, but I love a good brawl. These fists were made for punching.",
            },
          ],
        },
      },
      {
        Ideals: {
          headers: ["d6", "Ideal"],
          data: [
            {
              d6: "1",
              Ideal:
                "**Preservation.** That artifact belongs in a museum. (Good)",
            },
            {
              d6: "2",
              Ideal:
                "**Greed.** I won't risk my life for nothing. I expect some kind of payment. (Any)",
            },
            {
              d6: "3",
              Ideal:
                "**Death Wish.** Nothing is more exhilarating than a narrow escape from the jaws of death. (Chaotic)",
            },
            {
              d6: "4",
              Ideal:
                "**Dignity.** The dead and their belongings deserve to be treated with respect. (Lawful)",
            },
            {
              d6: "5",
              Ideal:
                "**Immortality.** All my exploring is part of a plan to find the secret of everlasting life. (Any)",
            },
            {
              d6: "6",
              Ideal:
                "**Danger.** With every great discovery comes grave danger. The two walk hand in hand. (Any)",
            },
          ],
        },
      },
      {
        Bonds: {
          headers: ["d6", "Bond"],
          data: [
            {
              d6: "1",
              Bond: "Ever since I was a child, I've heard stories about a lost city. I aim to find it, learn its secrets, and earn my place in the history books.",
            },
            {
              d6: "2",
              Bond: "I want to find my mentor, who disappeared on an expedition some time ago.",
            },
            {
              d6: "3",
              Bond: "I have a friendly rival. Only one of us can be the best, and I aim to prove it's me.",
            },
            {
              d6: "4",
              Bond: "I won't sell an art object or other treasure that has historical significance or is one of a kind.",
            },
            {
              d6: "5",
              Bond: "I'm secretly in love with the wealthy patron who sponsors my archaeological exploits.",
            },
            {
              d6: "6",
              Bond: "I hope to bring prestige to a library, a museum, or a university.",
            },
          ],
        },
      },
      {
        Flaws: {
          headers: ["d6", "Flaw"],
          data: [
            {
              d6: "1",
              Flaw: "I have a secret fear of some common wild animal – and in my work, I see them everywhere.",
            },
            {
              d6: "2",
              Flaw: "I can't leave a room without searching it for secret doors.",
            },
            {
              d6: "3",
              Flaw: "When I'm not exploring dungeons or ruins, I get jittery and impatient.",
            },
            {
              d6: "4",
              Flaw: "I have no time for friends or family. I spend every waking moment thinking about and preparing for my next expedition.",
            },
            {
              d6: "5",
              Flaw: "When given the choice of going left or right, I always go left.",
            },
            {
              d6: "6",
              Flaw: "I can't sleep except in total darkness.",
            },
          ],
        },
      },
    ],
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
              Event: "Chariot or horse race",
            },
            {
              d8: "6",
              Event: "Pankration (mixed unarmed combat)",
            },
            {
              d8: "7",
              Event: "Hoplite race (racing in full armor with a unit)",
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
  {
    name: "Suggested Characteristics",
    description:
      "Competition can forge strong bonds between teammates and rivals or ignite bitter feuds that burn outside the arena. Athletes often apply lessons from their training to their lives in general.",
    backgroundId: ids.athlete,
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d8", "Personality Trait"],
          data: [
            {
              d8: "1",
              "Personality Trait":
                "I feel most at peace during physical exertion, whether exercise or battle.",
            },
            {
              d8: "2",
              "Personality Trait": "I don't like to sit idle.",
            },
            {
              d8: "3",
              "Personality Trait":
                "I have a daily exercise routine I refuse to break.",
            },
            {
              d8: "4",
              "Personality Trait": "Obstacles exist to be overcome.",
            },
            {
              d8: "5",
              "Personality Trait":
                "When I see others struggling, I offer to help.",
            },
            {
              d8: "6",
              "Personality Trait": "I love to trade banter and gibes.",
            },
            {
              d8: "7",
              "Personality Trait": "Anything worth doing is worth doing best.",
            },
            {
              d8: "8",
              "Personality Trait":
                "I get irritated if people praise someone else and not me.",
            },
          ],
        },
      },
      {
        Ideals: {
          headers: ["d6", "Ideal"],
          data: [
            {
              d6: "1",
              Ideal:
                "**Competition.** I strive to test myself in all things. (Chaotic)",
            },
            {
              d6: "2",
              Ideal:
                "**Triumph.** The best part of winning is seeing my rivals brought low. (Evil)",
            },
            {
              d6: "3",
              Ideal:
                "**Camaraderie.** The strongest bonds are forged through struggle. (Good)",
            },
            {
              d6: "4",
              Ideal: "**People.** I strive to inspire my spectators. (Neutral)",
            },
            {
              d6: "5",
              Ideal:
                "**Tradition.** Every game has rules, and the playing field must be level. (Lawful)",
            },
            {
              d6: "6",
              Ideal: "**Growth.** Lessons hide in victory and defeat. (Any)",
            },
          ],
        },
      },
      {
        Bonds: {
          headers: ["d6", "Bond"],
          data: [
            {
              d6: "1",
              Bond: "My teammates are my family.",
            },
            {
              d6: "2",
              Bond: "I will overcome a rival and prove myself their better.",
            },
            {
              d6: "3",
              Bond: "My mistake got someone hurt. Ill never make that mistake again.",
            },
            {
              d6: "4",
              Bond: "I will be the best for the honor and glory of my home.",
            },
            {
              d6: "5",
              Bond: "The person who trained me is the most important person in my world.",
            },
            {
              d6: "6",
              Bond: "I strive to live up to a specific hero's example.",
            },
          ],
        },
      },
      {
        Flaws: {
          headers: ["d6", "Flaw"],
          data: [
            {
              d6: "1",
              Flaw: "I indulge in a habit that threatens my reputation or health.",
            },
            {
              d6: "2",
              Flaw: "I'll do absolutely anything to win.",
            },
            {
              d6: "3",
              Flaw: "I ignore anyone who doesn't compete and anyone who loses to me.",
            },
            {
              d6: "4",
              Flaw: "I have lingering pain of old injuries.",
            },
            {
              d6: "5",
              Flaw: "Any defeat or failure on my part is because my opponents cheated.",
            },
            {
              d6: "6",
              Flaw: "I must be the captain of any group I join.",
            },
          ],
        },
      },
    ],
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
  {
    name: "Suggested Characteristics",
    backgroundId: ids.charlatan,
    description:
      "Charlatans are colorful characters who conceal their true selves behind the masks they construct. They reflect what people want to see, what they want to believe, and how they see the world. But their true selves are sometimes plagued by an uneasy conscience, an old enemy, or deep-seated trust issues.",
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d8", "Personality Trait"],
          data: [
            {
              d8: "1",
              "Personality Trait":
                "I fall in and out of love easily, and am always pursuing someone.",
            },
            {
              d8: "2",
              "Personality Trait":
                "I have a joke for every occasion, especially occasions where humor is inappropriate.",
            },
            {
              d8: "3",
              "Personality Trait":
                "Flattery is my preferred trick for getting what I want.",
            },
            {
              d8: "4",
              "Personality Trait":
                "I'm a born gambler who can't resist taking a risk for a potential payoff.",
            },
            {
              d8: "5",
              "Personality Trait":
                "I lie about almost everything, even when there's no good reason to.",
            },
            {
              d8: "6",
              "Personality Trait":
                "Sarcasm and insults are my weapons of choice.",
            },
            {
              d8: "7",
              "Personality Trait":
                "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
            },
            {
              d8: "8",
              "Personality Trait":
                "I pocket anything I see that might have some value.",
            },
          ],
        },
      },
      {
        Ideals: {
          headers: ["d6", "Ideal"],
          data: [
            {
              d6: "1",
              Ideal:
                "**Independence.** I am a free spirit – no one tells me what to do. (Chaotic)",
            },
            {
              d6: "2",
              Ideal:
                "**Fairness.** I never target people who can't afford to lose a few coins. (Lawful)",
            },
            {
              d6: "3",
              Ideal:
                "**Charity.** I distribute the money I acquire to the people who really need it. (Good)",
            },
            {
              d6: "4",
              Ideal:
                "**Creativity.** I never run the same con twice. (Chaotic)",
            },
            {
              d6: "5",
              Ideal:
                "**Friendship.** Material goods come and go. Bonds of friendship last forever. (Good)",
            },
            {
              d6: "6",
              Ideal:
                "**Aspiration.** I'm determined to make something of myself. (Any)",
            },
          ],
        },
      },
      {
        Bonds: {
          headers: ["d6", "Bond"],
          data: [
            {
              d6: "1",
              Bond: "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
            },
            {
              d6: "2",
              Bond: "I owe everything to my mentor – a horrible person who's probably rotting in jail somewhere.",
            },
            {
              d6: "3",
              Bond: "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
            },
            {
              d6: "4",
              Bond: "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
            },
            {
              d6: "5",
              Bond: "A powerful person killed someone I love. Some day soon, I'll have my revenge.",
            },
            {
              d6: "6",
              Bond: "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.",
            },
          ],
        },
      },
      {
        Flaws: {
          headers: ["d6", "Flaw"],
          data: [
            {
              d6: "1",
              Flaw: "I can't resist a pretty face.",
            },
            {
              d6: "2",
              Flaw: "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
            },
            {
              d6: "3",
              Flaw: "I'm convinced that no one could ever fool me the way I fool others.",
            },
            {
              d6: "4",
              Flaw: "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
            },
            {
              d6: "5",
              Flaw: "I can't resist swindling people who are more powerful than me.",
            },
            {
              d6: "6",
              Flaw: "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.",
            },
          ],
        },
      },
    ],
  },
  //cityWatch
  {
    name: "Investigator",
    description:
      "Rarer than watch or patrol members are a community's investigators, who are responsible for solving crimes after the fact. Though such folk are seldom found in rural areas, nearly every settlement of decent size has at least one or two watch members who have the skill to investigate crime scenes and track down criminals. If your prior experience is as an investigator, you have proficiency in Investigation rather than Athletics.",
    backgroundId: ids.cityWatch,
  },
  {
    name: "Watcher's Eye",
    description:
      "Your experience in enforcing the law, and dealing with lawbreakers, gives you a feel for local laws and criminals. You can easily find the local outpost of the watch or a similar organization, and just as easily pick out the dens of criminal activity in a community, although you're more likely to be welcome in the former locations rather than the latter.",
    backgroundId: ids.cityWatch,
  },
  {
    name: "Suggested Characteristics",
    backgroundId: ids.cityWatch,
    description:
      "Use the tables for the soldier background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.\n\nYour bond is likely associated with your fellow watch members or the watch organization itself and almost certainly concerns your community. Your ideal probably involves the fostering of peace and safety. An investigator is likely to have an ideal connected to achieving justice by successfully solving crimes.\n\n*Editor's Note: I added the tables for the soldier background here for your convenience.*",
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d8", "Personality Trait"],
          data: [
            {
              d8: "1",
              "Personality Trait": "I'm always polite and respectful.",
            },
            {
              d8: "2",
              "Personality Trait":
                "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
            },
            {
              d8: "3",
              "Personality Trait":
                "I've lost too many friends, and I'm slow to make new ones.",
            },
            {
              d8: "4",
              "Personality Trait":
                "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
            },
            {
              d8: "5",
              "Personality Trait":
                "I can stare down a hellhound without flinching.",
            },
            {
              d8: "6",
              "Personality Trait":
                "I enjoy being strong and like breaking things.",
            },
            {
              d8: "7",
              "Personality Trait": "I have a crude sense of humor.",
            },
            {
              d8: "8",
              "Personality Trait":
                "I face problems head-on. A simple, direct solution is the best path to success.",
            },
          ],
        },
      },
      {
        Ideals: {
          headers: ["d6", "Ideal"],
          data: [
            {
              d6: "1",
              Ideal:
                "**Greater Good.** Our lot is to lay down our lives in defense of others. (Good)",
            },
            {
              d6: "2",
              Ideal:
                "**Responsibility.** I do what I must and obey just authority. (Lawful)",
            },
            {
              d6: "3",
              Ideal:
                "**Independence.** When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)",
            },
            {
              d6: "4",
              Ideal:
                "**Might.** In life as in war, the stronger force wins. (Evil)",
            },
            {
              d6: "5",
              Ideal:
                "**Live and Let Live.** Ideals aren't worth killing over or going to war for. (Neutral)",
            },
            {
              d6: "6",
              Ideal:
                "**Nation.** My city, nation, or people are all that matter. (Any)",
            },
          ],
        },
      },
      {
        Bonds: {
          headers: ["d6", "Bond"],
          data: [
            {
              d6: "1",
              Bond: "I would still lay down my life for the people I served with.",
            },
            {
              d6: "2",
              Bond: "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
            },
            {
              d6: "3",
              Bond: "My honor is my life.",
            },
            {
              d6: "4",
              Bond: "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
            },
            {
              d6: "5",
              Bond: "Those who fight beside me are those worth dying for.",
            },
            {
              d6: "6",
              Bond: "I fight for those who cannot fight for themselves.",
            },
          ],
        },
      },
      {
        Flaws: {
          headers: ["d6", "Flaw"],
          data: [
            {
              d6: "1",
              Flaw: "The monstrous enemy we faced in battle still leaves me quivering with fear.",
            },
            {
              d6: "2",
              Flaw: "I have little respect for anyone who is not a proven warrior.",
            },
            {
              d6: "3",
              Flaw: "I made a terrible mistake in battle that cost many lives – and I would do anything to keep that mistake secret.",
            },
            {
              d6: "4",
              Flaw: "My hatred of my enemies is blind and unreasoning.",
            },
            {
              d6: "5",
              Flaw: "I obey the law, even if the law causes misery.",
            },
            {
              d6: "6",
              Flaw: "I'd rather eat my armor than admit when I'm wrong.",
            },
          ],
        },
      },
    ],
  },
];

export default BackgroundFeatures;
