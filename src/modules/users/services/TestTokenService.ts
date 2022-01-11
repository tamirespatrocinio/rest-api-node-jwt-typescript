import { verify } from "jsonwebtoken";
import auth from "../../../config/auth";

interface IRequest {
    token: string;
}

interface IResponse {
    isValid: boolean;
}

class TestTokenService {
    public async execute({ token }: IRequest): Promise<IResponse> {
        try {
            verify(token, auth.jwt.secret);

            return { isValid: true };
        } catch {
            return { isValid: false };
        }
    }
}

export default TestTokenService;
