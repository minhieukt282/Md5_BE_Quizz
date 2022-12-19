import {ExamRepo} from "../repo/examRepo"
import {CategoryRepo} from "../repo/categoryRepo";
import {QuestionRepo} from "../repo/questionRepo";
import {AnswerRepo} from "../repo/answerRepo";
import {TestRepo} from "../repo/testRepo";
import {DetailsRepo} from "../repo/detailsRepo";
import {ExamQuestionRepo} from "../repo/examQuestionRepo";

export class UserService {
    private examService: ExamRepo
    private categoryService: CategoryRepo
    private questionService: QuestionRepo
    private answerService: AnswerRepo
    private testService: TestRepo
    private detailsService: DetailsRepo
    private examQuestionService: ExamQuestionRepo

    constructor() {
        this.examService = new ExamRepo()
        this.categoryService = new CategoryRepo()
        this.questionService = new QuestionRepo()
        this.answerService = new AnswerRepo()
        this.testService = new TestRepo()
        this.detailsService = new DetailsRepo()
        this.examQuestionService = new ExamQuestionRepo()
    }

    getAllExams = async () => {
        return await this.examService.read()
    }
    getExam = async (examId: number) => {
        let exam = await this.examQuestionService.exam(examId)
        let arrExam = []
        let arrAnswer = []
        for (let i = 0; i < exam.length; i = i + 4) {
            for (let j = i; j < i + 4; j++) {
                let answer = {
                    id: exam[j].answer_id,
                    name: exam[j].answer_name,
                    status: exam[j].status
                }
                arrAnswer.push(answer)
            }
            let question = {
                id: exam[i].question_id,
                name: exam[i].question_name,
                answers: arrAnswer
            }
            arrExam.push(question)
            arrAnswer = []
        }
        return arrExam
    }

    createExam = async (data) => {

    }

}

export default new UserService()