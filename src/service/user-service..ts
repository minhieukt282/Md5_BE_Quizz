import {AppDataSource} from "../data-source";
import {Topic} from "../model/topic";
import {Question} from "../model/question";
import {Answer} from "../model/answer";

export class UserService {
    private topicRepo: any
    private questionRepo: any
    private answerRepo: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.topicRepo = connection.getRepository(Topic)
            this.questionRepo = connection.getRepository(Question)
            this.answerRepo = connection.getRepository(Answer)
        })
    }

    getTopic = async () => {
        let topic = await this.questionRepo.find()
        return topic
    }

}

export default new UserService()