import { useMutation, useQueryClient } from "@tanstack/react-query"
import { supabase } from "../lib/supabase"

export const useUpdateProfile = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({
            id,
            data,
        }: {
            id: string
            data: {
                display_name: string
                bio: string
            }
        }) => {
            const { error } = await supabase
                .from("profiles")
                .update(data)
                .eq("id", id)

            if (error) throw error
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["profile"]
            })
        }
    })
}