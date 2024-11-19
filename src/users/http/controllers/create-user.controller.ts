import { Request, Response } from 'express'
import { z } from 'zod'
import { CreateUserUseCase } from '@/users/usecases/create-user.usecase'
import { container } from 'tsyringe'
import { dataValidation } from '@/common/infrastructure/validation/zod'

export async function createUserController(
  request: Request,
  response: Response,
): Promise<Response> {
  const createUserSchema = z.object({
    name: z.string(),
    password: z.string().length(8),
  })

  const { name, password } = dataValidation(
    createUserSchema,
    request.body,
  )

  const createUserUseCase: CreateUserUseCase.UseCase = container.resolve(
    'CreateUserUseCase',
  )

  const user = await CreateUserUseCase.execute({ name, password })

  return response.status(201).json(user)
}