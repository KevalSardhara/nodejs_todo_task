
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = async (err, req, res, next) => {
    // coustom middleware
    // console.log(err.message);

    err.message = err.message || "Internal Server Error";

    return res.status(404).json({
        success: false,
        message: err.message // error messages sysntex here
    });
}
export default ErrorHandler;
