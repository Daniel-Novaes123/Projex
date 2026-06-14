import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { Loading } from "../../components/Loading"
import { ProjectCard } from "../../components/ProjectCard"
import { usePublicProjects } from "../../hooks/usePublicProjects"
import { useAuthStore } from "../../store/useAuthStore"

export const Home = () => {

    const {
        data: projects = [],
        isLoading,
        error
    } = usePublicProjects()
    const user = useAuthStore(state => state.user)
    const navigate = useNavigate()

    if (isLoading) return <Loading />

    if (error instanceof Error) {
        return <span>{error.message}</span>
    }


    return (
        <div className="bg-dark-gray min-h-screen">
            <header className="p-6 border-b border-graphite-700 flex items-center justify-between">
                <div>
                    <h1 className="text-white text-2xl font-bold">Todos projetos reunidos aqui!</h1>
                    <p className="text-graphite-400 text-sm mt-1">Explore projetos de desenvolvedores</p>
                </div>
                <div className="flex gap-2">
                    {user
                        ? <Button onClick={() => navigate('/admin')}>Meu painel</Button>
                        : <>
                            <Button variant="outline" onClick={() => navigate('/login')}>Entrar</Button>
                            <Button onClick={() => navigate('/cadastro')}>Cadastrar</Button>
                        </>
                    }
                </div>
            </header>
            {projects.length === 0 && <p>Nenhum projeto publicado ainda.</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        image_url={project.image_url}
                        techs={project.techs}
                        author={project.author}
                        user_id={project.user_id}
                    />
                ))}
            </div>
        </div>
    )
}