import { Router } from "express";
import { freeScheduleController } from "../modules/appointments/useCases/free-appointments";


const freeScheduleRouter = Router()

freeScheduleRouter.get('/free-schedules',async (request, response) => {
  await freeScheduleController.handle(request, response)
})


export {freeScheduleRouter}
