import { UserPrismaRepository } from "../../repositories/implementations/UserPrismaRepository";
import { CreateUserController } from "./create-user.controller";
import { CreateUserCase } from "./create-user.usercase";

const userPrismaRepository = new UserPrismaRepository();
const createUserController = new CreateUserController(userPrismaRepository);

export {createUserController}