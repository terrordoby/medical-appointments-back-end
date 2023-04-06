import express from "express";
import { specialistRouter } from "./routes/specialist.routes";
import { useRouter } from "./routes/user.routes";
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'
import { doctorRoutes } from "./routes/doctor.routes";
import { router } from "./routes";

const app = express()

app.use(express.json())
app.use(router)
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))


app.listen(3000, () => console.log("Server está rodando na porta 3000"))