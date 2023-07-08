import mongoose, { Document, Schema } from "mongoose";

export enum Genero {
  ACCION = "accion",
  COMEDIA = "comedia",
  ROMANTICA = "romantica",
  TERROR = "terror",
  DRAMA = "drama",
  INFANTIL = "infantil",
  OTRO = "otro"

}
export interface IMovie extends Document {
  titulo: String;
  director: String;
  genero: Genero;
  duracion: Number;
  añoEstreno:Number;
  actores: [String];
  sinopsis: String;
}
const MovieSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  director: String,
  duracion: Number,
  añoEstreno: {
    type: Number,
    required: true,
  },
  actores: [String],
  sinopsis: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    enum: Genero,
    required:true
  },
});
export default mongoose.model<IMovie>("Movie", MovieSchema);
