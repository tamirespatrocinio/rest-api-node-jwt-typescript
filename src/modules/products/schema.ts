import { Document, Schema } from 'mongoose';

export interface IProducts extends Document {
    user: string;
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

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    },


    createdAt: { type: Date }

});

export default ProductsSchema;