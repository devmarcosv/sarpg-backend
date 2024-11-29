import { dataValidation } from "@/common/infrastructure/validation/zod";
import { string, z } from "zod";

export async function createSessionController(
    request: Request,
    response: Response
): Promise<Response> {
   const createSessionSchema = z.object({
    nome: z.string(),
    mestre_id: z.string(),
    data_inicio: z.date().optional(),
    data_fim: z.date().optional()
   })

   const data = dataValidation(createSessionSchema, request.body)
}