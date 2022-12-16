import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'topic'})
export class Topic {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly topic_id: number
    @Column({type: 'varchar'})
    public topic_name: string
}