import { Router } from "express";
import { createPatientController } from "../modules/patient/usecases";

const patientRoute = Router()

patientRoute.post("/patient",async (request, response) => {
  await createPatientController.handle(request, response)
})

export {patientRoute}
