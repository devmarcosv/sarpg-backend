import { dataValidation } from "@/common/infrastructure/validation/zod";
import CreateSessionService from "@/sessions/services/CreateSessionService";
import { string, z } from "zod";

export async function createCharacterController(
    request: Request,
    response: Response
): Promise<Response> {
   const createSessionSchema = z.object({
    nome: z.string(),
    user_id: z.string(),
   })

   const data = dataValidation(createSessionSchema, request.body)

   const service = new CreateSessionService()
   const user = await service.execute(data)

   return response.status(201).json(user)
}