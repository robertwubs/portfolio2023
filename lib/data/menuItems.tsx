export interface MenuItem {
    title: string
    slug: string
    children?: Array<MenuItem>
}

const menuItems = [
    {
        title: 'Websites',
        slug: 'websites',
        children: [
            {
                title: 'whynow',
                slug: 'websites/whynow'
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
                title: 'Little Princess',
                slug: 'games/little-princess'
            } as MenuItem
        ]
    } as MenuItem
]

export default menuItems