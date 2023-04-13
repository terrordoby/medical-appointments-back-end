/*
  Warnings:

  - A unique constraint covering the columns `[speciality_id]` on the table `doctors` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "doctors_speciality_id_key" ON "doctors"("speciality_id");
