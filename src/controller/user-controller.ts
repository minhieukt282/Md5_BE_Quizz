import {UserService} from "../service/user-service";
import {Request, Response} from "express";

export class UserController {
    private userController: UserService

    constructor() {
        this.userController = new UserService()
    }

    showExams = async (req: Request, res: Response) => {
        let exams = await this.userController.getAllExams()
        return res.status(200).json(exams)
    }
    showDetails = async (req: Request, res: Response) => {
        let examDetails = await this.userController.getExam(+req.params.examId)
        return res.status(200).json(examDetails)
    }

}

export default new UserController()