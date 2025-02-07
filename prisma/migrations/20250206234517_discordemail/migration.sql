-- AlterTable
ALTER TABLE "User" ADD COLUMN     "discordEmail" TEXT,
ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;
