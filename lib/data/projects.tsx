import technologies, { Technology } from "./technologies"

export interface Project {
    title: string
    slug: string
    role: string
    url: string
    image: string
    sourceUrl: string
    sourceAvailable: SourceAvailable
    description: ProjectDescriptionLine[]
    category: ProjectCategory,
    technologies: Technology[]
}

export interface ProjectCategory {
    title: string
    slug: string
}

export interface ProjectDescriptionLine {
    title?: string
    text: string
}

export enum SourceAvailable {
    Yes,
    No,
    OnRequest
}

const projects = [
    {
        title: 'whynow',
        slug: 'whynow',
        url: 'https://whynow.co.uk',
        category: {
            title: 'Websites',
            slug: 'websites'
        },
        image: 'logo_whynow.png',
        description: [
            {
                text: "This is paragraph 1",
            },
            {
                title: "This is here",
                text: "I did this and this here"
            }
        ],
        role: "Senior Full Stack Web Developer",
        technologies: [
            technologies.nextJs,
            technologies.react,
            technologies.web,
            technologies.wordpress
        ],
        sourceAvailable: SourceAvailable.No
    } as Project,
]

export default projects