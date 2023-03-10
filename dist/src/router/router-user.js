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
exports.routerUser.get('/category', user_controller_1.default.showCategory);
exports.routerUser.get('/exams', user_controller_1.default.showExams);
exports.routerUser.get('/exams/:examId', user_controller_1.default.showDetails);
exports.routerUser.post('/exams', user_controller_1.default.newExam);
exports.routerUser.post('/questions', user_controller_1.default.newQuestions);
exports.routerUser.post('/tests', user_controller_1.default.createTest);
exports.routerUser.post('/my-tests/:testId', user_controller_1.default.showDetailsTest);
//# sourceMappingURL=router-user.js.map