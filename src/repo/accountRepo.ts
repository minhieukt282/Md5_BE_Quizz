import {AppDataSource} from "../data-source";
import {Account} from "../model/account";

export class AccountRepo {
    private accountRepo: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.accountRepo = connection.getRepository(Account)
        })
    }

    create = async (newAccount) => {
        await this.accountRepo.save(newAccount)
    }
    read = async () => {
        return this.accountRepo.find()
    }
    update = async (newData) => {
        await this.accountRepo.save(newData)
    }
    del = async (id) => {
        await this.accountRepo.delete(id)
    }

}