import express, { Response,Request } from 'express';
import { routeError } from '../utils/middlewares/routeError';
const userRoutes = require('../routes/users/userRoutes')
const moviesRoutes = require('../routes/movies/moviesRouter')
import swagger from '../utils/swagger';


const server = express();
swagger('/swagger',server)
server.use(express.json());

server.get('/', (req: Request,res:Response)=> {
    res.send('Welcome to my first backend project!');
   })

   server.use('/movies', moviesRoutes)
   server.use('/user', userRoutes)
   server.use(routeError)
  
   export default server