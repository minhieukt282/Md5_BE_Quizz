import {Router} from "express";
import userController from "../controller/user-controller";
import {auth} from "../middleware/auth";

export const routerUser = Router()
routerUser.use(auth)
routerUser.get('/category', userController.showCategory)
routerUser.get('/exams', userController.showExams)
routerUser.get('/exams/:examId', userController.showDetails)
routerUser.post('/exams', userController.newExam)
routerUser.post('/tests', userController.createTest)
routerUser.post('/my-tests', userController.showMyTest)
routerUser.post('/my-tests/:testId', userController.showDetailsTest)

