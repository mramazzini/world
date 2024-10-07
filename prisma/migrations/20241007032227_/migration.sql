/*
  Warnings:

  - A unique constraint covering the columns `[route]` on the table `BlogPost` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `route` to the `BlogPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlogPost" ADD COLUMN     "route" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BlogPost_route_key" ON "BlogPost"("route");
