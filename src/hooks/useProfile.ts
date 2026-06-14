import { useQuery } from "@tanstack/react-query"
import { supabase } from "../lib/supabase"
import type { IProfile } from "../types/profile.type"
import { useAuthStore } from "../store/useAuthStore"

export const useProfile = () => {
    const user = useAuthStore(state => state.user)

    return useQuery<IProfile>({
        queryKey: ["profile", user?.id],

        queryFn: async () => {
            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", user!.id)
                .single()

            if (error) throw error

            return data
        },

        enabled: !!user
    })
}