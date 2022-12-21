import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { Subscription } from "./Subscription";
import { User } from "./User";


@Entity()
export class StudentSubscription {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("date")
    startDate = new Date(Date.UTC(2000, 1, 1));

    @Column("date")
    endDate = new Date(Date.UTC(2000, 1, 1));

    @Column("int")
    nrSessions = -1;

    @Column("int")
    nrGroups = 1;

    @ManyToOne(() => Subscription, (subscription) => subscription.studentSubscriptions)
    subscription = undefined;

    @ManyToOne(() => User, (student) => student.studentSubscriptions)
    student = undefined;

}