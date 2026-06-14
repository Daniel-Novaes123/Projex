import { Link, useNavigate } from "react-router-dom"
import Button from "../Button"

interface ProjectCardProps {
    id: string
    title: string
    description: string
    image_url: string
    techs: string[]
    author: string
    user_id: string
}



export const ProjectCard = ({ title, description, image_url, techs, id, user_id, author }: ProjectCardProps) => {
    const navigate = useNavigate()

    return (
        <div className="bg-light-gray rounded-md flex flex-col overflow-hidden border border-transparent hover:border-magenta-500 transition-all cursor-pointer h-full">
            <img className="w-full h-32 object-cover" src={image_url} alt={title} />
            <div className="p-4 flex flex-col flex-1 gap-2">
                <h3 className="text-white text-lg font-bold">{title}</h3>
                <p className="text-graphite-300 text-sm">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {techs.map(tech => (
                        <span key={tech} className="px-2 py-1 rounded-full text-xs bg-magenta-500/10 text-magenta-400">{tech}</span>
                    ))}
                </div>
                <div className="mt-auto pt-2 flex items-center justify-between">
                    <p className="text-graphite-400 text-xs">Feito por <Link
                        to={`/usuario/${user_id}`}
                        className="text-white hover:underline">
                        {author}
                    </Link>
                    </p>
                    <Button variant="outline" onClick={() => navigate(`/projetos/${id}`)}>
                        Ver projeto
                    </Button>
                </div>
            </div>
        </div>
    )
} 