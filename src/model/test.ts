import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'test'})
export class Test {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly test_id: number
    @Column({type: 'int'})
    public account_id: number
    @Column({type: 'int'})
    public exam_id: number
    @Column({type: 'int'})
    public point: number
}