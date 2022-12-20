"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user-service");
class UserController {
    constructor() {
        this.showExams = async (req, res) => {
            let exams = await this.userController.getAllExams();
            return res.status(200).json(exams);
        };
        this.showDetails = async (req, res) => {
            let examDetails = await this.userController.getExamDetails(+req.params.examId);
            return res.status(200).json(examDetails);
        };
        this.newExam = async (req, res) => {
            let status = await this.userController.createNewExam(req.body);
            return res.status(status.code).json({ message: status.message });
        };
        this.showCategory = async (req, res) => {
            let category = await this.userController.getCategory();
            return res.status(200).json(category);
        };
        this.userController = new user_service_1.UserService();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map