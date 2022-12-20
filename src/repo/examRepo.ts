import {AppDataSource} from "../data-source";
import {Exam} from "../model/exam";
import {query} from "express";

export class ExamRepo {
    private exam: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.exam = connection.getRepository(Exam)
        })
    }

    create = async (newExam: any) => {
        await this.exam.save(newExam)
    }
    read = async () => {
        let query = `select e.exam_id, e.exam_name, c.category_name, e.total_question, e.img as img_exam, e.account_id
                     from exam as e
                              join category c on e.category_id = c.category_id`
        return this.exam.query(query)
    }
    update = async (newData: any) => {
        await this.exam.save(newData)
    }
    del = async (id: number) => {
        await this.exam.delete(id)
    }
    findById = async (id: number) => {
        return await this.exam.find({
            where: {exam_id: id}
        })
    }
}

export default new ExamRepo()