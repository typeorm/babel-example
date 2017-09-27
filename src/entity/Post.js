import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Category} from "./Category";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar")
    title = "";

    @Column("text")
    text = "";

    @ManyToMany(type => Category, { cascadeInsert: true })
    @JoinTable()
    categories = undefined;

}