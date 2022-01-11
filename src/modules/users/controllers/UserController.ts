import { Request, Response } from "express";
//import model from "../model";
import CreateUserService from "../services/CreateUserService";
import DeleteUser from "../services/DeleteUser";
import ListUser from "../services/ListUser";
import ListUsers from "../services/ListUsers";
import UpdateUser from "../services/UpdateUser";
import usersView from "../view/userView";

export default class UserController {

  public async create(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const createUser = new CreateUserService();

    const users = await createUser.execute(data);

    return res.json(users);
  }

  /*   public async create(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, password } = req.body;

    const user = await CreateUser.execute({
      firstName,
      lastName,
      email,
      password,
    });

    return res.json(user);
  } */

  public async list(req: Request, res: Response): Promise<Response> {

    const list = new ListUsers();

    const allUsers = await list.execute();

    return res.json(allUsers);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const list = new ListUser();

    const user = await list.execute(id);

    return res.json(usersView.render(user));
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = req.body;

    const update = new UpdateUser();

    await update.execute(data, id);
    //console.log(data);

    return res.json({ message: "Updated with success" });
  }

  public async destroy(req: Request, res: Response): Promise<Response> {

    const { id } = req.params;

    const deleteUserService = new DeleteUser();

    await deleteUserService.execute(id);

    return res.json({ message: "Delete with success" });
  }

} 