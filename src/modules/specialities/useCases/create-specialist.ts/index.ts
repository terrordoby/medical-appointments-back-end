import { RepositorySpecialistPrisma } from "../../repositories/implementations/specialist.prisma";
import { SpecialistController } from "./create-specialista.controller";

const respositorPrisma = new RepositorySpecialistPrisma();
const specialistController = new SpecialistController(respositorPrisma);

export {specialistController}
