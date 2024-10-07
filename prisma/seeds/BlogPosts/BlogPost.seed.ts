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

  return [
    {
      id: 1,
      title: "Class Selection Guide",
      flavorText:
        "This article aims to help new players choose a class that fits their playstyle. It covers the basics of each class and provides a brief overview of their strengths and weaknesses, as well as a measure of their complexity.",
      meta: "This article aims to help new players choose a class that fits their playstyle. It covers the basics of each class as well as a brief overview of each one.",
      content: content, // Use the content read from the file
      route: "class-guide",
      ImageAlt: "Dungeons and dragons part charging into battle",
      ImageURL: "/blog/classes.webp",
    },
    {
      id: 2,
      title: "Beginner's Guide to playing the Game Master",
      flavorText:
        "A guide for new players who want to try their hand at being a Game Master. This article covers the basics of running a game, creating a campaign plot, a world to play in, and managing players.",
      meta: "A guide for new players who want to try their hand at being a Game Master. This article covers the basics of running a game, creating a campaign plot, a world to play in, and managing players.",
      content: "asdasd",
      route: "game-master-guide",
      ImageAlt: "Dungeons and dragons table top game",
      ImageURL: "/blog/dm.webp",
    },
  ];
};

export default generateBlogPostSeed;
