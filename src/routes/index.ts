import { Router } from "express"
import { doctorRoutes } from "./doctor.routes"
import { specialistRouter } from "./specialist.routes"
import { useRouter } from "./user.routes"
import { doctorInfoRoutes } from "./doctor-info.routes"
import { patientRoute } from "./patient.routes"
import { doctorScheduleRoutes } from "./doctor-schedule.routes"
import { freeScheduleRouter } from "./free-appointments.routes"

const router = Router()

router.use(useRouter)
router.use(specialistRouter)
router.use(doctorRoutes)
router.use(doctorInfoRoutes)
router.use(patientRoute)
router.use(doctorScheduleRoutes)
router.use(freeScheduleRouter)

export {router}
