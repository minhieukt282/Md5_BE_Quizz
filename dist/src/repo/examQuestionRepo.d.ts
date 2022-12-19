export declare class ExamQuestionRepo {
    private exam_question;
    constructor();
    create: (newExamQuestion: any) => Promise<void>;
    read: () => Promise<any>;
    update: (newData: any) => Promise<void>;
    del: (id: number) => Promise<void>;
    exam: (id: number) => Promise<any>;
}
