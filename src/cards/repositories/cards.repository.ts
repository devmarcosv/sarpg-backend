import { dataSource } from "@/common/infrastructure/typeorm";
import { Repository } from "typeorm";
import { Card } from "../typeorm/entities/card.entity";

export class CardsRepository {
  private repository: Repository<Card>

  constructor() {
    this.repository = dataSource.getRepository(Card)
  }

  async create(data: Partial<Card>): Promise<Card> {
    const user = this.repository.create(data);

    const savedUser = await this.repository.save(user);

    return savedUser
  }

  // Método para buscar usuários paginados
  public async index(page: number, limit: number): Promise<{ cards: Card[]; total: number }> {
    const [cards, total] = await this.repository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
    });

    return { cards, total };
}

// Método para buscar todos os usuários
public async findAll(): Promise<Card[]> {
    return this.repository.find();
}

  async findById(id?: string): Promise<Card | null> {
    return await this.repository.findOneBy({ id });
  }

}