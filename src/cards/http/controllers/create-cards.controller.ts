import { Request, Response } from 'express'
import { z } from 'zod'
import { dataValidation } from '@/common/infrastructure/validation/zod'
import CreateCardService from '@/cards/services/CreateCardService'

export async function createCardController(
  request: Request,
  response: Response,
): Promise<Response> {
  const createCardSchema = z.object({
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

  const payload = dataValidation(
    createCardSchema,
    request.body,
  )

  const service = new CreateCardService()

  const card = await service.execute(payload)

  return response.status(201).json(card)
}