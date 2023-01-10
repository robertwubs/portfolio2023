import { useRouter } from "next/router"

import defaultMenuItems, { MenuItem } from "lib/data/menuItems"

import { PortfolioMenuItem } from "."
import { NoHorizScrollWrapper, Wrapper } from "./_styled/PortfolioMenu.styled"

interface MenuProps {
    menuItems?: MenuItem[],
    fromRouter?: boolean,
    activeSlug?: string | string[] | undefined,
    height?: string | boolean,
}

const PortfolioMenu = ({ menuItems, fromRouter = true, activeSlug = '', height = false }: MenuProps) => {
    let slug: string | string[] | undefined = activeSlug

    if (fromRouter) {
        const router = useRouter()
        slug = router.query.slug
    }

    if (!menuItems || menuItems.length === 0) {
        menuItems = defaultMenuItems
    }

    return <NoHorizScrollWrapper $height={height}>
        <Wrapper>
            {menuItems.map((item, idx) => {
                return <PortfolioMenuItem key={`menu-item-${idx}`} item={item} index={idx} total={menuItems?.length} />
            })}
        </Wrapper>
    </NoHorizScrollWrapper>
}

export default PortfolioMenu