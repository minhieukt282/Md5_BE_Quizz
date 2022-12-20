export declare class ExamQuestionRepo {
    private exam_question;
    constructor();
    create: (newExamQuestion: any) => Promise<void>;
    read: () => Promise<any>;
    update: (newData: any) => Promise<void>;
    del: (id: number) => Promise<void>;
    getExamQuestion: (id: number) => Promise<any>;
}
