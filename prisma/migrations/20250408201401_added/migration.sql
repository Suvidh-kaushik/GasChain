-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('APPROVED', 'PENDING', 'REJECTED');

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "wallet" TEXT NOT NULL,
    "ipfsHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "wallet" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "KYC_Request" (
    "id" TEXT NOT NULL,
    "status" "STATUS" NOT NULL DEFAULT 'PENDING',
    "reason" TEXT,
    "customerId" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "ipfsHash" TEXT NOT NULL,
    "contractAddr" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "CGP_Request" (
    "id" TEXT NOT NULL,
    "status" "STATUS" NOT NULL DEFAULT 'PENDING',
    "customerId" TEXT NOT NULL,
    "oldGasCompany" TEXT NOT NULL,
    "new_adminId" TEXT NOT NULL,
    "approved_KYC_id" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_id_key" ON "Customer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_wallet_key" ON "Customer"("wallet");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_key" ON "Admin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_company_key" ON "Admin"("company");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_wallet_key" ON "Admin"("wallet");

-- CreateIndex
CREATE UNIQUE INDEX "KYC_Request_id_key" ON "KYC_Request"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CGP_Request_id_key" ON "CGP_Request"("id");

-- AddForeignKey
ALTER TABLE "KYC_Request" ADD CONSTRAINT "KYC_Request_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KYC_Request" ADD CONSTRAINT "KYC_Request_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CGP_Request" ADD CONSTRAINT "CGP_Request_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CGP_Request" ADD CONSTRAINT "CGP_Request_new_adminId_fkey" FOREIGN KEY ("new_adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CGP_Request" ADD CONSTRAINT "CGP_Request_approved_KYC_id_fkey" FOREIGN KEY ("approved_KYC_id") REFERENCES "KYC_Request"("id") ON DELETE SET NULL ON UPDATE CASCADE;
