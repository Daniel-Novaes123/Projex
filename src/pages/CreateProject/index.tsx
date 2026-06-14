import z from "zod"
import { CreateProjectSchema } from "../../schemas/CreateProject"
import Typography from "../../components/Typography"
import Input from "../../components/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Button from "../../components/Button"
import { supabase } from "../../lib/supabase"
import { useNavigate } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar"
import { Topbar } from "../../components/Topbar"
import { useAuthStore } from "../../store/useAuthStore"

type projectFormData = z.infer<typeof CreateProjectSchema>


export const CreateProject = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(CreateProjectSchema)
    })
    const user = useAuthStore(state => state.user)
    const navigate = useNavigate()



    const onSubmit = async (data: projectFormData) => {



        const projectData = {
            ...data,
            author: user?.email?.split('@')[0],
            user_id: user?.id,
        }


        const { error } = await supabase
            .from('projects')
            .insert(projectData)

        if (error) {
            console.error(error)
            return
        }





        navigate('/admin')

    }

    return (
        <div className="flex min-h-screen bg-dark-gray">
            <Sidebar />
            <div className="flex flex-col flex-1">

                <Topbar showBack onBack={() => navigate('/admin')} showNewProject={false} title="Criar projeto" />
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 flex flex-col gap-6 max-w-xl">
                    <Typography variant="title" weight="semibold" className="text-white">
                        Crie seu projeto!
                    </Typography>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-graphite-400">Nome do projeto</span>
                        <Input error={errors.title?.message} {...register('title')} type="text" className="text-white" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-graphite-400">Descrição do projeto</span>
                        <textarea {...register('description')} className="w-full bg-mid-gray border border-graphite-600 rounded-lg p-2 text-white resize-none" rows={2} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-graphite-400">Tecnologias utilizadas</span>
                        <Input error={errors.techs?.message} {...register('techs')} placeholder="React, TypeScript, Node.js" className="text-white" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-graphite-400">Status do projeto</span>
                        <select {...register('status')} className="text-white bg-mid-gray border border-graphite-600 rounded-lg p-2">
                            <option value="draft">Rascunho</option>
                            <option value="published">Publicado</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-graphite-400">Imagem</span>
                        <textarea {...register('image_url')} className="w-full bg-mid-gray border border-graphite-600 rounded-lg p-2 text-white text-sm resize-none" rows={2} />
                    </div>

                    <Button type="submit" variant="outline">Finalizar</Button>
                </form>
            </div>
        </div>
    )
}