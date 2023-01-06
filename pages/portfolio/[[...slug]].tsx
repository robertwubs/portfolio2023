import { GetStaticProps } from 'next'

import PortfolioMenu from "components/PortfolioMenu"
import menuItems, { MenuItem } from 'lib/data/menuItems'
import PageTitle from 'components/PageTitle'
import { useRouter } from 'next/router'

interface PageProps {
    menuItems: MenuItem[]
}

const PortfolioPage = ({ menuItems }: PageProps) => {
    const router = useRouter()
    const lastSlug = Array.isArray(router.query.slug) && router.query.slug.length > 0 ? router.query.slug[router.query.slug.length - 1].replace('-', ' ').charAt(0).toUpperCase() + router.query.slug[router.query.slug.length - 1].slice(1) : null

    return <>
        <PageTitle title={`Portfolio${lastSlug ? ' - ' + lastSlug : ''}`} />
        <PortfolioMenu menuItems={menuItems} />
    </>
}

export const getStaticProps: GetStaticProps = async (context) => {
    let slug: string | string[] | undefined = context?.params?.slug
    let activeMenuItems = []

    if (!slug || slug.length === 0 || !Array.isArray(slug)) {
        activeMenuItems = menuItems
    } else {
        let tempObject: MenuItem[] | undefined = menuItems
        let fullSlug = ""

        slug.forEach(item => {
            if (tempObject) {
                let foundItem = tempObject.filter(e => e.slug === `${fullSlug === "" ? fullSlug : fullSlug + "/"}${item}`)
                if (foundItem.length > 0) {
                    tempObject = foundItem[0]?.children
                    fullSlug = `${fullSlug === "" ? fullSlug : fullSlug + "/"}${foundItem[0].slug}`
                }
            }
        })
        activeMenuItems = tempObject

        if (activeMenuItems.filter(e => e.isBackButton === true).length === 0) {
            activeMenuItems.unshift({
                title: 'Back',
                slug: `/portfolio/${slug.slice(0, -1).join('/')}`,
                isBackButton: true
            })
        }
    }

    if (activeMenuItems.length === 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            menuItems: activeMenuItems
        }
    }
}

export async function getStaticPaths() {
    let paths: Array<object> = []

    const addChildrenToPaths = (paths: Array<object>, children: MenuItem[]) => {
        children.forEach(item => {
            paths.push({
                params: {
                    slug: item.slug.split('/')
                }
            })

            if (item.children && item.children.length > 0) {
                addChildrenToPaths(paths, item.children)
            }
        })

        return paths
    }

    return {
        paths: [
            {
                params: {
                    slug: []
                }
            },
            ...addChildrenToPaths(paths, menuItems)
        ],
        fallback: false
    }
}

export default PortfolioPage