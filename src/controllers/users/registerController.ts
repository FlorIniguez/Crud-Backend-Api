import { Request, Response } from "express";
import User, { IUser } from "../../models/User";
import { AddUserDTO } from "./interfaces";
import bcrypt from "bcrypt";
import dotenv  from "dotenv";
import { generateJWT } from "../../utils/middlewares/generateToken";
dotenv.config()

export const registerController = async (req: Request, res: Response) => {

  try {
    //creando nuevo usuario
    const newUser: AddUserDTO = req.body;
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const user: IUser = new User({
      ...newUser,
      password: hashedPassword,
    });
    const savedUser = await user.save();
//token
   const token : string = generateJWT( savedUser._id );
   //envio por cabecera el token y en repuesta json datos del usuario
    res.header('auth-token',token).json(savedUser);

  } catch (error) {
    if (error) {
      res
        .status(500)
        .json({ message: error + " No se ha podido crear el usuario" });
    } else {
      res.status(500).json({ message: "Error desconocido" });
    }
  }
};
