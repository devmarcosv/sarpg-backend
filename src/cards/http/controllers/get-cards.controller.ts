import { Request, Response } from 'express'
import { z } from 'zod'

import { dataValidation } from '@/common/infrastructure/validation/zod'

export async function getCardsController(
  request: Request,
  response: Response,
) {
  const getCardSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = dataValidation(getCardSchema, request.params)

  return response.status(200).json(id)
}