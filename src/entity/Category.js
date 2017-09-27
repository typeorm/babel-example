import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar")
    name = "";

}