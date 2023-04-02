import { Router } from "express";
import { authenticateController } from "../modules/users/useCases/authenticate-user";
import { createUserController } from "../modules/users/useCases/create-user.ts";

const useRouter = Router();

useRouter.post("/users", async (request, response) => {
   await createUserController.handle(request, response)
} )
useRouter.post('/login', async (request, response) => {
   await authenticateController.handle(request, response)
})

export {useRouter}