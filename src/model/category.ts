import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'category'})
export class Category {
    @PrimaryGeneratedColumn({type: 'bigint'})
    public readonly category_id: number
    @Column({type: 'varchar'})
    public category_name: string
}