import { Task } from "../models/task.js";
import ErrorHandler from "../middlewares/error.js";

export const postNewTask = async (req, res, next) => {

    try {
        const { title, description } = req.body;

        await Task.create({ title, description, user: req.user });

        res.status(201).json({
            success: true,
            message: "Task added Successfully",
        });
    } catch (error) {
        // return await next(new ErrorHandler(error, 404));
        console.log("error ------> ", error);
        return await next(error);
    }
};
export const getMyTask = async (req, res, next) => {

    try {
        const userId = req.user._id;

        const task = await Task.find({ user: userId });
    
        if (!task) {
            return await next(new ErrorHandler("Task Not Exist", 404));
        }
    
        res.status(200).json({
            success: true,
            message: "Tasts Get Successfully",
            task
        });
    } catch (error) {
        return await next(error);
    }
};
export const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
    
        const task = await Task.findById(id);
        if (!task) {
            return await next(new ErrorHandler("Task Not Exist Please Create First", 404));
        }
        console.log(task);
    
        task.isCompleted = !task.isCompleted;
        await task.save();
    
        res.status(200).json({
            success: true,
            message: "Tasts Updated Successfully",
        });
        
    } catch (error) {
        return await next(error);
    }
};
export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        console.log(task, "---");
    
        if (!task) {
            return await next(new ErrorHandler("Task Not Exist", 404));
        }
    
        await task.deleteOne();
    
        res.status(200).json({
            success: true,
            message: "Tasts Deleted Successfully",
            task
        });
    } catch (error) {
        
    }
};


