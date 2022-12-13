import Link from "next/link"
import { useRouter } from "next/router"

import styled from "styled-components"

import { device } from "lib/device"
import defaultMenuItems, { MenuItem } from "lib/data/menuItems"

import { PortfolioMenuItem } from "."

interface MenuProps {
    menuItems: MenuItem[],
    fromRouter?: boolean,
    activeSlug?: string | string[] | undefined
}

const PortfolioMenu = ({ menuItems, fromRouter = true, activeSlug = '' }: MenuProps) => {
    let slug: string | string[] | undefined = activeSlug

    if (fromRouter) {
        const router = useRouter()
        slug = router.query.slug
    }

    if (!menuItems || menuItems.length === 0) {
        menuItems = defaultMenuItems
    }

    return <Wrapper>
        {slug && Array.isArray(slug) && slug.length > 0 && <Link href={`/portfolio/${slug.slice(0, -1).join('/')}`}>
            Back
        </Link>}
        {menuItems.map((item, idx) => {
            return <PortfolioMenuItem key={`menu-item-${idx}`} item={item} />
        })}
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    ${device.tablet} {
        flex-direction: row;
    }

    > a {
        flex: 1;
        display: block;
    }
`

export default PortfolioMenu