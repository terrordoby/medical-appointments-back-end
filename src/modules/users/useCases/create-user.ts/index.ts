import { PasswordBcrypt } from "../../../../infra/shared/crypto/password.bcrypt";
import { UserPrismaRepository } from "../../repositories/implementations/UserPrismaRepository";
import { CreateUserController } from "./create-user.controller";

const userPrismaRepository = new UserPrismaRepository();
const passwordCrypto = new PasswordBcrypt();
const createUserController = new CreateUserController(userPrismaRepository, passwordCrypto);

export {createUserController}