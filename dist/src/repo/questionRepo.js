"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionRepo = void 0;
const data_source_1 = require("../data-source");
const question_1 = require("../model/question");
class QuestionRepo {
    constructor() {
        this.create = async (newQuestion) => {
            await this.questionRepo.save(newQuestion);
        };
        this.read = async () => {
            return this.questionRepo.find();
        };
        this.update = async (questionId, questionName) => {
            let query = `UPDATE question
                     SET question_name = '${questionName}'
                     WHERE question_id = ${questionId}`;
            await this.questionRepo.query(query);
        };
        this.del = async (id) => {
            await this.questionRepo.delete(id);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.questionRepo = connection.getRepository(question_1.Question);
        });
    }
}
exports.QuestionRepo = QuestionRepo;
exports.default = new QuestionRepo();
//# sourceMappingURL=questionRepo.js.map