import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Category } from "./Category";

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

    @ManyToMany(() => Category)
    @JoinTable()
    categories : Category[];
}