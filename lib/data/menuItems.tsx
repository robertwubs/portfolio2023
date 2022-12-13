export interface MenuItem {
    title: string
    slug: string
    children?: Array<MenuItem>,
    isBackButton?: boolean
}

const menuItems = [
    {
        title: 'Websites',
        slug: 'websites',
        children: [
            {
                title: 'whynow',
                slug: 'websites/whynow'
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
        children: [
            {
                title: 'whynow app',
                slug: 'apps/whynow-app'
            } as MenuItem
        ]
    } as MenuItem,
    {
        title: 'Games',
        slug: 'games',
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