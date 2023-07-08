import express  from "express";
const router = express.Router();
import {loginController} from "../../controllers/users/loginController"; 
import { deleteUserController } from "../../controllers/users/deleteUserController";
import { registerController } from "../../controllers/users/registerController";
import { IDValidator } from "../../utils/validators/idValidator";
import { validateUser } from "../../utils/validators/userCreateValidator";
import { getAllUsersController } from "../../controllers/users/getAllUsersController";
import { loginValidation } from "../../utils/validators/loginValidation.";

router.post('/register', validateUser, registerController)
router.post('/login', loginValidation ,loginController)
router.delete('/eliminar-usuario/:id',IDValidator, deleteUserController)
router.get('/', getAllUsersController)
module.exports = router;