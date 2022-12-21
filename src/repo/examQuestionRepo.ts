import {AppDataSource} from "../data-source";
import {ExamQuestion} from "../model/exam-question";

export class ExamQuestionRepo {
    private exam_question: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.exam_question = connection.getRepository(ExamQuestion)
        })
    }

    create = async (newExamQuestion: any) => {
        await this.exam_question.save(newExamQuestion)
    }
    read = async () => {
        return this.exam_question.find()
    }
    update = async (newData: any) => {
        await this.exam_question.save(newData)
    }
    del = async (id: number) => {
        await this.exam_question.delete(id)
    }
    getExamQuestion = async (id: number) => {
        let query = `select eq.exam_id, q.question_id, q.question_name, q.img, a.answer_id, a.answer_name, a.status
                     from \`exam-question\` as eq
                              join question q on eq.question_id = q.question_id
                              join answer a on q.question_id = a.question_id
                     where eq.exam_id = ${id}
                     order by q.question_id desc`
        return this.exam_question.query(query)
    }

}