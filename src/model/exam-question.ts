import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'exam-question'})
export class ExamQuestion {
    @PrimaryGeneratedColumn({type: 'bigint'})
    public readonly examQuestion_id: number
    @Column({type: 'bigint'})
    public exam_id: number
    @Column({type: 'bigint'})
    public question_id: number
}