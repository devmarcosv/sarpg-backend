import { response } from 'express';
import { CharacterRepository } from '../typeorm/repositories/character.repository';
import { Character } from '../typeorm/entities/character.entity';

interface IPaginatedResponse {
    characters: Character[];
    total: number; // Opcional, apenas para respostas paginadas
    currentPage: number; // Opcional
    totalPages: number; // Opcional
}

class ListCharacterService {

    
    private repository;

    constructor() {
        this.repository = new CharacterRepository()
    }
    public async execute(page: number, limit: number, paginate: boolean): Promise<IPaginatedResponse[] | Character[]> {

        if (paginate) {
            // Garantir que page e limit sejam válidos
            page = Number.isNaN(page) || page < 1 ? 1 : page;
            limit = Number.isNaN(limit) || limit < 1 ? 10 : limit;

            const { characters, total } = await this.repository.index(page, limit);

            const totalPages = Math.ceil(total / limit);

            return {
                characters,
                total,
                currentPage: page,
                totalPages,
            } as IPaginatedResponse;
        }

        return await this.repository.findAll();
    }

    public async findById(id: string): Promise<Character> {
        const user = await this.repository.findById(id)

        return user
    }
   
    }


export default ListCharacterService;