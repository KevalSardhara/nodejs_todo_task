import { User } from "../models/user.js";
import jwt from "../utils/features.js";

export const isAuthenticated = async (req, res, next) => {
    // get value through the cookies
    // we get the userID through the token in after login successfully
    // we access the cookie through // import cookieParser from "cookie-parser" middleware
    const { token } = req.cookies;
    console.log(token);

    if (!token) {
        return res.status(200).json({
            success: false,
            user: "Login First",
        })
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    next();
}

