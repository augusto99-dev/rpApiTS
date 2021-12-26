import { Get, Route, Tags, Post, Body, Path, Put } from "tsoa";
import { Product } from '../entity/Product'
import { getProducts, createProduct, IProductPayload, getProduct, addCategory, IProductCategoryPayload } from '../repositories/products.repository'

@Route("products")
@Tags("Product")
export default class ProductController {
    @Get("/")
    public async getProducts(): Promise<Array<Product>> {
        return getProducts()
    }

    @Post("/")
    public async createProduct(@Body() body: IProductPayload): Promise<Product> {
        return createProduct(body)
    }

    @Get("/:id")
    public async getProduct(@Path() id: string): Promise<Product | null> {
        return getProduct(Number(id))
    }

    @Put("/categories")
    public async addCategory(@Body() body: IProductCategoryPayload): Promise<Product> {
        return addCategory(body)
    }
}