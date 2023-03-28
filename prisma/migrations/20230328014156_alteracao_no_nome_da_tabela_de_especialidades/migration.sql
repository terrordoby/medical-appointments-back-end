/*
  Warnings:

  - You are about to drop the `Specialist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Specialist";

-- CreateTable
CREATE TABLE "specialities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "specialities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "specialities_name_key" ON "specialities"("name");
