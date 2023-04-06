import { Router } from "express"
import { doctorRoutes } from "./doctor.routes"
import { specialistRouter } from "./specialist.routes"
import { useRouter } from "./user.routes"
import { doctorInfoRoutes } from "./doctor-info.routes"

const router = Router()

router.use(useRouter)
router.use(specialistRouter)
router.use(doctorRoutes)
router.use(doctorInfoRoutes)

export {router}