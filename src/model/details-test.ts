import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'details'})
export class DetailsTest {
    @PrimaryGeneratedColumn({type: 'bigint'})
    public readonly detailsTest_id: number
    @Column({type: 'bigint'})
    public test_id: number
    @Column({type: 'bigint'})
    public account_id: number
    @Column({type: 'bigint'})
    public question_id: number
    @Column({type: 'boolean'})
    public status: boolean
}