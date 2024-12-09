import { Request, Response } from 'express'
import { z } from 'zod'
import { dataSource } from "@/common/infrastructure/typeorm";


import { Character } from '@/characters/typeorm/entities/character.entity';
import { Session } from '@/sessions/typeorm/entities/session.entity';

export async function deleteSessionController(
  request: Request,
  response: Response,
): Promise<Response> {

    const repository = dataSource.getRepository(Session) 
    const { id } = request.params
    const session = await repository.findOne({where: {id}})

if (!session) {
      throw new Error('User not found');
    }
    
    await repository.remove(session); // Excluir o usuário

    return response.status(200)

}