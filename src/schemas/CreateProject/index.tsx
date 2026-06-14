import z from "zod";

export const CreateProjectSchema = z.object({
    title: z.string().min(5, 'O título deve ter no mínimo 5 caracteres').max(40, 'O título deve ter no máximo 40 caracteres'),
    description: z.string().min(5, 'A descrição deve ter no mínimo 5 caracteres').max(200, 'A descrição deve ter no máximo 200 caracteres').optional(),
    techs: z.string().min(1, 'Adicione pelo menos uma tecnologia').transform(val =>
        val.split(',').map(t => t.trim()).filter(Boolean)
    ), status: z.enum(['draft', 'published'], { message: 'Status inválido' }),
    image_url: z.string().url('URL da imagem inválida').optional(),
    author: z.string().optional()
})