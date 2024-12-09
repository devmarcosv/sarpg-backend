import { response } from 'express';
import { Card } from '../typeorm/entities/card.entity';
import { CardsRepository } from '../repositories/cards.repository';

interface IPaginatedResponse {
    cards: Card[];
    total: number; // Opcional, apenas para respostas paginadas
    currentPage: number; // Opcional
    totalPages: number; // Opcional
}

class ListCardService {

    
    private repository;

    constructor() {
        this.repository = new CardsRepository()
    }
    public async execute(page: number, limit: number, paginate: boolean): Promise<IPaginatedResponse[] | Card[]> {

        if (paginate) {
            // Garantir que page e limit sejam válidos
            page = Number.isNaN(page) || page < 1 ? 1 : page;
            limit = Number.isNaN(limit) || limit < 1 ? 10 : limit;

            const { cards, total } = await this.repository.index(page, limit);

            const totalPages = Math.ceil(total / limit);

            return {
                cards,
                total,
                currentPage: page,
                totalPages,
            } as IPaginatedResponse;
        }

        return await this.repository.findAll();
    }

    public async findById(id: string): Promise<Card> {
        const user = await this.repository.findById(id)

        return user
    }
   
    }


export default ListCardService;