import { Router } from "express";
import UserController from "../controllers/UserController";

const userRoutes = Router();
const userController = new UserController();

//userRoutes.post("/create-users", userController.create);

userRoutes.get('/user', (req, res) => res.send('olá, mundo!'))

export default userRoutes;