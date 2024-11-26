import { User } from '../typeorm/entities/user.entity';
import { UsersRepository } from '../repositories/users.repository';

interface IPaginatedResponse {
    users: User[];
    total?: number; // Opcional, apenas para respostas paginadas
    currentPage?: number; // Opcional
    totalPages?: number; // Opcional
}

class ListUserService {

    
    private repository;

    constructor() {
        this.repository = new UsersRepository()
    }
    public async execute(page: number, limit: number, paginate: boolean): Promise<User[]> {

        const users = this.repository.index();

        return users;
    }
}

export default ListUserService;