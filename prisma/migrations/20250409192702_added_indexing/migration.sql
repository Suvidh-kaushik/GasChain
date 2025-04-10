-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "company" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CGP_Request" ALTER COLUMN "oldGasCompany" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Admin_wallet_idx" ON "Admin"("wallet");

-- CreateIndex
CREATE INDEX "Customer_wallet_idx" ON "Customer"("wallet");
