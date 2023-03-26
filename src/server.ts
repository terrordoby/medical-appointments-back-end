import express from "express";
import { useRouter } from "./routes/user.routes";

const app = express()


app.use(express.json())
app.use(useRouter)

app.listen(3000, () => console.log("Server está rodando na porta 3000"))