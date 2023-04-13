import { prismaClient } from "../../../../infra/database/prisma.config";
import { Patient } from "../../entities/patient.entity";
import { IPatientRepository } from "../patient.repository";

export class PatientRepositoryPrisma implements IPatientRepository {
  findById(id: string): Promise<Patient | null> {
    const patient = prismaClient.patient.findUnique({
      where: {
        user_id: id
      }
    })
    return patient
  }

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

  async findByDocumentOrEmail(document: string, email: string): Promise<Patient | null> {
    const patient = await prismaClient.patient.findFirst({
      where: {
        OR: [
          {
            email : {
              contains: email
            }
          },
          {
            document: {
              contains: document
            }
          }
        ]
      }
    })
    return patient
  }

}
