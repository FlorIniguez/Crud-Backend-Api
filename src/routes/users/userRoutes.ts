import express  from "express";
import {loginController} from "../../controllers/users/loginController"; 
import { registerController } from "../../controllers/users/registerController";
import { validateUser } from "../../utils/validators/userCreateValidator";
import { loginValidation } from "../../utils/validators/loginValidation.";


const router = express.Router();

router.post('/register', validateUser, registerController)
router.post('/login', loginValidation ,loginController)

module.exports = router;