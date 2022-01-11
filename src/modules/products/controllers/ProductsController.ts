import { Request, Response } from "express";
import CreateProductService from "../services/CreateProducterService";
import DeleteProductService from "../services/DeleteProductService";
import ListProductIdService from "../services/ListProductIdService";
import ListProductService from "../services/ListProductService";
import UpdateProductService from "../services/UpdateProductService";

export default class ProductController {

    public async create(req: Request, res: Response): Promise<Response> {
        const data = req.body;
        const { user } = req.params;

        const createProduct = new CreateProductService();

        const products = await createProduct.execute(data, user);

        return res.json(products);
    }

    public async list(req: Request, res: Response): Promise<Response> {

        const list = new ListProductService();

        const products = await list.execute();

        return res.json(products);
    }

    public async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const list = new ListProductIdService();

        const product = await list.execute(id);

        return res.json(product);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const data = req.body;

        const update = new UpdateProductService();

        await update.execute(data, id);

        return res.json({ message: "Updated with success" });
    }

    public async destroy(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const deleteProduct = new DeleteProductService();

        await deleteProduct.execute(id);

        return res.json({ message: "Delete with success" });
    }

}