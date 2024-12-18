import express from "express";
import userRouter from "./routes/user.routes.js"

import dotenv from "dotenv";
import {dbConnection} from "./Database/db.js"

const app = express();

dotenv.config({ path: ".env" });


app.use("/api/v1/user", userRouter);

dbConnection();

export default app;
