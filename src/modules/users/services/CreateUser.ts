import { Model } from "mongoose";
import User from "../model";
import { IUser } from "../schema";

export default class CreateUser {
    constructor(
        private userModel: Model<IUser> = User
    ) { }

    public async execute(data: IUser): Promise<IUser> {

        const user = await this.userModel.create({
            ...data
        });

        return user;

    }

}