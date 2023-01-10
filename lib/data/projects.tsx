import technologies, { Technology } from "./technologies"

export interface Project {
    title: string
    slug: string
    role: string
    url: string | null
    image: string
    sourceUrl: string
    sourceAvailable: SourceAvailable
    description: ProjectDescriptionLine[]
    category: ProjectCategory,
    technologies: Technology[],
    galleryImages: string[]
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
    //WEBSITES
    {
        //whynow
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
            technologies.javascript,
            technologies.wordpress,
            technologies.php,
            technologies.mySql,
            technologies.web,
        ],
        sourceAvailable: SourceAvailable.No
    } as Project,
    {
        //Watmagikwel.nl
        title: 'Wat mag ik wel',
        slug: 'wat-mag-ik-wel',
        url: null,
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
        role: "Sole Developer",
        technologies: [
            technologies.react,
            technologies.javascript,
            technologies.nodeJs,
            technologies.graphQL,
            technologies.web,
            technologies.backEnd,
            technologies.frontEnd,
        ],
        sourceAvailable: SourceAvailable.No
    } as Project,
    {
        //Milab
        title: 'Milab',
        slug: 'milab',
        url: null,
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
        role: "Sole Developer",
        technologies: [
            technologies.jquery,
            technologies.php,
            technologies.mySql,
            technologies.webApp,
            technologies.backEnd,
            technologies.frontEnd,
        ],
        sourceAvailable: SourceAvailable.No
    } as Project,
    {
        //Portfolio
        title: 'Portfolio',
        slug: 'portfolio',
        url: 'https://robertwubs.com',
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
        role: "Sole Developer",
        technologies: [
            technologies.nextJs,
            technologies.react,
            technologies.typescript,
            technologies.framerMotion,
            technologies.adobePhotoshop,
            technologies.web,
            technologies.frontEnd,
        ],
        sourceAvailable: SourceAvailable.Yes,
        sourceUrl: '-'
    } as Project,
    //APPS
    {
        //whynow app
        title: 'whynow app',
        slug: 'whynow-app',
        url: 'https://whynow.co.ukhttps://play.google.com/store/apps/details?id=com.whynowmobile',
        category: {
            title: 'Apps',
            slug: 'apps'
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
            technologies.reactNative,
            technologies.expo,
            technologies.android,
            technologies.ios,
            technologies.swift,
            technologies.java,
            technologies.appDevelopment,
        ],
        sourceAvailable: SourceAvailable.No
    } as Project,
    {
        //marvelChampions
        title: 'Marvel Champions Companion',
        slug: 'marvel-champions-companion',
        url: null,
        category: {
            title: 'Apps',
            slug: 'apps'
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
        role: "Sole Developer",
        technologies: [
            technologies.reactNative,
            technologies.expo,
            technologies.javascript,
            technologies.appDevelopment,
        ],
        sourceAvailable: SourceAvailable.OnRequest
    } as Project,
    {
        //Trippi
        title: 'Trippi',
        slug: 'trippi',
        url: null,
        category: {
            title: 'Apps',
            slug: 'apps'
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
        role: "Founder & Full Stack Developer",
        technologies: [
            technologies.phonegap,
            technologies.javascript,
            technologies.jquery,
            technologies.mySql,
            technologies.php,
            technologies.appDevelopment,
        ],
        sourceAvailable: SourceAvailable.No
    } as Project,
    //GAMES
    {
        //Featheroak
        title: 'Featheroak',
        slug: 'featheroak',
        url: null,
        category: {
            title: 'Games',
            slug: 'games'
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
        role: "Founder & Full Stack Developer",
        technologies: [
            technologies.unity,
            technologies.csharp,
            technologies.adobePhotoshop,
            technologies.gameDevelopment,
        ],
        sourceAvailable: SourceAvailable.OnRequest
    } as Project,
    {
        //Twiins
        title: 'Twiins',
        slug: 'twiins',
        url: null,
        category: {
            title: 'Games',
            slug: 'games'
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
        role: "Founder & Full Stack Developer",
        technologies: [
            technologies.adobeFlash,
            technologies.adobePhotoshop,
            technologies.gameDevelopment,
        ],
        sourceAvailable: SourceAvailable.No
    } as Project,
    {
        //LittlePrincess
        title: 'Little Princess',
        slug: 'little-princess',
        url: null,
        category: {
            title: 'Games',
            slug: 'games'
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
        role: "Founder & Full Stack Developer",
        technologies: [
            technologies.android,
            technologies.java,
            technologies.adobePhotoshop,
            technologies.gameDevelopment,
        ],
        sourceAvailable: SourceAvailable.No
    } as Project,
]

export default projects