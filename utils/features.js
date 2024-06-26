import jwt from "jsonwebtoken";

export const sendCookie = async (user, res, message, statusCode = 200) => {
    // convert into a jwt token here unique id in cookie
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // res.cookie("token", token);
    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
    }).json({
        success: true,
        // message: "User Registretion Successfully",
        message
    });
};
export default jwt;
