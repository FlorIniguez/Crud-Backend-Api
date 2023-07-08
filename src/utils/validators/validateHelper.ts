const {validationResult} = require('express-validator')
import { NextFunction, Request, Response } from "express"

export const ValidateResult = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    } 
    next();
}