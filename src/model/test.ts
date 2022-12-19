import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'test'})
export class Test {
    @PrimaryGeneratedColumn({type: 'bigint'})
    public readonly test_id: number
    @Column({type: 'bigint'})
    public account_id: number
    @Column({type: 'bigint'})
    public exam_id: number
    @Column({type: 'bigint'})
    public point: number
}