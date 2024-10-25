// Crear el schema para las responses
// Crear un archivo de validacion deonde le pase los parametros de reponse y schema

import { z } from "zod";

export class Schemas {
    async loginUsersSchema(){
        //! DUDA: avatar
        const userLogin= z.object({
            id: z.string().uuid(),
            email: z.string().email(),
            first_name: z.string(),
            last_name: z.string(),
            avatar: z.string()
        })
    }
    async resourceSchema(){
        //! DUDA: Color y Pantone_Value
        const userResource= z.object({
            id: z.string().uuid(),
            name: z.string(),
            year: z.number(),
            color: z.string(),
            pantone_value: z.string()
        })
        
    }
    async updateUserSchema(){
        const userUpdate= z.object({
            name: z.string(),
            job: z.number(),
        })
        
    }

}