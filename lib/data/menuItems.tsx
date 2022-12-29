export interface MenuItem {
    title: string
    slug: string
    children?: Array<MenuItem>,
    isBackButton?: boolean,
    backgroundImage?: string
}

const menuItems = [
    {
        title: 'Websites',
        slug: 'websites',
        backgroundImage: 'bg_websites.png',
        children: [
            {
                title: 'whynow',
                slug: 'websites/whynow',
                backgroundImage: 'bg_whynow.png'
            } as MenuItem,
            {
                title: 'Wat mag ik wel',
                slug: 'websites/wat-mag-ik-wel'
            } as MenuItem,
            {
                title: 'milab',
                slug: 'websites/milab'
            } as MenuItem
        ]
    } as MenuItem,
    {
        title: 'Apps',
        slug: 'apps',
        backgroundImage: 'bg_apps.png',
        children: [
            {
                title: 'whynow app',
                slug: 'apps/whynow-app'
            } as MenuItem,
            {
                title: 'Marvel Champions\nCompanion',
                slug: 'apps/marvel-champions-companion'
            } as MenuItem,
            {
                title: 'Trippi',
                slug: 'apps/trippi'
            } as MenuItem
        ]
    } as MenuItem,
    {
        title: 'Games',
        slug: 'games',
        backgroundImage: 'bg_games.png',
        children: [
            {
                title: 'Featheroak',
                slug: 'games/featheroak'
            } as MenuItem,
            {
                title: 'Twiins',
                slug: 'games/twiins'
            } as MenuItem,
            {
                title: `Little\nPrincess`,
                slug: 'games/little-princess'
            } as MenuItem
        ]
    } as MenuItem
]

export default menuItems