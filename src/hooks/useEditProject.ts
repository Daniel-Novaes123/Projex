import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { IProject } from "../types/project.type"
import { supabase } from "../lib/supabase"

export const useEditProject = () => {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({ id, data }: { id: string, data: Partial<IProject> }) => {
            const { error } = await supabase
                .from('projects')
                .update(data)
                .eq('id', id)

            if (error) {
                throw error
            }
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['projects']
            })
        }
    })
}