import { Request, Response } from "express";
export declare class UserController {
    private userController;
    constructor();
    showExams: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showDetails: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    newExam: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createTest: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showTest: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
