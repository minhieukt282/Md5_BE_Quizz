export declare class AccountRepo {
    private accountRepo;
    constructor();
    create: (newAccount: any) => Promise<void>;
    read: () => Promise<any>;
    update: (newData: any) => Promise<void>;
    del: (id: any) => Promise<void>;
    findOne: (username: string) => Promise<any>;
    findStatus: (status: boolean, username: string) => Promise<any>;
}
