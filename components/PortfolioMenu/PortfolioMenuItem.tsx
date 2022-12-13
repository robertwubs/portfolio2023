import Link from "next/link"

import { MenuItem } from "lib/data/menuItems"

interface ItemProps {
    item: MenuItem
}

const PortfolioMenuItem = ({ item }: ItemProps) => {
    return <Link href={item.children && item.children.length > 0 ? `/portfolio/${item.slug}` : `/projects/${item.slug.split('/')[item.slug.split('/').length - 1]}`}>
        {item.title}
    </Link>
}

export default PortfolioMenuItem