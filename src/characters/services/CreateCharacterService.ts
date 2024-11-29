import { hash } from 'bcryptjs';
import { dataSource } from '@/common/infrastructure/typeorm';
import { SessionsRepository } from '../typeorm/repository/sessions.repository';
import { Session } from '../typeorm/entities/session.entity';

interface IRequest {
  name: string;
  password: string;
}

class CreateCharacterService {
  private repository;

  constructor() {
    this.repository = new SessionsRepository()
  }

  public async execute(data: IRequest): Promise<Session> {

    const user =  await this.repository.create(data);
    return user;
  }
}

export default CreateCharacterService;