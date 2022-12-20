"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const admin_service_1 = require("../service/admin-service");
class AdminController {
    constructor() {
        this.getAccount = async (req, res) => {
            let accounts = await this.adminController.getAccount();
            return res.status(accounts.code).json(accounts.message);
        };
        this.lockAccount = async (req, res) => {
            let status = await this.adminController.lockAccount(+req.params.accountId);
            return res.status(status.code).json(status.message);
        };
        this.deleteAccount = async (req, res) => {
            let status = await this.adminController.deleteAccount(+req.params.accountId);
            return res.status(status.code).json(status.message);
        };
        this.adminController = new admin_service_1.AdminService();
    }
}
exports.AdminController = AdminController;
exports.default = new AdminController();
//# sourceMappingURL=admin-controller.js.map