import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'exam'})
export class Exam {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly exam_id: number
    @Column({type: 'varchar'})
    public exam_name: string
    @Column({type: 'int'})
    public total_question: number
    @Column({type: 'int'})
    public account_id: number
    @Column({type: 'text'})
    public img: string
}