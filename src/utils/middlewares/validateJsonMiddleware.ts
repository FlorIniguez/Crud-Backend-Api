import { NextFunction, Request, Response } from "express";

const handleJSONErrorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof SyntaxError && error instanceof Error) {
    res.status(400).json({ message: `Error en el formato JSON. El método ${req.method} no fue implementado` });
  } else {
    next(error);
  }
};

export default handleJSONErrorMiddleware;
