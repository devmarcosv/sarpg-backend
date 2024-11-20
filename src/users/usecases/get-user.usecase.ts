import { inject, injectable } from 'tsyringe'
import { UserOutput } from '../types/user.type'
import { UsersRepository } from '../repositories/users.repository'

export namespace GetUserUsecase {
  export type Input = {
    id: string
  }

  export type Output = UserOutput

  @injectable()
  export class UseCase {
    constructor(
      @inject('ProductRepository')
      private userRepository: UsersRepository,
    ) {}

    async execute(input: Input): Promise<Output> {
      const user: UserOutput = await this.userRepository.findById(
        input.id,
      )

      return user
    }
  }
}