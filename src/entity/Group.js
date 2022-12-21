import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from "./User";
import { Session } from "./Session";

export class DOW {
    static Undefined = 0;
    static Monday = 1;
    static Tuesday = 2;
    static Wednesday = 3;
    static Thursday = 4;
    static Friday = 5;
    static Saturday = 6;
    static Sunday = 7;
}

@Entity()
export class Group {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar", { length: 200 })
    class = "";

    @Column("simple-array")
    days = Int32Array;

    @Column("simple-array")
    startHours = Int32Array;

    @Column("simple-array")
    endHours = Int32Array;

    @ManyToMany(() => User, { cascade: true })
    @JoinTable()
    trainers = undefined;

    @ManyToMany(() => User, { cascade: true })
    @JoinTable()
    students = undefined;

    @OneToMany(() => Session, (session) => session.group)
    sessions = undefined;

}