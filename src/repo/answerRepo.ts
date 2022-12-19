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
    update = async (newData) => {
        await this.answerRepo.save(newData)
    }
    del = async (id) => {
        await this.answerRepo.delete(id)
    }

}
