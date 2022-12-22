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
                exam_id: this.randomId.random(),
                exam_name: data.exam_name,
                category_id: +data.category_id,
                total_question: 0,
                account_id: data.account_id,
                img: data.img_exam
            };
            await this.examService.create(examData);
            return {
                code: 201,
                message: "Create exam done"
            };
        };
        this.createNewQuestions = async (data) => {
            console.log(data);
            const questionData = {
                question_name: data.question_name,
                category_id: 1,
                account_id: data.account_id,
                img: data.img
            };
            const questionId = await this.createQuestion(questionData);
            for (let i = 0; i < data.answers.length; i++) {
                let answerData = {
                    answer_name: data.answers[i].answer,
                    status: data.answers[i].status,
                    question_id: questionId
                };
                await this.createAnswer(answerData);
            }
            await this.createExamQuestion(data.exam_id, questionId);
            return {
                code: 201,
                message: "Create question done"
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
        this.createExamQuestion = async (exam_id, question_id) => {
            let examQuestionData = {
                examQuestion_id: this.randomId.random(),
                exam_id: exam_id,
                question_id: question_id
            };
            await this.examQuestionService.create(examQuestionData);
        };
        this.getMyExam = async (accountId) => {
            let exams = await this.examService.findByAccount(accountId);
            if (exams.length != 0)
                return {
                    code: 200,
                    message: exams
                };
            else
                return {
                    code: 200,
                    message: "You don't have any tests yet"
                };
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
            const point = await this.detailsService.countStatus(data.account_id, testId);
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
        this.getMyTest = async (account_id) => {
            let tests = await this.testService.findById(account_id);
            if (tests.length != 0) {
                return {
                    code: 200,
                    message: tests
                };
            }
            else
                return {
                    code: 200,
                    message: "You haven't taken any test yet"
                };
        };
        this.getDetailsTest = async (testId, accountId) => {
            let details = await this.detailsService.findById(testId, accountId);
            return {
                code: 200,
                message: details
            };
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