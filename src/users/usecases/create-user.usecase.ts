import { BadRequestError } from '@/common/domain/errors/bad-request-error'
import { UsersRepository } from '@/users/repositories/users.repository'
import { inject, injectable } from 'tsyringe'
import { UserOutput } from '@/users/types/user.type'

export namespace CreateUserUseCase {
  export type Input = {
    name: string
    password: string
  }

  export type Output = UserOutput

  @injectable()
  export class UseCase {
    constructor(
      @inject('UsersRepository')
      private usersRepository: UsersRepository,
    ) {}

    async execute(input: Input): Promise<Output> {
    
      const user = this.usersRepository.create(input)
      const createdProduct: UserOutput =
        await this.usersRepository.insert(user)

      return createdProduct
    }
  }
}