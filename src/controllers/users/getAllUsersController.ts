import { Request, Response } from "express";
import User from "../../models/User";

export const getAllUsersController =  async (req:Request,res: Response) => {
     const users=  await User.find();
     res.json(users);
   
}
