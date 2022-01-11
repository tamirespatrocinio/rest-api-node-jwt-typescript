import { Document, Schema } from 'mongoose';

export interface IProducts extends Document {
    description: string;
    value: string;

    createdAt: Date;
}

const ProductsSchema: Schema = new Schema({
    description: {
        type: String,
        required: true,
        trim: true,
        default: ''
    },
    value: {
        type: String,
        required: true,
        trim: true,
        default: ''
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    createdAt: { type: Date }

});

export default ProductsSchema;