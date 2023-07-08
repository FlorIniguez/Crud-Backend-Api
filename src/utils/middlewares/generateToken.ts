import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateJWT = (id: string): string => {
  const payload = { id };
  try {
    const token: string = jwt.sign(payload, process.env.TOKEN_SECRET || '', { expiresIn: '1h' });
    return token;
  } catch (error) {
    throw new Error('Error al generar el token JWT.');
  }
};

export { generateJWT };
