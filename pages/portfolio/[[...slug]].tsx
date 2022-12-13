import { GetStaticProps } from 'next'

import PortfolioMenu from "components/PortfolioMenu"
import menuItems, { MenuItem } from 'lib/data/menuItems'

interface PageProps {
    menuItems: MenuItem[]
}

const PortfolioPage = ({ menuItems }: PageProps) => {
    return <PortfolioMenu menuItems={menuItems} />
}

export const getStaticProps: GetStaticProps = async (context) => {
    let slug: string | string[] | undefined = context?.params?.slug
    let activeMenuItems = []

    if (!slug || slug.length === 0 || !Array.isArray(slug)) {
        activeMenuItems = menuItems
    } else {
        let tempObject: MenuItem[] | undefined = menuItems
        let fullSlug = ""

        slug.forEach((item, idx) => {
            if (tempObject) {
                let foundItem = tempObject.filter(e => e.slug === `${fullSlug === "" ? fullSlug : fullSlug + "/"}${item}`)
                if (foundItem.length > 0) {
                    tempObject = foundItem[0]?.children
                    fullSlug = `${fullSlug === "" ? fullSlug : fullSlug + "/"}${foundItem[0].slug}`
                }
            }
        })
        activeMenuItems = tempObject
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
    };
}

export default PortfolioPage