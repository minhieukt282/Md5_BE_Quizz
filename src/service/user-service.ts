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
            exam_id: this.randomId.random(),
            exam_name: data.exam_name,
            category_id: +data.category_id,
            total_question: 0,
            account_id: data.account_id,
            img: data.img_exam
        }
        await this.examService.create(examData)
        return {
            code: 201,
            message: "Create exam done"
        }
    }

    createNewQuestions = async (data: any) => {
        console.log(data)
        const questionData = {
            question_name: data.question_name,
            category_id: 1,
            account_id: data.account_id,
            img: data.img
        }
        const questionId = await this.createQuestion(questionData)
        for (let i = 0; i < data.answers.length; i++) {
            let answerData = {
                answer_name: data.answers[i].answer,
                status: data.answers[i].status,
                question_id: questionId
            }
            await this.createAnswer(answerData)
        }
        await this.createExamQuestion(data.exam_id, questionId)
        return {
            code: 201,
            message: "Create question done"
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
    createExamQuestion = async (exam_id: number, question_id: number) => {
        let examQuestionData = {
            examQuestion_id: this.randomId.random(),
            exam_id: exam_id,
            question_id: question_id
        }
        await this.examQuestionService.create(examQuestionData)
    }

    getMyExam = async (accountId: number) => {
        let exams = await this.examService.findByAccount(accountId)
        if (exams.length != 0)
            return {
                code: 200,
                message: exams
            }
        else return {
            code: 200,
            message: "You don't have any tests yet"
        }
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
        const point = await this.detailsService.countStatus(data.account_id, testId)
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

    getMyTest = async (account_id: number) => {
        let tests = await this.testService.findById(account_id)
        if (tests.length != 0) {
            return {
                code: 200,
                message: tests
            }
        } else return {
            code: 200,
            message: "You haven't taken any test yet"
        }
    }
    getDetailsTest = async (testId: number, accountId: number) => {
        let details = await this.detailsService.findById(testId, accountId)
        return {
            code: 200,
            message: details
        }
    }
}

export default new UserService()