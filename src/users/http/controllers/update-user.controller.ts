import { Request, Response } from 'express'
import { z } from 'zod'

import ListUserService from '@/users/services/ListUserService'
import { instanceToInstance } from 'class-transformer'
import { dataValidation } from '@/common/infrastructure/validation/zod'
import UpdateUserService from '@/users/services/UpdateUserService'

export async function updateUserController(
  request: Request,
  response: Response,
): Promise<Response> {

  const updateUserSchema = z.object({
    name: z.string().optional(),
    })

    const { name } = dataValidation(updateUserSchema, request.body)
  const { id } = request.params;

  const updateUser = new UpdateUserService();

  const user = await updateUser.update({id, name})
 

  return  response.status(200).json(user);
}