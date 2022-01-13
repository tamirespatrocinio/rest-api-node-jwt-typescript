import { Router } from "express";
import ProductsController from "../controllers/ProductsController";

const productRoutes = Router();
const productController = new ProductsController();

productRoutes.post("/create-products/:user", productController.create);
productRoutes.get("/products/", productController.list);
productRoutes.get("/product/:user/:id", productController.show);
productRoutes.put("/product/:user/:id", productController.update);
productRoutes.delete("/product/:user/:id", productController.destroy);

export default productRoutes;