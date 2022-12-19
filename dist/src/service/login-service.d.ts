export declare class LoginService {
    private accountRepo;
    private randomId;
    constructor();
    register: (data: any) => Promise<{
        code: number;
        message: string;
    }>;
    login: (data: any) => Promise<{
        code: number;
        message: string;
    }>;
    changePassword: (data: any) => Promise<{
        code: number;
        message: string;
    }>;
}
declare const _default: LoginService;
export default _default;
