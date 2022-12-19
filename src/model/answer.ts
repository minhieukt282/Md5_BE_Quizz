import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'answer'})
export class Answer {
    @PrimaryGeneratedColumn({type: 'bigint'})
    public readonly answer_id: number
    @Column({type: 'varchar'})
    public answer_name: string
    @Column({type: 'boolean'})
    public status : boolean
    @Column({type: 'bigint'})
    public question_id: number
}