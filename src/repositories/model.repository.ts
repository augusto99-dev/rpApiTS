import { getRepository } from "typeorm";
import { Model } from '../entity/Model'

export interface IModelPayload {
    key: string;
    description: string;
    quantity: number;
    productId: number;
}

export const getModels = async (): Promise<Array<Model>> => {
    const modelRepository = getRepository(Model);
    return modelRepository.find()
}

export const createModel = async (payload: IModelPayload): Promise<Model> => {
    const modelRepository = getRepository(Model);
    const model = new Model()
    return modelRepository.save({
        ...model,
        ...payload
    })
}

export const getModel = async (id: number): Promise<Model | null> => {
    const modelRepository = getRepository(Model);
    const model = await modelRepository.findOne({ id: id })
    if (!model) return null
    return model
}