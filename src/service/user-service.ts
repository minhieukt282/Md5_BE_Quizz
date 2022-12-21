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
    getExamDetails = async (examId: number) => {
        const examData = await this.examQuestionService.getExamQuestion(examId)
        const examInfo = await this.examService.findById(examId)
        let arrExam = []
        let arrAnswer = []
        for (let i = 0; i < examData.length; i = i + 4) {
            for (let j = i; j < i + 4; j++) {
                let answer = {
                    answer_id: examData[j].answer_id,
                    answer_name: examData[j].answer_name,
                    status: examData[j].status
                }
                arrAnswer.push(answer)
            }
            let question = {
                question_id: examData[i].question_id,
                question_name: examData[i].question_name,
                answers: arrAnswer
            }
            arrExam.push(question)
            arrAnswer = []
        }
        return {
            examInfo: examInfo[0],
            examData: arrExam
        }
    }

    createNewExam = async (data: any) => {
        const examData = {
            exam_name: data.exam.exam_name,
            category_id: +data.exam.category_id,
            total_question: data.questions.length,
            account_id: data.account_id,
            img: data.exam.img_exam
        }
        const examId = await this.createExam(examData)
        for (let i = 0; i < data.questions.length; i++) {
            let questionData = {
                question_name: data.questions[i].question_name,
                img: data.questions[i].img_question,
                account_id: data.account_id,
                category_id: +data.exam.category_id
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
            await this.createExamQuestion(examId, questionId)
        }
        return {
            code: 201,
            message: "Create exam done"
        }
    }

    createQuestion = async (questionData: any) => {
        questionData.question_id = this.randomId.random()
        await this.questionService.create(questionData)
        return questionData.question_id
    }
    createAnswer = async (answerData: any) => {
        answerData.answer_id = this.randomId.random()
        await this.answerService.create(answerData)
    }
    createExam = async (examData: any) => {
        examData.exam_id = this.randomId.random()
        await this.examService.create(examData)
        return examData.exam_id
    }
    createExamQuestion = async (exam_id: number, question_id: number) => {
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

    getCategory = async () => {
        return await this.categoryService.read()
    }

    createTest = async (data: any) => {
        const testId = this.randomId.random()
        for (let i = 0; i < data.questions.length; i++) {
            let detailsId = this.randomId.random()
            let detailsData = {
                detailsTest_id: detailsId,
                test_id: testId,
                account_id: data.account_id,
                question_id: data.questions[i].question_id,
                answer_id: data.questions[i].answer_id,
                status: data.questions[i].status
            }
            await this.detailsService.create(detailsData)
        }
        let point = await this.detailsService.countStatus(data.account_id, testId)
        const testData = {
            test_id: testId,
            account_id: data.account_id,
            exam_id: data.exam_id,
            point: point[0].point
        }
        await this.testService.create(testData)
        return {
            code: 201,
            message: "Submit done"
        }
    }

    getTest = async (accountId: number) => {
        let tests = await this.testService.read(accountId)
    }
}

export default new UserService()