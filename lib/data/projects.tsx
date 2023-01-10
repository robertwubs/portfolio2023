import technologies, { Technology } from "./technologies"

export interface Project {
    title: string
    slug: string
    role: string
    url: string | null
    image: string
    sourceUrl: string
    sourceAvailable: SourceAvailable
    description: string[]
    category: ProjectCategory,
    technologies: Technology[],
    galleryImages: string[]
}

export interface ProjectCategory {
    title: string
    slug: string
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
        image: 'whynow.png',
        description: [
            "This is paragraph 1",
            "I did this and this here"
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
        sourceAvailable: SourceAvailable.No,
        galleryImages: [
            "whynow_01.png",
            "whynow_02.png",
            "whynow_03.png",
            "whynow_04.png"
        ]
    } as Project,
    {
        //Ditmagikwel.nl
        title: 'Dit mag ik wel',
        slug: 'dit-mag-ik-wel',
        url: null,
        category: {
            title: 'Websites',
            slug: 'websites'
        },
        image: 'wmiw.png',
        description: [
            "This is paragraph 1",
            "I did this and this here"
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
        sourceAvailable: SourceAvailable.No,
        galleryImages: [
            "wmiw_01.png",
            "wmiw_02.png"
        ]
    } as Project,
    {
        //Milab
        title: 'miLab',
        slug: 'milab',
        url: null,
        category: {
            title: 'Websites',
            slug: 'websites'
        },
        image: 'milab.png',
        description: [
            "This is paragraph 1",
            "I did this and this here"
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
        sourceAvailable: SourceAvailable.No,
        galleryImages: [
            "milab_01.png",
            "milab_02.png",
            "milab_03.png",
        ]
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
        image: 'portfolio.png',
        description: [
            "This is paragraph 1",
            "I did this and this here"
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
        sourceUrl: 'https://github.com/robertwubs/portfolio2023'
    } as Project,
    //APPS
    {
        //whynow app
        title: 'whynow app',
        slug: 'whynow-app',
        url: 'https://play.google.com/store/apps/details?id=com.whynowmobile',
        category: {
            title: 'Apps',
            slug: 'apps'
        },
        image: 'whynow.png',
        description: [
            "This is paragraph 1",
            "I did this and this here"
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
        sourceAvailable: SourceAvailable.No,
        galleryImages: [
            "whynow_app_01.webp",
            "whynow_app_02.webp",
            "whynow_app_03.webp",
            "whynow_app_04.webp"
        ]
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
        image: 'mc.png',
        description: [
            "Marvel Champions is a physical card game, produced by Fantasy Flight Games and licensed by Marvel. The game features thousands of different cards with which the player can create their own decks. I wanted to make it easier to create decks and keep track of gameplay progression by creating a companion app.",
            "The app was created with React Native, powered by Expo and written in JavaScript. All data regarding cards and other elements of the game are pulled from the public MarvelCDB API. Users can search for cards and view their information; create and share decks; view decks that other people have posted; track campaign progress; edit their card collection and much more.",
            "After having conversations with fellow developers who had a similar idea, I decided not to publish the app for legal reasons. However, I still use it personally during my play session."
        ],
        role: "Sole Developer",
        technologies: [
            technologies.reactNative,
            technologies.expo,
            technologies.javascript,
            technologies.appDevelopment,
        ],
        sourceAvailable: SourceAvailable.OnRequest,
        galleryImages: [
            "mc_01.jpg",
            "mc_02.jpg"
        ]
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
        image: 'trippi.jpg',
        description: [
            "Trippi was a start-up, founded in 2015 by me and two friends. We sold polymer figurines whose goal was to travel the world by being passed along from person to person. Each user who received a Trippi could scan it on their phone, after which they could see its journey; the people it met; challenges it completed and more.",
            "The application was built in Apache Cordova (then Phonegap), using jQuery for the front-end and a custom PHP+MySQL back-end. It is currently no longer online.",
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
        sourceAvailable: SourceAvailable.No,
        galleryImages: [
            "trippi_01.png",
            "trippi_02.png",
            "trippi_03.jpg",
            "trippi_04.jpg"
        ]
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
        image: 'whynow.png',
        description: [
            "This is paragraph 1",
            "I did this and this here"
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
        image: 'twiins.jpg',
        description: [
            "This is paragraph 1",
            "I did this and this here"
        ],
        role: "Founder & Full Stack Developer",
        technologies: [
            technologies.adobeFlash,
            technologies.adobePhotoshop,
            technologies.gameDevelopment,
        ],
        sourceAvailable: SourceAvailable.No,
        galleryImages: [
            "twiins_01.png",
            "twiins_02.png",
            "twiins_03.png",
        ]
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
        image: 'little_princess.jpg',
        description: [
            "This is paragraph 1",
            "I did this and this here"
        ],
        role: "Founder & Full Stack Developer",
        technologies: [
            technologies.android,
            technologies.java,
            technologies.adobePhotoshop,
            technologies.gameDevelopment,
        ],
        sourceAvailable: SourceAvailable.No,
        galleryImages: [
            "little_princess_01.jpg",
            "little_princess_02.jpg"
        ]
    } as Project,
]

export default projects