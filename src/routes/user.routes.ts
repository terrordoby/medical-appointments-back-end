import { Router } from "express";
import { CreateUserController } from "../useCases/create-user.ts/create-user.controller";

const useRouter = Router();

const userCreateController = new CreateUserController()

useRouter.post("/users",userCreateController.handle )

export {useRouter}