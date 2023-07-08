import { Request, Response } from "express";
import Movie from "../../models/Movie";

export const getAllMoviesController =  async (req:Request,res: Response) => {
     const movies=  await Movie.find();
     res.status(200).json(movies);
   
}
