import type React from "react"
import { Navigate } from "react-router-dom"
import { useAuthStore } from "../../store/useAuthStore"
import { Loading } from "../Loading"

export const ProtectedRoute = ({
    children
}: {
    children: React.ReactNode
}) => {
    const user = useAuthStore(state => state.user)
    const loading = useAuthStore(state => state.loading)

    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return <>{children}</>
}