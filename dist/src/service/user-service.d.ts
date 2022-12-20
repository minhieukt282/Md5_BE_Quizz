export declare class UserService {
    private examService;
    private categoryService;
    private questionService;
    private answerService;
    private testService;
    private detailsService;
    private examQuestionService;
    private randomId;
    constructor();
    getAllExams: () => Promise<any>;
    getExam: (examId: number) => Promise<any[]>;
    createNewExam: (data: any) => Promise<void>;
    createQuestion: (questionData: any) => Promise<any>;
    createAnswer: (answerData: any) => Promise<void>;
    createExam: (examData: any) => Promise<any>;
    createExamQuestion: (exam_id: any, question_id: any) => Promise<void>;
    updateQuestion: (newQuestionData: any, question_id: any) => Promise<void>;
    updateAnswer: (newAnswerData: any, answer_id: any) => Promise<void>;
    deleteQuestion: (question_id: any) => Promise<void>;
}
declare const _default: UserService;
export default _default;
