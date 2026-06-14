import { useEffect, useState } from "react"
import type { IProject } from "../../types/project.type"
import { Link, useNavigate, useParams } from "react-router-dom"
import { supabase } from "../../lib/supabase"
import { Loading } from "../../components/Loading"


export const ProjectDetails = () => {
    const [project, setProject] = useState<IProject | null>(null)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        supabase.from('projects').select('*').eq('id', id).single()
            .then(({ data }) => {
                if (data) setProject(data)
            })
    }, [id])

    if (!project) return <Loading />


    return (
        <div className="bg-dark-gray min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto">

                <div
                    className="
                    w-full
                    h-[500px]
                    bg-light-gray
                    border border-graphite-700
                    rounded-xl
                    overflow-hidden
                    flex items-center justify-center
                "
                >
                    <img
                        src={project.image_url}
                        alt={project.title}
                        className="
                        max-w-full
                        max-h-full
                        object-contain
                    "
                    />
                </div>

                <div className="mt-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        {project.title}
                    </h1>

                    <div className="mt-2">
                        <span className="text-sm text-graphite-400">
                            por <Link
                                to={`/usuario/${project.user_id}`}
                                className="text-white hover:underline"
                            >
                                {project.author}
                            </Link>
                        </span>
                    </div>

                    <p className="text-base text-graphite-400 mt-4 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg font-semibold text-white mb-3">
                        Tecnologias utilizadas
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {project.techs.map((tech) => (
                            <span
                                key={tech}
                                className="
  px-3 py-1
    rounded-full
    bg-light-gray
    border border-graphite-700
    text-sm
    text-graphite-300
"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>


                <div className="mt-8 flex gap-3">
                    <button
                        onClick={() => navigate('/home')}
                        className="
                        px-5 py-2
                        rounded-lg
                        border border-graphite-700
                        text-white
                        hover:bg-light-gray
                        transition
                    "
                    >
                        Voltar
                    </button>

                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            px-5 py-2
                            rounded-lg
                            bg-white
                            text-black
                            font-medium
                        "
                        >
                            Ver projeto
                        </a>
                    )}
                </div>

            </div>
        </div>
    )
}