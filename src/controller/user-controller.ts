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
        let examDetails = await this.userController.getExamDetails(+req.params.examId)
        return res.status(200).json(examDetails)
    }
    newExam = async (req: Request, res: Response) => {
        let status = await this.userController.createNewExam(req.body)
        return res.status(status.code).json({message: status.message})
    }
    showCategory =  async (req: Request, res: Response) => {
        let category = await this.userController.getCategory()
        return res.status(200).json(category)
    }

}

export default new UserController()