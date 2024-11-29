import CreateCharacterService from "@/characters/services/CreateCharacterService";
import { dataValidation } from "@/common/infrastructure/validation/zod";
import CreateSessionService from "@/sessions/services/CreateSessionService";
import { string, z } from "zod";

export async function createCharacterController(
    request: Request,
    response: Response
): Promise<Response> {
   const createCharacterSchema = z.object({
    nome: z.string(),
    session_id: z.string(),
    classe: z.string(),
    raca: z.string(),
    pontos_de_vida: z.number()
   })

   const data = dataValidation(createCharacterSchema, request.body)

   const service = new CreateCharacterService()
   const user = await service.execute(data)

   return response.status(201).json(user)
}