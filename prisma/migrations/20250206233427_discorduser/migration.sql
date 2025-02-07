-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('DISCORD', 'NORMAL');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "discordAccessToken" TEXT,
ADD COLUMN     "discordAvatar" TEXT,
ADD COLUMN     "discordId" TEXT,
ADD COLUMN     "discordRefreshToken" TEXT,
ADD COLUMN     "discordUsername" TEXT,
ADD COLUMN     "type" "UserType" NOT NULL DEFAULT 'NORMAL',
ALTER COLUMN "password" DROP NOT NULL;
