import { Model } from "mongoose";
import AppError from "../../../errors/AppError";
import User from "../model";
import { IUser } from "../schema";

export default class DeleteUser {
    constructor(
        private userModel: Model<IUser> = User
    ) { }

    public async execute(id: string): Promise<void> {
        if (!id) {
            throw new AppError("User ID is required", 401);
        }

        await this.userModel.deleteOne({ _id: id });
    }
}
