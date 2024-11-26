import { Request, Response } from 'express'
import { z } from 'zod'
import { dataValidation } from '@/common/infrastructure/validation/zod'
import CreateUserService from '@/users/services/CreateUserService'
import { instanceToInstance } from 'class-transformer';


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

  const service = new CreateUserService();

  const user = service.execute({ name, password})
  console.log(user)



  return response.status(201).json(instanceToInstance(user))
}