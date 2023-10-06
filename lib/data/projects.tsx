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
            "whynow is a digital media company, focusing on delivering positive news surrounding the arts. I worked at whynow for four years as a Senior Full Stack Web Developer, leading a small team of developers remotely.",
            "During my time at whynow I was responsible for the main website (<a href='https://whynow.co.uk' target='_blank' rel='noreferrer'>https://whynow.co.uk</a>), which was built in NextJS, relying on Wordpress as a back-end. Besides making key decisions about the architecture, I also reviewed and tested all code-submissions before packaging and deploying updates.",
            "Other projects that I have worked on for whynow include a dedicated mobile app (see <a href='/projects/whynow-app'>here</a>), eCommerce store and custom server functionality written in NodeJS."
        ],
        role: "Senior Full Stack Web Developer",
        technologies: [
            technologies.nextJs,
            technologies.react,
            technologies.javascript,
            technologies.wordpress,
            technologies.php,
            technologies.mySql,
            technologies.nodeJs,
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
            "My sister-in-law had always dreamed of owning her own recipe-website, so in 2021 I decided to make this dream a reality. I created Dit Mag Ik Wel (translates to: 'This I'm Allowed To Eat') as a birthday present, but also as a way to practice new technologies.",
            "Ditmagikwel.nl allowed users with specific allergies or disorders to define what they are allowed to eat. The website would then show filtered results based on their preferences and allow recipe-writers to define alternatives for certain ingredients.",
            "The front-end was created in NextJS and React, while the back-end was a custom-built NodeJS server, utilizing Express, GraphQL, MongoDB and Mongoose.",
            "My sister-in-law appreciated the website a lot but has since given birth to a beautiful girl. Hence, the site is currently offline."
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
            "During my time at Trippi (see <a href='/projects/trippi'>here</a>) we worked at an incubator office called iLab. Multiple young start-ups worked here while benefiting of the vast network of companies that were aligned with the initiative. All start-ups however communicated through a WhatsApp group and there was no centralized directory of resources that iLab could provide. Hence, they hired me to create one.",
            "miLab was created as a lightweight social media platform where users could post updates for all to see, schedule events, browse resources available to them and send direct messages. The site was created with Ruby On Rails, with animations provided by jQuery."
        ],
        role: "Sole Developer",
        technologies: [
            technologies.jquery,
            technologies.ruby,
            technologies.rubyOnRails,
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
            "During my work at whynow (see <a href='/projects/whynow'>here</a>) I created multiple versions of a dedicated app which delivered all content to mobile phones. Three iterations of this app were created over the years:",
            "The first iteration was a pure React Native app, sporting its own design differing from the main site. The second iteration was the same app, converted to use Expo in order to utilize the power of over-the-air updates. The third and final iteration was two native apps (Android & iOS) which loaded in the main website in a WebView, while also adding features specific to the mobile version like notifications and signing in with Apple."
        ],
        role: "Senior Full Stack Web Developer",
        technologies: [
            technologies.reactNative,
            technologies.javascript,
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
        title: 'FeatherOak',
        slug: 'featheroak',
        url: 'https://featheroakgame.com',
        category: {
            title: 'Games',
            slug: 'games'
        },
        image: 'featheroak.png',
        description: [
            "FeatherOak is a fantasy trading card game I developed in Unity. Players create decks and fight opponents using over 500 different hexagon-shaped cards on a hexagonal grid.",
            "The game is written entirely in C# and all art is generated by Midjourney AI and retouched by me in Photoshop. It is currently a work-in-progress, though a demo can be requested."
        ],
        role: "Sole Game Developer",
        technologies: [
            technologies.unity,
            technologies.csharp,
            technologies.adobePhotoshop,
            technologies.gameDevelopment,
        ],
        sourceAvailable: SourceAvailable.OnRequest,
        galleryImages: [
            "featheroak_01.png",
            "featheroak_02.jpg"
        ]
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
            "Twiins was a game I created for my 'Game Design' class at university. It was an Adobe Flash game written in ActionScript.",
            "ActionScript is sadly not with us anymore, but the lessons learned during development have given me a strong foundation when it comes to best coding practices and conventions."
        ],
        role: "Sole Game Developer",
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
            "Little Princess was a game created during a group project at university, made in AndEngine and written entirely in Java. The game revolved around a young princess running away from the dangers of the evil enchanted forest. Players had to swipe away enemies coming in from all sides of the screen, making sure that the princess could get to the end of the level.",
        ],
        role: "Game Developer & UI Designer",
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