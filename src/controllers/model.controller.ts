import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Model } from '../entity/Model'
import { getModels, createModel, IModelPayload, getModel } from '../repositories/model.repository'

@Route("models")
@Tags("Model")
export default class ModelController {
    @Get("/")
    public async getModels(): Promise<Array<Model>> {
        return getModels()
    }

    @Post("/")
    public async createModel(@Body() body: IModelPayload): Promise<Model> {
        return createModel(body)
    }

    @Get("/:id")
    public async getModel(@Path() id: string): Promise<Model | null> {
        return getModel(Number(id))
    }
}