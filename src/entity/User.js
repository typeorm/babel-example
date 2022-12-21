import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { StudentSubscription } from "./StudentSubscription";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar", { length: 100 })
    name = "";

    @Column("varchar", { length: 100 })
    mail = "";

    @Column("varchar", { length: 40 })
    phone = "";

    @Column("bool")
    isTrainer = false;

    @Column("bool")
    isAdmin = false;

    @OneToMany(() => StudentSubscription, (studentSubscription) => studentSubscription.student)
    studentSubscriptions = undefined;


}