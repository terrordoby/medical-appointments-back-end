-- AlterTable
ALTER TABLE "patients" ADD CONSTRAINT "patients_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Appointments" (
    "id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "is_finshed" BOOLEAN NOT NULL DEFAULT false,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Appointments_doctor_id_key" ON "Appointments"("doctor_id");

-- CreateIndex
CREATE UNIQUE INDEX "Appointments_patient_id_key" ON "Appointments"("patient_id");

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
