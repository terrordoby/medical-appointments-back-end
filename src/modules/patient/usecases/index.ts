import { UserPrismaRepository } from "../../users/repositories/implementations/UserPrismaRepository";
import { PatientRepositoryPrisma } from "../repository/implements/patient.prisma.repository";
import { CreatePatientController } from "./create-patient.controller";

const userRepository = new UserPrismaRepository()
const patientRepository = new PatientRepositoryPrisma()
const createPatientController = new CreatePatientController(userRepository, patientRepository)

export {createPatientController}
