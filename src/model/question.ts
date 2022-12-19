import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'question'})
export class Question {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly question_id: number
    @Column({type: 'varchar'})
    public question_name: string
    @Column({type: 'int'})
    public category_id: number
    @Column({type: 'int'})
    public account_id: number
    @Column({type: 'text', default: null})
    public img: string
}