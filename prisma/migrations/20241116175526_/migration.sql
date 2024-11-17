/*
  Warnings:

  - Changed the type of `callbackProtocol` on the `Choice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Choice" DROP COLUMN "callbackProtocol",
ADD COLUMN     "callbackProtocol" "CallbackProtocol" NOT NULL;
