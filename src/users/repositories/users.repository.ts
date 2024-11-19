import { RepositoryInterface } from '@/common/domain/repositories/repository.interface'
import { UserModel } from '../models/users.model'

    export type UserId = {
    id: string
    }

    export type CreateUserProps = {
    id?: string
    name: string
    password: string
    created_at?: Date
    updated_at?: Date
    }

    export interface UsersRepository
    extends RepositoryInterface<UserModel, CreateUserProps> {
    findByName(name: string): Promise<UserModel>
    findAllByIds(productIds: UserId[]): Promise<UserModel[]>
    conflictingName(name: string): Promise<void>
}