import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().min(1,{message:"E-mail é obrigatória"}),
    password: z.string().min(1,{message:"A senha é obrigatória"})
})
