import {AccountRepo} from "../repo/accountRepo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";
import {RandomId} from "./random-id";

export class LoginService {
    private accountRepo: AccountRepo
    private randomId: RandomId

    constructor() {
        this.accountRepo = new AccountRepo()
        this.randomId = new RandomId()
    }

    register = async (data: any) => {
        let findAccount = await this.accountRepo.findOne(data.username)
        if (findAccount.length != 0) {
            return {
                code: 203,
                message: "Account already exists"
            }
        } else {
            data.password = await bcrypt.hash(data.password, 10)
            data.account_id = this.randomId.random()
            await this.accountRepo.create(data)
            return {
                code: 201,
                message: "Register done"
            }
        }
    }

    login = async (data: any) => {
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
                        account_id: findAccount[0].account_id,
                        username: findAccount[0].username,
                        status: findAccount[0].status,
                        role: findAccount[0].role
                    }
                    let token = jwt.sign(payload, SECRET, {
                        expiresIn: 7 * 24 * 60 * 60 * 1000
                    })
                    return {
                        code: 200,
                        message: {
                            token: token,
                            account_id: findAccount[0].account_id
                        }
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

    changePassword = async (data: any) => {
        let findAccount = await this.accountRepo.findById(data.account_id)
        let comparePassword = await bcrypt.compare(data.oldPassword, findAccount.password)
        if (!comparePassword) {
            return {
                code: 200,
                message: 'Password is incorrect'
            }
        } else {
            let password = await bcrypt.hash(data.newPassword, 10)
            await this.accountRepo.updatePassword(password, data.account_id)
            return {
                code: 200,
                message: 'Change password successfully'
            }
        }
    }

}

export default new LoginService()