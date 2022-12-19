"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const accountRepo_1 = require("../repo/accountRepo");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class LoginService {
    constructor() {
        this.checkRegister = async (data) => {
            let findAccount = await this.accountRepo.findOne(data.username);
            if (findAccount.length != 0) {
                return {
                    code: 203,
                    message: "Account already exists"
                };
            }
            else {
                data.password = await bcrypt_1.default.hash(data.password, 10);
                await this.accountRepo.create(data);
                return {
                    code: 201,
                    message: "Register done"
                };
            }
        };
        this.checkLogin = async (data) => {
            let account = data;
            let findAccount = await this.accountRepo.findOne(account.username);
            if (findAccount.length == 0) {
                return {
                    code: 203,
                    message: "Account is not defined"
                };
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(account.password, findAccount[0].password);
                let findAccountStatus = await this.accountRepo.findStatus(true, account.username);
                if (findAccountStatus.length === 1) {
                    if (comparePassword) {
                        let payload = {
                            account_id: findAccount.account_id,
                            username: findAccount.username,
                            status: findAccount.status,
                            role: findAccount.role
                        };
                        let token = jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                            expiresIn: 7 * 24 * 60 * 60 * 1000
                        });
                        return {
                            code: 200,
                            message: token
                        };
                    }
                    else {
                        return {
                            code: 200,
                            message: "Wrong password"
                        };
                    }
                }
                else {
                    return {
                        code: 200,
                        message: "Account has been locked"
                    };
                }
            }
        };
        this.accountRepo = new accountRepo_1.AccountRepo();
    }
}
exports.LoginService = LoginService;
exports.default = new LoginService();
//# sourceMappingURL=login-service.js.map