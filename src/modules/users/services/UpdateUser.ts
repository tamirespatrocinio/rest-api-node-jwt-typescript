import { Model } from "mongoose";
import User from "../model";
import { IUser } from "../schema";

export default class UpdateUser {

    constructor(
        private userModel: Model<IUser> = User
    ) { }

    public async execute(data: IUser, id: string): Promise<void> {

        console.log(data);

        await this.userModel.updateOne({ _id: id }, data);
    }

    /* constructor(
        private userModel: Model<IUser> = User
    ) { }

    public async execute(data: IUser, user: string): Promise<void> {

        console.log(data);

        await this.userModel.updateOne({ _id: user }, data);
    } */


}
