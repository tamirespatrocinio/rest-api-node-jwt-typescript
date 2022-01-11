import { Model } from "mongoose";
import Products from "../model";
import { IProducts } from "../schema";

export default class UpdateProductService {
    constructor(
        private productModel: Model<IProducts> = Products
    ) { }

    public async execute(data: IProducts, id: string): Promise<void> {
        console.log(data);

        await this.productModel.updateOne({ _id: id }, data);
    }
}