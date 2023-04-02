import { Request, Response } from "express";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";
import { IToken } from "../../../../infra/shared/token/token";
import { IUserRepository } from "../../repositories/Iuser.repository";
import { AuthenticateUser } from "./authenticate-user.usecase";

export class AuthenticateController {
    constructor(private userRepository: IUserRepository, private cryptoPassword: IPasswordCrypto, private token: IToken) {}
    async handle(request: Request, response: Response){
        try {
        const {username, password} = request.body
        const authenticateUser = await new AuthenticateUser(this.userRepository, this.cryptoPassword, this.token).execute({username, password})
        return response.status(200).json(authenticateUser)
        } catch (err: any) {
            return response.status(401).json(err.message)
        }
    }
}