import { Document, Schema } from "mongoose";

export interface IUser extends Document {
    apelido: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    createdAt: Date;
}

//Cria a tabela
const UserSchema: Schema = new Schema({
    apelido: {
        type: Schema.Types.ObjectId,
        ref: "Products",
        required: [true, "Apelido is required"],
        index: true,
    },
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

    createdAt: { type: Date },
});

export default UserSchema;