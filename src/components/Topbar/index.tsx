import Button from "../Button";
import { useNavigate } from 'react-router-dom'


interface TopbarProps {
    showBack?: boolean
    onBack?: () => void
    title?: string
    showNewProject?: boolean
}

export function Topbar({ showBack, onBack, title = 'Meus projetos', showNewProject = true }: TopbarProps) {
    const navigate = useNavigate()

    return (
        <header className="bg-light-gray flex flex-row items-center p-6 border-b border-graphite-700">
            <div className="flex-1">
                {showBack && <Button variant="ghost" onClick={onBack}><span className="text-white font-bold cursor-pointer">← Voltar </span></Button>}
            </div>
            <h1 className="text-white font-bold text-2xl">{title}</h1>
            <div className="flex-1 flex justify-end">
                {showNewProject && (
                    <Button variant="outline" onClick={() => navigate('/admin/projetos/novo')}>+ Novo Projeto</Button>
                )}
            </div>
        </header>
    )
}