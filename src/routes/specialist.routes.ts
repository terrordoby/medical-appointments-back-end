import { Router } from "express";
import { specialistController } from "../modules/specialities/useCases/create-specialist.ts";


const specialistRouter = Router();

specialistRouter.post("/specialist", async (request, response) => {
   await specialistController.handle(request, response)
} )

export {specialistRouter}