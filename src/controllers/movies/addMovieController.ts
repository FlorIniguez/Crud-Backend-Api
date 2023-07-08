import { Request, Response } from "express";
import Movie, { IMovie } from "../../models/Movie";
import { AddMovieDTO } from "./interfaces";
import axios from "axios";
require('dotenv').config();

export const addMovieController = async (req: Request, res: Response) => {
  const contraseñaApi= process.env.API_KEY  ||""
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
        from: 'es',
        to: 'en',
        e: '',
        q: [newMovie.titulo]
      },
    });
//Cuando hacemos una solicitud a la API de traducción, obtenemos una respuesta que contiene datos. En este caso, 
//los datos están en formato de matriz (array), donde cada elemento de la matriz corresponde a una traducción de texto.
//con 0 acceso al primer paramatro de la matriz
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
        from: 'es',
        to: 'en',
        e: '',
        q: [newMovie.sinopsis]
      },
    });

    const translatedSinopsis = sinopsisTranslationResponse.data[0];

    // Crear una nueva instancia de la película con los datos traducidos
    const movie: IMovie = new Movie({
      ...newMovie,
      titulo: translatedTitle,
      sinopsis: translatedSinopsis,
    });

    await movie.save();
    res.status(201).json({ message: "Película creada con éxito" , movie});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar la película" });
  }
};
