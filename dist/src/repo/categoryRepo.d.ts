export declare class CategoryRepo {
    private categoryRepo;
    constructor();
    create: (newCategory: any) => Promise<void>;
    read: () => Promise<any>;
    update: (newData: any) => Promise<void>;
    del: (id: any) => Promise<void>;
}
