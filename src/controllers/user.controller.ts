import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Category } from "../entity/Category";
import { Product } from "../entity/Product";
import { User } from "../entity/User";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users);
}

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    return res.json(user);
}


export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if (user) {
        getRepository(User).merge(user, req.body);
        const result = await getRepository(User).save(user);
        return res.json(result);
    }
    return res.status(404).json({ error: 'User not found' });
}


export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const newUser = getRepository(User).create(req.body);
        return res.status(201).json(newUser);
    } catch (err) {
        console.log('err.message :: ', err);
        return res.status(500).json({ message: 'Error internal server: ' });
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const result = await getRepository(User).delete(req.params.id);
    return res.json(result);
}