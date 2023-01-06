export interface Technology {
    name: string
    type: string
    icon: string
}

const technologies = {
    graphQL: {
        name: "GraphQL"
    } as Technology,
    javascript: {
        name: "JavaScript"
    } as Technology,
    nextJs: {
        name: "NextJS"
    } as Technology,
    react: {
        name: "React",
    } as Technology,
    web: {
        name: "Web"
    } as Technology,
    wordpress: {
        name: "Wordpress"
    } as Technology
}

export default technologies