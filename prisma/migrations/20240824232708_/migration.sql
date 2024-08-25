-- CreateTable
CREATE TABLE "Campaign" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "gameMasterId" INTEGER NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlayerCampaigns" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PlayerCampaigns_AB_unique" ON "_PlayerCampaigns"("A", "B");

-- CreateIndex
CREATE INDEX "_PlayerCampaigns_B_index" ON "_PlayerCampaigns"("B");

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_gameMasterId_fkey" FOREIGN KEY ("gameMasterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlayerCampaigns" ADD CONSTRAINT "_PlayerCampaigns_A_fkey" FOREIGN KEY ("A") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlayerCampaigns" ADD CONSTRAINT "_PlayerCampaigns_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
