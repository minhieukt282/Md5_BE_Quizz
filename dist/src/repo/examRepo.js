"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamRepo = void 0;
const data_source_1 = require("../data-source");
const exam_1 = require("../model/exam");
class ExamRepo {
    constructor() {
        this.create = async (newExam) => {
            await this.examRepo.save(newExam);
        };
        this.read = async () => {
            let query = `select e.exam_id, e.exam_name, c.category_name, e.total_question, e.img as img_exam, e.account_id
                     from exam as e
                              join category c on e.category_id = c.category_id`;
            return this.examRepo.query(query);
        };
        this.update = async (newData) => {
            await this.examRepo.save(newData);
        };
        this.del = async (id) => {
            await this.examRepo.delete(id);
        };
        this.findById = async (id) => {
            return await this.examRepo.find({
                where: { exam_id: id }
            });
        };
        this.findByAccount = async (id) => {
            return await this.examRepo.find({
                where: { account_id: id }
            });
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.examRepo = connection.getRepository(exam_1.Exam);
        });
    }
}
exports.ExamRepo = ExamRepo;
exports.default = new ExamRepo();
//# sourceMappingURL=examRepo.js.map