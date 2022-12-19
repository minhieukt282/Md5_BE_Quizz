import {Router} from "express";
import userController from "../controller/user-controller";
import {auth} from "../middleware/auth";

export const routerUser = Router()
routerUser.use(auth)
routerUser.get('/home', userController.showExams)
routerUser.get('/:examId', userController.showDetails)
