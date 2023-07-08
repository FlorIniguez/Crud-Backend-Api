import { NextFunction, Request, Response } from "express"
const {check} = require('express-validator')
import { ValidateResult } from "./validateHelper"


export const loginValidation = [
check('username')
.isString()
.exists()
.notEmpty()
.withMessage("El username es obligatorio"),

check("password")
.notEmpty().withMessage("password campo requerido"),


(req: Request, res: Response, next: NextFunction) =>{
    ValidateResult(req,res,next)
}
]