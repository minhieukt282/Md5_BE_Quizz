export declare class ExamRepo {
    private exam;
    constructor();
    create: (newExam: any) => Promise<void>;
    read: () => Promise<any>;
    update: (newData: any) => Promise<void>;
    del: (id: number) => Promise<void>;
    findById: (id: number) => Promise<any>;
}
declare const _default: ExamRepo;
export default _default;
