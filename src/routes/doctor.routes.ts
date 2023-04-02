import { Router } from "express";
import { createControllerDoctor } from "../modules/doctor/useCase/create-doctor";

const doctorRoutes = Router()

doctorRoutes.post("/doctors", async (request, response) => {
    await createControllerDoctor.handle(request, response)
})

export {doctorRoutes}