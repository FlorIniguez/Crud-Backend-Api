import { Request, Response } from "express";
import Movie, { IMovie, Genero } from "../../models/Movie";

export const getMovieGeneroController = async (req: Request, res: Response) => {
  try {
    const genre = req.params.genero.toUpperCase();
    const movies: IMovie[] = await Movie.find({ genero: genre });

    if (movies.length === 0) {
      return res.status(404).json({
        message: `No se encontraron películas en el género '${genre}'`,
      });
    }

    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
