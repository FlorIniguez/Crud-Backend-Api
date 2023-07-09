import { Request, Response } from "express";
import Movie from "../../models/Movie";

export const getAllMoviesController = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: "No se pudo acceder a la base de datos" });
  }
};
