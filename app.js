// import express, { urlencoded } from "express";
import express from "express";
import userRouter from "./routes/user.js"; // write always full form here with {extension .js}
import taskRouter from "./routes/task.js"; // write always full form here with {extension .js}
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";

dotenv.config({
    path: './config.env'
});

export const app = express();

// Using Middlewares(#1 use)
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // credentials cookies not exist in frontend side
    headers: ["Content-Type", "Authorization"],
}));

// Using Routes(#2 use)
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
    res.send("Nice working");
});

// Error Middelware routes used when creating "next()"
app.use(errorMiddleware);




// used by the use the comman name
// app.use("/users/all", userRouter);
// app.use("/users/new", userRouter);
// app.use("/users/uId", userRouter);
