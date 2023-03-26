import {Request, Response} from 'express'
import { CreateUserCase } from './create-user.usercase'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const data = request.body;
      const user = await new CreateUserCase().execute(data);

    return response.json(user)
    } catch (err) {
        return response.status(400).json(err)
    }
  }
}