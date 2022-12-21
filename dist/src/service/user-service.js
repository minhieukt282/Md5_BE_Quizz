"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const examRepo_1 = require("../repo/examRepo");
const categoryRepo_1 = require("../repo/categoryRepo");
const questionRepo_1 = require("../repo/questionRepo");
const answerRepo_1 = require("../repo/answerRepo");
const testRepo_1 = require("../repo/testRepo");
const detailsRepo_1 = require("../repo/detailsRepo");
const examQuestionRepo_1 = require("../repo/examQuestionRepo");
const random_id_1 = require("./random-id");
class UserService {
    constructor() {
        this.getAllExams = async () => {
            return await this.examService.read();
        };
        this.getExamDetails = async (examId) => {
            const examData = await this.examQuestionService.getExamQuestion(examId);
            const examInfo = await this.examService.findById(examId);
            let arrExam = [];
            let arrAnswer = [];
            for (let i = 0; i < examData.length; i = i + 4) {
                for (let j = i; j < i + 4; j++) {
                    let answer = {
                        answer_id: examData[j].answer_id,
                        answer_name: examData[j].answer_name,
                        status: examData[j].status
                    };
                    arrAnswer.push(answer);
                }
                let question = {
                    question_id: examData[i].question_id,
                    question_name: examData[i].question_name,
                    answers: arrAnswer
                };
                arrExam.push(question);
                arrAnswer = [];
            }
            return {
                examInfo: examInfo[0],
                examData: arrExam
            };
        };
        this.createNewExam = async (data) => {
            const examData = {
                exam_name: data.exam.exam_name,
                category_id: +data.exam.category_id,
                total_question: data.questions.length,
                account_id: data.account_id,
                img: data.exam.img_exam
            };
            const examId = await this.createExam(examData);
            for (let i = 0; i < data.questions.length; i++) {
                let questionData = {
                    question_name: data.questions[i].question_name,
                    img: data.questions[i].img_question,
                    account_id: data.account_id,
                    category_id: +data.exam.category_id
                };
                let questionId = await this.createQuestion(questionData);
                for (let j = 0; j < data.questions[i].answers.length; j++) {
                    let answerData = {
                        answer_name: data.questions[i].answers[j].answer,
                        status: +data.questions[i].answers[j].status,
                        question_id: questionId
                    };
                    await this.createAnswer(answerData);
                }
                await this.createExamQuestion(examId, questionId);
            }
            return {
                code: 201,
                message: "Create exam done"
            };
        };
        this.createQuestion = async (questionData) => {
            questionData.question_id = this.randomId.random();
            await this.questionService.create(questionData);
            return questionData.question_id;
        };
        this.createAnswer = async (answerData) => {
            answerData.answer_id = this.randomId.random();
            await this.answerService.create(answerData);
        };
        this.createExam = async (examData) => {
            examData.exam_id = this.randomId.random();
            await this.examService.create(examData);
            return examData.exam_id;
        };
        this.createExamQuestion = async (exam_id, question_id) => {
            let examQuestionData = {
                examQuestion_id: this.randomId.random(),
                exam_id: exam_id,
                question_id: question_id
            };
            await this.examQuestionService.create(examQuestionData);
        };
        this.updateQuestion = async (newQuestionData, question_id) => {
            await this.questionService.update(question_id, newQuestionData);
        };
        this.updateAnswer = async (newAnswerData, answer_id) => {
            await this.answerService.update(answer_id, newAnswerData);
        };
        this.deleteQuestion = async (question_id) => {
            await this.answerService.del(question_id);
            await this.questionService.del(question_id);
        };
        this.getCategory = async () => {
            return await this.categoryService.read();
        };
        this.createTest = async (data) => {
            const testId = this.randomId.random();
            for (let i = 0; i < data.questions.length; i++) {
                let detailsId = this.randomId.random();
                let detailsData = {
                    detailsTest_id: detailsId,
                    test_id: testId,
                    account_id: data.account_id,
                    question_id: data.questions[i].question_id,
                    answer_id: data.questions[i].answer_id,
                    status: data.questions[i].status
                };
                await this.detailsService.create(detailsData);
            }
            let point = await this.detailsService.countStatus(data.account_id, testId);
            const testData = {
                test_id: testId,
                account_id: data.account_id,
                exam_id: data.exam_id,
                point: point[0].point
            };
            await this.testService.create(testData);
            return {
                code: 201,
                message: "Submit done"
            };
        };
        this.getTest = async (accountId) => {
            let tests = await this.testService.read(accountId);
        };
        this.examService = new examRepo_1.ExamRepo();
        this.categoryService = new categoryRepo_1.CategoryRepo();
        this.questionService = new questionRepo_1.QuestionRepo();
        this.answerService = new answerRepo_1.AnswerRepo();
        this.testService = new testRepo_1.TestRepo();
        this.detailsService = new detailsRepo_1.DetailsRepo();
        this.examQuestionService = new examQuestionRepo_1.ExamQuestionRepo();
        this.randomId = new random_id_1.RandomId();
    }
}
exports.UserService = UserService;
exports.default = new UserService();
//# sourceMappingURL=user-service.js.map