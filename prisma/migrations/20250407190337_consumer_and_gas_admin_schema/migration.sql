-- CreateTable
CREATE TABLE "Consumer" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "walletId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nonce" TEXT,

    CONSTRAINT "Consumer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GasAdmin" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "walletId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nonce" TEXT,

    CONSTRAINT "GasAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Consumer_email_key" ON "Consumer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Consumer_walletId_key" ON "Consumer"("walletId");

-- CreateIndex
CREATE UNIQUE INDEX "GasAdmin_email_key" ON "GasAdmin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GasAdmin_walletId_key" ON "GasAdmin"("walletId");
