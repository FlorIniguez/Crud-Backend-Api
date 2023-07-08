import { NextFunction, Request, Response } from "express";
import { param} from "express-validator";
import { ValidateResult } from "./validateHelper";

export const generoValidator = [
  param('genero')
  .notEmpty()
  .withMessage('genero requerido para realizar esta acción'),
  (req: Request, res: Response, next: NextFunction) =>{
    ValidateResult(req,res,next)
}
];
