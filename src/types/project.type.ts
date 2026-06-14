export interface IProject {
    id: string
    title: string
    description: string
    techs: string[]
    image_url: string
    status: 'draft' | 'published'
    link: string
    createdAt: Date
    author: string
    user_id: string,
}