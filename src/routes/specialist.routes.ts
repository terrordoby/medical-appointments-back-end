import { Router } from "express";
import { ensureAuthenticate } from "../infra/shared/http/middleware/ensure-authenticate.middleware";
import { specialistController } from "../modules/specialities/useCases/create-specialist.ts";
import { ensureAdmin } from "../infra/shared/http/middleware/ensure-admin.middleware";


const specialistRouter = Router();

specialistRouter.post("/specialist", ensureAuthenticate, ensureAdmin, async (request, response) => {
   await specialistController.handle(request, response)
} )

export {specialistRouter}