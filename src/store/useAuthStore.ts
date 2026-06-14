import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'

interface AuthState {
    user: User | null
    loading: boolean
    setUser: (user: User | null) => void
    init: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: true,

    setUser: (user) => set({ user }),

    init: () => {
        supabase.auth.getSession().then(({ data }) => {
            set({ user: data.session?.user ?? null, loading: false })
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            set({ user: session?.user ?? null })
        })
    }
}))