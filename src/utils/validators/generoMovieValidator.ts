import { NextFunction, Request, Response } from "express";
import { param } from "express-validator";
import { ValidateResult } from "./validateHelper";
import { Genero } from "../../models/Movie";

export const generoValidator = [
  param("genero")
    .notEmpty()
    .withMessage("genero requerido para realizar esta acción")
    .isIn(Object.values(Genero))
    .withMessage("El género no es válido"),
  (req: Request, res: Response, next: NextFunction) => {
    ValidateResult(req, res, next);
  },
];
