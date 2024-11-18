import { RepositoryInterface } from '@/common/domain/repositories/repository.interface'
import { ProductModel } from '../models/users.model'

    export type UserId = {
    id: string
    }

    export type CreateUserProps = {
    id?: string
    name: string
    password: number
    created_at?: Date
    updated_at?: Date
    }

    export interface ProductsRepository
    extends RepositoryInterface<ProductModel, CreateUserProps> {
    findByName(name: string): Promise<ProductModel>
    findAllByIds(productIds: UserId[]): Promise<ProductModel[]>
    conflictingName(name: string): Promise<void>
}