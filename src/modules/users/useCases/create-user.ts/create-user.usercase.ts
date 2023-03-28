import { ParameterRequired } from "../../../../errors/parameter-required.error";
import { User } from "../../entities/user.entities";
import { IUserRepository } from "../../repositories/Iuser.repository";
import { UserRepository } from "../../repositories/implementations/userMemoryRepository";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";

export interface UserRequest {
    name: string;
    username: string;
    password: string
}

 export class CreateUserCase {

    constructor(private userRepository: IUserRepository, private passwordCrypto: IPasswordCrypto) {}

    async execute(data : UserRequest) {

        if (!data.username || !data.password) {
            throw new ParameterRequired("Username/Password is required")
        }

        const existUser = await this.userRepository.findUsername(data.name);

        if(existUser) {
            throw new ParameterRequired("Username is already")
        }

        const user = User.create(data);

        const userCreated = await this.userRepository.save({
            ...user,
            password: await this.passwordCrypto.hash(user.password) as string
        });

        return userCreated;

    }
}