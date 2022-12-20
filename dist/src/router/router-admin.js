"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerAdmin = void 0;
const express_1 = require("express");
const admin_controller_1 = __importDefault(require("../controller/admin-controller"));
const auth_1 = require("../middleware/auth");
exports.routerAdmin = (0, express_1.Router)();
exports.routerAdmin.use(auth_1.auth);
exports.routerAdmin.get('/accounts', admin_controller_1.default.getAccount);
exports.routerAdmin.patch('/accounts/:accountId', admin_controller_1.default.lockAccount);
exports.routerAdmin.delete('/accounts/:accountId', admin_controller_1.default.deleteAccount);
//# sourceMappingURL=router-admin.js.map