import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { postNewTask, getMyTask, updateTask, deleteTask } from "../controllers/task.js";


const router = express.Router();

router.post("/newTask", isAuthenticated, postNewTask);
router.get("/myTask", isAuthenticated, getMyTask);
router.route("/:id").put(isAuthenticated, updateTask).delete(isAuthenticated, deleteTask);

export default router;

