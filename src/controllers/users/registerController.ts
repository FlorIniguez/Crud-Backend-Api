import { Request, Response } from "express";
import User, { IUser } from "../../models/User";
import { AddUserDTO } from "./interfaces";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { generateJWT } from "../../utils/middlewares/generateToken";
dotenv.config();

export const registerController = async (req: Request, res: Response) => {
  try {
    const newUser: AddUserDTO = req.body;
    
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const user: IUser = new User({
      ...newUser,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    //token
    const token: string = generateJWT(savedUser._id);
   
    res.header("auth-token", token).json(savedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: error + " No se ha podido crear el usuario" });
  }
};
