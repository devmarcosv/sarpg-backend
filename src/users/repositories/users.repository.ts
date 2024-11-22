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

    return await this.repository.save(user);
  }

  async index(): Promise<User[]> {
    return await this.repository.find();
  }

  async findById(id?: string): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, data: Partial<User>): Promise<User | null> {
    await this.repository.update(id, data);

    return await this.repository.findOneBy({id})
  }
}