"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router_user_1 = require("./router-user");
exports.router = (0, express_1.Router)();
exports.router.use('/home', router_user_1.routerUser);
//# sourceMappingURL=router.js.map