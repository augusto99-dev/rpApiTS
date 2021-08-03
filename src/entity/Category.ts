import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(()=> Product)
    products: Product[];
}