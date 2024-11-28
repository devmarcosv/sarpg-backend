import { Request, Response } from 'express'
import { z } from 'zod'

import ListUserService from '@/users/services/ListUserService'
import { instanceToInstance } from 'class-transformer'

export async function listUserController(
  request: Request,
  response: Response,
): Promise<Response> {
  const { id } = request.params;

  const listUserService = new ListUserService();

  const user = await listUserService.findById(id)
 

  return  response.status(200).json(user);
}