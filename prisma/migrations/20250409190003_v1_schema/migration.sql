/*
  Warnings:

  - You are about to drop the `Consumer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GasAdmin` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "nonce" TEXT;

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "nonce" TEXT;

-- DropTable
DROP TABLE "Consumer";

-- DropTable
DROP TABLE "GasAdmin";
