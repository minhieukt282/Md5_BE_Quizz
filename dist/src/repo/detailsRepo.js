"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsRepo = void 0;
const data_source_1 = require("../data-source");
const details_test_1 = require("../model/details-test");
class DetailsRepo {
    constructor() {
        this.create = async (newDetails) => {
            await this.detailsRepo.save(newDetails);
        };
        this.read = async () => {
            return this.detailsRepo.find();
        };
        this.update = async (newData) => {
            await this.detailsRepo.save(newData);
        };
        this.del = async (id) => {
            await this.detailsRepo.delete(id);
        };
        this.countStatus = async (accountId, testId) => {
            let query = `select COUNT(status) as point
                     from details
                     where status = true
                       and account_id = ${accountId}
                       and test_id = ${testId}`;
            return await this.detailsRepo.query(query);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.detailsRepo = connection.getRepository(details_test_1.DetailsTest);
        });
    }
}
exports.DetailsRepo = DetailsRepo;
//# sourceMappingURL=detailsRepo.js.map