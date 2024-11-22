import { Request, Response } from 'express'
import { z } from 'zod'
import { dataValidation } from '@/common/infrastructure/validation/zod'
import CreateUserService from '@/users/services/CreateUserService'

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

  const user = new CreateUserService()



  return response.status(201).json(user)
}