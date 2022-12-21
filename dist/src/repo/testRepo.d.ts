export declare class TestRepo {
    private testRepo;
    constructor();
    create: (newTest: any) => Promise<void>;
    read: () => Promise<any>;
    update: (newData: any) => Promise<void>;
    del: (id: any) => Promise<void>;
    findById: (accountId: number) => Promise<any>;
}
