import { Request, Response } from "express";
export declare class AdminController {
    private adminController;
    constructor();
    getAccount: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    lockAccount: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteAccount: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: AdminController;
export default _default;
