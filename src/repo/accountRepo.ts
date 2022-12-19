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
        return await this.accountRepo.find()
    }
    update = async (newData) => {
        await this.accountRepo.save(newData)
    }
    del = async (id) => {
        await this.accountRepo.delete(id)
    }
    findOne = async (username: string) => {
        let query = `select *
                     from account
                     where username = '${username}'`
        return await this.accountRepo.query(query)
    }
    findStatus = async (status: boolean, username: string) => {
        let query = `select * from account
                     where status = ${status} and username = '${username}'`
        return await this.accountRepo.query(query)
    }

}