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
                title: 'Dit mag ik wel',
                slug: 'websites/dit-mag-ik-wel',
                backgroundImage: 'bg_wmiw.png'
            } as MenuItem,
            {
                title: 'miLab',
                slug: 'websites/milab',
                backgroundImage: 'bg_milab.png'
            } as MenuItem,
            {
                title: 'Portfolio',
                slug: 'websites/portfolio',
                backgroundImage: 'bg_portfolio.png'
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
                slug: 'apps/whynow-app',
                backgroundImage: 'bg_whynow_app.png'
            } as MenuItem,
            {
                title: 'Marvel Champions\nCompanion',
                slug: 'apps/marvel-champions-companion',
                backgroundImage: 'bg_marvel_champions.png'
            } as MenuItem,
            {
                title: 'Trippi',
                slug: 'apps/trippi',
                backgroundImage: 'bg_trippi.png'
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
                slug: 'games/featheroak',
                backgroundImage: 'bg_games.png'
            } as MenuItem,
            {
                title: 'Twiins',
                slug: 'games/twiins',
                backgroundImage: 'bg_twiins.png'
            } as MenuItem,
            {
                title: `Little\nPrincess`,
                slug: 'games/little-princess',
                backgroundImage: 'bg_little_princess.png'
            } as MenuItem
        ]
    } as MenuItem
]

export default menuItems