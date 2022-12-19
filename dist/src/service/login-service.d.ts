export declare class LoginService {
    private accountRepo;
    constructor();
    checkRegister: (data: any) => Promise<{
        code: number;
        message: string;
    }>;
    checkLogin: (data: any) => Promise<{
        code: number;
        message: string;
    }>;
}
declare const _default: LoginService;
export default _default;
