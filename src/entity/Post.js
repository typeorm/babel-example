import {Entity, PrimaryColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Category} from "./Category";

@Entity()
export class Post {

    @PrimaryColumn("int", { generated: true })
    id = undefined;

    @Column("string")
    title = "";

    @Column("text")
    text = "";

    @ManyToMany(type => Category, { cascadeInsert: true })
    @JoinTable()
    categories = undefined;

}