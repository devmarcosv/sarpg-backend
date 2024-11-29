
import { CharacterRepository } from '../typeorm/repositories/character.repository';
import { Character } from '../typeorm/entities/character.entity';

interface IRequest {
  nome: string
  session_id: string
  raca: string
  classe: string
  pontos_de_vida: string
 }

class CreateCharacterService {
  private repository;

  constructor() {
    this.repository = new CharacterRepository()
  }

  public async execute(data: IRequest): Promise<Character> {

    const user =  await this.repository.create(data);
    return user;
  }
}

export default CreateCharacterService;