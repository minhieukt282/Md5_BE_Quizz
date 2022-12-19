export declare class UserService {
    private examService;
    private categoryService;
    private questionService;
    private answerService;
    private testService;
    private detailsService;
    private examQuestionService;
    constructor();
    getAllExams: () => Promise<any>;
    getExam: (examId: number) => Promise<any[]>;
    createExam: (data: any) => Promise<void>;
}
declare const _default: UserService;
export default _default;
