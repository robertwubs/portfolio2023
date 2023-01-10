export interface Technology {
    name: string
    type: string
    icon: string
    excludeInList: boolean
}

const technologies = {
    javascript: {
        name: "JavaScript",
        icon: "SiJavascript|si",
        excludeInList: false
    } as Technology,
    react: {
        name: "React",
        icon: "SiReact|si",
        excludeInList: false
    } as Technology,
    nextJs: {
        name: "NextJS",
        icon: "TbBrandNextjs|tb",
        excludeInList: false
    } as Technology,
    nodeJs: {
        name: "NodeJS",
        icon: "IoLogoNodejs|io",
        excludeInList: false
    } as Technology,
    reactNative: {
        name: "React Native",
        icon: "TbBrandReactNative|tb",
        excludeInList: false
    } as Technology,
    graphQL: {
        name: "GraphQL",
        icon: "SiGraphql|si",
        excludeInList: false
    } as Technology,
    typescript: {
        name: "TypeScript",
        icon: "SiTypescript|si",
        excludeInList: false
    },
    css3: {
        name: "CSS3",
        icon: "SiCss3|si",
        excludeInList: false
    },
    html5: {
        name: "HTML5",
        icon: "SiHtml5|si",
        excludeInList: false
    },
    ruby: {
        name: "Ruby",
        icon: "SiRuby|si",
        excludeInList: false
    },
    rubyOnRails: {
        name: "RubyOnRails",
        icon: "SiRubyonrails|si",
        excludeInList: false
    },
    frontEnd: {
        name: "Front-end",
        icon: "CgWebsite|cg",
        excludeInList: true
    } as Technology,
    backEnd: {
        name: "Back-end",
        icon: "BsServer|bs",
        excludeInList: true
    } as Technology,
    web: {
        name: "Web Development",
        icon: "SlGlobe|sl",
        excludeInList: true
    } as Technology,
    webApp: {
        name: "Web App",
        icon: "MdWeb|md",
        excludeInList: true
    } as Technology,
    wordpress: {
        name: "Wordpress",
        icon: "SiWordpress|si",
        excludeInList: false
    } as Technology,
    adobeFlash: {
        name: "Adobe Flash",
        icon: "IoFlashSharp|io",
        excludeInList: true
    } as Technology,
    git: {
        name: "Git",
        icon: "SiGit|si",
        excludeInList: false
    } as Technology,
    adobePhotoshop: {
        name: "Adobe Photoshop",
        icon: "SiAdobephotoshop|si",
        excludeInList: false
    } as Technology,
    android: {
        name: "Android",
        icon: "DiAndroid|di",
        excludeInList: true
    } as Technology,
    appDevelopment: {
        name: "App Development",
        icon: "CgSmartphone|cg",
        excludeInList: true
    } as Technology,
    csharp: {
        name: "C#",
        icon: "TbCSharp|tb",
        excludeInList: false
    } as Technology,
    expo: {
        name: "Expo",
        icon: "SiExpo|si",
        excludeInList: false
    } as Technology,
    framerMotion: {
        name: "Framer Motion",
        icon: "SiFramer|si",
        excludeInList: false
    } as Technology,
    gameDevelopment: {
        name: "Game Development",
        icon: "IoGameController|io",
        excludeInList: true
    } as Technology,
    ios: {
        name: "iOS",
        icon: "SiIos|si",
        excludeInList: true
    } as Technology,
    java: {
        name: "Java",
        icon: "SiJava|si",
        excludeInList: false
    } as Technology,
    jquery: {
        name: "jQuery",
        icon: "SiJquery|si",
        excludeInList: false
    } as Technology,
    mongoDB: {
        name: "MongoDB",
        icon: "SiMongodb|si",
        excludeInList: false
    } as Technology,
    mySql: {
        name: "MySQL",
        icon: "SiMysql|si",
        excludeInList: false
    } as Technology,
    phonegap: {
        name: "Phonegap",
        icon: "DiPhonegap|di",
        excludeInList: true
    } as Technology,
    php: {
        name: "PHP",
        icon: "SiPhp|si",
        excludeInList: false
    } as Technology,
    python: {
        name: "Python",
        icon: "SiPython|si",
        excludeInList: false
    } as Technology,
    swift: {
        name: "Swift",
        icon: "SiSwift|si",
        excludeInList: true
    } as Technology,
    unity: {
        name: "Unity",
        icon: "SiUnity|si",
        excludeInList: false
    } as Technology,
}

export default technologies