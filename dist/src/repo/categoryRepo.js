"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepo = void 0;
const data_source_1 = require("../data-source");
const category_1 = require("../model/category");
class CategoryRepo {
    constructor() {
        this.create = async (newCategory) => {
            await this.categoryRepo.save(newCategory);
        };
        this.read = async () => {
            return this.categoryRepo.find();
        };
        this.update = async (newData) => {
            await this.categoryRepo.save(newData);
        };
        this.del = async (id) => {
            await this.categoryRepo.delete(id);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.categoryRepo = connection.getRepository(category_1.Category);
        });
    }
}
exports.CategoryRepo = CategoryRepo;
//# sourceMappingURL=categoryRepo.js.map