import { useQuery } from "@tanstack/react-query"
import { supabase } from "../lib/supabase"

export const usePublicProfile = (id: string) => {
    return useQuery({
        queryKey: ["public-profile", id],

        queryFn: async () => {
            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", id)
                .single()

            if (error) throw error

            return data
        },

        enabled: !!id
    })
}