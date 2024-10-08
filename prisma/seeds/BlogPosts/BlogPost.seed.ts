import { Prisma } from "@prisma/client";
import fs from "fs";
import path from "path";

const generateBlogPostSeed = async (): Promise<
  Prisma.BlogPostCreateManyInput[]
> => {
  const content = await fs.promises.readFile(
    path.join(process.cwd(), "blogs/class-guide.md"),
    "utf-8"
  );
  const gameMasterContent = await fs.promises.readFile(
    path.join(process.cwd(), "blogs/game-master-guide.md"),
    "utf-8"
  );

  return [
    {
      id: 1,
      title: "Class Selection Guide",
      flavorText:
        "This article aims to help new players choose a class that fits their playstyle. It covers the basics of each class and provides a brief overview of their strengths and weaknesses, as well as a measure of their complexity.",
      meta: "This article aims to help new players choose a class that fits their playstyle. It covers the basics of each class as well as a brief overview of each one.",
      content: content,
      route: "class-guide",
      ImageAlt: "Dungeons and dragons part charging into battle",
      ImageURL: "/blog/classes.webp",
      tableOfContents: [
        {
          title: "Barbarian",
          link: "#barbarian",
        },
        {
          title: "Bard",
          link: "#bard",
        },
        {
          title: "Cleric",
          link: "#cleric",
        },
        {
          title: "Druid",
          link: "#druid",
        },
        {
          title: "Fighter",
          link: "#fighter",
        },
        {
          title: "Monk",
          link: "#monk",
        },
        {
          title: "Paladin",
          link: "#paladin",
        },
        {
          title: "Ranger",
          link: "#ranger",
        },
        {
          title: "Rogue",
          link: "#rogue",
        },
        {
          title: "Sorcerer",
          link: "#sorcerer",
        },
        {
          title: "Warlock",
          link: "#warlock",
        },
        {
          title: "Wizard",
          link: "#wizard",
        },
      ],
    },
    {
      id: 2,
      title: "Beginner's Guide to playing the Game Master",
      flavorText:
        "A guide for new players who want to try their hand at being a Game Master. This article covers the basics of running a game, creating a campaign plot, a world to play in, and managing players.",
      meta: "A guide for new players who want to try their hand at being a Game Master. This article covers the basics of running a game, creating a campaign plot, a world to play in, and managing players.",
      content: gameMasterContent,
      route: "game-master-guide",
      ImageAlt: "Dungeons and dragons table top game",
      ImageURL: "/blog/dm.webp",
      tableOfContents: [
        {
          title: "Introduction",
          link: "#the-most-important-rule%3A-have-fun",
        },
        {
          title: "Understand what you are walking into",
          link: "#1.-understand-what-you-are-walking-into",
        },
        {
          title: "Choose your players wisely",
          link: "#2.-choose-your-players-wisely",
        },
        {
          title: "Master Scheduling",
          link: "#3.-master-scheduling",
        },
        {
          title: "Make your world feel real",
          link: "#4.-make-your-world-feel-real",
        },
        {
          title: "The Sessions",
          link: "#5.-the-sessions",
        },
      ],
    },
  ];
};

export default generateBlogPostSeed;
