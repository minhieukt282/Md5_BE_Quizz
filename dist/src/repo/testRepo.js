"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRepo = void 0;
const data_source_1 = require("../data-source");
const test_1 = require("../model/test");
class TestRepo {
    constructor() {
        this.create = async (newTest) => {
            await this.test.save(newTest);
        };
        this.read = async (accountId) => {
            return this.test.find({
                where: {
                    account_id: accountId
                }
            });
        };
        this.update = async (newData) => {
            await this.test.save(newData);
        };
        this.del = async (id) => {
            await this.test.delete(id);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.test = connection.getRepository(test_1.Test);
        });
    }
}
exports.TestRepo = TestRepo;
//# sourceMappingURL=testRepo.js.map