import { AuthService } from './auth.service';
export declare class LoginController {
    private authService;
    constructor(authService: AuthService);
    static ID: string;
    login(req: any, res: any): Promise<void>;
    logout(req: any, res: any): Promise<any>;
}
