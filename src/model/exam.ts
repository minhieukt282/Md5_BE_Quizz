import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'exam'})
export class Exam {
    @PrimaryGeneratedColumn({type: 'bigint'})
    public readonly exam_id: number
    @Column({type: 'text'})
    public exam_name: string
    @Column({type: 'bigint'})
    public category_id: number
    @Column({type: 'bigint'})
    public total_question: number
    @Column({type: 'bigint'})
    public account_id: number
    @Column({type: 'text'})
    public img: string
}