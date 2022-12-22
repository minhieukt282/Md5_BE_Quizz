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
    newQuestions = async (req: Request, res: Response) => {
        let status = await this.userController.createNewQuestions(req.body)
        return res.status(status.code).json({message: status.message})
    }
    showMyExam = async (req: Request, res: Response) => {
        let status = await this.userController.getMyExam(+req.body.account_id)
        return res.status(status.code).json({message: status.message})
    }
    showCategory = async (req: Request, res: Response) => {
        let category = await this.userController.getCategory()
        return res.status(200).json(category)
    }
    createTest = async (req: Request, res: Response) => {
        let status = await this.userController.createTest(req.body)
        return res.status(status.code).json(status.message)
    }
    showMyTest = async (req: Request, res: Response) => {
        let status = await this.userController.getMyTest(+req.body.account_id)
        return res.status(status.code).json(status.message)
    }
    showDetailsTest = async (req: Request, res: Response) => {
        let status = await this.userController.getDetailsTest(+req.params.testId, +req.body.account_id)
        return res.status(status.code).json(status.message)
    }

}

export default new UserController()