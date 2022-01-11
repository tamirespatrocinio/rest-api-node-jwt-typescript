import { Model } from "mongoose";
import Products from "../model";
import { IProducts } from '../schema';

export default class CreateProducts {

    constructor(
        private productsModel: Model<IProducts> = Products
    ) { }

    public async execute(data: IProducts, user: string): Promise<IProducts> {
        //const { description, value } = data;

        const product = await this.productsModel.create({
            ...data,
            user

        });

        return product;
    }
}