import { ParameterRequired } from "../../../../errors/parameter-required.error";
import { User } from "../../entities/user.entities";
import { IUserRepository } from "../../repositories/Iuser.repository";
import { UserRepository } from "../../repositories/implementations/userMemoryRepository";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";
import { IToken } from "../../../../infra/shared/token/token";

export interface UserRequest {
    name: string;
    username: string;
    password: string
}

 export class CreateUserCase {

    constructor(private userRepository: IUserRepository) {}

    async execute(data : UserRequest) {

        if (!data.username || !data.password) {
            throw new ParameterRequired("Username/Password is required")
        }

        const existUser = await this.userRepository.findUsername(data.username);

        if(existUser) {
            throw new ParameterRequired("Username is already")
        }

        const user = await User.create(data);

        const userCreated = await this.userRepository.save(user)

        return userCreated;

    }
}