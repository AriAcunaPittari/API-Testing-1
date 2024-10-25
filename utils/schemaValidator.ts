// export function que parametros: apiresponse + schema
// importar todo de ZOD
import { APIResponse } from "playwright-core";
import { ZodType } from "zod";

export async function validateSchema(response: APIResponse, schema:ZodType){
        const jsonResponse = await response.json();
        schema.parse(jsonResponse.json());
}