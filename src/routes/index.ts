import { Router } from "express";
import userRoutes from "../modules/users/routes/users.routes";
import productRoutes from "../modules/products/routes/products.routes";
import sessionsRoutes from '../modules/users/routes/sessions.routes';

const routes = Router();

routes.use(userRoutes);
routes.use(productRoutes);
routes.use(sessionsRoutes);

export default routes;
