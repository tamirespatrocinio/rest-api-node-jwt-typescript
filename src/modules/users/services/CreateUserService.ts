import { Model } from "mongoose";
import User from "../model";
import { IUser } from "../schema";
import AppError from "../../../errors/AppError";
import { BCryptHashProvider } from "../providers/HashProvider/implementations/BCryptHashProvider";
import { IHashProvider } from "../providers/HashProvider/models/IHashProvider";

interface IUserDataRequest extends IUser {
  confirmPassword: string;
}

export default class CreateUser {
  constructor(
    private userModel: Model<IUser> = User,
    private hashProvider: IHashProvider = new BCryptHashProvider()
  ) { }

  public async execute(data: IUserDataRequest): Promise<IUser> {
    const { email, password, confirmPassword } = data;

    const checkUserExists = await this.userModel.findOne({ email });

    if (checkUserExists) {
      throw new AppError("User email already exists");
    }

    if (password !== confirmPassword) {
      throw new AppError("Password does not match");
    }

    let hashedPassword = "";

    if (password && password === confirmPassword) {
      hashedPassword = await this.hashProvider.generateHash(password);
    }

    const user = await this.userModel.create({
      ...data,
      password: hashedPassword,
    });

    return user;
  }
}
