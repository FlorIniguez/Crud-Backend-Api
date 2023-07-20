import express, { Response,Request } from 'express';
import { routeError } from '../utils/middlewares/routeError';
const userRoutes = require('../routes/users/userRoutes')
const moviesRoutes = require('../routes/movies/moviesRoutes')
import swagger from '../utils/swagger';
import handleJSONErrorMiddleware from '../utils/middlewares/validateJsonMiddleware';
import cors from 'cors';

const server = express();

swagger('/swagger',server)
server.use(express.json());
server.use(cors());
server.use(handleJSONErrorMiddleware);
server.get('/', (req: Request,res:Response)=> {
    res.send('Welcome to my first backend project!');
   })

   server.use('/movies', moviesRoutes)
   server.use('/user', userRoutes)
   server.use(routeError)
  
   export default server