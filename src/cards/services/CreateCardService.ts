import { hash } from 'bcryptjs';
import { UsersRepository } from '../repositories/users.repository';
import { User } from '../typeorm/entities/user.entity';
import { dataSource } from '@/common/infrastructure/typeorm';
import { CardsRepository } from '../repositories/cards.repository';
import { Card } from '../typeorm/entities/card.entity';

interface IRequest {
nome: string
raca: string
classe: string
nivel: string
status: string
modificador: string
habilidades: string
itens: string
danos: string
}

class CreateCardService {
  private repository;

  constructor() {
    this.repository = new CardsRepository()
  }

  public async execute(data: IRequest): Promise<Card> {

    const user =  await this.repository.create(data);
    console.log(user)
    return user;
  }
}

export default CreateCardService;