import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import ErrorHandler from "../middlewares/error.js";

import jwt, { sendCookie } from "../utils/features.js";

// industry standered here
// http://127.0.0.1:5000/api/v1/admin

export const getAllUser = async (req, res, next) => {};

export const postUserRegister = async (req, res, next) => {
    try {

        const { name, email, password } = req.body;
        const message = "User Registretion Successfully";

        let user = await User.findOne({ email });
        if (user) {
            return res.status(404).json({
                success: false,
                message: "User Already Exist"
            });
            // or //
            // return next(new Error("User Already Exist"));
        } else {
            const hasPassword = await bcrypt.hash(password, 10);
            user = await User.create({ name, email, password: hasPassword });

            // pass all value here
            sendCookie(user, res, message, 201);
        }
    } catch (error) {
        return next(error);
    }

};

export const postUserLogin = async (req, res, next) => {

    try {
        const { email, password } = req.body;

        // Mongo Schema is select password in false
        // password: {
        //     type : String,
        //     select : false,
        // },
        let user = await User.findOne({ email }).select("+password"); // Password Add Mannualy
        console.log(user);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalide Email or Password"
            });

            // or //

            // if (!task) {
            //     return next(new ErrorHandler("Invalide Email or Password", 404));
            // }

        } else {
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(404).json({
                    success: false,
                    message: "Invalide Email or Password"
                });
            } else {
                sendCookie(user, res, `User Login Successfully - ${user.name}`, 200);
            }
        }

    } catch (error) {
        return next(error);
    }
};

export const getUserData = async (req, res, next) => {

    try {
        await res.status(200).json({
            success: true,
            user: req.user,
        })
        
    } catch (error) {
        return next(error);
    }
};

export const getUserLogout = async (req, res, next) => {
    try {
        await res.status(200).cookie("token", "", {
            expires: new Date(Date.now()),
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        }).json({
            success: true,
            message: "Logout Successfully",
        })
    } catch (error) {
        return next(error);
    }
};

