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
  // clanCrafter
  {
    name: "Respect of the Stout Folk",
    description:
      "As well respected as clan crafters are among outsiders, no one esteems them quite so highly as dwarves do. You always have free room and board in any place where shield dwarves or gold dwarves dwell, and the individuals in such a settlement might vie among themselves to determine who can offer you (and possibly your compatriots) the finest accommodations and assistance.",
    backgroundId: ids.clanCrafter,
  },
  {
    name: "Suggested Characteristics",
    description: `Use the tables for the guild artisan background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity. (For instance, consider the words "guild" and "clan" to be interchangeable.)\n\nYour bond is almost certainly related to the master or the clan that taught you, or else to the work that you produce. Your ideal might have to do with maintaining the high quality of your work or preserving the dwarven traditions of craftsmanship.\n\nEditor's Note: I added the tables for the guild artisan background here for your convenience.`,
    backgroundId: ids.clanCrafter,
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d8", "Personality Trait"],
          data: [
            {
              d8: "1",
              "Personality Trait":
                "I believe that anything worth doing is worth doing right. I can't help it – I'm a perfectionist.",
            },
            {
              d8: "2",
              "Personality Trait":
                "I'm a snob who looks down on those who can't appreciate fine art.",
            },
            {
              d8: "3",
              "Personality Trait":
                "I always want to know how things work and what makes people tick.",
            },
            {
              d8: "4",
              "Personality Trait":
                "I'm full of witty aphorisms and have a proverb for every occasion.",
            },
            {
              d8: "5",
              "Personality Trait":
                "I'm rude to people who lack my commitment to hard work and fair play.",
            },
            {
              d8: "6",
              "Personality Trait":
                "I like to talk at length about my profession.",
            },
            {
              d8: "7",
              "Personality Trait":
                "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
            },
            {
              d8: "8",
              "Personality Trait":
                "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
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
                "**Community.** It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
            },
            {
              d6: "2",
              Ideal:
                "**Generosity.** My talents were given to me so that I could use them to benefit the world. (Good)",
            },
            {
              d6: "3",
              Ideal:
                "**Freedom.** Everyone should be free to pursue his or her livelihood. (Chaotic)",
            },
            {
              d6: "4",
              Ideal: "**Greed.** I'm only in it for the money. (Evil)",
            },
            {
              d6: "5",
              Ideal:
                "**People.** I'm committed to the people I care about, not to ideals. (Neutral)",
            },
            {
              d6: "6",
              Ideal:
                "**Aspiration.** I work hard to be the best there is at my craft. (Any)",
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
              Bond: "The workshop where I learned my trade is the most important place in the world to me.",
            },
            {
              d6: "2",
              Bond: "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
            },
            {
              d6: "3",
              Bond: "I owe my guild a great debt for forging me into the person I am today.",
            },
            {
              d6: "4",
              Bond: "I pursue wealth to secure someone's love.",
            },
            {
              d6: "5",
              Bond: "One day I will return to my guild and prove that I am the greatest artisan of them all.",
            },
            {
              d6: "6",
              Bond: "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
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
              Flaw: "I'll do anything to get my hands on something rare or priceless.",
            },
            {
              d6: "2",
              Flaw: "2 	I'm quick to assume that someone is trying to cheat me.",
            },
            {
              d6: "3",
              Flaw: "No one must ever learn that I once stole money from guild coffers.",
            },
            {
              d6: "4",
              Flaw: "I'm never satisfied with what I have – I always want more.",
            },
            {
              d6: "5",
              Flaw: "I would kill to acquire a noble title.",
            },
            {
              d6: "6",
              Flaw: "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
            },
          ],
        },
      },
    ],
  },
  // cloisteredScholar
  {
    name: "Library Access",
    description:
      "Though others must often endure extensive interviews and significant fees to gain access to even the most common archives in your library, you have free and easy access to the majority of the library, though it might also have repositories of lore that are too valuable, magical, or secret to permit anyone immediate access.\n\nYou have a working knowledge of your cloister's personnel and bureaucracy, and you know how to navigate those connections with some ease.\n\nAdditionally, you are likely to gain preferential treatment at other libraries across the Realms, as professional courtesy shown to a fellow scholar.",
    backgroundId: ids.cloisteredScholar,
  },
  {
    name: "Suggested Characteristics",
    description:
      "Use the tables for the sage background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.\n\nYour bond is almost certainly associated either with the place where you grew up or with the knowledge you hope to acquire through adventuring. Your ideal is no doubt related to how you view the quest for knowledge and truth – perhaps as a worthy goal in itself, or maybe as a means to a desirable end.\n\n*Editor's Note: I added the tables for the sage background here for your convenience.*",
    backgroundId: ids.cloisteredScholar,
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d8", "Personality Trait"],
          data: [
            {
              d8: "1",
              "Personality Trait":
                "I use polysyllabic words that convey the impression of great erudition.",
            },
            {
              d8: "2",
              "Personality Trait":
                "I've read every book in the world's greatest libraries – or I like to boast that I have.",
            },
            {
              d8: "3",
              "Personality Trait":
                "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
            },
            {
              d8: "4",
              "Personality Trait":
                "There's nothing I like more than a good mystery.",
            },
            {
              d8: "5",
              "Personality Trait":
                "I'm willing to listen to every side of an argument before I make my own judgment.",
            },
            {
              d8: "6",
              "Personality Trait":
                "I... speak... slowly... when talking... to idiots, which... almost... everyone... is... compared... to me.",
            },
            {
              d8: "7",
              "Personality Trait":
                "I am horribly, horribly awkward in social situations.",
            },
            {
              d8: "8",
              "Personality Trait":
                "I'm convinced that people are always trying to steal my secrets.",
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
                "**Knowledge.** The path to power and self-improvement is through knowledge. (Neutral)",
            },
            {
              d6: "2",
              Ideal:
                "**Beauty.** What is beautiful points us beyond itself toward what is true. (Good)",
            },
            {
              d6: "3",
              Ideal:
                "**Logic.** Emotions must not cloud our logical thinking. (Lawful)",
            },
            {
              d6: "4",
              Ideal:
                "**No Limits.** Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
            },
            {
              d6: "5",
              Ideal:
                "**Power.** Knowledge is the path to power and domination. (Evil)",
            },
            {
              d6: "6",
              Ideal:
                "**Self-Improvement.** The goal of a life of study is the betterment of oneself. (Any)",
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
              Bond: "It is my duty to protect my students.",
            },
            {
              d6: "2",
              Bond: "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
            },
            {
              d6: "3",
              Bond: "I work to preserve a library, university, scriptorium, or monastery.",
            },
            {
              d6: "4",
              Bond: "My life's work is a series of tomes related to a specific field of lore.",
            },
            {
              d6: "5",
              Bond: "I've been searching my whole life for the answer to a certain question.",
            },
            {
              d6: "6",
              Bond: "I sold my soul for knowledge. I hope to do great deeds and win it back.",
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
              Flaw: "I am easily distracted by the promise of information.",
            },
            {
              d6: "2",
              Flaw: "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
            },
            {
              d6: "3",
              Flaw: "Unlocking an ancient mystery is worth the price of a civilization.",
            },
            {
              d6: "4",
              Flaw: "I overlook obvious solutions in favor of complicated ones.",
            },
            {
              d6: "5",
              Flaw: "I speak without really thinking through my words, invariably insulting others.",
            },
            {
              d6: "6",
              Flaw: "I can't keep a secret to save my life, or anyone else's.",
            },
          ],
        },
      },
    ],
  },
  // courtier
  {
    name: "Court Functionary",
    description:
      "Your knowledge of how bureaucracies function lets you gain access to the records and inner workings of any noble court or government you encounter. You know who the movers and shakers are, whom to go to for the favors you seek, and what the current intrigues of interest in the group are.",
    backgroundId: ids.courtier,
  },
  {
    name: "Suggested Characteristics",
    description:
      "Use the tables for the guild artisan background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity.\n\nThe noble court or bureaucratic organization where you got your start is directly or indirectly associated with your bond (which could pertain to certain individuals in the group, such as your sponsor or mentor). Your ideal might be concerned with the prevailing philosophy of your court or organization.\n\n*Editor's Note: I added the tables for the guild artisan background here for your convenience.*",
    backgroundId: ids.courtier,
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d8", "Personality Trait"],
          data: [
            {
              d8: "1",
              "Personality Trait":
                "I believe that anything worth doing is worth doing right. I can't help it – I'm a perfectionist.",
            },
            {
              d8: "2",
              "Personality Trait":
                "I'm a snob who looks down on those who can't appreciate fine art.",
            },
            {
              d8: "3",
              "Personality Trait":
                "I always want to know how things work and what makes people tick.",
            },
            {
              d8: "4",
              "Personality Trait":
                "I'm full of witty aphorisms and have a proverb for every occasion.",
            },
            {
              d8: "5",
              "Personality Trait":
                "I'm rude to people who lack my commitment to hard work and fair play.",
            },
            {
              d8: "6",
              "Personality Trait":
                "I like to talk at length about my profession.",
            },
            {
              d8: "7",
              "Personality Trait":
                "I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
            },
            {
              d8: "8",
              "Personality Trait":
                "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
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
                "**Community.** It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
            },
            {
              d6: "2",
              Ideal:
                "**Generosity.** My talents were given to me so that I could use them to benefit the world. (Good)",
            },
            {
              d6: "3",
              Ideal:
                "**Freedom.** Everyone should be free to pursue his or her livelihood. (Chaotic)",
            },
            {
              d6: "4",
              Ideal: "**Greed.** I'm only in it for the money. (Evil)",
            },
            {
              d6: "5",
              Ideal:
                "**People.** I'm committed to the people I care about, not to ideals. (Neutral)",
            },
            {
              d6: "6",
              Ideal:
                "**Aspiration.** I work hard to be the best there is at my craft. (Any)",
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
              Bond: "The workshop where I learned my trade is the most important place in the world to me.",
            },
            {
              d6: "2",
              Bond: "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
            },
            {
              d6: "3",
              Bond: "I owe my guild a great debt for forging me into the person I am today.",
            },
            {
              d6: "4",
              Bond: "I pursue wealth to secure someone's love.",
            },
            {
              d6: "5",
              Bond: "One day I will return to my guild and prove that I am the greatest artisan of them all.",
            },
            {
              d6: "6",
              Bond: "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
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
              Flaw: "I'll do anything to get my hands on something rare or priceless.",
            },
            {
              d6: "2",
              Flaw: "2 	I'm quick to assume that someone is trying to cheat me.",
            },
            {
              d6: "3",
              Flaw: "No one must ever learn that I once stole money from guild coffers.",
            },
            {
              d6: "4",
              Flaw: "I'm never satisfied with what I have – I always want more.",
            },
            {
              d6: "5",
              Flaw: "I would kill to acquire a noble title.",
            },
            {
              d6: "6",
              Flaw: "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
            },
          ],
        },
      },
    ],
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
  {
    name: "Suggested Characteristics",
    description:
      "Criminals might seem like villains on the surface, and many of them are villainous to the core. But some have an abundance of endearing, if not redeeming, characteristics. There might be honor among thieves, but criminals rarely show any respect for law or authority.",
    backgroundId: ids.criminal,
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d8", "Personality Trait"],
          data: [
            {
              d8: "1",
              "Personality Trait":
                "I always have a plan for what to do when things go wrong.",
            },
            {
              d8: "2",
              "Personality Trait":
                "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
            },
            {
              d8: "3",
              "Personality Trait":
                "The first thing I do in a new place is note the locations of everything valuable – or where such things could be hidden.",
            },
            {
              d8: "4",
              "Personality Trait":
                "I would rather make a new friend than a new enemy.",
            },
            {
              d8: "5",
              "Personality Trait":
                "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
            },
            {
              d8: "6",
              "Personality Trait":
                "I don't pay attention to the risks in a situation. Never tell me the odds.",
            },
            {
              d8: "7",
              "Personality Trait":
                "The best way to get me to do something is to tell me I can't do it.",
            },
            {
              d8: "8",
              "Personality Trait": "I blow up at the slightest insult.",
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
                "**Honor.** I don't steal from others in the trade. (Lawful)",
            },
            {
              d6: "2",
              Ideal:
                "**Freedom.** Chains are meant to be broken, as are those who would forge them. (Chaotic)",
            },
            {
              d6: "3",
              Ideal:
                "**Charity.** I steal from the wealthy so that I can help people in need. (Good)",
            },
            {
              d6: "4",
              Ideal:
                "**Greed.** I will do whatever it takes to become wealthy. (Evil)",
            },
            {
              d6: "5",
              Ideal:
                "**People.** I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
            },
            {
              d6: "6",
              Ideal:
                "**Redemption.** There's a spark of good in everyone. (Good)",
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
              Bond: "I'm trying to pay off an old debt I owe to a generous benefactor.",
            },
            {
              d6: "2",
              Bond: "My ill-gotten gains go to support my family.",
            },
            {
              d6: "3",
              Bond: "Something important was taken from me, and I aim to steal it back.",
            },
            {
              d6: "4",
              Bond: "I will become the greatest thief that ever lived.",
            },
            {
              d6: "5",
              Bond: "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
            },
            {
              d6: "6",
              Bond: "Someone I loved died because of a mistake I made. That will never happen again.",
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
              Flaw: "When I see something valuable, I can think of nothing but how to steal it.",
            },
            {
              d6: "2",
              Flaw: "When faced with a choice between money and my friends, I usually choose the money.",
            },
            {
              d6: "3",
              Flaw: "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
            },
            {
              d6: "4",
              Flaw: "I have a 'tell' that reveals when I'm lying.",
            },
            {
              d6: "5",
              Flaw: "I turn tail and run when things look bad.",
            },
            {
              d6: "6",
              Flaw: "An innocent person is in prison for a crime that I committed. I'm okay with that.",
            },
          ],
        },
      },
    ],
  },
  // entertainer
  {
    name: "Gladiator",
    description:
      "A gladiator is as much an entertainer as any minstrel or circus performer trained to make the arts of combat into a spectacle the crowd can enjoy. This kind of flashy combat is your entertainer routine, though you might also have some skills as a tumbler or actor. Using your By Popular Demand feature, you can find a place to perform in any place that features combat for entertainment-perhaps a gladiatorial arena or secret pit fighting club. You can replace the musical instrument in your equipment package with an inexpensive but unusual weapon, such as a trident or net.",
    backgroundId: ids.entertainer,
  },
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
  {
    name: "Suggested Characteristics",
    description:
      "Successful entertainers have to be able to capture and hold an audience's attention, so they tend to have flamboyant or forceful personalities. They're inclined toward the romantic and often cling to high-minded ideals about the practice of art and the appreciation of beauty.",
    backgroundId: ids.entertainer,
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d8", "Personality Trait"],
          data: [
            {
              d8: "1",
              "Personality Trait":
                "I know a story relevant to almost every situation.",
            },
            {
              d8: "2",
              "Personality Trait":
                "Whenever I come to a new place, I collect local rumors and spread gossip.",
            },
            {
              d8: "3",
              "Personality Trait":
                "I'm a hopeless romantic, always searching for that 'special someone.'",
            },
            {
              d8: "4",
              "Personality Trait":
                "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
            },
            {
              d8: "5",
              "Personality Trait":
                "I love a good insult, even one directed at me.",
            },
            {
              d8: "6",
              "Personality Trait":
                "I get bitter if I'm not the center of attention.",
            },
            {
              d8: "7",
              "Personality Trait":
                "I'll settle for nothing less than perfection.",
            },
            {
              d8: "8",
              "Personality Trait":
                "I change my mood or my mind as quickly as I change key in a song.",
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
                "**Beauty.** When I perform, I make the world better than it was. (Good)",
            },
            {
              d6: "2",
              Ideal:
                "**Tradition.** The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
            },
            {
              d6: "3",
              Ideal:
                "**Creativity.** The world is in need of new ideas and bold action. (Chaotic)",
            },
            {
              d6: "4",
              Ideal: "**Greed.** I'm only in it for the money and fame. (Evil)",
            },
            {
              d6: "5",
              Ideal:
                "**People.** I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
            },
            {
              d6: "6",
              Ideal:
                "**Honesty.** Art should reflect the soul; it should come from within and reveal who we really are. (Any)",
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
              Bond: "My instrument is my most treasured possession, and it reminds me of someone I love.",
            },
            {
              d6: "2",
              Bond: "Someone stole my precious instrument, and someday I'll get it back.",
            },
            {
              d6: "3",
              Bond: "I want to be famous, whatever it takes.",
            },
            {
              d6: "4",
              Bond: "I idolize a hero of the old tales and measure my deeds against that person's.",
            },
            {
              d6: "5",
              Bond: "I will do anything to prove myself superior to my hated rival.",
            },
            {
              d6: "6",
              Bond: "I would do anything for the other members of my old troupe.",
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
              Flaw: "I'll do anything to win fame and renown.",
            },
            {
              d6: "2",
              Flaw: "I'm a sucker for a pretty face.",
            },
            {
              d6: "3",
              Flaw: "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
            },
            {
              d6: "4",
              Flaw: "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
            },
            {
              d6: "5",
              Flaw: "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
            },
            {
              d6: "6",
              Flaw: "Despite my best efforts, I am unreliable to my friends.",
            },
          ],
        },
      },
    ],
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
  {
    name: "Suggested Characteristics",
    description:
      "A faceless character usually plays their persona—the hero or extraordinary person they are every day. That's all a facade, though, or a part of them expressed to an extreme. To define a persona, feel free to choose characteristics from other backgrounds, particularly folk hero, hermit, or noble. For the person behind the persona, the one who truly strives to be faceless, consider a distinct set of faceless characteristics. As a result, those with this background have two sets of characteristics, one for their persona, and one for their faceless selves.",
    backgroundId: ids.faceless,
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d8", "Personality Trait"],
          data: [
            {
              d8: "1",
              "Personality Trait": "I'm earnest and uncommonly direct.",
            },
            {
              d8: "2",
              "Personality Trait":
                "I strive to have no personality—it's easier to forget what's hardly there.",
            },
            {
              d8: "3",
              "Personality Trait":
                "I treasure a memento of a person or instance that set me upon my path.",
            },
            {
              d8: "4",
              "Personality Trait":
                "I sleep just as much as I need to and on an unusual schedule.",
            },
            {
              d8: "5",
              "Personality Trait":
                " 	I think far ahead, a detachedness often mistaken for daydreaming.",
            },
            {
              d8: "6",
              "Personality Trait":
                "I cultivate a single obscure hobby or study and eagerly discuss it at length.",
            },
            {
              d8: "7",
              "Personality Trait":
                "I am ever learning how to be among others—when to stay quiet, when to laugh.",
            },
            {
              d8: "8",
              "Personality Trait":
                "I behave like an extreme opposite of my persona.",
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
                "**Justice.** Place in society shouldn't determine one's access to what is right. (Good)",
            },
            {
              d6: "2",
              Ideal:
                "**Security.** Doing what must be done can't bring the innocent to harm. (Lawful)",
            },
            {
              d6: "3",
              Ideal:
                "**Confusion.** Deception is a weapon. Strike from where your foes won't expect. (Chaotic)",
            },
            {
              d6: "4",
              Ideal:
                "**Infamy.** My name will be a malediction, a curse that fulfills my will. (Evil)",
            },
            {
              d6: "5",
              Ideal:
                "**Incorruptability.** Be a symbol, and leave your flawed being behind. (Any)",
            },
            {
              d6: "6",
              Ideal:
                "**Anonymity**  It's my deeds that should be remembered, not their instrument. (Any)",
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
              Bond: "I do everything for my family. My first thought is keeping them safe.",
            },
            {
              d6: "2",
              Bond: "What I do, I do for the world. The people don't realize how much they need me.",
            },
            {
              d6: "3",
              Bond: "I've seen too many in need. I must not fail them as everyone else has.",
            },
            {
              d6: "4",
              Bond: "I stand in opposition, lest the wicked go unopposed.",
            },
            {
              d6: "5",
              Bond: "I am exceptional. I do this because no one else can, and no one can stop me.",
            },
            {
              d6: "6",
              Bond: "I do everything for those who were taken from me.",
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
              Flaw: "I an callous about death. It comes to us all eventually.",
            },
            {
              d6: "2",
              Flaw: "I never make eye contact or hold it unflinchingly.",
            },
            {
              d6: "3",
              Flaw: "I have no sense of humor. Laughing is uncomfortable and embarrassing.",
            },
            {
              d6: "4",
              Flaw: "I overexert myself, sometimes needing to recuperate for a day or more.",
            },
            {
              d6: "5",
              Flaw: "I think far ahead, a detachedness often mistaken for daydreaming.",
            },
            {
              d6: "6",
              Flaw: "I see morality entirely in black and white.",
            },
          ],
        },
      },
    ],
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
  {
    name: "Suggested Characteristics",
    description: `Use the tables for the Acolyte background as the basis for your traits and motivations, modifying the entries when appropriate to suit your identity. (For instance, consider the words "faith" and "faction" to be interchangeable.)\n\n*Editor's Note: I added the tables for the acolyte background here for your convenience.*\n\nYour bond might be associated with other members of your faction, or a location or an object that is important to your faction. The ideal you strive for is probably in keeping with the tenets and principles of your faction, but might be more personal in nature.`,
    backgroundId: ids.factionAgent,
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
              Description: `Though your home is physically closer to the Sword Coast than the other locations discussed here, it is far more unnatural. You hail from one of the settlements in the Underdark, each of which has its own strange customs and laws. If you are a native of one of the great subterranean cities or settlements, you are probably a member of the race that occupies the place but you might also have grown up there after being captured and brought below when you were a child.\n\nIf you are a true Underdark native, you might have come to the surface as an emissary of your people, or perhaps to escape accusations of criminal behavior (whether warranted or not). If you aren't a native, your reason for leaving "home" probably has something to do with getting away from a bad situation.`,
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
  {
    name: "Suggested Characteristics",
    description: "Here are some suggested characteristics for far travelers.",
    backgroundId: ids.farTraveler,
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d6", "Personality Trait"],
          data: [
            {
              d6: "1",
              "Personality Trait":
                "I have different assumptions from those around me concerning personal space, blithely invading others' space in innocence, or reacting to ignorant invasion of my own.",
            },
            {
              d6: "2",
              "Personality Trait":
                "I have my own ideas about what is and is not food, and I find the eating habits of those around me fascinating, confusing, or revolting.",
            },
            {
              d6: "3",
              "Personality Trait":
                "I have a strong code of honor or sense of propriety that others don't comprehend.",
            },
            {
              d6: "4",
              "Personality Trait":
                "I express affection or contempt in ways that are unfamiliar to others.",
            },
            {
              d6: "5",
              "Personality Trait":
                "I honor my deities through practices that are foreign to this land.",
            },
            {
              d6: "6",
              "Personality Trait":
                "I begin or end my day with small traditional rituals that are unfamiliar to those around me.",
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
                "**Change.** I have much to learn from the kindly folk I meet along my way. (Good)",
            },
            {
              d6: "2",
              Ideal:
                "**Greater Good.** As someone new to these strange lands, I am cautious and respectful in my dealings. (Lawful)",
            },
            {
              d6: "3",
              Ideal:
                "**Honor.** I'm far from home, and everything is strange and wonderful! (Chaotic)",
            },
            {
              d6: "4",
              Ideal:
                "**Might.** Though I may not know their ways, neither do they know mine, which can be to my advantage. (Evil)",
            },
            {
              d6: "5",
              Ideal:
                "**Nature.** Everything is new, but I have a thirst to learn. (Neutral)",
            },
            {
              d6: "6",
              Ideal:
                "**Knowledge.** I must be careful, for I have no way of telling friend from foe here. (Any)",
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
              Bond: "So long as I have this token from my homeland, I can face any adversity in this strange land.",
            },
            {
              d6: "2",
              Bond: "The gods of my people are a comfort to me so far from home.",
            },
            {
              d6: "3",
              Bond: "I hold no greater cause than my service to my people.",
            },
            {
              d6: "4",
              Bond: "My freedom is my most precious possession. I'll never let anyone take it from me again.",
            },
            {
              d6: "5",
              Bond: "I'm fascinated by the beauty and wonder of this new land.",
            },
            {
              d6: "6",
              Bond: "Though I had no choice, I lament having to leave my loved one(s) behind. I hope to see them again one day.",
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
              Flaw: "I am secretly (or not so secretly) convinced of the superiority of my own culture over that of this foreign land.",
            },
            {
              d6: "2",
              Flaw: "I pretend not to understand the local language in order to avoid interactions I would rather not have.",
            },
            {
              d6: "3",
              Flaw: "I have a weakness for the exotic beauty of the people of these lands.",
            },
            {
              d6: "4",
              Flaw: "I don't take kindly to some of the actions and motivations of the people of this land, because these folk are different from me.",
            },
            {
              d6: "5",
              Flaw: "I consider the adherents of other gods to be deluded innocents at best, or ignorant fools at worst.",
            },
            {
              d6: "6",
              Flaw: "I have a weakness for the new intoxicants and other pleasures of this land.",
            },
          ],
        },
      },
    ],
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
    name: "Suggested Characteristics",
    description:
      "These tables, while optional, are well suited to Feywild-themed adventurers and are ideal for any character who has the Feylost background.",
    backgroundId: ids.feyLost,
    extendedTable: [
      {
        "Personality Traits": {
          headers: ["d8", "Personality Trait"],
          data: [
            {
              d8: "1",
              "Personality Trait":
                "I'm haunted by fey laughter that only I can hear, though I know it's just my mind playing tricks on me.",
            },
            {
              d8: "2",
              "Personality Trait":
                "Like a nomad, I can't settle down in one place for very long.",
            },
            {
              d8: "3",
              "Personality Trait": "Good music makes me weep like a baby.",
            },
            {
              d8: "4",
              "Personality Trait":
                "Wherever I go, I try to bring a little of the warmth and tranquility of home with me.",
            },
            {
              d8: "5",
              "Personality Trait":
                "I have never lost my childlike sense of wonder.",
            },
            {
              d8: "6",
              "Personality Trait":
                "When I have a new idea, I get wildly excited about it until I come up with another, better idea.",
            },
            {
              d8: "7",
              "Personality Trait":
                "I live by my own set of weird and wonderful rules.",
            },
            {
              d8: "8",
              "Personality Trait": "I can't bring myself to trust most adults.",
            },
          ],
        },
      },
      {
        Ideals: {
          headers: ["d8", "Ideal"],
          data: [
            {
              d8: "1",
              Ideal: "**Friendship.** I never leave a friend behind. (Good)",
            },
            {
              d8: "2",
              Ideal:
                "**Empathy.** No creature should be made to suffer. (Good)",
            },
            {
              d8: "3",
              Ideal:
                "**Wanderlust.** I prefer to take the less traveled path. (Chaotic)",
            },
            {
              d8: "4",
              Ideal:
                "**Changeability.** Change is good, which is why I live by an ever-changing set of rules. (Chaotic)",
            },
            {
              d8: "5",
              Ideal:
                "**Honor.** A deal is a deal, and I would never break one. (Lawful)",
            },
            {
              d8: "6",
              Ideal: `**Rule of Three.** Everything in the multiverse happens in threes. I see the "rule of three" everywhere. (Lawful)`,
            },
            {
              d8: "7",
              Ideal: "**Obsession.** I won't let go of a grudge. (Evil)",
            },
            {
              d8: "8",
              Ideal:
                "**Greed.** I will do whatever it takes to get what I want, regardless of the harm it might cause. (Evil)",
            },
          ],
        },
      },
      {
        Bonds: {
          headers: ["d8", "Bond"],
          data: [
            {
              d8: "1",
              Bond: "I would never break my word.",
            },
            {
              d8: "2",
              Bond: "I find magic in all its forms to be compelling. The more magical a place, the more I am drawn to it.",
            },
            {
              d8: "3",
              Bond: "A trusted friend is the most important thing in the multiverse to me.",
            },
            {
              d8: "4",
              Bond: "I have a deep connection to a particular plant, and I visit it often.",
            },
            {
              d8: "5",
              Bond: "I can't bring myself to harm a Fey creature, either because I consider myself one or because I fear the repercussions.",
            },
            {
              d8: "6",
              Bond: "The Witchlight Carnival feels like home to me.",
            },
            {
              d8: "7",
              Bond: "I'm drawn to the Feywild and long to return there, if only for a short while.",
            },
            {
              d8: "8",
              Bond: "I feel indebted to Mister Witch and Mister Light for giving me a home and a purpose.",
            },
          ],
        },
      },
      {
        Flaws: {
          headers: ["d8", "Flaw"],
          data: [
            {
              d8: "1",
              Flaw: "I easily lose track of time. My poor sense of time means I'm always late.",
            },
            {
              d8: "2",
              Flaw: "I think the whole multiverse is out to get me.",
            },
            {
              d8: "3",
              Flaw: "I'm always operating under a tight timeline, and I'm obsessed with keeping everything on schedule.",
            },
            {
              d8: "4",
              Flaw: "I'm a kleptomaniac who covets shiny, sparkling treasure.",
            },
            {
              d8: "5",
              Flaw: "I'm forgetful. Sometimes I can't remember even the simplest things.",
            },
            {
              d8: "6",
              Flaw: "I never give away anything for free and always expect something in return.",
            },
            {
              d8: "7",
              Flaw: "I have many vices and tend to indulge them.",
            },
            {
              d8: "8",
              Flaw: "I'm always changing my mind-well, almost always.",
            },
          ],
        },
      },
    ],
  },
];

export default BackgroundFeatures;
