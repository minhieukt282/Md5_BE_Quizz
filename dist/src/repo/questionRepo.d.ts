export declare class QuestionRepo {
    private questionRepo;
    constructor();
    create: (newQuestion: any) => Promise<void>;
    read: () => Promise<any>;
    update: (questionId: any, questionName: any) => Promise<void>;
    del: (id: any) => Promise<void>;
}
declare const _default: QuestionRepo;
export default _default;
