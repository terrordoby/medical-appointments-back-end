import {Request, Response} from 'express'
import { CreateUserCase } from './create-user.usercase'
import { logger } from '../../utils/logger';

export class CreateUserController {
    
  async handle(request: Request, response: Response) {
    logger.info("Usuário sendo criado")
    try {
      const data = request.body;
      const user = await new CreateUserCase().execute(data);

    return response.json(user)
    } catch (err: any) {
        logger.error(err.stack)
        return response.status(400).json(err.message)
    }
  }
}