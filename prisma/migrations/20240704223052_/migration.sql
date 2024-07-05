/*
  Warnings:

  - You are about to drop the column `desc` on the `Background` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Feat` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Feature` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Spell` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `SubClass` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `SubRace` table. All the data in the column will be lost.
  - Added the required column `description` to the `Background` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `multiclassing` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Feat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Feature` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `SubClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `SubRace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Background" DROP COLUMN "desc",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "multiclassing" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Feat" DROP COLUMN "desc",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "desc",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "desc",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Spell" DROP COLUMN "desc",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SubClass" DROP COLUMN "desc",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SubRace" DROP COLUMN "desc",
ADD COLUMN     "description" TEXT NOT NULL;
