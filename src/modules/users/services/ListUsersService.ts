import { Model } from "mongoose";
import User from "../model";
import { IUser } from "../schema";

export default class ListUsers {
  constructor(
    private userModel: Model<IUser> = User
  ) { }

  public async execute(): Promise<IUser> {
    const user = await this.userModel.find();

    //@ts-ignore
    return user;
  }
}
