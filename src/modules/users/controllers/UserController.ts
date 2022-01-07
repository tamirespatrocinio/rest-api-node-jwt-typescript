import { Request, Response } from 'express';
import CreateUser from '../services/CreateUser';

export default class UserController {

    public async create(req: Request, res: Response): Promise<Response> {
        const data = req.body;

        const createUser = new CreateUser();

        const user = await createUser.execute(data);

        return res.json(user);
    }
}