import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";


@Entity()
export class Setting {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar", { length: 200 })
    name = "";

    @Column("varchar", { length: 100 })
    type = "";

    @Column("varchar", { length: 200 })
    value = -1;

}