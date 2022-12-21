import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { User } from "./User";
import { Group } from "./Group";

@Entity()
export class Session {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar", { length: 200 })
    class = "";

    @Column("date")
    day = undefined;

    @Column("int")
    startHour = 0;

    @Column("int")
    endHour = 0;

    @ManyToMany(() => User, { cascade: true })
    @JoinTable()
    trainers = undefined;

    @ManyToMany(() => User, { cascade: true })
    @JoinTable()
    students = undefined;

    @ManyToOne(() => Group, (group) => group.sessions)
    group = undefined;
}