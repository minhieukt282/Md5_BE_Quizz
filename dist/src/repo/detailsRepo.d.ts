export declare class DetailsRepo {
    private detailsRepo;
    constructor();
    create: (newDetails: any) => Promise<void>;
    read: () => Promise<any>;
    update: (newData: any) => Promise<void>;
    del: (id: any) => Promise<void>;
    countStatus: (accountId: number, testId: number) => Promise<any>;
    findById: (testId: number, accountId: number) => Promise<any>;
}
