import { Request, Response } from 'express'
import { z } from 'zod'

import ListUserService from '@/users/services/ListUserService'
import { instanceToInstance } from 'class-transformer'
import ListCharacterService from '@/characters/services/ListCharacterService';

export async function getCharacterController(
  request: Request,
  response: Response,
): Promise<Response> {
  const { page = 1, limit = 10, paginate = 'false' } = request.query;

  const service = new ListCharacterService();
  const result = await service.execute(
      Number(page),
      Number(limit),
      paginate === 'true' // Converte para booleano
  );

  return response.json(result);
}