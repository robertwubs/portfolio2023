import { animations } from 'lib/animations';
import { useEffect, useState } from 'react';

import styled from 'styled-components'

import Logo, { Letter } from './Logo'
import Menu from './Menu'

const Header = () => {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset)

        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return <HeaderWrapper offset={offset || 0}>
        <Logo />
        <Menu />
    </HeaderWrapper>
}

interface HeaderWrapperProps {
    offset: number
}

const HeaderWrapper = styled.header<HeaderWrapperProps>`
    padding: 16px;
    height: 54px;
    width: 100%;    

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    left: 0;
    top: 0;

    background-color: transparent;
    transition: all 0.2s ease;

    z-index: 1;

    .invert {
        color: white;
    }

    ${props => props.offset > 20 && `
        background-color: #f2f2f2;

        .invert {
            color: black;
        }
    `}

    &:hover {
        background-color: rgba(0,0,0,0.7);
    }

    &:hover ${Letter} {
        &:not(.fixed){
            animation: ${animations.expand} 500ms ease-in-out forwards;
        }

        &.fixed.blue {
            animation: ${animations.moveRight} 500ms ease-in-out forwards;
        }
    }
`

export default Header