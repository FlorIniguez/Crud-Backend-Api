import { Request, Response } from "express";
import Movie, { IMovie } from "../../models/Movie";
import { AddMovieDTO } from "./interfaces";
import axios from "axios";


export const addMovieController = async (req: Request, res: Response) => {
  const contraseñaApi = process.env.API_KEY || "";
  try {
    const newMovie: AddMovieDTO = req.body;

    // Traducción del título
    const titleTranslationResponse = await axios.request({
      method: 'POST',
      url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': contraseñaApi,
    'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
  },
      data: {
        from: "es",
        to: "en",
        e: "",
        q: [newMovie.titulo],
      },
    });
    //solicitud a la API de traducción,  respuesta contiene datos. 
    //los datos están en formato de array, con 0 accedo al primer paramatro de la matriz
    const translatedTitle = titleTranslationResponse.data[0];

    // Traducción de la sinopsis
    const sinopsisTranslationResponse = await axios.request({
      method: 'POST',
      url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': contraseñaApi,
        'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
      },
      data: {
        from: "es",
        to: "en",
        e: "",
        q: [newMovie.sinopsis],
      },
    });

    const translatedSinopsis = sinopsisTranslationResponse.data[0];

    //nueva instancia de la película con los datos traducidos
    const movie: IMovie = new Movie({
      ...newMovie,
      titulo: translatedTitle,
      sinopsis: translatedSinopsis,
    });

    await movie.save();
    res.status(200).json({ message: "Película creada con éxito", movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar la película" });
  }
};
