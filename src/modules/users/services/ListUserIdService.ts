import { Model } from "mongoose";
import AppError from "../../../errors/AppError";
import User from "../model";
import { IUser } from "../schema";

export default class ListUser {
    constructor(
        private userModel: Model<IUser> = User
    ) { }

    public async execute(id: string): Promise<IUser> {

        if (!id) {
            throw new AppError("User ID is required", 401);
        }

        const user = await this.userModel.findOne({ _id: id });

        //@ts-ignore
        return user;
    }
}
