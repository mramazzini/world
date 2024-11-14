-- CreateEnum
CREATE TYPE "WorkshopProtocol" AS ENUM ('SPELL', 'ITEM', 'CREATURE', 'CLASS', 'SUBCLASS', 'SPECIES', 'SUBSPECIES', 'BACKGROUND', 'FEAT');

-- CreateTable
CREATE TABLE "WorkshopItem" (
    "id" SERIAL NOT NULL,
    "protocol" "WorkshopProtocol" NOT NULL,
    "data" JSONB NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkshopItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WorkshopItem" ADD CONSTRAINT "WorkshopItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
