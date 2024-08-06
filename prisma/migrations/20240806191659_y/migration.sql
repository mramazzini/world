-- DropIndex
DROP INDEX "Spell_name_key";

-- AlterTable
ALTER TABLE "Spell" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
