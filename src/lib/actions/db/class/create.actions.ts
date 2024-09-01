"use server";
import { getUserId } from "@/lib/utils/auth";
import { PrismaClient, Prisma } from "@prisma/client";

export const createClass = async (data: Prisma.ClassCreateInput) => {
  const db = new PrismaClient();
  const result = await db.class.create({
    data,
  });
  await db.$disconnect();
  return result;
};
