"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUser = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user-controller"));
const auth_1 = require("../middleware/auth");
exports.routerUser = (0, express_1.Router)();
exports.routerUser.use(auth_1.auth);
exports.routerUser.get('/exams', user_controller_1.default.showExams);
exports.routerUser.get('/:examId', user_controller_1.default.showDetails);
exports.routerUser.post('/exams', user_controller_1.default.newExam);
//# sourceMappingURL=router-user.js.map