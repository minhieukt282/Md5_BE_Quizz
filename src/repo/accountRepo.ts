import {AppDataSource} from "../data-source";
import {Account} from "../model/account";

export class AccountRepo {
    private accountRepo: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.accountRepo = connection.getRepository(Account)
        })
    }

    create = async (newAccount: any) => {
        await this.accountRepo.save(newAccount)
    }
    read = async () => {
        return await this.accountRepo.find({
            where: {role: 'user'}
        })
    }
    updatePassword = async (newPassword: string, id: number) => {
        let query = `UPDATE account
                     SET password = '${newPassword}'
                     WHERE account_id = ${id}`
        await this.accountRepo.query(query)
    }
    updateStatus = async (status: boolean, id: number) => {
        let query = `UPDATE account
                     SET status = ${status}
                     WHERE account_id = ${id}`
        await this.accountRepo.query(query)
    }
    del = async (id: number) => {
        await this.accountRepo.delete(id)
    }
    findById = async (id: number) => {
        return await this.accountRepo.findOneById(id)
    }
    findOne = async (username: string) => {
        return await this.accountRepo.find({
            where: {
                username: username
            }
        })
    }
    findStatus = async (status: boolean, username: string) => {
        return await this.accountRepo.find({
            where: {
                status: status,
                username: username
            }
        })
    }

}