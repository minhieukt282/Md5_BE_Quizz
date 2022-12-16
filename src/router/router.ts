import {Router} from "express";
import {routerUser} from "./router-user";

export const router = Router()
router.use('/home', routerUser)