import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";


@Entity()
export class Model {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    key: string;

    @Column("int")
    quantity: number;

    @Column()
    description: string;

    @ManyToOne(type => Product, product => product.models)
    product: Product;
}