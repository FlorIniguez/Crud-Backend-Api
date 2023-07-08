import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

//interfaace
export interface IUser extends Document {
  id: string;
  username: string;
  password: string;
  email: string;
  createdAt: Date
}

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username obligatorio"],
    min: 4,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password obligatorio"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.model<IUser>("User", UserSchema);
