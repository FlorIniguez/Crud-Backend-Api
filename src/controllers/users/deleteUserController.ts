import { Request, Response } from "express";
import User, { IUser } from "../../models/User";

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const deleteUser : IUser | null = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Usuario eliminado con exito", deleteUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ocurrio un error al eliminar el usuario" });
  }
};
