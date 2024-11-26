import { Request, Response } from 'express'
import { z } from 'zod'
import { dataValidation } from '@/common/infrastructure/validation/zod'

export async function updateCardController(
  request: Request,
  response: Response,
) {
  const updateCardBodySchema = z.object({
    nome: z.string(),
    raca: z.string(),
    classe: z.string(),
    nivel: z.number(),
    status: z.string(),
    modificador: z.string(),
    habilidades: z.string(),
    itens: z.string(),
    danos: z.string(),
  })

  const { name, price, quantity } = dataValidation(
    updateCardBodySchema,
    request.body,
  )

  const updateCardParamSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = dataValidation(updateCardParamSchema, request.params)

  return response.status(200).json(card)
}