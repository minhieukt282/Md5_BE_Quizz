import {Router} from "express";
import {routerUser} from "./router-user";
import {routerLogin} from "./router-login";
import {routerAdmin} from "./router-admin";

export const router = Router()
router.use('/', routerLogin)
router.use('/', routerUser)
router.use('/admin', routerAdmin)
