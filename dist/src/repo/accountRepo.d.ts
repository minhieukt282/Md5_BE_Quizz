export declare class AccountRepo {
    private accountRepo;
    constructor();
    create: (newAccount: any) => Promise<void>;
    read: () => Promise<any>;
    updatePassword: (newPassword: string, id: number) => Promise<void>;
    updateStatus: (status: boolean, id: number) => Promise<void>;
    del: (id: number) => Promise<void>;
    findById: (id: number) => Promise<any>;
    findOne: (username: string) => Promise<any>;
    findStatus: (status: boolean, username: string) => Promise<any>;
}
