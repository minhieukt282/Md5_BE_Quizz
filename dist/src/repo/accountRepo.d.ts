export declare class AccountRepo {
    private accountRepo;
    constructor();
    create: (newAccount: any) => Promise<void>;
    read: () => Promise<any>;
    update: (newData: any) => Promise<void>;
    del: (id: any) => Promise<void>;
}
