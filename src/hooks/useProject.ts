import { useQuery } from "@tanstack/react-query"
import { supabase } from "../lib/supabase"
import type { IProject } from "../types/project.type"

export const useProject = (id: string) => {
    return useQuery<IProject>({
        queryKey: ['project', id],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .eq('id', id)
                .single()

            if (error) throw error

            return data
        },
        enabled: !!id
    })
}