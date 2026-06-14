import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

export const useAuth = () => {
    const { user, loading } = useAuthStore()

    const navigate = useNavigate()

    const [error, setError] =
        useState<string | null>(null)

    const login = async (
        email: string,
        password: string
    ) => {
        const { error } =
            await supabase.auth.signInWithPassword({
                email,
                password
            })

        if (error) {
            setError(error.message)
            return
        }

        navigate("/admin")
    }

    const register = async (
        email: string,
        password: string
    ) => {
        const { data, error } =
            await supabase.auth.signUp({
                email,
                password
            })

        if (error) {
            setError(error.message)
            return
        }

        if (data.user) {
            await supabase
                .from("profiles")
                .insert({
                    id: data.user.id,
                    display_name: email.split("@")[0],
                    bio: "",
                    avatar_url: null
                })
        }

        navigate("/admin")
    }

    const logout = async () => {
        await supabase.auth.signOut()
        navigate("/login")
    }

    return {
        user,
        loading,
        error,
        login,
        register,
        logout
    }
}