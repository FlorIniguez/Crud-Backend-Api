import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import User, { IUser} from "../../models/User";
import { generateJWT } from "../../utils/middlewares/generateToken";

export const loginController = async (req:Request, res:Response) => {
    // const { username , password } = req.body;
    try {
        const userFound : IUser | null  = await User.findOne({ username : req.body.username });
      //sino encuentra el usuario
      if (!userFound) return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
  
      const isMatch = await bcrypt.compare(req.body.password, userFound.password);
      if (!isMatch)
        return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
        //token
   const token : string = generateJWT( userFound._id);
   res.header('auth-token',token).json({msg: 'Login existoso'});
 
    } catch (error) {
      res.status(500).json(error);
    }
  };


