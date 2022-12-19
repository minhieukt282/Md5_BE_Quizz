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
        this.update = async (newData) => {
            await this.answerRepo.save(newData);
        };
        this.del = async (id) => {
            await this.answerRepo.delete(id);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.answerRepo = connection.getRepository(answer_1.Answer);
        });
    }
}
exports.AnswerRepo = AnswerRepo;
//# sourceMappingURL=answerRepo.js.map