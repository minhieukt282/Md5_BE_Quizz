import {AppDataSource} from "../data-source";
import {Category} from "../model/category";

export class CategoryRepo {
    private categoryRepo: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.categoryRepo = connection.getRepository(Category)
        })
    }

    create = async (newCategory) => {
        await this.categoryRepo.save(newCategory)
    }
    read = async () => {
        return this.categoryRepo.find()
    }
    update = async (newData) => {
        await this.categoryRepo.save(newData)
    }
    del = async (id) => {
        await this.categoryRepo.delete(id)
    }

}