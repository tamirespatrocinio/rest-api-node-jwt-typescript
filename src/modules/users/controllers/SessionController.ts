import { Request, Response } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";
import TestTokenService from "../services/TestTokenService";
import usersView from "../view/userView";

export default class SessionController {
    public async test(request: Request, response: Response): Promise<Response> {
        const { token } = request.body;

        const testToken = new TestTokenService();

        const { isValid } = await testToken.execute({ token });

        return response.json({ isValid });
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const authenticateUser = new AuthenticateUserService();

        const { user, token } = await authenticateUser.execute({ email, password });

        return res.json({ user: usersView.render(user), token });

    }
}
