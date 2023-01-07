export interface Technology {
    name: string
    type: string
    icon: string
}

const technologies = {
    adobeFlash: {
        name: "Adobe Flash",
        icon: "IoFlashSharp|io"
    } as Technology,
    adobePhotoshop: {
        name: "Adobe Photoshop",
        icon: "SiAdobephotoshop|si"
    } as Technology,
    android: {
        name: "Android",
        icon: "DiAndroid|di"
    } as Technology,
    appDevelopment: {
        name: "App Development",
        icon: "CgSmartphone|cg"
    } as Technology,
    backEnd: {
        name: "Back-end",
        icon: "BsServer|bs"
    } as Technology,
    csharp: {
        name: "C#",
        icon: "TbCSharp|tb"
    } as Technology,
    expo: {
        name: "Expo",
        icon: "SiExpo|si"
    } as Technology,
    framerMotion: {
        name: "Framer Motion",
        icon: "SiFramer|si"
    } as Technology,
    frontEnd: {
        name: "Front-end",
        icon: "CgWebsite|cg"
    } as Technology,
    gameDevelopment: {
        name: "Game Development",
        icon: "IoGameController|io"
    } as Technology,
    graphQL: {
        name: "GraphQL",
        icon: "SiGraphql|si"
    } as Technology,
    ios: {
        name: "iOS",
        icon: "SiIos|si"
    } as Technology,
    java: {
        name: "Java",
        icon: "SiJava|si"
    } as Technology,
    javascript: {
        name: "JavaScript",
        icon: "SiJavascript|si"
    } as Technology,
    jquery: {
        name: "jQuery",
        icon: "SiJquery|si"
    } as Technology,
    mongoDB: {
        name: "MongoDB",
        icon: "SiMongodb|si"
    } as Technology,
    mySql: {
        name: "MySQL",
        icon: "SiMysql|si"
    } as Technology,
    nextJs: {
        name: "NextJS",
        icon: "TbBrandNextjs|tb"
    } as Technology,
    nodeJs: {
        name: "NodeJS",
        icon: "IoLogoNodejs|io"
    } as Technology,
    phonegap: {
        name: "Phonegap",
        icon: "DiPhonegap|di"
    } as Technology,
    php: {
        name: "PHP",
        icon: "SiPhp|si"
    } as Technology,
    python: {
        name: "Python",
        icon: "SiPython|si"
    } as Technology,
    react: {
        name: "React",
        icon: "SiReact|si"
    } as Technology,
    reactNative: {
        name: "React Native",
        icon: "TbBrandReactNative|tb"
    } as Technology,
    swift: {
        name: "Swift",
        icon: "SiSwift|si"
    } as Technology,
    typescript: {
        name: "TypeScript",
        icon: "SiTypescript|si"
    },
    unity: {
        name: "Unity",
        icon: "SiUnity|si"
    } as Technology,
    web: {
        name: "Web Development",
        icon: "SlGlobe|sl"
    } as Technology,
    webApp: {
        name: "Web App",
        icon: "MdWeb|md"
    } as Technology,
    wordpress: {
        name: "Wordpress",
        icon: "SiWordpress|si"
    } as Technology
}

export default technologies