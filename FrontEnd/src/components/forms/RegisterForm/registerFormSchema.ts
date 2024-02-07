import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(10,{message:"O nome é obrigatório"}),
    email: z.string().email({message:"Forneça um email válido"}),
    telephone: z.string().min(8,{message:"O telefone é obrigatório"}),
    password: z
    .string()
    .min(8,{message:"A senha é obrigatória"})
    .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula")
    .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula") 
    .regex(/[0-9]+/, "É necessário conter pelo menos um número")
    .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/, "É necessário conter pelo menos um caracter especial"),
    confirmPassword: z
    .string()
    .min(8,{message:"Confirmar a senha é obrigatória"})
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem", 
    path: ["confirmPassword"]
});