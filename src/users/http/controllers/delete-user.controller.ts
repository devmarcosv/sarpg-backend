import { Request, Response } from 'express'
import { z } from 'zod'
import { dataSource } from "@/common/infrastructure/typeorm";

import { Character } from '@/characters/typeorm/entities/character.entity';
import { User } from '@/users/typeorm/entities/user.entity';

export async function deleteUserController(
  request: Request,
  response: Response,
): Promise<Response> {

    const repository = dataSource.getRepository(User) 
    const { id } = request.params
    const user = await repository.findOne({where: {id}})

if (!user) {
      throw new Error('User not found');
    }
    
    await repository.remove(user); // Excluir o usuário

    return response.status(200)

}