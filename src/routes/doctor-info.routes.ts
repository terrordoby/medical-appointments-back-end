import { Router } from "express";
import { createControllerDoctor } from "../modules/doctor/useCase/create-doctor";
import { ensureAuthenticate } from "../infra/shared/http/middleware/ensure-authenticate.middleware";
import { createDoctorInfoController } from "../modules/doctor/useCase/create-doctor-info";

const doctorInfoRoutes = Router()

doctorInfoRoutes.post("/doctor-info", ensureAuthenticate,  async (resquest, response) => {
    await createDoctorInfoController.handle(resquest, response)
})

export {doctorInfoRoutes}