import Link from "next/link"

import styled from "styled-components"

import { MenuItem } from "lib/data/menuItems"

interface ItemProps {
    item: MenuItem
}

const PortfolioMenuItem = ({ item }: ItemProps) => {
    return <Wrapper href={item.children && item.children.length > 0 ? `/portfolio/${item.slug}` : `/projects/${item.slug.split('/')[item.slug.split('/').length - 1]}`}>
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

const Wrapper = styled(Link)`
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

    transform: skew(-5deg);

    * {
        transform: translateY(0) skew(5deg);
    }

    img {
        transform: translateY(0) scale(1.4) skew(5deg);
    }

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