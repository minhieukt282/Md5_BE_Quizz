import userService, {UserService} from "../service/user-service.";
import {Request, Response} from "express";

export class UserController {
    private userService: UserService

    constructor() {
        this.userService = new UserService()
    }

    getQuiz = async (req: Request, res: Response) => {
        let topic = await userService.getTopic()
        return res.status(200).json(topic)
    }

}

export default new UserController()