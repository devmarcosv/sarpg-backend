import ListCharacterService from "@/characters/services/ListCharacterService";

export async function listSessionController (
request: Request,
response: Response,
): Promise<Response> {
  const { page = 1, limit = 10, paginate = 'false' } = request.query;

  const listUserService = new ListCharacterService();
  const result = await listUserService.execute(
      Number(page),
      Number(limit),
      paginate === 'true' // Converte para booleano
  );

  return response.json(result);
}