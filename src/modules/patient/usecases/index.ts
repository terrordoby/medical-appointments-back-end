import { UserPrismaRepository } from "../../users/repositories/implementations/UserPrismaRepository";
import { CreatePatientController } from "./create-patient.controller";

const userRepository = new UserPrismaRepository()
const createPatientController = new CreatePatientController(userRepository)

export {createPatientController}
