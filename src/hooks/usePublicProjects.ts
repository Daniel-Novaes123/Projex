import { useQuery } from "@tanstack/react-query"
import { supabase } from "../lib/supabase"
import type { IProject } from "../types/project.type"

export const usePublicProjects = () => {
    return useQuery<IProject[]>({
        queryKey: ['public-projects'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .eq('status', 'published')

            if (error) throw error

            return data ?? []
        }
    })
}