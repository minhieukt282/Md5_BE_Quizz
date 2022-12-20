export declare class AdminService {
    private accountService;
    constructor();
    getAccount: () => Promise<{
        code: number;
        message: any;
    }>;
    lockAccount: (accountId: number) => Promise<{
        code: number;
        message: any;
    }>;
    deleteAccount: (accountId: number) => Promise<{
        code: number;
        message: any;
    }>;
}
