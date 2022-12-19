export declare class TestRepo {
    private test;
    constructor();
    create: (newTest: any) => Promise<void>;
    read: () => Promise<any>;
    update: (newData: any) => Promise<void>;
    del: (id: any) => Promise<void>;
}
