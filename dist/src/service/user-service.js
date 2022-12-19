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
        this.getExam = async (examId) => {
            let exam = await this.examQuestionService.exam(examId);
            let arrExam = [];
            let arrAnswer = [];
            for (let i = 0; i < exam.length; i = i + 4) {
                for (let j = i; j < i + 4; j++) {
                    let answer = {
                        id: exam[j].answer_id,
                        name: exam[j].answer_name,
                        status: exam[j].status
                    };
                    arrAnswer.push(answer);
                }
                let question = {
                    id: exam[i].question_id,
                    name: exam[i].question_name,
                    answers: arrAnswer
                };
                arrExam.push(question);
                arrAnswer = [];
            }
            return arrExam;
        };
        this.createNewExam = async (data) => {
        };
        this.createQuestion = async (questionData) => {
            questionData.question_id = this.randomId.random();
            await this.questionService.create(questionData);
            return questionData.question_id;
        };
        this.createAnswer = async (answerData, question_id) => {
            answerData.answer_id = this.randomId.random();
            answerData.question_id = question_id;
            await this.answerService.create(answerData);
        };
        this.createExam = async (examData) => {
            examData.exam_id = this.randomId.random();
            await this.questionService.create(examData);
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