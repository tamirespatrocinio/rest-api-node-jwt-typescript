import { model, Model } from 'mongoose';
import ProductsSchema, { IProducts } from './schema';

ProductsSchema.pre<IProducts>('save', function (next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }

    next();
});

const Products: Model<IProducts> = model('Products', ProductsSchema);

export default Products;