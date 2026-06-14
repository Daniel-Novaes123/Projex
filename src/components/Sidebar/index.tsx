import { Link } from "react-router-dom"
import { useAuth } from "../../services/auth"
import Button from "../Button"
import { FolderKanban, LogOut, User } from "lucide-react"
import logo from "../../assets/logo.png"

export function Sidebar() {
    const { logout } = useAuth()


    return (
        <aside className="bg-light-gray flex flex-col gap-8 p-6 w-64 h-screen border-r border-graphite-700">

            <div className="pb-4 border-b border-graphite-500 -mx-6 px-6">
                <Link
                    to="/home"
                    className="flex justify-center"
                >
                    <img
                        src={logo}
                        alt="Projex"
                        className="h-25 w-auto hover:opacity-80 transition cursor-pointer" />
                </Link>
            </div>

            <div className="flex flex-col gap-4 text-graphite-300">
                <Link
                    className="flex items-center gap-2 hover:text-white"
                    to="/admin"
                >
                    <FolderKanban size={16} />
                    Projetos
                </Link>

                <Link
                    className="flex items-center gap-2 hover:text-white"
                    to="/admin/perfil"
                >
                    <User size={16} />
                    Perfil
                </Link>
            </div>

            <div className="mt-auto pt-4 border-t border-graphite-500 -mx-6 px-6">
                <Button
                    variant="outline"
                    leftIcon={<LogOut size={16} color="red" />}
                    onClick={logout}
                >
                    Sair
                </Button>
            </div>

        </aside>
    )
}