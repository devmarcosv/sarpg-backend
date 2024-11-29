import { dataSource } from "@/common/infrastructure/typeorm";
import { Repository } from "typeorm";
import { Character } from "../entities/character.entity";

export class CharacterRepository {
  private repository: Repository<Character>

  constructor() {
    this.repository = dataSource.getRepository(Character)
  }

  async create(data: Partial<Character>): Promise<Character> {
    const user = this.repository.create(data);

    const savedUser = await this.repository.save(user);

    return savedUser
  }

  // Método para buscar usuários paginados
  public async index(page: number, limit: number): Promise<{ users: Character[]; total: number }> {
    const [users, total] = await this.repository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
    });

    return { users, total };
}

// Método para buscar todos os usuários
public async findAll(): Promise<Character[]> {
    return this.repository.find();
}

  async findById(id?: string): Promise<Character | null> {
    return await this.repository.findOneBy({ id });
  }

  async update(id: string, data: string): Promise<Character | null> {
    const user = await this.repository.findOneBy({id})

    user.name = data

    await this.repository.save(user)

    return user

  }
}