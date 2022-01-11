import { Document, Schema } from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    access?: {
        admin?: boolean;
        blocked?: boolean;
    };


    createdAt: Date;
}

//Cria a tabela
const UserSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true, // remove os espaços em branco presentes (início e final da sequência)
        default: "", //Para não criar campo nulo
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        default: "",
    },
    email: {
        type: String,
        required: [true, "E-mail is required"],
        trim: true,
        default: "",
    },
    password: {
        type: String,
        default: "",
    },

    access: {
        admin: { type: Boolean, default: false },
        blocked: { type: Boolean, default: false },
    },



    createdAt: { type: Date },
});

export default UserSchema;