import { User } from '../typeorm/entities/user.entity';
import { UsersRepository } from '../repositories/users.repository';

interface IPaginatedResponse {
    users: User[];
    total: number; // Opcional, apenas para respostas paginadas
    currentPage: number; // Opcional
    totalPages: number; // Opcional
}

class ListUserService {

    
    private repository;

    constructor() {
        this.repository = new UsersRepository()
    }
    public async execute(page: number, limit: number, paginate: boolean): Promise<IPaginatedResponse[] | User[]> {

        if (paginate) {
            // Garantir que page e limit sejam válidos
            page = Number.isNaN(page) || page < 1 ? 1 : page;
            limit = Number.isNaN(limit) || limit < 1 ? 10 : limit;

            const { users, total } = await this.repository.index(page, limit);

            const totalPages = Math.ceil(total / limit);

            return {
                users,
                total,
                currentPage: page,
                totalPages,
            } as IPaginatedResponse;
        }

        return await this.repository.findAll();
    }
    }


export default ListUserService;