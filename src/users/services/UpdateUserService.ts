import { UsersRepository } from "../repositories/users.repository";
import { User } from "../typeorm/entities/user.entity";

interface IRequest {
    id: string
    name: string
}

class UpdateUserService {
    private repository

    constructor() {
        this.repository = new UsersRepository()
    }

    public async update({id, name}: IRequest): Promise<User> {

        const user = await this.repository.update(id, name)
        
        return user
    }

}

export default UpdateUserService;