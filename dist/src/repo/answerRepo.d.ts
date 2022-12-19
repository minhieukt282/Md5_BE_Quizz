export declare class AnswerRepo {
    private answerRepo;
    constructor();
    create: (newAnswer: any) => Promise<void>;
    read: () => Promise<any>;
    update: (answer_id: any, answerName: any) => Promise<void>;
    del: (id: any) => Promise<void>;
}
