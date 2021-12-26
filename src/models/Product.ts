import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Category } from "./Category";
import { Model } from "./Model";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column("float")
    price: number;

    @Column("int")
    quantity: number;

    @ManyToMany(type => Category, category => category.products)
    @JoinTable()
    categories : Category[];

    @OneToMany(type => Model, model => model.product)
    models : Product[];
}