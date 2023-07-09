import { NextFunction, Request, Response } from "express";
const { check } = require("express-validator");
import { ValidateResult } from "./validateHelper";

export const validateUser = [
  check("username")
    .isString()
    .exists()
    .notEmpty()
    .withMessage("El username es obligatorio"),

  check("password").notEmpty().withMessage("password campo requerido")
  .isLength({ min: 5 }).withMessage('El campo "password" debe tener al menos 5 caracteres'),

  check("email")
    .exists()
    .notEmpty()

    .withMessage("Email es un campo requerido")
    .isEmail()
    .withMessage("Formato de email invalido"),

  (req: Request, res: Response, next: NextFunction) => {
    ValidateResult(req, res, next);
  },
];
