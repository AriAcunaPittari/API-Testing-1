import { APIResponse } from "playwright-core";
import { ZodType } from "zod";

export async function validateSchema(response: APIResponse, schema: ZodType) {
  const data = await response.json();
  await schema.parse(data);
}
export async function validateSchemaData(response: APIResponse, schema: ZodType) {
  const data = await response.json();
  await schema.parse(data.data);
}
