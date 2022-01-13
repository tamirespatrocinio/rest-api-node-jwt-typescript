import { Model } from "mongoose";;
import Products from '../model';
import { IProducts } from "../schema";

export default class ListProductService {
    constructor(
        private productModel: Model<IProducts> = Products
    ) { }

    public async execute(): Promise<IProducts[]> {
        const products = await this.productModel.find().populate('user');

        return products;
    }
}