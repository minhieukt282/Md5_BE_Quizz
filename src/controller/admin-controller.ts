import {AdminService} from "../service/admin-service";
import {Request, Response} from "express";

export class AdminController {
    private adminController: AdminService

    constructor() {
        this.adminController = new AdminService()
    }

    getAccount = async (req: Request, res: Response) => {
        let accounts = await this.adminController.getAccount()
        return res.status(accounts.code).json(accounts.message)
    }
    lockAccount = async (req: Request, res: Response) => {
        let status = await this.adminController.lockAccount(+req.params.accountId)
        return res.status(status.code).json(status.message)
    }
    deleteAccount = async (req: Request, res: Response) => {
        let status = await this.adminController.deleteAccount(+req.params.accountId)
        return res.status(status.code).json(status.message)
    }
}

export default new AdminController()