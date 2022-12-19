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

}