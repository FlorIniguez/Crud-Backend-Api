import { Genero } from "../../models/Movie";

//DTO data transfer object, contrato del objeto q se va a transferir
export interface AddMovieDTO {
    titulo: string;
    director: string;
    genero: Genero;
    duracion: number;
    fechaEstreno: number,
    actores: [string];
    sinopsis: string;
}

