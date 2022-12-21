import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { StudentSubscription } from "./StudentSubscription";


@Entity()
export class Subscription {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar", { length: 200 })
    name = "";

    @Column("int")
    nrSessions = -1;

    @Column("int")
    nrMonths = -1;

    @Column("int")
    nrGroups = -1;

    @Column("int")
    price = 0;

    @OneToMany(() => StudentSubscription, (studentSubscription) => studentSubscription.subscription)
    studentSubscriptions = undefined;
}