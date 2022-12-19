import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'account'})
export class Account {
    @PrimaryGeneratedColumn({type: 'bigint'})
    public readonly account_id: number
    @Column({type: 'varchar'})
    public username: string
    @Column({type: 'text'})
    public password: string
    @Column({type: "varchar", default: 'undefined'})
    public display_name : string
    @Column({type: "varchar", default: 'user'})
    public role : string
    @Column({type: "boolean", default: true})
    public status : boolean
}