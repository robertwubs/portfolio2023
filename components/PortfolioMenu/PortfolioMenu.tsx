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

    return <NoHorizScrollWrapper>
        <Wrapper>
            {slug && Array.isArray(slug) && slug.length > 0 && <Link className="backBtn" href={`/portfolio/${slug.slice(0, -1).join('/')}`}>
                Back
            </Link>}
            {menuItems.map((item, idx) => {
                return <PortfolioMenuItem key={`menu-item-${idx}`} item={item} />
            })}
        </Wrapper>
    </NoHorizScrollWrapper>
}

const NoHorizScrollWrapper = styled.div` 
    width: 100vw;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;

    overflow: hidden;
    background-color: black;

    position: relative;
    left: -30px;
    width: calc(100% + 60px);
    flex: 1;

    ${device.tablet} {
        flex-direction: row;
    }

    .backBtn {
        flex: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 15px;
        padding-left: 75px;

        ${device.tablet} {
            padding-top: 0;
        }
    }
`

export default PortfolioMenu