import {Request, Response} from 'express'
import { IPasswordCrypto } from '../../../../infra/shared/crypto/password.crypto';
import { logger } from '../../../../utils/logger';
import { IUserRepository } from '../../repositories/Iuser.repository';
import { CreateUserCase } from './create-user.usercase'

export class CreateUserController {

  constructor(private userRepository: IUserRepository, private passwordCrypto: IPasswordCrypto){}

  async handle(request: Request, response: Response) {
    logger.info("Usuário sendo criado")
    try {
      const data = request.body;
      const useCase = new CreateUserCase(this.userRepository, this.passwordCrypto)
      const result = await useCase.execute(data)
    return response.json(result)
    } catch (err: any) {
        logger.error(err.stack)
        return response.status(400).json(err.message)
    }
  }
}