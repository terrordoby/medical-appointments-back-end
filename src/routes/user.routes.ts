import { Router } from "express";
import { createUserController } from "../modules/users/useCases/create-user.ts";

const useRouter = Router();

useRouter.post("/users",createUserController.handle )

export {useRouter}