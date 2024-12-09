import { dataSource } from "@/common/infrastructure/typeorm";
import { Repository } from "typeorm";
import { Session } from "../entities/session.entity";

export class SessionsRepository {
  private repository: Repository<Session>

  constructor() {
    this.repository = dataSource.getRepository(Session)
  }

  async create(data: Partial<Session>): Promise<Session> {
    const user = this.repository.create(data);

    const savedUser = await this.repository.save(user);

    return savedUser
  }

  // Método para buscar usuários paginados
  public async index(page: number, limit: number): Promise<{ sessions: Session[]; total: number }> {
    const [sessions, total] = await this.repository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
        relations: ['characters'], // Inclui os dados relacionados de Character
    });

    return { sessions, total };
}

// Método para buscar todos os usuários
public async findAll(): Promise<Session[]> {
    return this.repository.find({relations: ['characters']
    });
}

  async findById(id?: string): Promise<Session | null> {
    return await this.repository.findOneBy({ id });
  }

  async update(id: string, data: string): Promise<Session | null> {
  

  }
}