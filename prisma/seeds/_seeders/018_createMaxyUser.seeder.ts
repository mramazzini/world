import { Prisma, PrismaClient, Skill } from "@prisma/client";

import bcrypt from "bcrypt";

// Create Maxy User
const createMaxyUser = async (prisma: PrismaClient) => {
  const saltRounds = 10;
  const password = process.env.ADMIN_PASSWORD;
  if (
    process.env.ADMIN_ID === undefined ||
    process.env.ADMIN_EMAIL === undefined ||
    process.env.ADMIN_USERNAME === undefined ||
    password === undefined
  ) {
    throw new Error("Admin credentials not set in .env file");
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.user.upsert({
    where: {
      id: parseInt(process.env.ADMIN_ID),
    },
    update: {
      email: process.env.ADMIN_EMAIL,
      username: process.env.ADMIN_USERNAME,
      password: hashedPassword,
    },
    create: {
      id: parseInt(process.env.ADMIN_ID),
      email: process.env.ADMIN_EMAIL,
      username: process.env.ADMIN_USERNAME,
      password: hashedPassword,
    },
  });
};

export default createMaxyUser;
