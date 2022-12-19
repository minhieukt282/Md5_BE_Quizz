"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerRepo = void 0;
const data_source_1 = require("../data-source");
const answer_1 = require("../model/answer");
class AnswerRepo {
    constructor() {
        this.create = async (newAnswer) => {
            await this.answerRepo.save(newAnswer);
        };
        this.read = async () => {
            return this.answerRepo.find();
        };
        this.update = async (answer_id, answerName) => {
            let query = `UPDATE answer
                     SET answer_name = '${answerName}'
                     WHERE answer_id = ${answer_id};`;
            await this.answerRepo.save(query);
        };
        this.del = async (id) => {
            let query = `DELETE
                     FROM answer
                     WHERE question_id = ${id};`;
            await this.answerRepo.query(query);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.answerRepo = connection.getRepository(answer_1.Answer);
        });
    }
}
exports.AnswerRepo = AnswerRepo;
//# sourceMappingURL=answerRepo.js.map