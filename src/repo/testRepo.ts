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
    read = async () => {
        return this.test.find()
    }
    update = async (newData) => {
        await this.test.save(newData)
    }
    del = async (id) => {
        await this.test.delete(id)
    }

}