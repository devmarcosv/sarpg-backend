import { hash } from 'bcryptjs';
import { UsersRepository } from '../repositories/users.repository';
import { User } from '../typeorm/entities/user.entity';
import { dataSource } from '@/common/infrastructure/typeorm';

interface IRequest {
  name: string;
  password: string;
}

class CreateUserService {
  private repository;

  constructor() {
    this.repository = new UsersRepository()
  }

  public async execute({ name, password }: IRequest): Promise<User> {
 
    const hashedPassword = await hash(password, 8);
    const obj = { name, password: hashedPassword}

    const user =  await this.repository.create(obj);
    return user;
  }
}

export default CreateUserService;