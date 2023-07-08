import { Request, Response } from "express";
import Movie from "../../models/Movie";

export const updateMovieController = async (req: Request, res: Response) => {
  try {
   const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json(req.body);
        if (!movie) {
          return res.status(404).json({ message: "Pelicula no encontrada" });
        }
    
  } catch (error) {
    res.status(500).json(error);
  }
};