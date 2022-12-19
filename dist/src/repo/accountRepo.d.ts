export declare class AccountRepo {
    private accountRepo;
    constructor();
    create: (newAccount: any) => Promise<void>;
    read: () => Promise<any>;
    updatePassword: (newPassword: any, id: any) => Promise<void>;
    del: (id: any) => Promise<void>;
    findById: (id: any) => Promise<any>;
    findOne: (username: string) => Promise<any>;
    findStatus: (status: boolean, username: string) => Promise<any>;
}
