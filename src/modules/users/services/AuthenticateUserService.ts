import { sign } from "jsonwebtoken";
import { Model } from "mongoose";
import auth from "../../../config/auth";
import AppError from "../../../errors/AppError";
import User from "../model";
import { BCryptHashProvider } from "../providers/HashProvider/implementations/BCryptHashProvider";
import { IHashProvider } from "../providers/HashProvider/models/IHashProvider";
import { IUser } from "../schema";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: IUser;
    token: string;
}

export default class AuthenticateUserService {
    constructor(
        private userModel: Model<IUser> = User,
        private hashProvider: IHashProvider = new BCryptHashProvider()
    ) { }

    public async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userModel.findOne({ email });

        if (!user || !user.password) {
            throw new AppError(
                "E-mail/password incorrect or user does not exist", 401
            );
        }

        //user.password - senha criptografada
        //password - senha não criptografada

        const passwordMatch = await this.hashProvider.compareHash(
            password,
            user.password
        );

        if (!passwordMatch) {
            throw new AppError("Email/password incorrect", 401);
        }

        const { expiresIn, secret } = auth.jwt;

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn,
        });

        return { user, token };
    }
}
