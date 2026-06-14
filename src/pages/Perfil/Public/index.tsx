import { useParams } from "react-router-dom"
import avatar from "../../../assets/avatar.jpg"
import { usePublicProfile } from "../../../hooks/usePublicProfile"
import { useUserProjects } from "../../../hooks/useUserProjects"
import { Loading } from "../../../components/Loading"
import { ProjectCard } from "../../../components/ProjectCard"

export const PublicProfile = () => {
    const { id } = useParams()

    const { data: profile, isLoading } =
        usePublicProfile(id!)

    const { data: projects = [] } =
        useUserProjects(id!)

    if (isLoading) {
        return <Loading />
    }

    console.log(profile)

    return (
        <div className="bg-dark-gray min-h-screen">
            <div className="max-w-5xl mx-auto p-8">

                <div className="flex flex-col items-center text-center">

                    <img
                        src={profile?.avatar_url || avatar}
                        alt={profile?.display_name}
                        className="
                            w-32
                            h-32
                            rounded-full
                            object-cover
                            border
                            border-graphite-700
                        "
                    />

                    <h1 className="text-3xl font-bold text-white mt-4">
                        {profile?.display_name}
                    </h1>

                    <p className="text-graphite-400 mt-2 max-w-xl">
                        {profile?.bio}
                    </p>
                </div>

                <div className="mt-12">

                    <h2 className="text-xl text-white font-semibold mb-6">
                        Projetos publicados
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map(project => (
                            <ProjectCard
                                key={project.id}
                                {...project}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}