import { PasswordBcrypt } from "../../../../infra/shared/crypto/password.bcrypt"
import { JwtToken } from "../../../../infra/shared/token/jwt.token"
import { UserPrismaRepository } from "../../repositories/implementations/UserPrismaRepository"
import { AuthenticateController } from "./authenticate-user.controller"

const repository = new UserPrismaRepository()
const passwordCrypto = new PasswordBcrypt()
const token = new JwtToken()
const authenticateController = new AuthenticateController(repository, passwordCrypto, token)

export {authenticateController}