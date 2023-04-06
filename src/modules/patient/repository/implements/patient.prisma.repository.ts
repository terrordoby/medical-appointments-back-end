import { prismaClient } from "../../../../infra/database/prisma.config";
import { Patient } from "../../entities/patient.entity";
import { PatientRepository } from "../patient.repository";

export class PatientRepositoryPrisma implements PatientRepository {
  async save(data: Patient): Promise<Patient> {
    const patient = prismaClient.patient.create({
      data: {
        document: data.document,
        email: data.email,
        user_id: data.user_id
      }
    })
    return patient
  }

}
