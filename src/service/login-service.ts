import {AccountRepo} from "../repo/accountRepo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";

export class LoginService {
    private accountRepo: AccountRepo

    constructor() {
        this.accountRepo = new AccountRepo()
    }

    checkRegister = async (data) => {
        let findAccount = await this.accountRepo.findOne(data.username)
        if (findAccount.length != 0) {
            return {
                code: 203,
                message: "Account already exists"
            }
        } else {
            data.password = await bcrypt.hash(data.password, 10)
            await this.accountRepo.create(data)
            return {
                code: 201,
                message: "Register done"
            }
        }
    }

    checkLogin = async (data) => {
        let account = data
        let findAccount = await this.accountRepo.findOne(account.username)
        if (findAccount.length == 0) {
            return {
                code: 203,
                message: "Account is not defined"
            }
        } else {
            let comparePassword = await bcrypt.compare(account.password, findAccount[0].password)
            let findAccountStatus = await this.accountRepo.findStatus(true, account.username)
            if (findAccountStatus.length === 1) {
                if (comparePassword) {
                    let payload = {
                        account_id: findAccount.account_id,
                        username: findAccount.username,
                        status: findAccount.status,
                        role: findAccount.role
                    }
                    let token = jwt.sign(payload, SECRET, {
                        expiresIn: 7 * 24 * 60 * 60 * 1000
                    })
                    return {
                        code: 200,
                        message: token
                    }
                } else {
                    return {
                        code: 200,
                        message: "Wrong password"
                    }
                }
            } else {
                return {
                    code: 200,
                    message: "Account has been locked"
                }
            }
        }
    }

}

export default new LoginService()