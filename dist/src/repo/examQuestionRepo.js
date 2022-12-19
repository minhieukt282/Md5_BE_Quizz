"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamQuestionRepo = void 0;
const data_source_1 = require("../data-source");
const exam_question_1 = require("../model/exam-question");
class ExamQuestionRepo {
    constructor() {
        this.create = async (newExamQuestion) => {
            await this.exam_question.save(newExamQuestion);
        };
        this.read = async () => {
            return this.exam_question.find();
        };
        this.update = async (newData) => {
            await this.exam_question.save(newData);
        };
        this.del = async (id) => {
            await this.exam_question.delete(id);
        };
        this.exam = async (id) => {
            let query = `select eq.exam_id, q.question_id, q.question_name, q.img, a.answer_id, a.answer_name, a.status
                     from \`exam-question\` as eq
                              join question q on eq.question_id = q.question_id
                              join answer a on q.question_id = a.question_id
                     where eq.exam_id = ${id}`;
            return this.exam_question.query(query);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.exam_question = connection.getRepository(exam_question_1.ExamQuestion);
        });
    }
}
exports.ExamQuestionRepo = ExamQuestionRepo;
//# sourceMappingURL=examQuestionRepo.js.map