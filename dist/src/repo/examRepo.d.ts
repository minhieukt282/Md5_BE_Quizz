export declare class ExamRepo {
    private exam;
    constructor();
    create: (newExam: any) => Promise<void>;
    read: () => Promise<any>;
    update: (newData: any) => Promise<void>;
    del: (id: any) => Promise<void>;
}
declare const _default: ExamRepo;
export default _default;
