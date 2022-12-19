import {AppDataSource} from "../data-source";
import {Exam} from "../model/exam";

export class ExamRepo {
    private exam: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.exam = connection.getRepository(Exam)
        })
    }

    create = async (newExam) => {
        await this.exam.save(newExam)
    }
    read = async () => {
        return this.exam.find()
    }
    update = async (newData) => {
        await this.exam.save(newData)
    }
    del = async (id) => {
        await this.exam.delete(id)
    }
}
export default new ExamRepo()