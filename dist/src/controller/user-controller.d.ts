import { Request, Response } from "express";
export declare class UserController {
    private userService;
    constructor();
    getQuiz: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: UserController;
export default _default;
