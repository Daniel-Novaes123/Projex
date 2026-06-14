import { useQuery } from "@tanstack/react-query"
import { supabase } from "../lib/supabase"
import type { IProject } from "../types/project.type"

export const useProjects = () => {
    return useQuery<IProject[]>({
        queryKey: ['projects'],
        queryFn: async () => {
            const { data: { session } } = await supabase.auth.getSession()

            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .eq('user_id', session?.user?.id)

            if (error) throw error

            return data ?? []
        }
    })
}