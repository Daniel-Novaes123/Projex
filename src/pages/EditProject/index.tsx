import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type z from "zod"
import { CreateProjectSchema } from "../../schemas/CreateProject"
import Input from "../../components/Input"
import Typography from "../../components/Typography"
import Button from "../../components/Button"
import { Sidebar } from "../../components/Sidebar"
import { Topbar } from "../../components/Topbar"
import { useProject } from "../../hooks/useProject"
import { Loading } from "../../components/Loading"
import { useEditProject } from "../../hooks/useEditProject"

type ProjectFormData = z.infer<typeof CreateProjectSchema>

export const EditProject = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data: project, isLoading } = useProject(id!)
    const editProject = useEditProject()


    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(CreateProjectSchema)
    })

    useEffect(() => {
        if (project) reset({
            ...project,
            techs: project.techs.join(', ')
        })
    }, [project, reset])

    const onSubmit = async (data: ProjectFormData) => {
        const formattedData = {
            ...data,
            techs: typeof data.techs === 'string'
                ? (data.techs as string).split(',').map(t => t.trim()).filter(Boolean)
                : data.techs
        }
        await editProject.mutateAsync({
            id: id!,
            data: formattedData
        })
        navigate('/admin')
    }


    if (isLoading) {
        return <Loading />
    }


    return (
        <div className="flex min-h-screen bg-dark-gray">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Topbar showBack onBack={() => navigate('/admin')} title="Editar projeto" />
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 flex flex-col gap-6 max-w-xl justify-center">
                    <Typography variant="title" weight="semibold" className="text-white">
                        Edite seu projeto aqui
                    </Typography>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-graphite-400">Nome do projeto</span>
                        <Input error={errors.title?.message} {...register('title')} type="text" className="text-white" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-graphite-400">Descrição do projeto</span>
                        <textarea
                            {...register('description')}
                            className="w-full border border-white rounded-lg p-2 text-white resize-none"
                            rows={2}
                        />                    </div>

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
                        <textarea
                            {...register('image_url')}
                            className="w-full bg-mid-gray border border-graphite-600 rounded-lg p-2 text-white text-sm resize-none"
                            rows={2}
                        />                    </div>

                    <Button type="submit" variant="outline">Finalizar</Button>
                </form>
            </div>
        </div>
    )
}