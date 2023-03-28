import { Router } from "express";
import { createUserController } from "../modules/users/useCases/create-user.ts";

const useRouter = Router();

useRouter.post("/users", async (request, response) => {
    createUserController.handle(request, response)
} )

export {useRouter}