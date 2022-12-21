import {AppDataSource} from "../data-source";
import {DetailsTest} from "../model/details-test";

export class DetailsRepo {
    private detailsRepo: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.detailsRepo = connection.getRepository(DetailsTest)
        })
    }

    create = async (newDetails) => {
        await this.detailsRepo.save(newDetails)
    }
    read = async () => {
        return this.detailsRepo.find()
    }
    update = async (newData) => {
        await this.detailsRepo.save(newData)
    }
    del = async (id) => {
        await this.detailsRepo.delete(id)
    }
    countStatus = async (accountId: number, testId: number) => {
        let query = `select COUNT(status) as point
                     from details
                     where status = true
                       and account_id = ${accountId}
                       and test_id = ${testId}`
        return await this.detailsRepo.query(query)
    }
    findById = async (testId: number, accountId: number) => {
        let query = `select q.question_name, a.answer_name, d.status
                     from details as d
                              join answer a on d.answer_id = a.answer_id
                              join question q on d.question_id = q.question_id
                     where d.test_id = ${testId}
                       and d.account_id = ${accountId}`
        return await this.detailsRepo.query(query)
    }

}