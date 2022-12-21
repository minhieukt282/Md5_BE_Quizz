import {AppDataSource} from "../data-source";
import {Test} from "../model/test";

export class TestRepo {
    private testRepo: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.testRepo = connection.getRepository(Test)
        })
    }

    create = async (newTest) => {
        await this.testRepo.save(newTest)
    }
    read = async () => {
        return this.testRepo.find()
    }
    update = async (newData) => {
        await this.testRepo.save(newData)
    }
    del = async (id) => {
        await this.testRepo.delete(id)
    }
    findById = async (accountId: number) => {
        let query = `select t.test_id, e.exam_id, e.exam_name, t.point
                     from test as t
                              join exam e on t.exam_id = e.exam_id
                     where t.account_id = ${accountId}`
        return await this.testRepo.query(query)
    }

}