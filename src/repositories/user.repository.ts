import { getRepository } from "typeorm";
import { User } from '../models/User'

export interface IUserPayload {
    firstName: string;
    lastName: string;
}

export const getUsers = async (): Promise<Array<User>> => {
    console.log('llego al getusers!!!')
    const users = await getRepository(User).find();
    console.log('PASO al getusers!!!', users)
    return users;
}

export const createUser = async (payload: IUserPayload): Promise<User> => {
    const userRepository = getRepository(User);
    const user = new User()
    return userRepository.save({
        ...user,
        ...payload
    })
}

export const getUser = async (id: number): Promise<User | null> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ id: id })
    if (!user) return null
    return user
}
