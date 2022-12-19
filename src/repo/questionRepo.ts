import {AppDataSource} from "../data-source";
import {Question} from "../model/question";

export class QuestionRepo {
    private questionRepo: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.questionRepo = connection.getRepository(Question)
        })
    }

    create = async (newQuestion) => {
        await this.questionRepo.save(newQuestion)
    }
    read = async () => {
        return this.questionRepo.find()
    }
    update = async (questionId, questionName) => {
        let query = `UPDATE question
                     SET question_name = '${questionName}'
                     WHERE question_id = ${questionId}`
        await this.questionRepo.query(query)
    }
    del = async (id) => {
        await this.questionRepo.delete(id)
    }

}

export default new QuestionRepo()