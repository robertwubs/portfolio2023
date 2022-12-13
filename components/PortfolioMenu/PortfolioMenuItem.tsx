import styled from "styled-components"

import { MenuItem } from "lib/data/menuItems"

import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { BaseSyntheticEvent } from "react"

interface ItemProps {
    item: MenuItem,
    index: number,
    total: number | undefined
}

const variants = {
    hidden: { opacity: 0, translateX: '-100%', skew: '5deg' },
    enter: { opacity: 1, translateX: '0%', skew: '-5deg' },
    exit: { opacity: 0, translateX: '100%', skew: '5deg' }
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
        <AnimatedBackground src="/images/whynow_page.png" />
    </Wrapper>
}

const MenuItemTitle = styled.p`
    color: white;
    font-size: 24px;
    transition: all 0.2s ease-in-out;
    white-space: pre-line;
    text-align: center;
`

const AnimatedBackground = styled.img`
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0.3;
    
    z-index: -1;

    transition: opacity 0.2s ease-in-out, transform 3s ease-in-out;

    pointer-events: none;
`

interface WrapperProps {
    $isBackButton: boolean | undefined
}

const Wrapper = styled(motion.a) <WrapperProps>`
    width: 100%;
    position: relative;
    z-index: 0;

    overflow: hidden;
    background-color: black;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex: 1;

    * {
        transform: translateY(0) skew(5deg);
    }

    img {
        transform: translateY(0) scale(1.4) skew(5deg);
    }

    ${props => props.$isBackButton && `
        max-width: 20vw;
    `}

    &:hover {
        > ${MenuItemTitle} {
            font-size: 26px;
        }

        > ${AnimatedBackground} {
            opacity: 0.5;
            transition: opacity 0.2s ease-in-out, transform 40s linear;
            transform: translateY(-100%) scale(1.4) skew(5deg);
        }
    }

    &:nth-child(even){
        ${AnimatedBackground} {
            bottom: 0;
            top: auto;
        }

        &:hover {
            ${AnimatedBackground} {
                transform: translateY(100%) scale(1.4) skew(5deg);
            }
        }
    }
`

export default PortfolioMenuItem