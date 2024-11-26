import { dataSource } from "@/common/infrastructure/typeorm";
import { Repository } from "typeorm";
import { User } from "../typeorm/entities/user.entity";

export class UsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = dataSource.getRepository(User)
  }

  async create(data: Partial<User>): Promise<User> {
    const user = this.repository.create(data);

    const savedUser = await this.repository.save(user);

    return savedUser
  }

  // Método para buscar usuários paginados
  public async index(page: number, limit: number): Promise<{ users: User[]; total: number }> {
    const [users, total] = await this.repository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
    });

    return { users, total };
}

// Método para buscar todos os usuários
public async findAll(): Promise<User[]> {
    return this.repository.find();
}

  async findById(id?: string): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, data: Partial<User>): Promise<User | null> {
    await this.repository.update(id, data);

    return await this.repository.findOneBy({id})
  }
}