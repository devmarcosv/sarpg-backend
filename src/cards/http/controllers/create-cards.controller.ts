import { Request, Response } from 'express'
import { z } from 'zod'
import { dataValidation } from '@/common/infrastructure/validation/zod'

export async function createCardController(
  request: Request,
  response: Response,
): Promise<Response> {
  const createCardSchema = z.object({
    name: z.string(),
    raca: z.string(),
    classe: z.string(),
    nivel: z.number(),
    status: z.string(),
    modificador: z.string(),
    habilidades: z.string(),
    itens: z.string(),
    danos: z.string(),
  })

  const payload = dataValidation(
    createCardSchema,
    request.body,
  )

  return response.status(201).json(payload)
}