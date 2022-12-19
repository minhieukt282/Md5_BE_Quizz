import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'exam-question'})
export class ExamQuestion {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly examQuestion_id: number
    @Column({type: 'int'})
    public exam_id: number
    @Column({type: 'int'})
    public question_id: number
}