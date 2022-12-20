"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const accountRepo_1 = require("../repo/accountRepo");
class AdminService {
    constructor() {
        this.getAccount = async () => {
            let accounts = await this.accountService.read();
            return {
                code: 200,
                message: accounts
            };
        };
        this.lockAccount = async (accountId) => {
            try {
                let account = await this.accountService.findById(accountId);
                if (!account) {
                    return {
                        code: 200,
                        message: "User not found"
                    };
                }
                else {
                    if (account.role === 'admin') {
                        return {
                            code: 200,
                            message: "You don't have admin lock permission"
                        };
                    }
                    else {
                        if (account.status === true) {
                            account.status = false;
                            await this.accountService.updateStatus(account.status, accountId);
                            return {
                                code: 200,
                                message: "Lock users done"
                            };
                        }
                        else {
                            account.status = true;
                            await this.accountService.updateStatus(account.status, accountId);
                            return {
                                code: 200,
                                message: "Unlock users done"
                            };
                        }
                    }
                }
            }
            catch (err) {
                return {
                    code: 200,
                    message: err.stack
                };
            }
        };
        this.deleteAccount = async (accountId) => {
            try {
                let account = await this.accountService.findById(accountId);
                if (!account) {
                    return {
                        code: 200,
                        message: "User not found"
                    };
                }
                else {
                    if (account.role === 'admin') {
                        return {
                            code: 200,
                            message: "You don't have admin lock permission"
                        };
                    }
                    else {
                        await this.accountService.del(accountId);
                        return {
                            code: 200,
                            message: "Delete done"
                        };
                    }
                }
            }
            catch (err) {
                return {
                    code: 200,
                    message: err.stack
                };
            }
        };
        this.accountService = new accountRepo_1.AccountRepo();
    }
}
exports.AdminService = AdminService;
//# sourceMappingURL=admin-service.js.map