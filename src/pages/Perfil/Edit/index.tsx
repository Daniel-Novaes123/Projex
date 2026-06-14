import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Sidebar } from "../../../components/Sidebar"
import { Topbar } from "../../../components/Topbar"
import { Loading } from "../../../components/Loading"
import Button from "../../../components/Button"
import Input from "../../../components/Input"

import avatar from "../../../assets/avatar.jpg"

import { useProfile } from "../../../hooks/useProfile"
import { useUpdateProfile } from "../../../hooks/useUpdateProfile"
import { useNavigate } from "react-router-dom"

type FormData = {
    display_name: string
    bio: string
}

export const EditProfile = () => {
    const { data: profile, isLoading } = useProfile()
    const updateProfile = useUpdateProfile()
    const navigate = useNavigate()


    const {
        register,
        handleSubmit,
        reset
    } = useForm<FormData>()

    useEffect(() => {
        if (profile) {
            reset({
                display_name: profile.display_name,
                bio: profile.bio
            })
        }
    }, [profile, reset])

    const onSubmit = async (data: FormData) => {
        await updateProfile.mutateAsync({
            id: profile!.id,
            data
        })
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="flex min-h-screen bg-dark-gray">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <Topbar title="Meu Perfil" />

                <div className="flex justify-center p-8">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="
                            w-full
                            max-w-xl
                            bg-light-gray
                            border border-graphite-700
                            rounded-xl
                            p-8
                            flex
                            flex-col
                            gap-6
                        "
                    >
                        <div className="flex flex-col items-center gap-4">
                            <img
                                src={profile?.avatar_url || avatar}
                                alt="Avatar"
                                className="
                                    w-28
                                    h-28
                                    rounded-full
                                    object-cover
                                    border
                                    border-graphite-600
                                "
                            />

                            <p className="text-sm text-graphite-400">
                                Avatar padrão
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-graphite-400">
                                Nome de exibição
                            </span>

                            <Input
                                {...register("display_name")}
                                className="text-white"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-graphite-400">
                                Bio
                            </span>

                            <textarea
                                {...register("bio")}
                                rows={4}
                                className="
                                    bg-mid-gray
                                    border
                                    border-graphite-600
                                    rounded-lg
                                    p-3
                                    text-white
                                    resize-none
                                "
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="outline"
                            loading={updateProfile.isPending}
                            onClick={() =>
                                navigate("/admin")
                            } >
                            Salvar alterações
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}