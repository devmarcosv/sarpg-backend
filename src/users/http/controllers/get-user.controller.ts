import { Request, Response } from 'express'
import { z } from 'zod'

import ListUserService from '@/users/services/ListUserService'
import { instanceToInstance } from 'class-transformer'

export async function getUserController(
  request: Request,
  response: Response,
): Promise<Response> {
  const { page = 1, limit = 10, paginate = 'false' } = request.query;

  const listUserService = new ListUserService();
  const result = await listUserService.execute(
      Number(page),
      Number(limit),
      paginate === 'true' // Converte para booleano
  );

  return res.json(result);
}