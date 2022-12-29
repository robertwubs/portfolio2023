import { MenuItem } from "lib/data/menuItems"

import { useRouter } from "next/router"
import { BaseSyntheticEvent } from "react"

import { AnimatedBackground, MenuItemTitle, Wrapper } from "./_styled/PortfolioMenuItem.styled"

interface ItemProps {
    item: MenuItem,
    index: number,
    total: number | undefined
}

const variants = {
    hidden: { opacity: 0, translateX: '-100%', skew: '-5deg' },
    enter: { opacity: 1, translateX: '0%', skew: '-5deg' },
    exit: { opacity: 0, translateX: '100%', skew: '-5deg' }
}

const PortfolioMenuItem = ({ item, index, total = 0 }: ItemProps) => {
    const router = useRouter()

    const hideAndNavigate = (e: BaseSyntheticEvent) => {
        e.preventDefault()

        router.push(e.currentTarget.getAttribute('href'))
    }

    return <Wrapper
        onClick={hideAndNavigate}
        href={
            item.isBackButton ?
                item.slug :
                item.children && item.children.length > 0 ? `/portfolio/${item.slug}` : `/projects/${item.slug.split('/')[item.slug.split('/').length - 1]}`
        }
        variants={variants} animate="enter" initial="hidden" exit="exit" transition={{ ease: 'easeInOut', duration: 0.2, delay: (total - index - 1) / 10 }}
        key={`menu-item-${item.slug}-${index}`}
        $isBackButton={item.isBackButton}
    >
        <MenuItemTitle>{item.title}</MenuItemTitle>
        {!item.isBackButton && <AnimatedBackground src={`/images/${item?.backgroundImage ? item.backgroundImage : `bg_whynow.png`}`} />}
    </Wrapper>
}



export default PortfolioMenuItem