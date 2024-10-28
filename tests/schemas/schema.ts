import { z } from "zod";

export class Schemas {
  userLogin = z.object({
    id: z.number(),
    email: z.string().email(),
    first_name: z.string(),
    last_name: z.string(),
    avatar: z.string().url()
  });
  userLoginList = z.array(this.userLogin);

  userResource = z.object({
    id: z.number(),
    name: z.string(),
    year: z.number(),
    color: z.string(),
    pantone_value: z.string()
  });
  userResourceList = z.array(this.userResource);

  userUpdate = z.object({
    name: z.string(),
    job: z.string(),
    updatedAt: z.string()
  });

  create = z.object({
    name: z.string(),
    job: z.string(),
    id: z.string(),
    createdAt: z.string()
  });

  idToken = z.object({
    id: z.number(),
    token: z.string(),
  });

  login = z.object({
    token: z.string()
  });

  infoError = z.object({
    error: z.string()
  });
}
