import { Model } from "mongoose";
import Products from "../model";
import { IProducts } from "../schema";

export default class ListProductIdService {
    constructor(
        private productModel: Model<IProducts> = Products
    ) { }

    public async execute(id: string): Promise<IProducts> {
        const product = await this.productModel.findOne({ _id: id });

        //@ts-ignore
        return product;
    }
}