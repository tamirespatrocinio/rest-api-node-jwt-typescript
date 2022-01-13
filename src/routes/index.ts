import { Router } from "express";
import userRoutes from "../modules/users/routes/users.routes";
import productRoutes from "../modules/products/routes/products.routes";
import sessionsRoutes from '../modules/users/routes/sessions.routes';
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const routes = Router();

routes.use(sessionsRoutes);
routes.use(userRoutes);
routes.use(ensureAuthenticated);
routes.use(productRoutes);

export default routes;
