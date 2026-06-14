import z from "zod";

export const RegisterSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .max(20, 'A senha deve ter no máximo 20 caracteres')
        .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
        .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
        .regex(/\d/, 'A senha deve conter pelo menos um número')
})