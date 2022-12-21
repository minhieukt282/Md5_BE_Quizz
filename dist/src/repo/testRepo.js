"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRepo = void 0;
const data_source_1 = require("../data-source");
const test_1 = require("../model/test");
class TestRepo {
    constructor() {
        this.create = async (newTest) => {
            await this.testRepo.save(newTest);
        };
        this.read = async () => {
            return this.testRepo.find();
        };
        this.update = async (newData) => {
            await this.testRepo.save(newData);
        };
        this.del = async (id) => {
            await this.testRepo.delete(id);
        };
        this.findById = async (accountId) => {
            let query = `select t.test_id, e.exam_id, e.exam_name, t.point
                     from test as t
                              join exam e on t.exam_id = e.exam_id
                     where t.account_id = ${accountId}`;
            return await this.testRepo.query(query);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.testRepo = connection.getRepository(test_1.Test);
        });
    }
}
exports.TestRepo = TestRepo;
//# sourceMappingURL=testRepo.js.map