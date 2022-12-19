import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'account'})
export class Account {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly account_id: number
    @Column({type: 'varchar'})
    public username: string
    @Column({type: 'text'})
    public password: string
    @Column({type: "varchar"})
    public display_name : string
    @Column({type: "varchar"})
    public role : string
    @Column({type: "boolean"})
    public status : boolean
}