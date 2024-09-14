import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    });
};

export default errorHandler;