import { response } from 'express';
import { Session } from '../typeorm/entities/session.entity';
import { SessionsRepository } from '../typeorm/repository/sessions.repository';

interface IPaginatedResponse {
    sessions: Session[];
    total: number; // Opcional, apenas para respostas paginadas
    currentPage: number; // Opcional
    totalPages: number; // Opcional
}

class ListSessionService {

    
    private repository;

    constructor() {
        this.repository = new SessionsRepository()
    }
    public async execute(page: number, limit: number, paginate: boolean): Promise<IPaginatedResponse[] | Session[]> {

        if (paginate) {
            // Garantir que page e limit sejam válidos
            page = Number.isNaN(page) || page < 1 ? 1 : page;
            limit = Number.isNaN(limit) || limit < 1 ? 10 : limit;

            const { sessions, total } = await this.repository.index(page, limit);

            const totalPages = Math.ceil(total / limit);

            return {
                sessions,
                total,
                currentPage: page,
                totalPages,
            } as IPaginatedResponse;
        }

        return await this.repository.findAll();
    }

    public async findById(id: string): Promise<Session> {
        const user = await this.repository.findById(id)

        return user
    }
   
    }


export default ListSessionService;