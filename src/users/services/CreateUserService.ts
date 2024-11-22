import { hash } from 'bcryptjs';
import { UsersRepository } from '../repositories/users.repository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, password }: IRequest): Promise<User> {
    let repository: UsersRepository
 
    const hashedPassword = await hash(password, 8);

    const user = repository.create({
      name,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;