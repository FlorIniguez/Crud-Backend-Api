import { Request as ExpressRequest, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../../models/User';
dotenv.config();

// extender una interfaz existente para agregarle propiedades adicionales o modificar su comportamiento. En este caso, 
// queremos extender la interfaz Request de Express para agregar la propiedad user con el tipo IUser.
interface Request extends ExpressRequest {
  user?: IUser; // Agregar la propiedad user con el tipo IUser
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Se requiere un token de autenticación.' });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET || '') as IUser;
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'El token no es válido o ha expirado.' });
  }
};


