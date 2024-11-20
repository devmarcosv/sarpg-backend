import { Request, Response } from 'express'
import { z } from 'zod'

import { dataValidation } from '@/common/infrastructure/validation/zod'

export async function getCardsController(
  request: Request,
  response: Response,
) {
  const getUserSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = dataValidation(getCardsSchema, request.params)

  const getProductUseCase: GetProductUseCase.UseCase =
    container.resolve('GetProductUseCase')

  const product = await getProductUseCase.execute({ id })

  return response.status(200).json(product)
}