import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Category {

    @PrimaryColumn("int", { generated: true })
    id = undefined;

    @Column("string")
    name = "";

}