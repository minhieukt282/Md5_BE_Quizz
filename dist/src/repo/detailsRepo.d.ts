export declare class DetailsRepo {
    private detailsRepo;
    constructor();
    create: (newDetails: any) => Promise<void>;
    read: () => Promise<any>;
    update: (newData: any) => Promise<void>;
    del: (id: any) => Promise<void>;
}
