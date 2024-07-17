/*
  Warnings:

  - You are about to drop the `_RaceToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SubClassToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SubRaceToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Race` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `SubClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `SubRace` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_RaceToUser" DROP CONSTRAINT "_RaceToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RaceToUser" DROP CONSTRAINT "_RaceToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_SubClassToUser" DROP CONSTRAINT "_SubClassToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_SubClassToUser" DROP CONSTRAINT "_SubClassToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_SubRaceToUser" DROP CONSTRAINT "_SubRaceToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_SubRaceToUser" DROP CONSTRAINT "_SubRaceToUser_B_fkey";

-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SubClass" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SubRace" ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_RaceToUser";

-- DropTable
DROP TABLE "_SubClassToUser";

-- DropTable
DROP TABLE "_SubRaceToUser";

-- AddForeignKey
ALTER TABLE "SubClass" ADD CONSTRAINT "SubClass_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubRace" ADD CONSTRAINT "SubRace_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
