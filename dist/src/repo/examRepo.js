"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamRepo = void 0;
const data_source_1 = require("../data-source");
const exam_1 = require("../model/exam");
class ExamRepo {
    constructor() {
        this.create = async (newExam) => {
            await this.exam.save(newExam);
        };
        this.read = async () => {
            return this.exam.find();
        };
        this.update = async (newData) => {
            await this.exam.save(newData);
        };
        this.del = async (id) => {
            await this.exam.delete(id);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.exam = connection.getRepository(exam_1.Exam);
        });
    }
}
exports.ExamRepo = ExamRepo;
exports.default = new ExamRepo();
//# sourceMappingURL=examRepo.js.map