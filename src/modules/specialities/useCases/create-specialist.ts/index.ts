import { RepositorySpecialistPrisma } from "../../repositories/implementations/specialist.prisma";
import { SpecialistController } from "./create-specialista.controller";

const respositoryPrisma = new RepositorySpecialistPrisma();
const specialistController = new SpecialistController(respositoryPrisma);

export {specialistController}
