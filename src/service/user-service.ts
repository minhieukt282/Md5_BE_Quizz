import {ExamRepo} from "../repo/examRepo"
import {CategoryRepo} from "../repo/categoryRepo";
import {QuestionRepo} from "../repo/questionRepo";
import {AnswerRepo} from "../repo/answerRepo";
import {TestRepo} from "../repo/testRepo";
import {DetailsRepo} from "../repo/detailsRepo";
import {ExamQuestionRepo} from "../repo/examQuestionRepo";
import {RandomId} from "./random-id";

export class UserService {
    private examService: ExamRepo
    private categoryService: CategoryRepo
    private questionService: QuestionRepo
    private answerService: AnswerRepo
    private testService: TestRepo
    private detailsService: DetailsRepo
    private examQuestionService: ExamQuestionRepo
    private randomId: RandomId

    constructor() {
        this.examService = new ExamRepo()
        this.categoryService = new CategoryRepo()
        this.questionService = new QuestionRepo()
        this.answerService = new AnswerRepo()
        this.testService = new TestRepo()
        this.detailsService = new DetailsRepo()
        this.examQuestionService = new ExamQuestionRepo()
        this.randomId = new RandomId()
    }

    getAllExams = async () => {
        return await this.examService.read()
    }
    getExam = async (examId: number) => {
        const exam = await this.examQuestionService.exam(examId)
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

    createNewExam = async (data: any) => {
        const examData = {
            exam_name: data.exam.exam_name,
            total_question: data.questions.length,
            account_id: data.account_id,
            img: data.exam.img
        }
        const examId = await this.createExam(examData)
        for (let i = 0; i < data.questions.length; i++) {
            let questionData = {
                question_name: data.questions[i].question_name,
                img: data.questions[i].img,
                account_id: data.account_id,
                category_id: 1
            }
            let questionId = await this.createQuestion(questionData)
            for (let j = 0; j < data.questions[i].answers.length; j++) {
                let answerData = {
                    answer_name: data.questions[i].answers[j].answer,
                    status: +data.questions[i].answers[j].status,
                    question_id: questionId
                }
                await this.createAnswer(answerData)
            }
            await this.createExamQuestion(examId,questionId)
        }
    }

    createQuestion = async (questionData) => {
        questionData.question_id = this.randomId.random()
        await this.questionService.create(questionData)
        return questionData.question_id
    }
    createAnswer = async (answerData) => {
        answerData.answer_id = this.randomId.random()
        await this.answerService.create(answerData)
    }
    createExam = async (examData) => {
        examData.exam_id = this.randomId.random()
        await this.examService.create(examData)
        return examData.exam_id
    }
    createExamQuestion = async (exam_id, question_id) => {
        let examQuestionData = {
            examQuestion_id: this.randomId.random(),
            exam_id: exam_id,
            question_id: question_id
        }
        await this.examQuestionService.create(examQuestionData)
    }
    updateQuestion = async (newQuestionData, question_id) => {
        await this.questionService.update(question_id, newQuestionData)
    }
    updateAnswer = async (newAnswerData, answer_id) => {
        await this.answerService.update(answer_id, newAnswerData)
    }
    deleteQuestion = async (question_id) => {
        await this.answerService.del(question_id)
        await this.questionService.del(question_id)
    }

}

export default new UserService()