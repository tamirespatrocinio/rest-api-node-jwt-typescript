import { Router } from "express";
import UserController from "../controllers/UserController";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/create-user", userController.create);
userRoutes.get("/all-users", userController.list);
userRoutes.get("/user/:id", userController.show);
userRoutes.put("/user/:id", userController.update);
userRoutes.delete("/user/:id", userController.destroy);

//userRoutes.get('/user', (req, res) => res.send('olá, mundo!'))

export default userRoutes;
