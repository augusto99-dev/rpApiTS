import { getRepository } from "typeorm";
import { Category } from "../entity/Category";
import { Product } from '../entity/Product'

export interface IProductPayload {
    name: string;
    description: string;
    price: number;
}

export interface IProductCategoryPayload {
    productId: number;
    categoryId: number;
}

export const getProducts = async (): Promise<Array<Product>> => {
    const productRepository = getRepository(Product);
    return productRepository.find()
}

export const createProduct = async (payload: IProductPayload): Promise<Product> => {
    const productRepository = getRepository(Product);
    const product = new Product()
    return productRepository.save({
        ...product,
        ...payload
    })
}

export const getProduct = async (id: number): Promise<Product | null> => {
    const productRepository = getRepository(Product);
    const product = await productRepository.findOne({ id: id })
    if (!product) return null
    return product
}
export const addCategory = async (payload: IProductCategoryPayload): Promise<Product> => {
    console.log('recibiendo parametros en addCategory: ', payload)
    const productRepository = getRepository(Product);
    const product = await productRepository.findOne({ id: payload.productId }, { relations: ["categories"] })
    console.log('product : ', product);
    
    if (!product) throw new Error('Error al obtener el producto');
    const categoryRepository = getRepository(Category);
    const category = await categoryRepository.findOne({ id: payload.categoryId })
    if (!category) throw new Error('Error al obtener la categoria');
    product.categories.push(category);
    console.log('product2 : ', product);

    const result = await productRepository.save(product);
    return result
}