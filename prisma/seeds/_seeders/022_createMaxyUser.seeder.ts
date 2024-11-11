import { PrismaClient } from '@prisma/client';
import {
  DefaultArgs,
  PrismaClientOptions,
} from '@prisma/client/runtime/library';

import bcrypt from 'bcrypt';

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
    throw new Error('Admin credentials not set in .env file');
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.user.upsert({
    where: {
      id: process.env.ADMIN_ID,
    },
    update: {
      email: process.env.ADMIN_EMAIL,
      username: process.env.ADMIN_USERNAME,
      password: hashedPassword,
    },
    create: {
      id: process.env.ADMIN_ID,
      email: process.env.ADMIN_EMAIL,
      username: process.env.ADMIN_USERNAME,
      password: hashedPassword,
    },
  });
};

const createSRDUser = async (prisma: PrismaClient) => {
  const saltRounds = 10;
  const password = process.env.SRD_PASSWORD;
  if (
    process.env.SRD_ID === undefined ||
    process.env.SRD_EMAIL === undefined ||
    process.env.SRD_USERNAME === undefined ||
    password === undefined
  ) {
    throw new Error('SRD credentials not set in .env file');
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.user.upsert({
    where: {
      id: process.env.SRD_ID,
    },
    update: {
      email: process.env.SRD_EMAIL,
      username: process.env.SRD_USERNAME,
      password: hashedPassword,
    },
    create: {
      id: process.env.SRD_ID,
      email: process.env.SRD_EMAIL,
      username: process.env.SRD_USERNAME,
      password: hashedPassword,
    },
  });

  // const connectStrings = [
  //   'feat',
  //   'spell',
  //   'species',
  //   'class',
  //   'subClass',
  //   'subSpecies',
  //   'item',
  //   'background',
  //   'creature',
  // ] as unknown
  // for (const str of connectStrings) {
  //   await prisma[str].updateMany({
  //     where: {
  //       userId: null,
  //     },
  //     data: {
  //       userId: process.env.SRD_ID,
  //     },
  //   });
  // }
};

const createUsers = async (prisma: PrismaClient) => {
  await createMaxyUser(prisma);
  await createSRDUser(prisma);
};

export default createUsers;
