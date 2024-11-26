import { Request, Response } from 'express'
import { z } from 'zod'
import { container } from 'tsyringe'
import { dataValidation } from '@/common/infrastructure/validation/zod'
import { DeleteCardUseCase } from '@/cards/application/usecases/delete-card.usecase'

export async function deleteCardController(
  request: Request,
  response: Response,
) {
  const deleteCardParamSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = dataValidation(deleteCardParamSchema, request.params)

  const deleteCardUseCase: DeleteCardUseCase.UseCase = container.resolve(
    'DeleteCardUseCase',
  )

  await deleteCardUseCase.execute({ id })

  return response.status(204).send()
}