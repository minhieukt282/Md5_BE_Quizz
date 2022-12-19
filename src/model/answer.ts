import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'answer'})
export class Answer {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly answer_id: number
    @Column({type: 'varchar'})
    public answer_name: string
    @Column({type: 'boolean'})
    public status : boolean
    @Column({type: 'int'})
    public question_id: number
}