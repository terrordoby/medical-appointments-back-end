import { RepositorySpecialistPrisma } from "../../../specialities/repositories/implementations/specialist.prisma";
import { UserPrismaRepository } from "../../../users/repositories/implementations/UserPrismaRepository";
import { DoctorPrismaRepository } from "../../repository/implements/Doctor.prisma.repository";
import { CreateDoctorController } from "./create-doctor.controller";


const userRepositoryPrisma = new UserPrismaRepository();
const specialistRepositoryPrisma = new RepositorySpecialistPrisma();
const doctorRepository = new DoctorPrismaRepository()

const createControllerDoctor = new CreateDoctorController(userRepositoryPrisma, doctorRepository, specialistRepositoryPrisma )
export {createControllerDoctor}