import { useQuery } from "@tanstack/react-query"
import { supabase } from "../lib/supabase"

export const useUserProjects = (userId: string) => {
    return useQuery({
        queryKey: ["user-projects", userId],

        queryFn: async () => {
            const { data, error } = await supabase
                .from("projects")
                .select("*")
                .eq("user_id", userId)
                .eq("status", "published")

            if (error) throw error

            return data
        },

        enabled: !!userId
    })
}