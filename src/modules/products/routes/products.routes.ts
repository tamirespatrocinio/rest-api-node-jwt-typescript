import { Router } from "express";
import ProductsController from "../controllers/ProductsController";
import ensureAuthenticated from "../../../middlewares/ensureAuthenticated";

const productRoutes = Router();
const productController = new ProductsController();
productRoutes.use(ensureAuthenticated);

productRoutes.post("/create-product", productController.create);
productRoutes.get("/all-product", productController.list);
productRoutes.get("/product/:id", productController.show);
productRoutes.put("/product/:id", productController.update);
productRoutes.delete("/product/:id", productController.destroy);

export default productRoutes;