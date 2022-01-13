import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import DeleteUser from "../services/DeleteUserService";
import ListUser from "../services/ListUserIdService";
import ListUsers from "../services/ListUsersService";
import UpdateUser from "../services/UpdateUserService";
import usersView from "../view/userView";

export default class UserController {

  public async create(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute(data);

    return res.json(usersView.render(user));
    //return res.json([{ id: user.id }, { firstName: user.firstName }, { lastName: user.lastName }, { email: user.email }]);
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

    const user = await list.execute();

    return res.json(usersView.render(user));
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

    return res.json({ message: "Updated with success" });
  }

  public async destroy(req: Request, res: Response): Promise<Response> {

    const { id } = req.params;

    const deleteUserService = new DeleteUser();

    await deleteUserService.execute(id);

    return res.json({ message: "Delete with success" });
  }

} 