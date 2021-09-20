import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Category } from "./Category";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 10, unique: true })
    key: string;

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
}