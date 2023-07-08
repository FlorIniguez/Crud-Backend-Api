import { Request, Response } from "express";
import Movie from "../../models/Movie";

export const deleteMovieController =  async (req:Request,res: Response) => {
    try {
        const { id } = req.params;
        const deleteMovie = await Movie.deleteOne({_id: id});
        if(deleteMovie.deletedCount === 0) {
            return res.status(404).json({ message: "Pelicula no encontrada." });
    
        }
        res.json({ message: "La pelicula fue eliminado con exito." });
      } catch (error) {
        res.status(500).json({ message: "ID inválido no se pudo eliminar" });
      }
}