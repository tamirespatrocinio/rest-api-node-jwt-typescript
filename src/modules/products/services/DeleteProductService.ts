import { Model } from "mongoose";
import AppError from "../../../errors/AppError";
import Products from "../model";
import { IProducts } from "../schema";

export default class DeleteProductService {
    constructor(
        private userModel: Model<IProducts> = Products
    ) { }

    public async execute(id: string): Promise<void> {
        if (!id) {
            throw new AppError("Product ID is required", 401);
        }

        await this.userModel.deleteOne({ _id: id });
    }
}