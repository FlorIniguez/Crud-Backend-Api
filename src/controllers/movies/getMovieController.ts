import { Request, Response } from "express";
import Movie, { IMovie } from "../../models/Movie";

export const getMovieGeneroController = async (req: Request, res: Response) => {
  try {
    const movies: IMovie[] = await Movie.find({ genero: req.params.genero });
    if (movies.length === 0) {
      return res.status(404).json({
        message: `No se encontraron películas en el género '${req.params.genero}'`,
      });
    }

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
