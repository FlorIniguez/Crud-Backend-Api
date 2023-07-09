import { NextFunction, Request, Response } from "express";
import { Genero } from "../../models/Movie";
const { check } = require("express-validator");
import { ValidateResult } from "./validateHelper";

export const validateCreate = [
  check("titulo")
    .isString()
    .exists()
    .notEmpty()
    .withMessage("El título es requerido"),

  check("genero")
    .notEmpty()
    .withMessage("El género es requerido")
    .isIn(Object.values(Genero))
    .withMessage("El género no es válido"),

  check("añoEstreno")
    .exists()
    .notEmpty()
    .isNumeric()
    .withMessage("El año de estreno es un campo requerido"),

  check("sinopsis")
    .isString()
    .exists()
    .notEmpty()
    .withMessage("Sinopsis es un campo requerido"),

  (req: Request, res: Response, next: NextFunction) => {
    ValidateResult(req, res, next);
  },
];
