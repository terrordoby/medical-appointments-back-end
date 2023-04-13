import { Router } from "express";
import { createDoctorScheduleController } from "../modules/doctor/useCase/create-doctor-schedule";
import { ensureAdmin } from "../infra/shared/http/middleware/ensure-admin.middleware";
import { ensureAuthenticate } from "../infra/shared/http/middleware/ensure-authenticate.middleware";

const doctorScheduleRoutes = Router()

doctorScheduleRoutes.post("/doctor-schedule", ensureAuthenticate, async (request, response) => {
  await createDoctorScheduleController.handle(request, response)
})

export {doctorScheduleRoutes}
