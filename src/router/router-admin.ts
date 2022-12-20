import {Router} from "express";
import adminController from "../controller/admin-controller";
import {auth} from "../middleware/auth";

export const routerAdmin = Router()
routerAdmin.use(auth)
routerAdmin.get('/accounts', adminController.getAccount)
routerAdmin.patch('/accounts/:accountId', adminController.lockAccount)
routerAdmin.delete('/accounts/:accountId', adminController.deleteAccount)