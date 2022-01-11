import { Document, Schema } from 'mongoose';

export interface IProducts extends Document {
    user_id: string;
    description: string;
    value: number;

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

    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true,
    },

    createdAt: { type: Date }

});

export default ProductsSchema;