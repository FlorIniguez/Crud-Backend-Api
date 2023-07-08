import { NextFunction, Request, Response } from "express"
const {check} = require('express-validator')
import { ValidateResult } from "./validateHelper"


export const validateUser = [
check('username')
.isString()
.exists()
.notEmpty()
.withMessage("El username es obligatorio"),

check("password")
.notEmpty().withMessage("password campo requerido"),

check('email')
.exists()
.notEmpty()
.isEmail()
.withMessage("Email es un campo requerido"),


(req: Request, res: Response, next: NextFunction) =>{
    ValidateResult(req,res,next)
}
]