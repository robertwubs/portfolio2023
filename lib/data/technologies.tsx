export interface Technology {
    name: string
    type: string
    icon: string
}

const technologies = {
    graphQL: {
        name: "GraphQL",
        icon: "SiGraphql|si"
    } as Technology,
    javascript: {
        name: "JavaScript",
        icon: "SiJavascript|si"
    } as Technology,
    nextJs: {
        name: "NextJS",
        icon: "TbBrandNextjs|tb"
    } as Technology,
    react: {
        name: "React",
        icon: "SiReact|si"
    } as Technology,
    web: {
        name: "Web",
        icon: "SlGlobe|sl"
    } as Technology,
    wordpress: {
        name: "Wordpress",
        icon: "SiWordpress|si"
    } as Technology
}

export default technologies