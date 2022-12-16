"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../data-source");
const topic_1 = require("../model/topic");
const question_1 = require("../model/question");
const answer_1 = require("../model/answer");
class UserService {
    constructor() {
        this.getTopic = async () => {
            let topic = await this.questionRepo.find();
            return topic;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.topicRepo = connection.getRepository(topic_1.Topic);
            this.questionRepo = connection.getRepository(question_1.Question);
            this.answerRepo = connection.getRepository(answer_1.Answer);
        });
    }
}
exports.UserService = UserService;
exports.default = new UserService();
//# sourceMappingURL=user-service..js.map