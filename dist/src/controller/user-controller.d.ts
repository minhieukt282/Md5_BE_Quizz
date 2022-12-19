import { Request, Response } from "express";
export declare class UserController {
    private userController;
    constructor();
    showExams: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showDetails: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: UserController;
export default _default;
