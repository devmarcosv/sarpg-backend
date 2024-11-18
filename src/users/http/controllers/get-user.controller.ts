import { Request, Response } from 'express'
import { z } from 'zod'

import { dataValidation } from '@/common/infrastructure/validation/zod'

export async function getUserController(
  request: Request,
  response: Response,
): Promise<Response> {
  const createUserSchema = z.object({
    name: z.string(),
    password: z.string().length(8),
    quantity: z.number(),
  })

  const { name, price, quantity } = dataValidation(
    createUserSchema,
    request.body,
  )

  const createProductUseCase: CreateProductUseCase.UseCase = container.resolve(
    'CreateProductUseCase',
  )

  const product = await createProductUseCase.execute({ name, price, quantity })

  return response.status(201).json(product)
}