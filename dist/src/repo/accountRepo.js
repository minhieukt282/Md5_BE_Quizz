"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRepo = void 0;
const data_source_1 = require("../data-source");
const account_1 = require("../model/account");
class AccountRepo {
    constructor() {
        this.create = async (newAccount) => {
            await this.accountRepo.save(newAccount);
        };
        this.read = async () => {
            return await this.accountRepo.find();
        };
        this.update = async (newData) => {
            await this.accountRepo.save(newData);
        };
        this.del = async (id) => {
            await this.accountRepo.delete(id);
        };
        this.findOne = async (username) => {
            let query = `select *
                     from account
                     where username = '${username}'`;
            return await this.accountRepo.query(query);
        };
        this.findStatus = async (status, username) => {
            let query = `select * from account
                     where status = ${status} and username = '${username}'`;
            return await this.accountRepo.query(query);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.accountRepo = connection.getRepository(account_1.Account);
        });
    }
}
exports.AccountRepo = AccountRepo;
//# sourceMappingURL=accountRepo.js.map