import { Request, Response } from "express";
import Movie from "../../models/Movie";

export const deleteMovieController =  async (req:Request,res: Response) => {

      try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) {
          return res.status(404).json({ message: "Película no encontrada" });
        }
    
        res.status(200).json({ message: `La película '${deletedMovie.titulo}' fue eliminada con éxito` });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar la película" });
      }
    }
  