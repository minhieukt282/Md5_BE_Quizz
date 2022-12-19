import {AppDataSource} from "../data-source";
import {Answer} from "../model/answer";

export class AnswerRepo {
    private answerRepo: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.answerRepo = connection.getRepository(Answer)
        })
    }

    create = async (newAnswer) => {
        await this.answerRepo.save(newAnswer)
    }
    read = async () => {
        return this.answerRepo.find()
    }
    update = async (answer_id, answerName) => {
        let query = `UPDATE answer
                     SET answer_name = '${answerName}'
                     WHERE answer_id = ${answer_id};`
        await this.answerRepo.save(query)
    }
    del = async (id) => {
        let query = `DELETE
                     FROM answer
                     WHERE question_id = ${id};`
        await this.answerRepo.query(query)
    }

}
