export declare class AnswerRepo {
    private answerRepo;
    constructor();
    create: (newAnswer: any) => Promise<void>;
    read: () => Promise<any>;
    update: (newData: any) => Promise<void>;
    del: (id: any) => Promise<void>;
}
