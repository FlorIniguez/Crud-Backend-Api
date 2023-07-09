import express  from "express";
import { addMovieController } from "../../controllers/movies/addMovieController";
import { updateMovieController } from "../../controllers/movies/updateMovieController";
import { deleteMovieController } from "../../controllers/movies/deleteMovieController";
import { getAllMoviesController } from "../../controllers/movies/getAllMoviesController";
import { validateCreate } from "../../utils/validators/moviesValidator";
import { getMovieGeneroController} from "../../controllers/movies/getMovieController";
import { generoValidator } from "../../utils/validators/generoMovieValidator";
import { authMiddleware } from "../../utils/middlewares/validateToken";


const router = express.Router();

router.get('/listado', getAllMoviesController)
router.get('/buscar/:genero',generoValidator, getMovieGeneroController)
router.post('/crear', validateCreate ,addMovieController);
router.delete('/eliminar/:id', authMiddleware, deleteMovieController);
router.put('/editar/:id', authMiddleware ,updateMovieController)

module.exports = router;