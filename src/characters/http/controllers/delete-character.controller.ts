import { Request, Response } from 'express'
import { z } from 'zod'
import { dataSource } from "@/common/infrastructure/typeorm";

import ListUserService from '@/users/services/ListUserService'
import { instanceToInstance } from 'class-transformer'
import ListCharacterService from '@/characters/services/ListCharacterService';
import { CharacterRepository } from '@/characters/typeorm/repositories/character.repository';
import { Character } from '@/characters/typeorm/entities/character.entity';

export async function deleteCharacterController(
  request: Request,
  response: Response,
): Promise<Response> {

    const repository = dataSource.getRepository(Character) 
    const { id } = request.params
    const character = await repository.findOne({where: {id}})

if (!character) {
      throw new Error('User not found');
    }
    
    await repository.remove(character); // Excluir o usuário

    return response.status(200)

}