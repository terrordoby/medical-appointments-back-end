import { PasswordBcrypt } from "../../../../infra/shared/crypto/password.bcrypt";
import { JwtToken } from "../../../../infra/shared/token/jwt.token";
import { UserPrismaRepository } from "../../repositories/implementations/UserPrismaRepository";
import { CreateUserController } from "./create-user.controller";

const userPrismaRepository = new UserPrismaRepository();
const createUserController = new CreateUserController(userPrismaRepository);

export {createUserController}