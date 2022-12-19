import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'details'})
export class DetailsTest {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly detailsTest_id: number
    @Column({type: 'int'})
    public test_id: number
    @Column({type: 'int'})
    public account_id: number
    @Column({type: 'int'})
    public question_id: number
    @Column({type: 'boolean'})
    public status: boolean
}