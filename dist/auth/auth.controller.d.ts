import { AuthService } from './auth.service';
import { LoginRequestBody } from './dto/login-request-body';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginInfo: LoginRequestBody): Promise<import("./dto/user-token").UserToken>;
}
