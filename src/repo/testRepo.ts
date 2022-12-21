import {AppDataSource} from "../data-source";
import {Test} from "../model/test";

export class TestRepo {
    private test: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.test = connection.getRepository(Test)
        })
    }

    create = async (newTest) => {
        await this.test.save(newTest)
    }
    read = async (accountId: number) => {
        return this.test.find({
            where: {
                account_id: accountId
            }
        })
    }
    update = async (newData) => {
        await this.test.save(newData)
    }
    del = async (id) => {
        await this.test.delete(id)
    }

}