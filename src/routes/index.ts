import { Router } from "express";
import userRoutes from "../modules/users/routes/users.routes";
import productRoutes from "../modules/products/routes/products.routes";

const routes = Router();

routes.use(userRoutes);
routes.use(productRoutes);

export default routes;
