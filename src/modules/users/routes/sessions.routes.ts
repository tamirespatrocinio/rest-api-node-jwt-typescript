import { Router } from "express";
import SessionController from "../controllers/SessionController";

const sessionsRoutes = Router();
const sessionsController = new SessionController();

sessionsRoutes.post("/login", sessionsController.create);

sessionsRoutes.post("/test-token", sessionsController.test);

export default sessionsRoutes;
