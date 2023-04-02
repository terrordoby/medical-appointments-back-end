import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";
import { IToken } from "../../../../infra/shared/token/token";
import { IUserRepository } from "../../repositories/Iuser.repository";

type AuthenticateRequest = {
    username: string;
    password: string;
}

export class AuthenticateUser {
    constructor(private userRepository: IUserRepository, private passwordCrypto: IPasswordCrypto, private token: IToken){}

    async execute({username, password}: AuthenticateRequest) {
        if (!username || !password) {
            throw new Error("Username/Password incorrect")
        }
        
        const user = await this.userRepository.findUsername(username);

        if (!user) {
          throw new Error("Username/Password incorrect")
        }

        const comparePassword = this.passwordCrypto.compare(password, user.password)

        if (!comparePassword) {
            throw new Error("Username/Password incorrect")
        }
        
        const tokenGenerated = this.token.create(user);

        return tokenGenerated;

    }
}