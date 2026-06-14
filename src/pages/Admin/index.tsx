import { Edit2, Trash } from "lucide-react"
import Button from "../../components/Button"
import { Sidebar } from "../../components/Sidebar"
import { StatCard } from "../../components/StatCard"
import { Topbar } from "../../components/Topbar"
import { useProjects } from "../../hooks/useProjects"
import { useNavigate } from "react-router-dom"
import { Loading } from "../../components/Loading"
import { useDeleteProject } from "../../hooks/useDeleteProject"

export const Admin = () => {
    const {
        data: projects = [],
        isLoading,
        error
    } = useProjects()
    const deleteProject = useDeleteProject()
    const navigate = useNavigate()

    if (isLoading) return <Loading />
    if (error instanceof Error) {
        return <span>{error.message}</span>
    }

    return (
        <div className="flex min-h-screen bg-dark-gray">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Topbar />
                <main className="bg-dark-gray flex flex-col gap-6 p-6">
                    <div className="flex gap-4">
                        <StatCard
                            classname="border border-white"
                            title="Projetos totais"
                            value={projects.length} />
                        <StatCard
                            classname="border border-white"
                            title="Publicados"
                            value={projects.filter(p => p.status === 'published').length} />
                        <StatCard
                            classname="border border-white"
                            title="Rascunhos"
                            value={projects.filter(p => p.status === 'draft').length} />
                    </div>
                    <div className="bg-light-gray rounded-lg shadow p-4">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Todos os projetos
                        </h2>

                        <table className="w-full">
                            <thead className="text-graphite-400 font-bold">
                                <tr className="border-b border-graphite-700">
                                    <th className="py-3 text-left">Nome</th>
                                    <th className="py-3 text-left">Tecnologias</th>
                                    <th className="py-3 text-left">Status</th>
                                    <th className="py-3 text-left">Imagem</th>
                                    <th className="py-3 text-left">Ações</th>
                                </tr>
                            </thead>

                            <tbody className="text-white">
                                {projects.map(project => (
                                    <tr
                                        key={project.id}
                                        className="border-b border-graphite-700 last:border-b-0"
                                    >
                                        <td className="py-1">{project.title}</td>

                                        <td className="py-1">
                                            <div className="flex flex-wrap gap-2">
                                                {project.techs.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 rounded-2xl text-sm bg-graphite-700 text-graphite-400"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>

                                        <td className="py-1">
                                            <span
                                                className={`px-2 py-1 rounded-2xl text-sm ${project.status === 'published'
                                                    ? 'bg-green-500/20 text-green-500'
                                                    : 'bg-graphite-900 text-graphite-400'
                                                    }`}
                                            >
                                                {project.status === 'published'
                                                    ? 'Publicado'
                                                    : 'Rascunho'}
                                            </span>
                                        </td>

                                        <td className="py-2">
                                            <a
                                                href={project.image_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={project.image_url}
                                                    alt={project.title}
                                                    className="w-20 h-20 object-cover rounded-md cursor-pointer hover:scale-105 transition"
                                                />
                                            </a>
                                        </td>

                                        <td className="py-1">
                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="px-2 border-blue-500 text-blue-400 hover:bg-blue-500/10"
                                                    onClick={() =>
                                                        navigate(`/admin/projetos/${project.id}/editar`)
                                                    }
                                                >
                                                    <Edit2 size={16} className="text-blue-400" />
                                                </Button>

                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    className="px-2 border-red-500 text-red-400 hover:bg-red-500/10"
                                                    onClick={() => deleteProject.mutate(project.id)}
                                                >
                                                    <Trash size={16} className="text-red-400" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>

            </div>
        </div >
    )
}